import { SectionContentImage } from "./section-content-image";
import { SectionContentText } from "./section-content-text";
import { SectionContentButton } from "./section-content-button";
import { SectionFacts } from "./section-facts";
import { SectionSlideshow } from "./section-slideshow";
import { SectionStudentQuote } from "./section-student-quote";
import { HomeNews } from "./home-news";
import { HomeCalendar } from "./home-calendar";
import { SectionGallerySlideshow } from "./section-gallery-slideshow";
import { SectionBlackboardSlideshow } from "./section-blackboard-slideshow";
import { SectionBlogSlideshow } from "./section-blog-slideshow";
import { SectionIFrame } from "./section-iframe";
import { SectionMensaMax } from "./section-mensa-max";

/**
 * Type for transformed sections
 */
export interface SectionObject {
  image?: SectionContentImage;
  text?: SectionContentText;
  button?: SectionContentButton;
  facts?: SectionFacts;
  news?: HomeNews;
  calendar?: HomeCalendar;
  slideshow?: SectionSlideshow;
  gallerySlideshow?: SectionGallerySlideshow;
  blackboardSlideshow?: SectionBlackboardSlideshow;
  blogSlideshow?: SectionBlogSlideshow;
  studentQuote?: SectionStudentQuote;
  iframe?: SectionIFrame;
  mensamax?: SectionMensaMax;
}
