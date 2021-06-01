import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchPage } from './types';
import {
  StrapiGqlPageBasicBySlugsQuery,
  StrapiGqlPageBasicBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PageService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    //
  }

  public async flattens(
    pages: StrapiGqlPageBasicBySlugsQuery['pages'],
  ): Promise<SearchPage[]> {
    const pPages = pages.map((page) => this.flatten(page));
    return await Promise.all(pPages);
  }

  public async flatten(
    page: StrapiGqlPageBasicBySlugsQuery['pages'][0],
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
      href: NavService.buildHref('page', page.slug),
    };
  }

  public async list(slugs: string[] = [], limit = 500, start = 0) {
    const vars: StrapiGqlPageBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let pages: StrapiGqlPageBasicBySlugsQuery['pages'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlPageBasicBySlugsQuery>(
          'graphql/queries/page-basic-by-slugs',
          vars,
        );
      pages = result.pages;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(pages)) {
      const result = await Promise.all(pages.map((page) => this.flatten(page)));
      return result.filter((page) => !!page.href);
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug])?.[0] || null;
  }
}
