import { PageComponent } from "@ribajs/ssr";
import { BlogService } from "../../../services";
import { Section } from "../../../../common/types";
import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  title: string;
  content: any;
  sections: Section[];
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = false;
  protected autobind = true;

  protected blog = BlogService.getInstance();

  scope: Scope = {
    title: "",
    content: {},
    sections: [],
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
  }

  protected async afterBind() {
    this.scope.params = this.ctx.params;
    try {
      const post = await BlogService.getInstance().getPost(
        this.scope.params.slug
      );
      if (post) {
        this.scope.sections = await this.blog.getSections(post);
        this.scope.content = post;
      }
    } catch (error) {
      this.throw(error);
    }

    console.debug("content", this.scope.content);
    this.scope.title = this.scope.content.title;

    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
