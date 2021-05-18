import { GraphQLClient } from "./graphql";
import {
  StrapiGqlHomeSectionsQuery,
  StrapiGqlHomeSectionsQueryVariables,
  DynamicZoneSection,
} from "../types";
import homeSections from "../../../graphql/queries/home-sections.gql";
import { SectionsService } from "./sections";

export class GyHomeService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: GyHomeService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (GyHomeService.instance) {
      return GyHomeService.instance;
    }
    GyHomeService.instance = new GyHomeService();
    return GyHomeService.instance;
  }

  async getSections() {
    const vars: StrapiGqlHomeSectionsQueryVariables = {};
    const response =
      await this.graphql.requestCached<StrapiGqlHomeSectionsQuery>(
        homeSections,
        vars
      );

    if (!response) {
      throw new Error("Cant get home sections!");
    }

    const DynamicZoneSections = (response.home?.sections ||
      []) as DynamicZoneSection[];
    const sections = await GyHomeService.sections.transform(
      DynamicZoneSections
    );
    return sections;
  }
}
