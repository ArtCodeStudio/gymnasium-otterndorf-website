import {
  StrapiGqlWorkingGroupDetailFragmentFragment,
  StrapiGqlWorkingGroupBasicFragmentFragment,
} from "./strapi-gql";

export type WorkingGroup = StrapiGqlWorkingGroupBasicFragmentFragment &
  Partial<StrapiGqlWorkingGroupDetailFragmentFragment>;
