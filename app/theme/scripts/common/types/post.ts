import {
  StrapiGqlBlogEntryDetailFragmentFragment,
  StrapiGqlBlogEntryBasicFragmentFragment,
} from "./strapi-gql";

export type Post = StrapiGqlBlogEntryBasicFragmentFragment &
  Partial<StrapiGqlBlogEntryDetailFragmentFragment>;
