import { PageComponent } from "@ribajs/ssr";
import { BlogService } from "../../../services";

import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  title: string;
  content: any;
  contents: any[];
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = false;
  protected autobind = true;

  protected blogService = BlogService.getInstance();

  scope: Scope = {
    title: "",
    content: {},
    contents: [],
    params: {},
  };

  static get observedAttributes() {
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
    this.scope.content = await BlogService.getInstance().get(
      this.scope.params.slug
    );
    console.log(this.scope.content);
    this.scope.title = this.scope.content.title;
    this.scope.contents = this.scope.content.content;
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
