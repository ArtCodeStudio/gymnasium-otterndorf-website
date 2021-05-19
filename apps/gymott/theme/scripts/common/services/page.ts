import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
  ResponseError,
  StrapiGqlPageFragmentFragment,
  DynamicZoneSection,
  PageHeader,
} from "../types";
import { SectionsService } from "./sections";
import { pageFormatter } from "../formatters";
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

  getHeader(page: StrapiGqlPageFragmentFragment): PageHeader {
    console.debug("[PageService] getHeader updated_at", page.updated_at);
    const header: PageHeader = {
      title: page.title || "",
      breadcrumbs: [
        {
          label: "Startseite",
          url: "/",
          active: false,
        },
        {
          label: "Unterseite",
          active: false,
        },
        {
          label: page.title,
          active: true,
          url: pageFormatter.read(page.slug),
        },
      ],
      updatedAt: page.updated_at || page.created_at,
    };
    return header;
  }
}
