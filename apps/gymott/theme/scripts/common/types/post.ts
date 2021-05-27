import {
  StrapiGqlBlogEntryFragmentFragment,
  StrapiGqlBlogEntryBasicFragmentFragment,
} from "./strapi-gql";

export type Post =
  | StrapiGqlBlogEntryFragmentFragment
  | StrapiGqlBlogEntryBasicFragmentFragment;
