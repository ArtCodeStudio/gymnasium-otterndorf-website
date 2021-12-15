import { PageComponent } from "@ribajs/ssr";
import { GraphQLClient, OpenGraphService } from "../../services";
import pugTemplate from "./blog.component.pug";
import {
  replaceBodyPageClass,
  BlogService,
  Post,
  Blog,
  PageHeader,
  StrapiGqlBlogInfoQuery,
} from "../../../common";

export interface Scope {
  params: BlogPageComponent["ctx"]["params"];
  category?: Blog;
  categories: Blog[];
  header: PageHeader | Record<string, never>;
  posts: Post[];
  title: string;
  description: string;
}

export class BlogPageComponent extends PageComponent {
  public static tagName = "blog-page";
  public _debug = false;
  protected autobind = true;
  protected blog = BlogService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  protected gql = GraphQLClient.getInstance();

  scope: Scope = {
    posts: [],
    category: undefined,
    categories: [],
    header: {},
    params: {},
    title: "",
    description: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(BlogPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async setInfo() {
    const info = await this.blog.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
    return info;
  }

  protected async setPosts(slug?: string) {
    if (slug) {
      // Get posts by category
      this.scope.category = (await this.blog.getDetail(slug)) || undefined;
      if (this.scope.category?.blog_entries) {
        this.scope.posts = this.scope.category?.blog_entries as Post[];
      }
    } else {
      // Get all posts
      this.scope.posts = (await this.blog.listPostsBasic()) as Post[];
    }
    return {
      posts: this.scope.posts,
      category: this.scope.category,
    };
  }

  protected async setCategories() {
    this.scope.categories = ((await this.blog.listBasic()) as Blog[]) || [];
    return this.scope.categories;
  }

  protected async setHeader(
    info: StrapiGqlBlogInfoQuery["blogInfo"],
    category?: Blog
  ) {
    this.scope.header = this.blog.getHeader(
      this.scope.category || category,
      this.scope.title || info?.title
    );
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph(
    info: StrapiGqlBlogInfoQuery["blogInfo"],
    category?: Blog
  ) {
    return await this.openGraph.setBlogOverview(
      {
        title: this.scope.header.title,
      },
      info,
      category
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    const { category } = await this.setPosts(this.ctx.params.slug);
    const info = await this.setInfo();
    await this.setHeader(info, category);
    await this.setCategories();
    await this.setOpenGraph(info, category);
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
