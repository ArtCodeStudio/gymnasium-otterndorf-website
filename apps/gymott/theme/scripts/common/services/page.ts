import { GraphQLClient } from "./graphql";
import {
  ResponseError,
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
  StrapiGqlPagesQuery,
  StrapiGqlPagesQueryVariables,
} from "../../common/types";

import pagebySlugsQuery from "../../../graphql/queries/page-by-slugs.gql";
import pagesQuery from "../../../graphql/queries/pages.gql";

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

  async get(slugs: string[]) {
    const vars: StrapiGqlPageBySlugsQueryVariables = { slugs };
    const pageRes = await this.graphql.requestCached<StrapiGqlPageBySlugsQuery>(
      pagebySlugsQuery,
      vars
    );
    const pages = pageRes.pages || [];
    return pages;
  }

  async list() {
    const vars: StrapiGqlPagesQueryVariables = {};
    const pageRes = await this.graphql.requestCached<StrapiGqlPagesQuery>(
      pagesQuery,
      vars
    );
    const pages = pageRes.pages || [];
    return pages;
  }
}
