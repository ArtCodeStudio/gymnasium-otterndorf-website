import { PageComponent } from "@ribajs/ssr";
import { BlogService } from "../../../services";
import { Section, PageHeader } from "../../../../common/types";
import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  title: string;
  sections: Section[];
  header: PageHeader | Record<string, never>;
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = false;
  protected autobind = true;

  protected blog = BlogService.getInstance();

  scope: Scope = {
    title: "",
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
    this.init(BlogEntryPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.params = this.ctx.params;
    try {
      const post = await BlogService.getInstance().getPost(
        this.scope.params.slug
      );
      if (post) {
        this.scope.sections = await this.blog.getSections(post);
        this.scope.title = post.title;
        this.scope.header = this.blog.getPostHeader(post);
      }
    } catch (error) {
      this.throw(error);
    }
  }

  protected async afterBind() {
    await super.afterBind();
    document.body.classList.add(BlogEntryPageComponent.tagName.toLowerCase());
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
