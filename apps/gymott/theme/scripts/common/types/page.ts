import {
  StrapiGqlPageFragmentFragment,
  StrapiGqlPageBasicFragmentFragment,
} from "./strapi-gql";

export type Page = StrapiGqlPageBasicFragmentFragment &
  Partial<StrapiGqlPageFragmentFragment>;
