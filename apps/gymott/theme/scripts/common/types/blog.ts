import {
  StrapiGqlBlogCategoryBasicFragmentFragment,
  StrapiGqlBlogCategoryDetailFragmentFragment,
} from "./strapi-gql";

export type Blog = StrapiGqlBlogCategoryBasicFragmentFragment &
  Partial<StrapiGqlBlogCategoryDetailFragmentFragment>;
