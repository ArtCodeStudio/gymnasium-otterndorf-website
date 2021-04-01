import { GraphQLClient } from "./graphql";
import {
  ResponseError,
  StrapiGqlBlogEntriesBySlugsQuery,
  StrapiGqlBlogEntriesBySlugsQueryVariables,
  StrapiGqlBlogEntriesQuery,
  StrapiGqlBlogEntriesQueryVariables,
} from "../../common/types";
import blogEntriesBySlugsQuery from "../../../graphql/queries/blog-entries-by-slugs.gql";
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

  async get(slugs: string[]) {
    const vars: StrapiGqlBlogEntriesBySlugsQueryVariables = { slugs };
    const blogRes = await this.graphql.requestCached<StrapiGqlBlogEntriesBySlugsQuery>(
      blogEntriesBySlugsQuery,
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
    const blogEntries = blogRes.blogEntries || [];
    return blogEntries;
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
