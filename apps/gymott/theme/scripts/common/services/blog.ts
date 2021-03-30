import { GraphQLClient } from "./graphql";
import {
  ResponseError,
  StrapiGqlBlogBySlugQuery,
  StrapiGqlBlogBySlugQueryVariables,
  StrapiGqlBlogEntriesQuery,
  StrapiGqlBlogEntriesQueryVariables,
} from "../../common/types";
import blogQuery from "../../../graphql/queries/blog-by-slug.gql";
import blogEntriesQuery from "../../../graphql/queries/blog-entries.gql";

export class BlogService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: BlogService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (BlogService.instance) {
      return BlogService.instance;
    }
    BlogService.instance = new BlogService();
    return BlogService.instance;
  }

  async get(slug: string) {
    const vars: StrapiGqlBlogBySlugQueryVariables = { slug };
    const blogRes = await this.graphql.requestCached<StrapiGqlBlogBySlugQuery>(
      blogQuery,
      vars
    );
    if (
      !Array.isArray(blogRes.blogEntries) ||
      blogRes.blogEntries.length <= 0
    ) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const blog = blogRes.blogEntries[0];
    return blog;
  }

  async list() {
    const vars: StrapiGqlBlogEntriesQueryVariables = {};
    const blogEntriesRes = await this.graphql.requestCached<StrapiGqlBlogEntriesQuery>(
      blogEntriesQuery,
      vars
    );
    console.debug("list posts", blogEntriesRes);

    const blogEntries = blogEntriesRes.blogEntries || [];
    return blogEntries;
  }
}
