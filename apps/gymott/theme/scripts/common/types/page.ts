import {
  StrapiGqlPageDetailFragmentFragment,
  StrapiGqlPageBasicFragmentFragment,
} from "./strapi-gql";

export type Page = StrapiGqlPageBasicFragmentFragment &
  Partial<StrapiGqlPageDetailFragmentFragment>;
