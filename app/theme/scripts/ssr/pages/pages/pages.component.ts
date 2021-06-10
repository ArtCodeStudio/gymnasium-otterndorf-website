import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./pages.component.pug";
import { PageService } from "../../services";
import { Page, PageHeader, replaceBodyPageClass } from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  pages: Page[];
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();

  scope: Scope = {
    pages: [],
    header: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(PagesPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected setHeader() {
    this.scope.header = this.page.getHeader();
  }

  protected async beforeBind() {
    try {
      const pages = await this.page.listBasic();

      if (this.scope.pages && pages) {
        this.scope.pages = pages;
        this.setHeader();
      }
    } catch (error) {
      this.throw(error);
    }

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
