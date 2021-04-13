import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { SearchPage } from './types';
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PageService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {}

  public async flattens(
    pages: StrapiGqlPageBySlugsQuery['pages'],
  ): Promise<SearchPage[]> {
    const pPages = pages.map((page) => this.flatten(page));
    return await Promise.all(pPages);
  }

  public async flatten(
    page: StrapiGqlPageBySlugsQuery['pages'][0],
  ): Promise<SearchPage> {
    const pTexts = page.content
      .filter((content: any) => content.text)
      .map((content: any) => this.markdown.strip(content.text));

    const texts = await Promise.all(pTexts);

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
      return await Promise.all(pages.map((page) => this.flatten(page)));
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug])?.[0] || null;
  }
}
