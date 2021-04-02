import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { SearchPage } from './types';
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PageService {
  constructor(readonly strapi: StrapiService) {}

  public flattens(pages: StrapiGqlPageBySlugsQuery['pages']): SearchPage[] {
    return pages.map((page) => this.flatten(page));
  }

  public flatten(page: StrapiGqlPageBySlugsQuery['pages'][0]): SearchPage {
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

  public async list(slugs: string[] = []) {
    const vars: StrapiGqlPageBySlugsQueryVariables = { slugs };
    let pages: StrapiGqlPageBySlugsQuery['pages'] = null;
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlPageBySlugsQuery>(
        'graphql/queries/page-by-slugs',
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
    return this.list([slug])?.[0] || null;
  }
}
