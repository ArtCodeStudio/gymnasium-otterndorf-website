import { SectionContentImage } from "./section-content-image";
import { SectionContentText } from "./section-content-text";
import { SectionFacts } from "./section-facts";
import { SectionSlideshow } from "./section-slideshow";
import { HomeNews } from "./home-news";

export type Section =
  | SectionContentImage
  | SectionContentText
  | SectionFacts
  | HomeNews
  | SectionSlideshow;
