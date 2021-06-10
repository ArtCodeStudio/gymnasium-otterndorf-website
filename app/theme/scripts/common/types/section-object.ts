import { SectionContentImage } from "./section-content-image";
import { SectionContentText } from "./section-content-text";
import { SectionFacts } from "./section-facts";
import { SectionSlideshow } from "./section-slideshow";
import { SectionStudentQuote } from "./section-student-quote";
import { HomeNews } from "./home-news";
import { HomeCalendar } from "./home-calendar";
import { SectionGallerySlideshow } from "./section-gallery-slideshow";
import { SectionBlackboardSlideshow } from "./section-blackboard-slideshow";

/**
 * Type for transformed sections
 */
export interface SectionObject {
  image?: SectionContentImage;
  text?: SectionContentText;
  facts?: SectionFacts;
  news?: HomeNews;
  calendar?: HomeCalendar;
  slideshow?: SectionSlideshow;
  gallerySlideshow?: SectionGallerySlideshow;
  blackboardSlideshow?: SectionBlackboardSlideshow;
  studentQuote?: SectionStudentQuote;
}