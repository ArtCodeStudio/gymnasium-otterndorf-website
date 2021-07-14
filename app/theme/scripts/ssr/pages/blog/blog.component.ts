import { PageComponent } from "@ribajs/ssr";
import { GraphQLClient } from "../../services";
import pugTemplate from "./blog.component.pug";
import {
  replaceBodyPageClass,
  BlogService,
  Post,
  Blog,
  PageHeader,
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

  protected gql = GraphQLClient.getInstance();

  scope: Scope = {
    posts: [],
    category: undefined,
    categories: [],
    header: {},
    params: {},
    title: "Neuigkeiten",
    description: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
    this.debug("env", this.env);
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
  }

  protected async getPosts(slug?: string) {
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
  }

  protected async getCategories() {
    this.scope.categories = ((await this.blog.listBasic()) as Blog[]) || [];
  }

  protected async getHeader() {
    this.scope.header = this.blog.getHeader(
      this.scope.category,
      this.scope.title
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.getPosts(this.ctx.params.slug);
    await this.setInfo();
    await this.getHeader();
    await this.getCategories();

    this.head.title = this.scope.title;
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
