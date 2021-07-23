import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPageDetailBySlugsQuery,
  StrapiGqlPageDetailBySlugsQueryVariables,
  StrapiGqlPageBasicBySlugsQuery,
  StrapiGqlPageBasicBySlugsQueryVariables,
  StrapiGqlPageInfoQuery,
  StrapiGqlPageInfoQueryVariables,
  Page,
  DynamicZoneSection,
  PageHeader,
  SectionObject,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { ResponseErrorService } from "./response-error";
import { pageFormatter } from "../formatters";
import pageDetailBySlugsQuery from "../../../graphql/queries/page-detail-by-slugs.gql";
import pageBasicBySlugsQuery from "../../../graphql/queries/page-basic-by-slugs.gql";
import pageInfoQuery from "../../../graphql/queries/page-info.gql";

export class PageService {
  protected graphql = GraphQLClient.getInstance();
  public static sections = SectionsService.getInstance();
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

  public async info() {
    const vars: StrapiGqlPageInfoQueryVariables = {};
    const res = await this.graphql.requestCached<StrapiGqlPageInfoQuery>(
      pageInfoQuery,
      vars
    );
    return res.pageInfo;
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

  public async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlPageDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const pageRes =
      await this.graphql.requestCached<StrapiGqlPageDetailBySlugsQuery>(
        pageDetailBySlugsQuery,
        vars
      );
    const pages = pageRes.pages || [];
    return pages.filter((page) => !!page) as Page[];
  }

  public async getDetail(slug: string) {
    const pages = await this.listDetail([slug], 1);
    if (!Array.isArray(pages) || pages.length <= 0) {
      throw ResponseErrorService.notFound("Page", slug);
    }
    const page = pages?.[0] || null;
    return page;
  }

  public async getBasic(slug: string) {
    const pages = await this.listBasic([slug], 1);
    if (!Array.isArray(pages) || pages.length <= 0) {
      throw ResponseErrorService.notFound("Page", slug);
    }
    const page = pages?.[0] || null;
    return page;
  }

  public async getSections(page: Page) {
    if (page?.content) {
      const DynamicZoneSections = (page?.content || []) as DynamicZoneSection[];
      return await PageService.sections.toArray(DynamicZoneSections);
    }
    return [];
  }

  public async getSectionsObject(page: Page): Promise<SectionObject> {
    if (!page.content) {
      return SectionsService.getEmptySectionsObject();
    }
    const sectionsArr = await this.getSections(page);
    const sectionsObj = await PageService.sections.toObject(sectionsArr);
    return sectionsObj;
  }

  public getHeader(
    page?: Page,
    info?: StrapiGqlPageInfoQuery["pageInfo"]
  ): PageHeader {
    const header: PageHeader = {
      title: page?.title || info?.title || "Infoseiten",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: "Infoseiten",
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
