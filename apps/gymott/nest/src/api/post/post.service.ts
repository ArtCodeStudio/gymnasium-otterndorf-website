import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { SearchPost } from './types';
import {
  StrapiGqlBlogEntriesBySlugsQuery,
  StrapiGqlBlogEntriesBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PostService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {}

  public async flattens(
    posts: StrapiGqlBlogEntriesBySlugsQuery['blogEntries'],
  ): Promise<SearchPost[]> {
    return Promise.all(posts.map((post) => this.flatten(post)));
  }

  public async flatten(
    post: StrapiGqlBlogEntriesBySlugsQuery['blogEntries'][0],
  ): Promise<SearchPost> {
    const pTexts = post.content
      .filter((content) => ((content as any) as SearchPost).text)
      .map((content) =>
        this.markdown.strip(((content as any) as SearchPost).text),
      );

    const texts = await Promise.all(pTexts);

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      text: texts.join('\n'),
    };
  }

  public async list(slugs: string[] | null = []) {
    const vars: StrapiGqlBlogEntriesBySlugsQueryVariables = { slugs };
    let posts: StrapiGqlBlogEntriesBySlugsQuery['blogEntries'] = null;
    try {
      const result = await this.strapi.graphql.execute<StrapiGqlBlogEntriesBySlugsQuery>(
        'graphql/queries/blog-entries-by-slugs',
        vars,
      );
      posts = result.blogEntries;
    } catch (error) {
      console.error(error);
    }
    if (Array.isArray(posts)) {
      return Promise.all(posts.map((post) => this.flatten(post)));
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug])?.[0] || null;
  }
}
