import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchPost } from './types';
import {
  StrapiGqlBlogEntriesDetailBySlugsQuery,
  StrapiGqlBlogEntriesDetailBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PostService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    //
  }

  public async flattens(
    posts: StrapiGqlBlogEntriesDetailBySlugsQuery['blogEntries'],
  ): Promise<SearchPost[]> {
    return Promise.all(posts.map((post) => this.flatten(post)));
  }

  public async flatten(
    post: StrapiGqlBlogEntriesDetailBySlugsQuery['blogEntries'][0],
  ): Promise<SearchPost> {
    const pTexts = post.content
      .filter((content) => (content as any as SearchPost).text)
      .map((content) =>
        this.markdown.strip((content as any as SearchPost).text),
      );

    const texts = await Promise.all(pTexts);

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      text: texts.join('\n'),
      href: NavService.buildHref('post', post.slug),
    };
  }

  public async list(slugs: string[] | null = [], limit = 500, start = 0) {
    const vars: StrapiGqlBlogEntriesDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let posts: StrapiGqlBlogEntriesDetailBySlugsQuery['blogEntries'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlBlogEntriesDetailBySlugsQuery>(
          'graphql/queries/blog-entries-detail-by-slugs',
          vars,
        );
      posts = result.blogEntries;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(posts)) {
      const result = await Promise.all(posts.map((post) => this.flatten(post)));
      return result.filter((post) => !!post.href);
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug], 1)?.[0] || null;
  }
}
