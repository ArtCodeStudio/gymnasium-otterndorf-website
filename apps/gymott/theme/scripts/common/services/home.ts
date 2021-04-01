import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSectionSlideshowByIdQuery,
  StrapiGqlSectionSlideshowByIdQueryVariables,
  StrapiGqlHomeSectionsQuery,
  StrapiGqlHomeSectionsQueryVariables,
} from "../types";
import sectionSlideshowById from "../../../graphql/queries/section-slideshow-by-id.gql";
import homeSections from "../../../graphql/queries/home-sections.gql";

export class GyHomeService {
  protected graphql = GraphQLClient.getInstance();

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

  async getHomeSections() {
    const vars: StrapiGqlHomeSectionsQueryVariables = {};
    const response = await this.graphql.requestCached<StrapiGqlHomeSectionsQuery>(
      homeSections,
      vars
    );

    if (!response) {
      throw new Error("Cant get home sections!");
    }

    const sections = response.home?.sections || [];
    const results: any[] = []; // TODO type
    for (let i = 0; i < sections.length; i++) {
      if (sections[i]) {
        const section = sections[i];
        switch (section?.__typename) {
          case "ComponentContentImage":
            results.push(section);
            break;
          case "ComponentContentText":
            results.push(section);
            break;
          case "ComponentSectionSlideshow":
            console.debug("section slideshow", section["slideshow"]);
            results.push({
              ...section,
              ...(section["slideshow"]?.id
                ? await this.getSlideshow(section["slideshow"].id)
                : {}),
            });
            // console.debug("ComponentSectionSlideshow", section);
            break;
          case "ComponentSectionFacts":
            results.push(section);
            break;
        }
      }
    }
    console.debug("sections", results);
    return results;
  }

  async getSlideshow(id: string) {
    const vars: StrapiGqlSectionSlideshowByIdQueryVariables = { id };
    const slideshowResponse = await this.graphql.requestCached<StrapiGqlSectionSlideshowByIdQuery>(
      sectionSlideshowById,
      vars
    );
    // const slideshow = slideshowResponse["sectionSlideshow"];
    // slideshow["__typename"] = "ComponentSectionSlideshow";
    return slideshowResponse["sectionSlideshow"];
  }
}
