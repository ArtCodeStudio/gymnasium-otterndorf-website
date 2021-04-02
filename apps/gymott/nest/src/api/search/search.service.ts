/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService } from '@ribajs/nest-lunr';
import { StrapiService } from '../strapi/strapi.service';
import { NavService, SearchNav } from '../nav';
import { PageService, SearchPage } from '../page';
import { PostService, SearchPost } from '../post';
import type {
  NsSearchResult,
  SearchResultData,
  LunrExtended,
  Namespace,
  Refs,
  FortifySearchResult,
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
      fields: ['title', 'slug', 'text'] as Array<keyof SearchPage>,
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExtended).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initNav() {
    const ns: Namespace = 'nav';
    this.searchNav = this.lunr.create(ns, {
      fields: ['title'] as Array<keyof SearchNav>,
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExtended).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initPost() {
    const ns: Namespace = 'post';
    this.searchPost = this.lunr.create(ns, {
      fields: ['title', 'slug', 'text'] as Array<keyof SearchPost>,
      ref: REF_KEYS[ns],
      plugins: [{ plugin: (LunrService.lunr as LunrExtended).de, args: [] }],
      metadataWhitelist: ['position'],
    });
  }

  protected initBlog() {
    // const ns: Namespace = 'blog';
    // TODO
  }

  protected getRefs(results: NsSearchResult[]) {
    const refs: Partial<Refs> = {};

    for (const ns of NAMESPACES) {
      refs[ns] = [];
    }

    for (const searchMatch of results) {
      refs[searchMatch.ns].push(searchMatch.ref);
    }

    return refs as Refs;
  }

  protected async getSearchResultData(results: NsSearchResult[]) {
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

  protected async fortifySearchResult(
    lunrResults: NsSearchResult[],
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

    return fortifyResult;
  }

  public async search(ns: Namespace, query: string) {
    const results = this.lunr.search(ns, query) as NsSearchResult[] | null;
    if (!results) {
      return null;
    }

    return await this.fortifySearchResult(results);
  }

  public async searchAll(query: string) {
    const results = this.lunr.searchAll(query) as NsSearchResult[];
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
