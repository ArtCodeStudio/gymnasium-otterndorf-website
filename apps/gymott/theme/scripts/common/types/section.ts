import { SectionContentImage } from "./section-content-image";
import { SectionContentText } from "./section-content-text";
import { SectionFacts } from "./section-facts";
import { SectionSlideshow } from "./section-slideshow";
import { HomeNews } from "./home-news";
import { HomeCalendar } from "./home-calendar";
import { SectionGallerySlideshow } from "./section-gallery-slideshow";

/**
 * Type for transformed sections
 */
export type Section =
  | SectionContentImage
  | SectionContentText
  | SectionFacts
  | HomeNews
  | HomeCalendar
  | SectionSlideshow
  | SectionGallerySlideshow;
