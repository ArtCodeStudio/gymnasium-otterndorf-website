import {
  StrapiGqlComponentContentImage,
  StrapiGqlComponentContentText,
  StrapiGqlComponentSectionFacts,
  StrapiGqlComponentHomeNews,
  StrapiGqlComponentSectionSlideshow,
  StrapiGqlComponentSectionGallerySlideshow,
  StrapiGqlComponentHomeCalendar,
} from "./strapi-gql";

/**
 * Type for untransformed sections
 */
export type DynamicZoneSection =
  | StrapiGqlComponentContentImage
  | StrapiGqlComponentContentText
  | StrapiGqlComponentSectionFacts
  | StrapiGqlComponentHomeNews
  | StrapiGqlComponentSectionSlideshow
  | StrapiGqlComponentSectionGallerySlideshow
  | StrapiGqlComponentHomeCalendar;
