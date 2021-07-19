import { GraphQLClient } from "./graphql";
import {
  StrapiGqlGalleryBySlugsQuery,
  StrapiGqlGalleryBySlugsQueryVariables,
} from "../types";

import galleryBySlugs from "../../../graphql/queries/gallery-by-slugs.gql";
import { MarkdownService } from "./markdown";
import { ResponseErrorService } from "./response-error";

export class GalleryService {
  protected graphql = GraphQLClient.getInstance();
  protected md = MarkdownService.getInstance();

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

  renderMarkdown(galleries: StrapiGqlGalleryBySlugsQuery["galleries"]) {
    if (!galleries) {
      return;
    }
    for (const gallery of galleries) {
      if (gallery?.images) {
        for (const image of gallery.images) {
          if (image?.title) {
            image.title = "<strong>" + image.title + "</strong>";
          }
          if (image?.caption) {
            image.caption = this.md.render(image.caption);
          }
          if (image?.title && image.caption) {
            image.caption = image?.title + "<br />" + image.caption;
          }
          if (image?.title && !image.caption) {
            image.caption = image?.title;
          }
        }
      }
    }
  }

  async list(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlGalleryBySlugsQueryVariables = { slugs, limit, start };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlGalleryBySlugsQuery>(
        galleryBySlugs,
        vars
      );
    const galleries = subjectRes.galleries || [];
    return galleries;
  }

  async get(slug: string) {
    const galleries = await this.list([slug], 1);
    if (!Array.isArray(galleries) || galleries.length <= 0) {
      throw ResponseErrorService.notFound("Gallery", slug);
    }
    this.renderMarkdown(galleries);
    return galleries?.[0] || null;
  }
}
