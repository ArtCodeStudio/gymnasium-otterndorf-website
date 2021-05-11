import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSectionSlideshowByIdQuery,
  StrapiGqlSectionSlideshowByIdQueryVariables,
  StrapiGqlHomeSectionsQuery,
  StrapiGqlHomeSectionsQueryVariables,
} from "../types";
import sectionSlideshowById from "../../../graphql/queries/section-slideshow-by-id.gql";
import homeSections from "../../../graphql/queries/home-sections.gql";
import { Section, SectionSlideshow } from "../types";

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
    const response =
      await this.graphql.requestCached<StrapiGqlHomeSectionsQuery>(
        homeSections,
        vars
      );

    if (!response) {
      throw new Error("Cant get home sections!");
    }

    const sections = response.home?.sections || [];
    const results: Section[] = [];
    for (let i = 0; i < sections.length; i++) {
      if (sections[i]) {
        const section = sections[i];
        switch (section?.__typename) {
          case "ComponentContentImage":
            results.push({
              __typename: section.__typename,
              caption: section.caption || "",
              id: section.id || "",
              image: section.image || null,
            });
            break;
          case "ComponentContentText":
            results.push({
              __typename: section.__typename,
              id: section.id || "",
              text: section.text || "",
            });
            break;
          case "ComponentSectionSlideshow":
            const slideshow = section.slideshow?.id
              ? await this.getSlideshow(section["slideshow"].id)
              : null;
            if (slideshow) {
              results.push({
                __typename: section.__typename,
                entries: (slideshow.entries ||
                  []) as unknown as SectionSlideshow["entries"],
                id: slideshow.id,
                title: slideshow.title,
              });
            }

            break;
          case "ComponentSectionFacts":
            results.push({
              __typename: section.__typename,
              facts: section.facts || [],
            });
            break;
        }
      }
    }
    return results;
  }

  async getSlideshow(id: string) {
    const vars: StrapiGqlSectionSlideshowByIdQueryVariables = { id };
    const slideshowResponse =
      await this.graphql.requestCached<StrapiGqlSectionSlideshowByIdQuery>(
        sectionSlideshowById,
        vars
      );
    // const slideshow = slideshowResponse["sectionSlideshow"];
    // slideshow["__typename"] = "ComponentSectionSlideshow";
    return slideshowResponse["sectionSlideshow"];
  }
}
