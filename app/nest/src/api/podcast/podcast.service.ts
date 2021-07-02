import { Injectable } from '@nestjs/common';
import {
  StrapiGqlPodcastConfigQuery,
  StrapiGqlPodcastConfigQueryVariables,
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
      podcastConfig = result.podcastFeed;
      if (podcastConfig) {
        return podcastConfig;
      }
    } catch (error) {
      console.error(error);
    }
    return null;
  }
}
