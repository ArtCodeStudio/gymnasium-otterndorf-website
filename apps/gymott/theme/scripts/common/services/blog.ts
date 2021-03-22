import { GraphQLClient } from "./graphql";
import { ResponseError } from "../../common/types/response-error";
import blogQuery from "../../../graphql/queries/blog-by-slug.gql";

export class BlogService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: BlogService;

  public static getInstance() {
    if (BlogService.instance) {
      return BlogService.instance;
    }
    BlogService.instance = new BlogService();
    return BlogService.instance;
  }

  async get(slug: string) {
    const blogRes = await this.graphql.request(blogQuery, { slug });
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
}
