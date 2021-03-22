import { PageComponent } from "@ribajs/ssr";
import { GraphQLClient } from "../../services";
import pugTemplate from "./blog.component.pug";

export interface Scope {
  title: string;
  content: string;
  params: BlogPageComponent["ctx"]["params"];
}

export class BlogPageComponent extends PageComponent {
  public static tagName = "blog-page";
  public _debug = false;
  protected autobind = true;

  protected gql = GraphQLClient.getInstance();

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
    this.debug("env", this.env);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(BlogPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx.params.slug;
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
