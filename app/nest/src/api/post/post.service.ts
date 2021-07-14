import { Injectable } from '@nestjs/common';
import { StrapiService } from '../strapi/strapi.service';
import { MarkdownService } from '../markdown/markdown.service';
import { NavService } from '../nav';
import { SearchPost } from './types';
import {
  StrapiGqlBlogEntriesBasicBySlugsQuery,
  StrapiGqlBlogEntriesBasicBySlugsQueryVariables,
  StrapiGqlBlogEntryBasicFragmentFragment,
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
  StrapiGqlImageFragmentFragment,
} from '../strapi/types';

@Injectable()
export class PostService {
  constructor(
    readonly strapi: StrapiService,
    readonly markdown: MarkdownService,
  ) {
    //
  }

  /**
   * Flatten blog posts for the search
   * @param posts
   */
  public async flattens(
    posts: StrapiGqlBlogEntriesBasicBySlugsQuery['blogEntries'],
  ): Promise<SearchPost[]> {
    return Promise.all(posts.map((post) => this.flatten(post)));
  }

  protected async getContentObject(
    post: StrapiGqlBlogEntryBasicFragmentFragment,
  ) {
    const images: StrapiGqlImageFragmentFragment[] = [];
    const texts: string[] = [];
    const markdowns: string[] = [];
    const podcastEpisodes: StrapiGqlPodcastEpisodeBasicFragmentFragment[] = [];

    for (const section of post.content) {
      switch (section.__typename) {
        case 'ComponentContentText':
          markdowns.push(section.text);
          texts.push(await this.markdown.strip(section.text));
          break;
        case 'ComponentContentImage':
          images.push(section.image);
          break;
        case 'ComponentSectionPodcastEpisode':
          podcastEpisodes.push(section.podcast_episode);
          break;
        default:
          break;
      }
    }

    return {
      images,
      texts,
      markdowns,
      podcastEpisodes,
    };
  }

  /**
   * Flatten blog post for the search
   * @param post
   */
  public async flatten(
    post: StrapiGqlBlogEntryBasicFragmentFragment,
  ): Promise<SearchPost> {
    const { texts, markdowns, images } = await this.getContentObject(post);

    return {
      id: post.id,
      title: post.title,
      slug: post.slug,
      /** Plain text without markdown */
      text: texts.join('\n'),
      /** Markdown (no HTML) */
      md: markdowns.join('\n\n'),
      images,
      updatedAt: post.updated_at || post.created_at,
      href: NavService.buildHref('post', post.slug),
      author: post.author,
      category: post.blog_category?.name || undefined,
    };
  }

  public async listRaw(slugs: string[] | null = [], limit = 500, start = 0) {
    const vars: StrapiGqlBlogEntriesBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    let posts: StrapiGqlBlogEntriesBasicBySlugsQuery['blogEntries'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlBlogEntriesBasicBySlugsQuery>(
          'graphql/queries/blog-entries-basic-by-slugs',
          vars,
        );
      posts = result.blogEntries;
      if (posts) {
        return posts;
      }
    } catch (error) {
      console.error(error);
    }
    return [];
  }

  public async getRaw(
    slug: string,
  ): Promise<StrapiGqlBlogEntryBasicFragmentFragment> {
    return (await this.listRaw([slug], 1))[0] || null;
  }

  public async list(slugs: string[] | null = [], limit = 50, start = 0) {
    const posts = await this.listRaw(slugs, limit, start);
    if (Array.isArray(posts) && posts.length > 0) {
      const result = await Promise.all(posts.map((post) => this.flatten(post)));
      return result.filter((post) => !!post.href);
    } else {
      console.warn('No blog posts found!', posts);
    }
    return [];
  }

  public async get(slug: string): Promise<SearchPost | null> {
    return (await this.list([slug], 1))[0] || null;
  }

  public async getPodcastEpisode(slug: string) {
    const post = await this.getRaw(slug);

    const { markdowns, podcastEpisodes, images, texts } =
      await this.getContentObject(post);

    const podcastEpisode = podcastEpisodes[0] || null;

    return {
      post,
      markdowns,
      podcastEpisode,
      podcastEpisodes,
      images,
      texts,
    };
  }
}
