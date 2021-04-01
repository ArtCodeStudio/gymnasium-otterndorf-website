import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import {
  StrapiGqlMenuQuery,
  StrapiGqlMenuQueryVariables,
} from '../strapi/types';
import { SearchNav } from './types';

@Injectable()
export class NavService {
  constructor(readonly strapi: StrapiService) {}

  public flatten(nav: StrapiGqlMenuQuery['menu']['entries'][0]): SearchNav {
    return {
      id: nav.id,
      title: nav.navigation_link?.title || nav.title,
    };
  }

  public async get() {
    const vars: StrapiGqlMenuQueryVariables = {};
    let responseNavs: StrapiGqlMenuQuery['menu']['entries'] = [];
    let navs: SearchNav[] = [];
    try {
      const response = await this.strapi.graphql.execute<StrapiGqlMenuQuery>(
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
