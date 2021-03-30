import { Injectable, OnModuleInit } from '@nestjs/common';
import { StrapiService } from '../../strapi/strapi.service';
import { FlexSearchService } from '../../flexsearch/flexsearch.service';
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
  constructor(
    readonly strapi: StrapiService,
    readonly flexsearch: FlexSearchService,
  ) {}

  protected async loadNavigation() {
    const vars: StrapiGqlNavigationEntriesQueryVariables = {};
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlNavigationEntriesQuery>(
        'graphql/queries/navigation-entries',
        vars,
      );
      console.debug('loadNavigation result', result);
    } catch (error) {
      console.error(error);
    }
  }

  protected async loadPages() {
    const vars: StrapiGqlPagesQueryVariables = {};
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlPagesQuery>(
        'graphql/queries/pages',
        vars,
      );
      console.debug('loadPages result', result);
    } catch (error) {
      console.error(error);
    }
  }

  protected async loadPage(slug: string) {
    const vars: StrapiGqlPageBySlugQueryVariables = { slug };
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlPageBySlugQuery>(
        'graphql/queries/page-by-slug',
        vars,
      );
      console.debug('loadPage result', result);
    } catch (error) {
      console.error(error);
    }
  }

  public async refresh() {
    await this.loadNavigation();
    await this.loadPages();
  }

  onModuleInit() {
    this.refresh();
  }
}
