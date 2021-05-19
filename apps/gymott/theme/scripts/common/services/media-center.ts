import { GraphQLClient } from "./graphql";
import {
  StrapiGqlMediaCenterBySlugsQuery,
  StrapiGqlMediaCenterBySlugsQueryVariables,
  ResponseError,
} from "../types";

import galleryBySlugs from "../../../graphql/queries/media-center-by-slugs.gql";

export class MediaCenterService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: MediaCenterService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (MediaCenterService.instance) {
      return MediaCenterService.instance;
    }
    MediaCenterService.instance = new MediaCenterService();
    return MediaCenterService.instance;
  }

  renderMarkdown(
    mediaCenters: StrapiGqlMediaCenterBySlugsQuery["mediaCenters"]
  ) {
    if (!mediaCenters) {
      return;
    }
    for (const gallery of mediaCenters) {
      if (gallery?.movies) {
        for (const movie of gallery.movies) {
          if (movie?.title) {
            movie.title = "<strong>" + movie.title + "</strong>";
          }
          if (movie?.title && movie.caption) {
            movie.caption = movie?.title + "<br />" + movie.caption;
          }
          if (movie?.title && !movie.caption) {
            movie.caption = movie?.title;
          }
        }
      }
    }
  }

  async list(slugs: string[] = []) {
    const vars: StrapiGqlMediaCenterBySlugsQueryVariables = {
      slugs,
    };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlMediaCenterBySlugsQuery>(
        galleryBySlugs,
        vars
      );
    const mediaCenters = subjectRes.mediaCenters || [];
    return mediaCenters;
  }

  async get(slug: string) {
    const mediaCenters = await this.list([slug]);
    if (!Array.isArray(mediaCenters) || mediaCenters.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    this.renderMarkdown(mediaCenters);
    return mediaCenters?.[0] || null;
  }
}
