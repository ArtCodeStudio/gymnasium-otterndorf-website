import { SectionSlideshowEntry } from "./section-slideshow-entry";

export interface SectionSlideshow {
  __typename: "ComponentSectionSlideshow";
  title: string;
  id: string;
  /** Slideshow entries */
  entries: SectionSlideshowEntry[];
}
