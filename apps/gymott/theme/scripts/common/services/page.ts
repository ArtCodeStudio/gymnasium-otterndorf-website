import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
  ResponseError,
  StrapiGqlPageFragmentFragment,
  DynamicZoneSection,
} from "../../common/types";
import { SectionsService } from "./sections";
import pageBySlugsQuery from "../../../graphql/queries/page-by-slugs.gql";

export class PageService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
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
      pageBySlugsQuery,
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
    const page = pages?.[0] || null;
    return page;
  }

  async getSections(page: StrapiGqlPageFragmentFragment) {
    if (page?.content) {
      const DynamicZoneSections = (page?.content || []) as DynamicZoneSection[];
      return PageService.sections.transform(DynamicZoneSections);
    }
    return [];
  }
}
