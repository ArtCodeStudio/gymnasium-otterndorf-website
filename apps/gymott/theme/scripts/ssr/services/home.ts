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
          sections[i] = {
            ...sections[i],
            ...(await this.getSlideshow(section["slideshow"].id)),
          };
          console.debug("ComponentSectionSlideshow", sections[i]);
          break;
      }
    }
    // console.debug("sections", sections);
    return sections;
  }

  transformImage(image: any) {
    for (const key in image.formats) {
      if (Object.prototype.hasOwnProperty.call(image.formats, key)) {
        const baseUrl = window?.ssr?.env?.STRAPI_EXTERN_URL || "";
        image.formats[key].url = baseUrl + image.formats[key].url;
      }
    }
  }

  async getSlideshow(id: number) {
    const slideshowResponse = await this.graphql.request(slideshowById, { id });
    const slideshow = slideshowResponse["sectionSlideshow"];
    slideshow["__typename"] = "ComponentSectionSlideshow";

    for (const entry of slideshow.entries) {
      console.debug("entry", entry);
      if (entry.image) {
        this.transformImage(entry.image);
      }
    }
    return slideshowResponse["sectionSlideshow"];
  }
}
