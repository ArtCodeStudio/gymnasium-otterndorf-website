import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPageBySlugsQuery,
  StrapiGqlPageBySlugsQueryVariables,
  StrapiGqlPageBasicBySlugsQuery,
  StrapiGqlPageBasicBySlugsQueryVariables,
  ResponseError,
  Page,
  DynamicZoneSection,
  PageHeader,
  SectionObject,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { pageFormatter } from "../formatters";
import pageBySlugsQuery from "../../../graphql/queries/page-by-slugs.gql";
import pageBasicBySlugsQuery from "../../../graphql/queries/page-basic-by-slugs.gql";

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

  public async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlPageBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const pageRes =
      await this.graphql.requestCached<StrapiGqlPageBasicBySlugsQuery>(
        pageBasicBySlugsQuery,
        vars
      );
    const pages = pageRes.pages || [];
    return pages.filter((page) => !!page) as Page[];
  }

  public async list(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlPageBySlugsQueryVariables = { slugs, limit, start };
    const pageRes = await this.graphql.requestCached<StrapiGqlPageBySlugsQuery>(
      pageBySlugsQuery,
      vars
    );
    const pages = pageRes.pages || [];
    return pages.filter((page) => !!page) as Page[];
  }

  public async get(slug: string) {
    const pages = await this.list([slug]);
    if (!Array.isArray(pages) || pages.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const page = pages?.[0] || null;
    return page;
  }

  public async getSections(page: Page) {
    if (page?.content) {
      const DynamicZoneSections = (page?.content || []) as DynamicZoneSection[];
      return PageService.sections.transform(DynamicZoneSections);
    }
    return [];
  }

  public async getSectionsObject(page: Page): Promise<SectionObject> {
    if (!page.content) {
      return {};
    }
    const sectionsArr = await this.getSections(page);
    const sectionsObj = PageService.sections.toObject(sectionsArr);
    return sectionsObj;
  }

  public getHeader(page?: Page): PageHeader {
    const header: PageHeader = {
      title: page?.title || "Seiten",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: "Unterseiten",
          type: ENTRY_TYPE.Page,
          active: page ? false : true,
          url: pageFormatter.read(),
        },
      ],
      updatedAt: page?.updated_at || page?.created_at,
    };

    if (page) {
      header.breadcrumbs.push({
        label: page.title,
        type: ENTRY_TYPE.Page,
        active: true,
        url: pageFormatter.read(page.slug),
      });
    }

    return header;
  }
}
