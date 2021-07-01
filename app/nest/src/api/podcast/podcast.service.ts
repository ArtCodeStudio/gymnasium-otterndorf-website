import { Injectable } from '@nestjs/common';
import {
  StrapiGqlPodcastFeedQuery,
  StrapiGqlPodcastFeedQueryVariables,
} from '../strapi/types';
import { StrapiService } from '../strapi/strapi.service';

@Injectable()
export class PodcastService {
  constructor(protected readonly strapi: StrapiService) {}

  public async getFeedConfig() {
    const vars: StrapiGqlPodcastFeedQueryVariables = {};
    let podcastFeed: StrapiGqlPodcastFeedQuery['podcastFeed'] = null;
    try {
      const result =
        await this.strapi.graphql.execute<StrapiGqlPodcastFeedQuery>(
          'graphql/queries/podcast-feed',
          vars,
        );
      podcastFeed = result.podcastFeed;
      if (podcastFeed) {
        return podcastFeed;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
