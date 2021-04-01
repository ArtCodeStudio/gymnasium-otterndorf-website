/* eslint-disable @typescript-eslint/no-var-requires */
import { Injectable, OnModuleInit } from '@nestjs/common';
import { StrapiService } from '../../strapi/strapi.service';
import { LunrService } from '@ribajs/nest-lunr';
import type { Builder } from 'lunr';
import { SearchPage, SearchNav } from './types';
import {
  StrapiGqlNavigationEntriesQuery,
  StrapiGqlNavigationEntriesQueryVariables,
  StrapiGqlPageBySlugQuery,
  StrapiGqlPageBySlugQueryVariables,
  StrapiGqlPagesQuery,
  StrapiGqlPagesQueryVariables,
} from '@gymott/common';
@Injectable()
export class SearchService implements OnModuleInit {
  protected searchPage: Builder;
  protected searchNav: Builder;

  constructor(readonly strapi: StrapiService, readonly lunr: LunrService) {
    require('lunr-languages/lunr.stemmer.support')(LunrService.lunr);
    require('lunr-languages/lunr.de')(LunrService.lunr);

    const pageFields: Array<keyof SearchPage> = ['title', 'slug', 'text'];
    this.searchPage = this.lunr.create('page', {
      fields: pageFields,
      plugins: [{ plugin: (LunrService.lunr as any).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });

    const navFields: Array<keyof SearchNav> = ['title'];
    this.searchNav = this.lunr.create('nav', {
      fields: navFields,
      plugins: [{ plugin: (LunrService.lunr as any).de, args: [] }],
      metadataWhitelist: ['position', 'index'],
    });
  }

  protected flattenNav(
    nav: StrapiGqlNavigationEntriesQuery['menu']['entries'][0],
  ): SearchNav {
    return {
      id: nav.id,
      title: nav.navigation_link?.title || nav.title,
    };
  }

  protected async loadNavs() {
    const vars: StrapiGqlNavigationEntriesQueryVariables = {};
    let responseNavs: StrapiGqlNavigationEntriesQuery['menu']['entries'] = [];
    let navs: SearchNav[] = [];
    try {
      const response = await this.strapi.graphql.execute<StrapiGqlNavigationEntriesQuery>(
        'graphql/queries/navigation-entries',
        vars,
      );
      responseNavs = response.menu?.entries || [];
      navs = responseNavs.map((nav) => this.flattenNav(nav));
    } catch (error) {
      console.error(error);
    }
    return navs;
  }

  protected flattenPage(page: StrapiGqlPagesQuery['pages'][0]): SearchPage {
    const texts: string[] = page.content
      .filter((content: any) => content.text)
      .map((content: any) => content.text);

    return {
      id: page.id,
      title: page.title,
      slug: page.slug,
      text: texts.join('\n'),
    };
  }

  protected async loadPages() {
    const vars: StrapiGqlPagesQueryVariables = {};
    let pages: StrapiGqlPagesQuery['pages'] = null;
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlPagesQuery>(
        'graphql/queries/pages',
        vars,
      );
      pages = result.pages;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(pages)) {
      return pages.map((page) => this.flattenPage(page));
    }
    return null;
  }

  protected async loadPage(slug: string) {
    const vars: StrapiGqlPageBySlugQueryVariables = { slug };
    let page: StrapiGqlPagesQuery['pages'][0] = null;
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlPageBySlugQuery>(
        'graphql/queries/page-by-slug',
        vars,
      );
      page = result.pages?.[0] || null;
    } catch (error) {
      console.error(error);
    }
    if (page) {
      return this.flattenPage(page);
    }
    return null;
  }

  public async refresh() {
    const navs = await this.loadNavs();
    const pages = await this.loadPages();

    console.debug('navs', JSON.stringify(navs, null, 2));
    console.debug('pages', JSON.stringify(pages, null, 2));

    for (const nav of navs) {
      this.searchNav.add(nav);
    }
    this.lunr.buildIndex('nav');

    for (const page of pages) {
      this.searchPage.add(page);
    }
    this.lunr.buildIndex('page');
  }

  onModuleInit() {
    this.refresh();
  }
}
