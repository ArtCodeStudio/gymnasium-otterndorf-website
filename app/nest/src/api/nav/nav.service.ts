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
  constructor(readonly strapi: StrapiService) {
    //
  }

  /**
   * Similar to nestFormatter
   * @see nestFormatter app/theme/scripts/common/formatters/nest.ts
   * @param src
   * @returns
   */
  static buildNestSrc(src?: string) {
    if (!src) {
      src = '';
    }

    if (src.startsWith('http')) {
      return src;
    }

    let nestUrl = process.env.NEST_EXTERN_URL;

    if (nestUrl.endsWith('/')) {
      nestUrl = nestUrl.substring(0, nestUrl.length - 1);
    }

    if (src.startsWith('/')) {
      src = src.substring(1);
    }

    return `${nestUrl}/${src}`;
  }

  static buildStrapiSrc(
    src?: string,
    backend: 'strapi' | 'strapi-students' = 'strapi',
  ) {
    if (!src) {
      src = '';
    }

    let strapiUrl =
      backend === 'strapi'
        ? process.env.STRAPI_REMOTE_URL
        : process.env.STRAPI_STUDENT_EXTERN_URL;

    if (strapiUrl.endsWith('/')) {
      strapiUrl = strapiUrl.substring(0, strapiUrl.length - 1);
    }

    if (src.startsWith('/')) {
      src = src.substring(1);
    }

    return `${strapiUrl}/${src}`;
  }

  static buildHref(type: string, slug?: string, absolute = false) {
    let url = '';
    switch (type) {
      case 'ComponentLinkTypeBlog':
      case 'post':
        url = '/post';
        break;
      case 'ComponentLinkTypePage':
      case 'page':
        url = '/page';
        break;
      case 'ComponentLinkTypeSchoolSubject':
      case 'subject':
        url = '/school-subject';
        break;
      case 'teacher':
        url = '/teacher';
        break;
      case 'blog':
        url = '/blog';
        break;
      case 'ComponentLinkTypeMediaCenter':
        url = '/media-center';
        break;
      case 'gallery':
      case 'ComponentLinkTypeGallery':
        url = '/gallery';
        break;
      case 'PodcastEpisode':
      case 'podcast':
        url = '/podcast';
        break;
      case 'WorkingGroup':
      case 'workinggroup':
        url = '/working-group';
        break;
      case 'ComponentLinkTypeStrapi':
        url = this.buildStrapiSrc(slug);
        break;
      default:
        throw new Error(`Unknown link type "${type}"!`);
    }

    if (slug) {
      url += '/' + slug;
    }

    if (absolute) {
      url = this.buildNestSrc(url);
    }

    return url;
  }

  public static getHref(
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
      case 'ComponentLinkTypeSchoolSubject':
        return NavService.buildHref(type.__typename, type.school_subject?.slug);
      case 'ComponentLinkTypeWeb':
        return type.URL ? type.URL : '';
      case 'ComponentLinkTypeStrapi':
        return NavService.buildHref(type.__typename, type.URL);
      case 'ComponentLinkTypeMediaCenter':
        return NavService.buildHref(type.__typename, type.mediaCenter?.slug);
      case 'ComponentLinkTypeGallery':
        return NavService.buildHref(type.__typename, type.gallery?.slug);
    }
  }

  public flatten(
    nav: StrapiGqlNavigationLinksByIdsQuery['navigationLinks'][0],
  ): SearchNav {
    return {
      id: nav.id,
      title: nav.title,
      href: NavService.getHref(nav),
    };
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
    let responseNavs: StrapiGqlNavigationLinksByIdsQuery['navigationLinks'] =
      [];
    let navs: SearchNav[] = [];
    try {
      const response =
        await this.strapi.graphql.execute<StrapiGqlNavigationLinksByIdsQuery>(
          'graphql/queries/navigation-links-by-ids',
          vars,
        );
      responseNavs = response.navigationLinks || [];
      navs = responseNavs.map((nav) => this.flatten(nav));
      navs = navs.filter((nav) => !!nav.href);
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
