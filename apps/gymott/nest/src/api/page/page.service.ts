import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { SearchPage } from './types';
import {
  StrapiGqlPageBySlugQuery,
  StrapiGqlPageBySlugQueryVariables,
  StrapiGqlPagesQuery,
  StrapiGqlPagesQueryVariables,
} from '../strapi/types';

@Injectable()
export class PageService {
  constructor(readonly strapi: StrapiService) {}

  public flatten(page: StrapiGqlPagesQuery['pages'][0]): SearchPage {
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

  public async list() {
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
      return pages.map((page) => this.flatten(page));
    }
    return null;
  }

  protected async get(slug: string) {
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
      return this.flatten(page);
    }
    return null;
  }
}
