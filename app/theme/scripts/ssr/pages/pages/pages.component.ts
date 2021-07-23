import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./pages.component.pug";
import { PageService, OpenGraphService } from "../../services";
import {
  Page,
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlPageInfoQuery,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  pages: Page[];
  title: string;
  description: string;
}

export class PagesPageComponent extends PageComponent {
  public static tagName = "pages-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    pages: [],
    header: {},
    title: "Infoseiten",
    description: "",
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

  protected setHeader(info: StrapiGqlPageInfoQuery["pageInfo"]) {
    this.scope.header = this.page.getHeader(undefined, info);
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setPages() {
    const pages = await this.page.listBasic();
    if (this.scope.pages && pages) {
      this.scope.pages = pages;
    }
    return pages;
  }

  protected async setInfo() {
    const info = await this.page.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
    return info;
  }

  protected async setOpenGraph(info: StrapiGqlPageInfoQuery["pageInfo"]) {
    return await this.openGraph.setPageOverview(
      {
        title: this.scope.header.title,
      },
      info
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setPages();
    const info = await this.setInfo();
    this.setHeader(info);
    await this.setOpenGraph(info);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
