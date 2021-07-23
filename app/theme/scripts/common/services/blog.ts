import { GraphQLClient } from "./graphql";
import {
  StrapiGqlBlogEntriesDetailBySlugsQuery,
  StrapiGqlBlogEntriesDetailBySlugsQueryVariables,
  StrapiGqlBlogEntriesBasicBySlugsQuery,
  StrapiGqlBlogEntriesBasicBySlugsQueryVariables,
  StrapiGqlBlogCategoriesBasicBySlugsQuery,
  StrapiGqlBlogCategoriesBasicBySlugsQueryVariables,
  StrapiGqlBlogCategoriesDetailBySlugsQuery,
  StrapiGqlBlogCategoriesDetailBySlugsQueryVariables,
  StrapiGqlBlogInfoQuery,
  StrapiGqlBlogInfoQueryVariables,
  DynamicZoneSection,
  PageHeader,
  SectionObject,
  Post,
  Blog,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { ResponseErrorService } from "./response-error";
import { postFormatter, blogFormatter } from "../formatters";
import blogEntriesBySlugsQuery from "../../../graphql/queries/blog-entries-detail-by-slugs.gql";
import blogEntriesBasicBySlugsQuery from "../../../graphql/queries/blog-entries-basic-by-slugs.gql";
import blogCategoriesBasicBySlugs from "../../../graphql/queries/blog-categories-basic-by-slugs.gql";
import blogCategoriesDetailBySlugs from "../../../graphql/queries/blog-categories-detail-by-slugs.gql";
import blogInfo from "../../../graphql/queries/blog-info.gql";

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

  public async info() {
    const vars: StrapiGqlBlogInfoQueryVariables = {};
    const res = await this.graphql.requestCached<StrapiGqlBlogInfoQuery>(
      blogInfo,
      vars
    );
    return res.blogInfo;
  }

  /**
   * Shorter dataset for posts / news overview
   */
  public async listPostsBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlBlogEntriesBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const blogRes =
      await this.graphql.requestCached<StrapiGqlBlogEntriesBasicBySlugsQuery>(
        blogEntriesBasicBySlugsQuery,
        vars
      );
    const blogEntries = blogRes.blogEntries || [];
    return blogEntries.filter((blogEntry) => !!blogEntry) as Post[];
  }

  /**
   * Full dataset for detail pages
   */
  public async listPosts(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlBlogEntriesDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const blogRes =
      await this.graphql.requestCached<StrapiGqlBlogEntriesDetailBySlugsQuery>(
        blogEntriesBySlugsQuery,
        vars
      );
    const blogEntries = blogRes.blogEntries || [];
    return blogEntries as Post[];
  }

  public async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlBlogCategoriesBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const blogRes =
      await this.graphql.requestCached<StrapiGqlBlogCategoriesBasicBySlugsQuery>(
        blogCategoriesBasicBySlugs,
        vars
      );
    const blogCategories = blogRes.blogCategories || [];
    return blogCategories;
  }

  public async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlBlogCategoriesDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const blogRes =
      await this.graphql.requestCached<StrapiGqlBlogCategoriesDetailBySlugsQuery>(
        blogCategoriesDetailBySlugs,
        vars
      );
    const blogCategories = blogRes.blogCategories || [];
    return blogCategories;
  }

  /**
   * Full dataset for detail pages
   */
  public async getPost(slug: string) {
    const posts = await this.listPosts([slug]);
    if (!Array.isArray(posts) || posts.length <= 0) {
      throw ResponseErrorService.notFound("Blog category", slug);
    }
    return posts[0];
  }

  public async getDetail(slug: string) {
    const blogs = await this.listDetail([slug]);
    if (!Array.isArray(blogs) || blogs.length <= 0) {
      throw ResponseErrorService.notFound("Blog category", slug);
    }
    return blogs[0];
  }

  public async getBasic(slug: string) {
    const blogs = await this.listBasic([slug]);
    if (!Array.isArray(blogs) || blogs.length <= 0) {
      throw ResponseErrorService.notFound("Blog category", slug);
    }
    return blogs[0];
  }

  public async getSections(post: Post) {
    if (post?.content) {
      const DynamicZoneSections = (post?.content || []) as DynamicZoneSection[];
      return await BlogService.sections.toArray(DynamicZoneSections);
    }
    return [];
  }

  public async getSectionsObject(post: Post): Promise<SectionObject> {
    if (!post.content) {
      return SectionsService.getEmptySectionsObject();
    }
    const sectionsArr = await this.getSections(post);
    const sectionsObj = await BlogService.sections.toObject(sectionsArr);
    return sectionsObj;
  }

  public getPostHeader(post: Post): PageHeader {
    const header: PageHeader = {
      title: post.title || "",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          type: ENTRY_TYPE.Blog,
          active: false,
          url: blogFormatter.read(),
        },
      ],
      updatedAt: post.updated_at || post.created_at,
      author: post.author || undefined,
    };

    if (post.blog_category?.name) {
      header.breadcrumbs.push({
        label: post.blog_category.name,
        type: ENTRY_TYPE.Blog,
        url: blogFormatter.read(post.blog_category.slug),
      });
    }

    header.breadcrumbs.push({
      label: post.title,
      type: ENTRY_TYPE.Post,
      active: true,
      url: postFormatter.read(post.slug),
    });

    return header;
  }

  public getHeader(blog?: Blog, title?: string): PageHeader {
    const header: PageHeader = {
      title: blog?.name || title || "Alle Artikel",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          type: ENTRY_TYPE.Blog,
          active: blog ? false : true,
          url: blogFormatter.read(),
        },
      ],
      updatedAt: blog?.updated_at || blog?.created_at,
    };

    if (blog) {
      header.breadcrumbs.push({
        label: blog.name,
        type: ENTRY_TYPE.Blog,
        active: true,
        url: blogFormatter.read(blog.slug),
      });
    }

    return header;
  }
}
