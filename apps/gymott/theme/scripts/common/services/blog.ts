import { GraphQLClient } from "./graphql";
import {
  ResponseError,
  StrapiGqlBlogEntriesBySlugsQuery,
  StrapiGqlBlogEntriesBySlugsQueryVariables,
  StrapiGqlBlogEntryFragmentFragment,
  DynamicZoneSection,
  PageHeader,
} from "../types";
import { SectionsService } from "./sections";
import { postFormatter, blogFormatter } from "../formatters";
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

  async getSections(post: StrapiGqlBlogEntryFragmentFragment) {
    if (post?.content) {
      const DynamicZoneSections = (post?.content || []) as DynamicZoneSection[];
      return BlogService.sections.transform(DynamicZoneSections);
    }
    return [];
  }

  getPostHeader(post: StrapiGqlBlogEntryFragmentFragment): PageHeader {
    const header: PageHeader = {
      title: post.title || "",
      breadcrumbs: [
        {
          label: "Startseite",
          url: "/",
          active: false,
        },
        {
          label: "Blog",
          active: false,
        },
      ],
      updatedAt: post.updated_at || post.created_at,
      author: post.author || undefined,
    };

    if (post.blog_category?.name) {
      header.breadcrumbs.push({
        label: post.blog_category.name,
        url: blogFormatter.read(post.blog_category.slug),
      });
    }

    header.breadcrumbs.push({
      label: post.title,
      active: true,
      url: postFormatter.read(post.slug),
    });

    return header;
  }
}
