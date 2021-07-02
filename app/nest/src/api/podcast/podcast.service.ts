import { Injectable } from '@nestjs/common';
import {
  StrapiGqlPodcastConfigQuery,
  StrapiGqlPodcastConfigQueryVariables,
  StrapiGqlPodcastEpisodesDetailBySlugsQuery,
  StrapiGqlPodcastEpisodesDetailBySlugsQueryVariables,
  StrapiGqlPodcastEpisodeDetailFragmentFragment,
} from '../strapi/types';
import { StrapiService } from '../strapi/strapi.service';

@Injectable()
export class PodcastService {
  constructor(protected readonly strapi: StrapiService) {}

  public async getConfig() {
    const vars: StrapiGqlPodcastConfigQueryVariables = {};
    let podcastConfig: StrapiGqlPodcastConfigQuery['podcastFeed'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlPodcastConfigQuery>(
          'graphql/queries/podcast-config',
          vars,
        );
      console.debug('getConfig', result);
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
      episodes.push(...result.podcastEpisodes);
    } catch (error) {
      console.error(error);
    }
    return episodes;
  }

  public async get(
    slug: string,
  ): Promise<StrapiGqlPodcastEpisodeDetailFragmentFragment> {
    return (await this.list([slug], 1))[0] || null;
  }
}
