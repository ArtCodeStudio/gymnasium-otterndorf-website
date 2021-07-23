import { StrapiGqlImageFragmentFragment } from "./strapi-gql";
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
import { SectionPodcastEpisode } from "./section-podcast-episode";
import { SectionLatestPodcastEpisode } from "./section-latest-podcast-episode";
import { SectionFormerStudents } from "./section-former-students";

/**
 * Type for transformed sections
 */
export interface SectionObject {
  previewImage?: StrapiGqlImageFragmentFragment;
  previewText: string;
  images: SectionContentImage[];
  texts: SectionContentText[];
  buttons: SectionContentButton[];
  facts: SectionFacts[];
  news: HomeNews[];
  calendars: HomeCalendar[];
  slideshows: SectionSlideshow[];
  gallerySlideshows: SectionGallerySlideshow[];
  blackboardSlideshows: SectionBlackboardSlideshow[];
  blogSlideshows: SectionBlogSlideshow[];
  studentQuotes: SectionStudentQuote[];
  iframes: SectionIFrame[];
  mensamaxs: SectionMensaMax[];
  podcastEpisodes: SectionPodcastEpisode[];
  latestPodcastEpisodes: SectionLatestPodcastEpisode[];
  formerStudents: SectionFormerStudents[];
}
