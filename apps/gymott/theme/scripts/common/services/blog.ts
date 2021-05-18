import { GraphQLClient } from "./graphql";
import {
  ResponseError,
  StrapiGqlBlogEntriesBySlugsQuery,
  StrapiGqlBlogEntriesBySlugsQueryVariables,
  StrapiGqlBlogEntryFragmentFragment,
  DynamicZoneSection,
} from "../../common/types";
import { SectionsService } from "./sections";
import blogEntriesBySlugsQuery from "../../../graphql/queries/blog-entries-by-slugs.gql";

export class BlogService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
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

  async listPosts(slugs: string[] = []) {
    const vars: StrapiGqlBlogEntriesBySlugsQueryVariables = { slugs };
    const blogRes =
      await this.graphql.requestCached<StrapiGqlBlogEntriesBySlugsQuery>(
        blogEntriesBySlugsQuery,
        vars
      );
    const blogEntries = blogRes.blogEntries || [];
    return blogEntries;
  }

  async getPost(slug: string) {
    const posts = await this.listPosts([slug]);
    if (!Array.isArray(posts) || posts.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return posts[0];
  }

  async getSections(schoolSubject: StrapiGqlBlogEntryFragmentFragment) {
    if (schoolSubject?.content) {
      const DynamicZoneSections = (schoolSubject?.content ||
        []) as DynamicZoneSection[];
      return BlogService.sections.transform(DynamicZoneSections);
    }
    return [];
  }
}
