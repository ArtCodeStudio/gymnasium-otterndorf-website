import { StrapiGqlUploadFile } from "./strapi-gql";
import { SectionSlideshowLink } from "./section-slideshow-link";

export interface SectionSlideshow {
  __typename: "ComponentSectionSlideshow";
  title: string;
  id: string;
  /** Slideshow entries */
  entries?: {
    id: string;
    image: Pick<StrapiGqlUploadFile, "formats">;
    subtitle: string;
    link?: SectionSlideshowLink;
  };
}
