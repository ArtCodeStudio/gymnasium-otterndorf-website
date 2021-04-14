import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import {
  StrapiGqlMenuQuery,
  StrapiGqlMenuQueryVariables,
  StrapiGqlNavigationLinksByIdsQuery,
  StrapiGqlNavigationLinksByIdsQueryVariables,
} from '../strapi/types';
import { SearchNav } from './types';

@Injectable()
export class NavService {
  constructor(readonly strapi: StrapiService) {}

  static buildHref(type: string, slug?: string) {
    if (!slug) {
      return '';
    }
    switch (type) {
      case 'ComponentLinkTypeBlog':
      case 'post':
        return '/post/' + slug;
      case 'ComponentLinkTypePage':
      case 'page':
        return '/page/' + slug;
      case 'ComponentLinkTypeSchulfach':
      case 'schulfach':
        return '/schulfach/' + slug;
    }
  }

  public getHref(
    navLink:
      | StrapiGqlMenuQuery['menu']['entries'][0]['navigation_link']
      | StrapiGqlNavigationLinksByIdsQuery['navigationLinks'][0],
  ) {
    const type = navLink.type[0];
    if (!type) {
      return '';
    }
    switch (type.__typename) {
      case 'ComponentLinkTypeBlog':
        return NavService.buildHref(type.__typename, type.blog?.slug);
      case 'ComponentLinkTypePage':
        return NavService.buildHref(type.__typename, type.page?.slug);
      case 'ComponentLinkTypeSchulfach':
        return NavService.buildHref(type.__typename, type.schulfach?.slug);
      case 'ComponentLinkTypeWeb':
        return type.URL ? type.URL : '';
    }
  }

  public flatten(
    nav: StrapiGqlNavigationLinksByIdsQuery['navigationLinks'][0],
  ): SearchNav {
    return {
      id: nav.id,
      title: nav.title,
      href: this.getHref(nav),
    };
  }

  public flattens(
    navs: StrapiGqlNavigationLinksByIdsQuery['navigationLinks'],
  ): SearchNav[] {
    return navs.map((nav) => this.flatten(nav));
  }

  public async getMenuEntries() {
    const vars: StrapiGqlMenuQueryVariables = {};
    let menuEntries: StrapiGqlMenuQuery['menu']['entries'] = [];
    let navs: SearchNav[] = [];
    try {
      const response = await this.strapi.graphql.execute<StrapiGqlMenuQuery>(
        'graphql/queries/menu',
        vars,
      );
      menuEntries = response.menu?.entries || [];
      navs = menuEntries.map((nav) => this.flatten(nav.navigation_link));
    } catch (error) {
      console.error(error);
    }
    return navs;
  }

  /**
   * List navigation links
   * @param ids Pass an empty array to get all navigation links, pass null to get no result
   * @returns
   */
  public async list(ids: string[] | null = null) {
    const vars: StrapiGqlNavigationLinksByIdsQueryVariables = { ids };
    let responseNavs: StrapiGqlNavigationLinksByIdsQuery['navigationLinks'] = [];
    let navs: SearchNav[] = [];
    try {
      const response = await this.strapi.graphql.execute<StrapiGqlNavigationLinksByIdsQuery>(
        'graphql/queries/navigation-links-by-ids',
        vars,
      );
      responseNavs = response.navigationLinks || [];
      navs = responseNavs.map((nav) => this.flatten(nav));
    } catch (error) {
      console.error(error);
    }
    return navs;
  }

  /**
   * Get navigation link
   * @param id Id of the navigation link
   * @returns
   */
  public async get(id: string) {
    const navs = await this.list([id]);
    return navs?.[0] || null;
  }
}
