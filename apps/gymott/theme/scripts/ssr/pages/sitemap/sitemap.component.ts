import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./sitemap.component.pug";
import { PageService, BlogService } from "../../services";
import { Awaited } from "../../../common/types";

export interface Scope {
  title: string;
  pages: Awaited<ReturnType<PageService["list"]>>;
  blogPosts: Awaited<ReturnType<BlogService["listPosts"]>>;
}

export class SitemapPageComponent extends PageComponent {
  public static tagName = "sitemap-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();
  protected blog = BlogService.getInstance();

  scope: Scope = {
    title: "Sitemap",
    pages: [],
    blogPosts: [],
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(SitemapPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async getPages() {
    try {
      this.scope.pages = await this.page.list();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.pages;
  }

  protected async getBlogPosts() {
    try {
      this.scope.blogPosts = await this.blog.listPosts();
    } catch (error) {
      this.throw(error);
    }
    return this.scope.blogPosts;
  }

  protected async beforeBind() {
    this.head.title = this.scope.title;

    await this.getPages();
    await this.getBlogPosts();

    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
