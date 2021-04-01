import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import {
  StrapiGqlNavigationEntriesQuery,
  StrapiGqlNavigationEntriesQueryVariables,
} from '../strapi/types';
import { SearchNav } from './types';

@Injectable()
export class NavService {
  constructor(readonly strapi: StrapiService) {}

  public flatten(
    nav: StrapiGqlNavigationEntriesQuery['menu']['entries'][0],
  ): SearchNav {
    return {
      id: nav.id,
      title: nav.navigation_link?.title || nav.title,
    };
  }

  public async get() {
    const vars: StrapiGqlNavigationEntriesQueryVariables = {};
    let responseNavs: StrapiGqlNavigationEntriesQuery['menu']['entries'] = [];
    let navs: SearchNav[] = [];
    try {
      const response = await this.strapi.graphql.execute<StrapiGqlNavigationEntriesQuery>(
        'graphql/queries/navigation-entries',
        vars,
      );
      responseNavs = response.menu?.entries || [];
      navs = responseNavs.map((nav) => this.flatten(nav));
    } catch (error) {
      console.error(error);
    }
    return navs;
  }
}
