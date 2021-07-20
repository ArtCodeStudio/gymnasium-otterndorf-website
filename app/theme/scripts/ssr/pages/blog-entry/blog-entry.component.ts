import { PageComponent } from "@ribajs/ssr";
import { BlogService, OpenGraphService } from "../../services";
import {
  Section,
  PageHeader,
  replaceBodyPageClass,
  Post,
} from "../../../common";
import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  sections: Section[];
  header: PageHeader | Record<string, never>;
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = false;
  protected autobind = true;

  protected blog = BlogService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    sections: [],
    header: {},
    params: {},
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
    this.init(BlogEntryPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async setPost() {
    const post = await BlogService.getInstance().getPost(
      this.scope.params.slug
    );
    if (post) {
      this.scope.sections = await this.blog.getSections(post);
    }
    return post;
  }

  protected setHeader(post: Post) {
    this.scope.header = this.blog.getPostHeader(post);
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph(post: Post) {
    await this.openGraph.setArticle(
      {
        title: this.scope.header.title,
      },
      post
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.params = this.ctx.params;
    try {
      const post = await this.setPost();
      if (post) {
        this.setHeader(post);
        await this.setOpenGraph(post);
      }
    } catch (error) {
      this.throw(error);
    }
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
