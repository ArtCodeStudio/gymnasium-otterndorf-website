import { GraphQLClient } from "./graphql";
import {
  StrapiGqlGalleryBySlugsQuery,
  StrapiGqlGalleryBySlugsQueryVariables,
  ResponseError,
} from "../types";

import galleryBySlugs from "../../../graphql/queries/gallery-by-slugs.gql";

export class GalleryService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: GalleryService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (GalleryService.instance) {
      return GalleryService.instance;
    }
    GalleryService.instance = new GalleryService();
    return GalleryService.instance;
  }

  async list(slugs: string[] = []) {
    const vars: StrapiGqlGalleryBySlugsQueryVariables = { slugs };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlGalleryBySlugsQuery>(
        galleryBySlugs,
        vars
      );
    const galleries = subjectRes.galleries || [];
    return galleries;
  }

  async get(slug: string) {
    const galleries = await this.list([slug]);
    if (!Array.isArray(galleries) || galleries.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return galleries?.[0] || null;
  }
}
