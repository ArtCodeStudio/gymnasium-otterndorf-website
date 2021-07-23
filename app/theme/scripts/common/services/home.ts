import { GraphQLClient } from "./graphql";
import {
  StrapiGqlHomeSectionsQuery,
  StrapiGqlHomeSectionsQueryVariables,
  DynamicZoneSection,
  Section,
} from "../types";
import homeSections from "../../../graphql/queries/home-sections.gql";
import { SectionsService } from "./sections";

export class HomeService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: HomeService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (HomeService.instance) {
      return HomeService.instance;
    }
    HomeService.instance = new HomeService();
    return HomeService.instance;
  }

  protected async getSectionsRaw() {
    const vars: StrapiGqlHomeSectionsQueryVariables = {};
    const response =
      await this.graphql.requestCached<StrapiGqlHomeSectionsQuery>(
        homeSections,
        vars
      );

    if (!response) {
      throw new Error("Cant get home sections!");
    }

    return (response.home?.sections || []) as DynamicZoneSection[];
  }

  public async getSections() {
    const dynamicZoneSections = await this.getSectionsRaw();
    const sections = await HomeService.sections.toArray(dynamicZoneSections);
    return sections;
  }

  public async getSectionsObject(sectionsArr?: Section[]) {
    if (!sectionsArr) {
      sectionsArr = await this.getSections();
    }
    const sections = await HomeService.sections.toObject(sectionsArr);
    return sections;
  }
}
