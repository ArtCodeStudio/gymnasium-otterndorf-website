import { PageComponent } from "@ribajs/ssr";
import { GraphQLClient } from "../../services";
import pugTemplate from "./blog.component.pug";
import { replaceBodyPageClass, BlogService, Post } from "../../../common";

export interface Scope {
  params: BlogPageComponent["ctx"]["params"];
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

  protected async beforeBind() {
    await super.beforeBind();

    this.scope.posts = (await this.blog.listPostsBasic()) as Post[];

    this.head.title = "Blog";
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
