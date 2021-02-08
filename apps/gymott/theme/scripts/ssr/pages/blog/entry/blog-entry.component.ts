import { PageComponent } from "@ribajs/ssr";

import pugTemplate from "./blog-entry.component.pug";

export interface Scope {
  title: string;
  content: string;
  params: BlogEntryPageComponent["ctx"]["params"];
}

export class BlogEntryPageComponent extends PageComponent {
  public static tagName = "blog-entry-page";
  public _debug = true;
  protected autobind = true;

  scope: Scope = {
    title: "{params.slug | capitalize}",
    content: "<p>We are {params.slug}!</a>",
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
    super.beforeBind();
    this.head.title = "You are " + this.ctx.params.slug;
  }

  protected async afterBind() {
    super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
