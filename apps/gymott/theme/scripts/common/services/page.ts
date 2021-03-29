import { GraphQLClient } from "./graphql";
import { ResponseError } from "../../common/types";
import {
  StrapiGqlPageBySlugQuery,
  StrapiGqlPageBySlugQueryVariables,
} from "@gymott/common";
import pageQuery from "../../../graphql/queries/page-by-slug.gql";

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

  async get(slug: string) {
    const vars: StrapiGqlPageBySlugQueryVariables = { slug };
    const pageRes = await this.graphql.requestCached<StrapiGqlPageBySlugQuery>(
      pageQuery,
      vars
    );
    if (!Array.isArray(pageRes.pages) || pageRes.pages.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const page = pageRes.pages[0];
    return page;
  }
}