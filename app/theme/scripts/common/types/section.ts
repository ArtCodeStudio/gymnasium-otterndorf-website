import { SectionContentImage } from "./section-content-image";
import { SectionContentText } from "./section-content-text";
import { SectionContentButton } from "./section-content-button";
import { SectionFacts } from "./section-facts";
import { SectionSlideshow } from "./section-slideshow";
import { HomeNews } from "./home-news";
import { HomeCalendar } from "./home-calendar";
import { SectionGallerySlideshow } from "./section-gallery-slideshow";
import { SectionBlackboardSlideshow } from "./section-blackboard-slideshow";
import { SectionBlogSlideshow } from "./section-blog-slideshow";
import { SectionStudentQuote } from "./section-student-quote";
import { SectionIFrame } from "./section-iframe";
import { SectionMensaMax } from "./section-mensa-max";
import { SectionPodcastEpisode } from "./section-podcast-episode";

/**
 * Type for transformed sections
 */
export type Section =
  | SectionContentImage
  | SectionContentText
  | SectionContentButton
  | SectionFacts
  | HomeNews
  | HomeCalendar
  | SectionSlideshow
  | SectionGallerySlideshow
  | SectionBlackboardSlideshow
  | SectionBlogSlideshow
  | SectionStudentQuote
  | SectionIFrame
  | SectionMensaMax
  | SectionPodcastEpisode;
