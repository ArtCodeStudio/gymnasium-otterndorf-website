import { GraphQLClient } from "./graphql";
import {
  StrapiGqlPodcasterDetailBySlugsQuery,
  StrapiGqlPodcasterDetailBySlugsQueryVariables,
  StrapiGqlPodcasterBasicBySlugsQuery,
  StrapiGqlPodcasterBasicBySlugsQueryVariables,
  ResponseError,
} from "../types";
import { SectionsService } from "./sections";
import podcasterDetailBySlugsQuery from "../../../graphql/queries/podcaster-detail-by-slugs.gql";
import podcasterBasicBySlugsQuery from "../../../graphql/queries/podcaster-basic-by-slugs.gql";

export class PodcasterService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: PodcasterService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (PodcasterService.instance) {
      return PodcasterService.instance;
    }
    PodcasterService.instance = new PodcasterService();
    return PodcasterService.instance;
  }

  async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlPodcasterDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const podcasterRes =
      await this.graphql.requestCached<StrapiGqlPodcasterDetailBySlugsQuery>(
        podcasterDetailBySlugsQuery,
        vars
      );
    const podcasters = podcasterRes.podcasters || [];
    return podcasters;
  }

  async getDetail(slug: string) {
    const podcasters = await this.listDetail([slug], 1);
    if (!Array.isArray(podcasters) || podcasters.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const podcaster = podcasters?.[0] || null;
    return podcaster;
  }

  async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlPodcasterBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const podcasterRes =
      await this.graphql.requestCached<StrapiGqlPodcasterBasicBySlugsQuery>(
        podcasterBasicBySlugsQuery,
        vars
      );
    const podcasters = podcasterRes.podcasters || [];
    return podcasters;
  }

  async getBasic(slug: string) {
    const podcasters = await this.listBasic([slug], 1);
    if (!Array.isArray(podcasters) || podcasters.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const podcaster = podcasters?.[0] || null;
    return podcaster;
  }
}
