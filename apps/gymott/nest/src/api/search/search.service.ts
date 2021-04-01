/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { LunrService } from '@ribajs/nest-lunr';
import { StrapiService } from '../strapi/strapi.service';
import { NavService, SearchNav } from '../nav';
import { PageService, SearchPage } from '../page';
import type {
  SearchResult,
  LunrExtended,
  Namespace,
  SearchResults,
  SearchResultNs,
  Refs,
} from './types';
import {
  StrapiGqlSearchResultQuery,
  StrapiGqlSearchResultQueryVariables,
} from '../strapi/types';
import type { Builder } from 'lunr';
import { NAMESPACES } from './constants';

@Injectable()
export class SearchService implements OnModuleInit {
  protected searchPage: Builder;
  protected searchNav: Builder;

  constructor(
    readonly lunr: LunrService,
    readonly strapi: StrapiService,
    protected readonly nav: NavService,
    protected readonly page: PageService,
  ) {
    this.initLunrPlugins();
    this.initPage();
    this.initNav();
  }

  protected initLunrPlugins() {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);
  }

  protected initPage() {
    const ns: Namespace = 'page';
    this.searchPage = this.lunr.create(ns, {
      fields: ['title', 'slug', 'text'] as Array<keyof SearchPage>,
      ref: 'slug',
      plugins: [{ plugin: (LunrService.lunr as LunrExtended).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });
  }

  protected initNav() {
    const ns: Namespace = 'nav';
    this.searchNav = this.lunr.create(ns, {
      fields: ['title'] as Array<keyof SearchNav>,
      ref: 'id',
      plugins: [{ plugin: (LunrService.lunr as LunrExtended).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });
  }

  protected getRefs(searchResults: SearchResultNs[]) {
    const refs: Partial<Refs> = {};

    for (const ns of NAMESPACES) {
      refs[ns] = [];
    }

    for (const searchMatch of searchResults) {
      refs[searchMatch.ns].push(searchMatch.ref);
    }

    return refs as Refs;
  }

  protected async getSearchResultData(searchResults: SearchResultNs[]) {
    const refs = this.getRefs(searchResults);
    const vars: StrapiGqlSearchResultQueryVariables = {
      blogSlugs: refs.blog,
      navIds: refs.nav,
      pageSlugs: refs.page,
    };
    const data = await this.strapi.graphql.request<StrapiGqlSearchResultQuery>(
      'graphql/queries/search-result',
      vars,
    );
    console.debug('getSearchResultData', data);
    return data;
  }

  protected async getSearchResultNs(results: SearchResults) {
    const searchResultNs: SearchResultNs[] = [];
    for (const ns in results) {
      searchResultNs.push({
        ...results[ns],
        ns,
      });
    }
    return searchResultNs;
  }

  protected toSearchResultNs(results: SearchResult[], ns: Namespace) {
    const searchResultNs: SearchResultNs[] = [];
    for (const result of results) {
      searchResultNs.push({
        ...result,
        ns,
      });
    }
    return searchResultNs;
  }

  protected toSearchResultsNs(results: SearchResults) {
    const searchResultNs: SearchResultNs[] = [];
    for (const ns in results) {
      searchResultNs.push(
        ...this.toSearchResultNs(results[ns], ns as Namespace),
      );
    }
    return searchResultNs;
  }

  protected async fortifySearchResult(results: SearchResult[], ns: Namespace) {
    const searchResultNs = this.toSearchResultNs(results, ns);
    // const data = this.getSearchResultData(searchResultNs);
    return searchResultNs;
  }

  protected async fortifySearchResults(results: SearchResults) {
    const searchResultNs = this.toSearchResultsNs(results);
    // const data = this.getSearchResultData(searchResultNs);
    return searchResultNs;
  }

  public async searchInNamespace(ns: Namespace, query: string) {
    const index = this.lunr.getIndex(ns);
    if (!index) {
      return null;
    }

    const result: SearchResult[] = index.search(query);
    return this.fortifySearchResult(result, ns);
  }

  public async searchInAll(query: string) {
    const searchResults: Partial<SearchResults> = {};
    for (const ns of NAMESPACES) {
      const index = this.lunr.getIndex(ns);
      if (index) {
        const results: SearchResult[] = index.search(query);
        searchResults[ns] = results;
      }
    }
    return this.fortifySearchResults(searchResults as SearchResults);
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
    const navs = await this.nav.get();

    console.debug(ns, JSON.stringify(navs, null, 2));

    for (const nav of navs) {
      this.searchNav.add(nav);
    }
    this.lunr.buildIndex(ns);
  }

  public async refresh() {
    this.refreshPage();
    this.refreshNav();
  }

  onModuleInit() {
    this.refresh();
  }
}
