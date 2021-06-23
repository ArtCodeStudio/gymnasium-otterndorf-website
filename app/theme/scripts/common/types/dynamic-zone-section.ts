import {
  StrapiGqlComponentContentImageFragmentFragment,
  StrapiGqlComponentContentTextFragmentFragment,
  StrapiGqlComponentContentButtonFragmentFragment,
  StrapiGqlComponentSectionFactsFragmentFragment,
  StrapiGqlComponentHomeNewsFragmentFragment,
  StrapiGqlComponentSectionSlideshowFragmentFragment,
  StrapiGqlComponentSectionGallerySlideshowFragmentFragment,
  StrapiGqlComponentHomeCalendar,
  StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment,
  StrapiGqlComponentSectionBlogSlideshowFragmentFragment,
  StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment,
  StrapiGqlComponentSectionIFrameFragmentFragment,
  StrapiGqlComponentSectionMensaMaxFragmentFragment,
} from "./strapi-gql";

/**
 * Type for untransformed sections
 */
export type DynamicZoneSection =
  | StrapiGqlComponentContentImageFragmentFragment
  | StrapiGqlComponentContentTextFragmentFragment
  | StrapiGqlComponentContentButtonFragmentFragment
  | StrapiGqlComponentSectionFactsFragmentFragment
  | StrapiGqlComponentHomeNewsFragmentFragment
  | StrapiGqlComponentSectionSlideshowFragmentFragment
  | StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  | StrapiGqlComponentHomeCalendar
  | StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  | StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  | StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  | StrapiGqlComponentSectionIFrameFragmentFragment
  | StrapiGqlComponentSectionMensaMaxFragmentFragment;
