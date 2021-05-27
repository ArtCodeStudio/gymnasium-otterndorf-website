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

  protected async getPosts(slug?: string) {
    if (slug) {
      // Get posts by category
      this.scope.category = (await this.blog.get(slug)) || undefined;
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
    this.scope.header = this.blog.getHeader(this.scope.category);
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.getPosts(this.ctx.params.slug);
    await this.getHeader();
    await this.getCategories();

    this.head.title = "Blog";
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
