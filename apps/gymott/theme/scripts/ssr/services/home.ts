import { SSRGraphQLClient } from "./graphql";
import slideshowById from "../../../graphql/queries/slideshow-by-id.gql";
import homeSections from "../../../graphql/queries/home-sections.gql";

export class GyHomeService {
  protected graphql = SSRGraphQLClient.getInstance();

  protected static instance: GyHomeService;

  // protected constructor() {}

  public static getInstance() {
    if (GyHomeService.instance) {
      return GyHomeService.instance;
    }
    GyHomeService.instance = new GyHomeService();
    return GyHomeService.instance;
  }

  async getHomeSections() {
    const response = await this.graphql.request(homeSections);

    const sections = response.home.sections;
    for (let i = 0; i < sections.length; i++) {
      const section = sections[i];
      switch (section.__typename) {
        case "ComponentContentImage":
          break;
        case "ComponentContentText":
          break;
        case "ComponentSectionSlideshow":
          sections[i] = await this.getSlideshow(section["slideshow"].id);
          break;
      }
    }
    console.log(sections);
    return sections;
  }

  async getSlideshow(id: number) {
    const slideshowResponse = await this.graphql.request(slideshowById, { id });
    const slideshow = slideshowResponse["sectionSlideshow"];
    slideshow["__typename"] = "ComponentSectionSlideshow";
    return slideshowResponse["sectionSlideshow"];
  }
}
