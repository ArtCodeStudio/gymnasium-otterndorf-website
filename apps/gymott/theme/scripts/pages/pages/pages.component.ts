import { PageComponent } from "@ribajs/ssr";

import pugTemplate from "./pages.component.pug";

import { request } from "graphql-request";
import pageQuery from "../../../graphql/queries/page-by-slug.gql"; 

export interface Scope {
  title: string;
  content: string;
  params: PagesPageComponent["ctx"]["params"];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
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
    this.init(PagesPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.head.title = "You are " + this.ctx.params.slug;
    const pageRes = await request("http://localhost:4002/graphql", pageQuery, { slug: this.ctx.params.slug });
    console.log("page", pageRes);
    if (Array.isArray(pageRes.pages)) {
      const page = pageRes.pages[0];
      if (page?.title) {
        this.head.title = page?.title;
        this.scope.title = page?.title;
      }
      if (page?.content) {
        for (const content of page?.content) {
          if (content.__typename === 'ComponentContentText') {
            this.scope.content = content.text;
          }
        }
      }
    }
  }

  protected async afterBind() {
    super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
