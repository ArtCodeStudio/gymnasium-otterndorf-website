import { Injectable } from '@nestjs/common';
import {
  StrapiGqlPodcastConfigQuery,
  StrapiGqlPodcastConfigQueryVariables,
  StrapiGqlComponentPodcastCategoryFragmentFragment,
  StrapiGqlPodcastEpisodesDetailBySlugsQuery,
  StrapiGqlPodcastEpisodesDetailBySlugsQueryVariables,
  StrapiGqlPodcastEpisodeDetailFragmentFragment,
  Maybe,
} from '../strapi/types';
import type { PodloveWebPlayerChapter } from '@ribajs/podcast';
import { PodcastCategory } from './types/podcast-category';

import { StrapiService } from '../strapi/strapi.service';
import { NavService } from '../nav';
import { basename } from 'path';
import { FeedItunesCategory } from 'podcast';

@Injectable()
export class PodcastService {
  constructor(protected readonly strapi: StrapiService) {}

  public async getAudioDuration(audioFileUrl: string) {
    const audioMetadata = await this.strapi.getAudioMetadata(
      basename(audioFileUrl),
      { duration: true },
    );

    const duration = this.strapi.secondsToTime(
      audioMetadata.format.duration || 0,
    );
    return duration;
  }

  protected transformCategoryName(category: string) {
    return category
      .replace('_and_', ' &amp; ')
      .replace('_and_', ' &amp; ')
      .replace('_', ' ')
      .replace('NonProfit', 'Non-Profit')
      .replace('SelfImprovement', 'Self-Improvement')
      .replace('StandUp', 'Stand-Up');
  }

  public transformChapters(
    episode: StrapiGqlPodcastEpisodeDetailFragmentFragment,
    absoluteUrl = false,
  ) {
    const chapters: PodloveWebPlayerChapter[] = [];

    if (!episode.chapters) {
      return chapters;
    }
    for (const chapter of episode.chapters) {
      let href: string | undefined;
      let image: string | undefined;

      if (chapter.href) {
        href = NavService.getHref(chapter.href);
        if (href && absoluteUrl) {
          href = NavService.buildNestSrc(href);
        }
      }

      if (chapter.image) {
        image = chapter.image?.url;
        if (absoluteUrl) {
          image = NavService.buildStrapiSrc(image);
        }
      }

      const newChapter: PodloveWebPlayerChapter = {
        start: chapter.start,
        title: chapter.title,
      };

      if (href) {
        newChapter.href = href;
      }

      if (image) {
        newChapter.image = image;
      }

      chapters.push(newChapter);
    }
    return chapters;
  }

  public async buildCategoryTree(
    categories: Maybe<StrapiGqlComponentPodcastCategoryFragmentFragment>[],
  ) {
    const tree: PodcastCategory = {};

    if (!categories) {
      return tree;
    }

    for (const category of categories) {
      if (!category) {
        continue;
      }

      const cats = category.name.split('__');

      if (cats.length <= 0) {
        continue;
      }

      let catName = this.transformCategoryName(cats[0]);
      tree[catName] = tree[catName] || {};
      const pointer: PodcastCategory = tree[catName];

      for (let i = 1; i < cats.length; i++) {
        catName = catName = this.transformCategoryName(cats[i]);
        pointer[catName] = pointer[catName] || {};
      }
    }

    return tree;
  }

  public async categoryTreeToNodePodcast(tree: PodcastCategory) {
    const results: FeedItunesCategory[] = [];
    for (const text of Object.keys(tree)) {
      const subtree = tree[text];
      const item: FeedItunesCategory = {
        text,
        subcats: await this.categoryTreeToNodePodcast(subtree),
      };
      results.push(item);
    }

    return results;
  }

  public async buildCategoryTreeForNodePodcast(
    categories: Maybe<StrapiGqlComponentPodcastCategoryFragmentFragment>[],
  ) {
    return await this.categoryTreeToNodePodcast(
      await this.buildCategoryTree(categories),
    );
  }

  public async getConfig() {
    const vars: StrapiGqlPodcastConfigQueryVariables = {};
    let podcastConfig: StrapiGqlPodcastConfigQuery['podcastFeed'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlPodcastConfigQuery>(
          'graphql/queries/podcast-config',
          vars,
        );
      podcastConfig = result.podcastFeed;
    } catch (error) {
      console.error(error);
    }
    return podcastConfig;
  }

  public async list(slugs: string[] | null = [], limit = 50, start = 0) {
    const vars: StrapiGqlPodcastEpisodesDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const episodes: StrapiGqlPodcastEpisodeDetailFragmentFragment[] = [];
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlPodcastEpisodesDetailBySlugsQuery>(
          'graphql/queries/podcast-episodes-detail-by-slugs',
          vars,
        );
      result.podcastEpisodes?.forEach((epi) => {
        if (epi) episodes.push(epi);
      });
    } catch (error) {
      console.error('[Podcast] ' + error);
    }
    return episodes;
  }

  public async get(
    slug: string,
  ): Promise<StrapiGqlPodcastEpisodeDetailFragmentFragment> {
    return (await this.list([slug], 1))[0] || null;
  }

  public async getEpisodeUrl(slug: string) {
    return NavService.buildNestSrc(`podcast/${slug}`);
  }
}
