import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
  ResponseError,
} from "../../common/types";

import pagebySlugsQuery from "../../../graphql/queries/page-by-slugs.gql";

export class PageService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: PageService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (PageService.instance) {
      return PageService.instance;
    }
    PageService.instance = new PageService();
    return PageService.instance;
  }

  async list(slugs: string[] = []) {
    const vars: StrapiGqlPageBySlugsQueryVariables = { slugs };
    const pageRes = await this.graphql.requestCached<StrapiGqlPageBySlugsQuery>(
      pagebySlugsQuery,
      vars
    );
    const pages = pageRes.pages || [];
    return pages;
  }

  async get(slug: string) {
    const pages = await this.list([slug]);
    if (!Array.isArray(pages) || pages.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return pages?.[0] || null;
  }
}
