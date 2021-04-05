/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService } from '@ribajs/nest-lunr';
import { StrapiService } from '../strapi/strapi.service';
import { NavService, SearchNav } from '../nav';
import { PageService, SearchPage } from '../page';
import { PostService, SearchPost } from '../post';
import type {
  SearchResultExt,
  SearchResultData,
  LunrExt,
  Namespace,
  Refs,
  FortifySearchResult,
  SortedPositionItem,
} from './types';
import {
  StrapiGqlSearchResultQuery,
  StrapiGqlSearchResultQueryVariables,
} from '../strapi/types';
import type { Builder } from 'lunr';
import { NAMESPACES, REF_KEYS } from './constants';

@Injectable()
export class SearchService implements OnModuleInit {
  protected searchPage: Builder;
  protected searchNav: Builder;
  protected searchPost: Builder;
  protected searchBlog: Builder;

  constructor(
    readonly lunr: LunrService,
    readonly strapi: StrapiService,
    protected readonly nav: NavService,
    protected readonly page: PageService,
    protected readonly post: PostService,
  ) {
    this.initLunrPlugins();
    this.initPage();
    this.initNav();
    this.initPost();
    this.initBlog();
  }

  protected initLunrPlugins() {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);
  }

  protected initPage() {
    const ns: Namespace = 'page';
    this.searchPage = this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initNav() {
    const ns: Namespace = 'nav';
    this.searchNav = this.lunr.create(ns, {
      fields: { title: { boost: 4 } },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initPost() {
    const ns: Namespace = 'post';
    this.searchPost = this.lunr.create(ns, {
      fields: { title: { boost: 2 }, text: {} },
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExt).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initBlog() {
    // const ns: Namespace = 'blog';
    // TODO
  }

  protected getRefs(results: SearchResultExt[]) {
    const refs: Partial<Refs> = {};

    for (const ns of NAMESPACES) {
      refs[ns] = [];
    }

    for (const searchMatch of results) {
      refs[searchMatch.ns].push(searchMatch.ref);
    }

    return refs as Refs;
  }

  protected async getSearchResultData(results: SearchResultExt[]) {
    const refs = this.getRefs(results);
    const vars: StrapiGqlSearchResultQueryVariables = {
      postSlugs: refs.post.length ? refs.post : null,
      navIds: refs.nav.length ? refs.nav : null,
      pageSlugs: refs.page.length ? refs.page : null,
    };
    let result: SearchResultData;
    let data: StrapiGqlSearchResultQuery = null;
    try {
      data = await this.strapi.graphql.execute<StrapiGqlSearchResultQuery>(
        'graphql/queries/search-result',
        vars,
      );
    } catch (error) {
      console.error(error);
      throw error;
    }

    result = {
      nav: this.nav.flattens(data.navigationLinks),
      page: this.page.flattens(data.pages),
      post: this.post.flattens(data.blogEntries),
      blog: [],
    };

    console.debug('getSearchResultData', result);
    console.debug('refs', refs);
    return result;
  }

  /**
   * Inserting string at position x of another string
   * @see https://stackoverflow.com/a/4364902/1465919
   * @param target Target string
   * @param insert String to insert in the target string
   * @param position Position to insert the string
   * @returns The new string
   */
  protected insertAt(target: string, insert: string, position: number) {
    return [target.slice(0, position), insert, target.slice(position)].join('');
  }

  /**
   * Sort positions by end position
   * - Needed to adjust the text property backwards for highlighting, otherwise the text length will change and the positions would no longer be correct.
   * @param metadata
   * @returns
   */
  protected getSortedPositions(
    metadata: FortifySearchResult['matchData']['metadata'],
  ) {
    const sortedPositions: SortedPositionItem[] = [];
    for (const term in metadata) {
      for (const prop in metadata[term]) {
        const positions = metadata[term][prop].position;
        for (let p = positions.length - 1; p >= 0; p--) {
          const pos = positions[p];
          if (pos.length === 2) {
            const start = positions[p][0];
            const end = start + positions[p][1];
            sortedPositions.push({
              start,
              end,
              prop,
              term,
            });
          }
        }
      }
    }

    return sortedPositions.sort((a, b) => b.end - a.end);
  }

  /**
   * Highlights the search results in the text
   */
  protected highlightResult(fortifyResult: FortifySearchResult) {
    const metadata = fortifyResult.matchData.metadata;
    const sortedPositions = this.getSortedPositions(metadata);

    for (const sortPos of sortedPositions) {
      const prop = sortPos.prop;
      const start = sortPos.start;
      const end = sortPos.end;
      if (fortifyResult.data[prop]) {
        let text = fortifyResult.data[prop] as string;
        if (typeof text === 'string') {
          text = this.insertAt(text, '</span>', end);
          text = this.insertAt(text, `<span class='search-highlight'>`, start);
        }
        fortifyResult.data[prop] = text;
      }
    }

    return fortifyResult;
  }

  /**
   * Highlights the search results in the text
   */
  protected highlightResults(fortifyResults: FortifySearchResult[]) {
    return fortifyResults.map((fortifyResult) =>
      this.highlightResult(fortifyResult),
    );
  }

  /**
   * Fortify the search result
   * - Merges the lunr namespace search results
   * - Sets the namespace property
   * - Merges strapi data to the lunr search result
   * - Highlights the substrings in the text properties
   * - Resorts the merged results by score
   *
   * @param lunrResults
   * @returns
   */
  protected async fortifySearchResult(
    lunrResults: SearchResultExt[],
  ): Promise<FortifySearchResult[]> {
    const allDates = await this.getSearchResultData(lunrResults);
    const fortifyResult: FortifySearchResult[] = [];

    for (const lunrResult of lunrResults) {
      const ns = lunrResult.ns;
      const refKey = REF_KEYS[ns];
      const dates = allDates[ns];
      const data = dates.find((data) => data[refKey] === lunrResult.ref);
      fortifyResult.push({
        ...lunrResult,
        data,
      });
    }

    this.highlightResults(fortifyResult);

    fortifyResult.sort((a, b) => {
      return b.score - a.score;
    });

    return fortifyResult;
  }

  public async search(ns: Namespace, query: string) {
    const results = this.lunr.search(ns, query) as SearchResultExt[] | null;
    if (!results) {
      return null;
    }

    return await this.fortifySearchResult(results);
  }

  public async searchAll(query: string) {
    const results = this.lunr.searchAll(query) as SearchResultExt[];
    return await this.fortifySearchResult(results);
  }

  public async refreshPage() {
    const ns: Namespace = 'page';
    const pages = await this.page.list();

    console.debug(ns, JSON.stringify(pages, null, 2));

    for (const page of pages) {
      this.searchPage.add(page);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshNav() {
    const ns: Namespace = 'nav';
    const navs = await this.nav.list([]);

    console.debug(ns, JSON.stringify(navs, null, 2));

    for (const nav of navs) {
      this.searchNav.add(nav);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshPost() {
    const ns: Namespace = 'post';
    const posts = await this.post.list();

    console.debug(ns, JSON.stringify(posts, null, 2));

    for (const post of posts) {
      this.searchPost.add(post);
    }
    this.lunr.buildIndex(ns);
  }

  public async refreshBlog() {
    // TODO
  }

  public async refresh() {
    this.refreshPage();
    this.refreshNav();
    this.refreshPost();
    this.refreshBlog();
  }

  onModuleInit() {
    this.refresh();
  }
}
