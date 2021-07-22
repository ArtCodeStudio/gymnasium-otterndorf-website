import { GraphQLClient } from "./graphql";
import {
  PageHeader,
  NestService,
  StrapiGqlPodcastEpisodesBasicBySlugsQueryVariables,
  StrapiGqlPodcastEpisodeBasicFragmentFragment,
  StrapiGqlPodcastEpisodesBasicBySlugsQuery,
  StrapiGqlPodcastConfigQuery,
  StrapiGqlPodcastConfigQueryVariables,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { podcastFormatter } from "../formatters";
import { ResponseErrorService } from "./response-error";

import podcastEpisodesBasicBySlugs from "../../../graphql/queries/podcast-episodes-basic-by-slugs.gql";
import podcastConfigQuery from "../../../graphql/queries/podcast-config.gql";

export class PodcastService extends NestService {
  protected graphql = GraphQLClient.getInstance();
  protected static instance: PodcastService;

  protected constructor() {
    /** protected */
    super();
  }

  public static getInstance() {
    if (PodcastService.instance) {
      return PodcastService.instance;
    }
    PodcastService.instance = new PodcastService();
    return PodcastService.instance;
  }

  public async list(slugs: string[] | null = [], limit = 50, start = 0) {
    const vars: StrapiGqlPodcastEpisodesBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const episodes: StrapiGqlPodcastEpisodeBasicFragmentFragment[] = [];

    const result =
      await this.graphql.requestCached<StrapiGqlPodcastEpisodesBasicBySlugsQuery>(
        podcastEpisodesBasicBySlugs,
        vars
      );

    if (result.podcastEpisodes) {
      for (const epi of result.podcastEpisodes) {
        if (epi) episodes.push(epi);
      }
    }

    return episodes;
  }

  public async get(
    slug: string
  ): Promise<StrapiGqlPodcastEpisodeBasicFragmentFragment> {
    const episode = (await this.list([slug], 1))[0] || null;
    if (!episode) {
      throw ResponseErrorService.notFound("Podcast Episode", slug);
    }
    return episode;
  }

  public async getConfig(): Promise<
    StrapiGqlPodcastConfigQuery["podcastFeed"]
  > {
    const vars: StrapiGqlPodcastConfigQueryVariables = {};
    const result =
      await this.graphql.requestCached<StrapiGqlPodcastConfigQuery>(
        podcastConfigQuery,
        vars
      );
    return result.podcastFeed;
  }

  public getHeader(
    episode?: StrapiGqlPodcastEpisodeBasicFragmentFragment,
    slug?: string,
    config?: StrapiGqlPodcastConfigQuery["podcastFeed"]
  ): PageHeader {
    const header: PageHeader = {
      title: config?.title || episode?.title || "Alle Podcasts",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          type: ENTRY_TYPE.Podcast,
          active: episode ? false : true,
          url: podcastFormatter.read(),
        },
      ],
      updatedAt: episode?.pubDate,
    };

    if (episode && slug) {
      header.breadcrumbs.push({
        label: episode.title,
        type: ENTRY_TYPE.PodcastEpisode,
        active: true,
        url: podcastFormatter.read(slug),
      });
    }

    return header;
  }
}
