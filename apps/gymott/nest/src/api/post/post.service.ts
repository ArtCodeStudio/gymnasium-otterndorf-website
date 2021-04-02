import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { SearchPost } from './types';
import {
  StrapiGqlBlogEntriesBySlugsQuery,
  StrapiGqlBlogEntriesBySlugsQueryVariables,
} from '../strapi/types';

@Injectable()
export class PostService {
  constructor(readonly strapi: StrapiService) {}

  public flattens(
    posts: StrapiGqlBlogEntriesBySlugsQuery['blogEntries'],
  ): SearchPost[] {
    return posts.map((post) => this.flatten(post));
  }

  public flatten(
    post: StrapiGqlBlogEntriesBySlugsQuery['blogEntries'][0],
  ): SearchPost {
    const texts: string[] = post.content
      .filter((content: any) => content.text)
      .map((content: any) => content.text);

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
      return posts.map((post) => this.flatten(post));
    }
    return null;
  }

  protected async get(slug: string) {
    return this.list([slug])?.[0] || null;
  }
}
