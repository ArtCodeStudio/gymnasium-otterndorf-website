import { PageComponent } from "@ribajs/ssr";
import { GraphQLClient } from "../../services/graphql";
import pugTemplate from "./blog.component.pug";

export interface Scope {
  title: string;
  content: string;
  params: BlogPageComponent["ctx"]["params"];
}

export class BlogPageComponent extends PageComponent {
  public static tagName = "blog-page";
  public _debug = true;
  protected autobind = true;

  protected gql: GraphQLClient;

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
    if (this.env.STRAPI_EXTERN_URL) {
      this.gql = new GraphQLClient(this.env.STRAPI_EXTERN_URL + "/graphql");
      try {
        this.gql.auth();
      } catch (error) {
        console.error(error);
      }
    } else {
      console.warn("STRAPI_EXTERN_URL not set!", this.env);
    }
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(BlogPageComponent.observedAttributes);
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
