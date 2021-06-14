import {
  StrapiGqlComponentContentImage,
  StrapiGqlComponentContentText,
  StrapiGqlComponentContentButton,
  StrapiGqlComponentSectionFacts,
  StrapiGqlComponentHomeNews,
  StrapiGqlComponentSectionSlideshow,
  StrapiGqlComponentSectionGallerySlideshow,
  StrapiGqlComponentHomeCalendar,
  StrapiGqlComponentSectionBlackboardSlideshow,
  StrapiGqlComponentStudentSectionStudentQuote,
} from "./strapi-gql";

/**
 * Type for untransformed sections
 */
export type DynamicZoneSection =
  | StrapiGqlComponentContentImage
  | StrapiGqlComponentContentText
  | StrapiGqlComponentContentButton
  | StrapiGqlComponentSectionFacts
  | StrapiGqlComponentHomeNews
  | StrapiGqlComponentSectionSlideshow
  | StrapiGqlComponentSectionGallerySlideshow
  | StrapiGqlComponentHomeCalendar
  | StrapiGqlComponentSectionBlackboardSlideshow
  | StrapiGqlComponentStudentSectionStudentQuote;
