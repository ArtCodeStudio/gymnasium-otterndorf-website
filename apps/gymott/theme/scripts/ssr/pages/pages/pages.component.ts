import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./pages.component.pug";
import { PageService } from "../../services/page";

export interface Scope {
  title: string;
  content: string;
  params: PagesPageComponent["ctx"]["params"];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = false;
  protected autobind = true;

  protected pageService = PageService.getInstance();

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
    try {
      const page = await this.pageService.get(this.ctx.params.slug);
      console.log("page", page);
      if (page) {
        if (page?.title) {
          this.scope.title = page?.title;
        }
        if (page?.content) {
          for (const content of page?.content) {
            if (content.__typename === "ComponentContentText") {
              this.scope.content = content.text;
            }
          }
        }
      }
    } catch (error) {
      if (error.status === 404) {
        this.scope.title = "Nicht gefunden!";
        this.scope.content =
          "Die angeforderte Seite konnte nicht gefunden werden.";
      } else {
        this.scope.title = "Unbekannter Fehler!";
        this.scope.content = error.message;
      }
    }
    this.head.title = this.scope.title;
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
