import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./page.component.pug";
import { PageService, OpenGraphService } from "../../services";
import {
  Section,
  Page,
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlComponentAttachmentAssetsFragmentFragment,
} from "../../../common";

export interface Scope {
  assets: StrapiGqlComponentAttachmentAssetsFragmentFragment[];
  sections: Section[];
  header: PageHeader | Record<string, never>;
  page: Page | Record<string, never>;
}

export class PagePageComponent extends PageComponent {
  public static tagName = "page-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    page: {},
    assets: [],
    sections: [],
    header: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(PagePageComponent.observedAttributes);
  }

  protected setHeader(page: Page) {
    this.scope.header = this.page.getHeader(page);
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected getPageAssets(page: Page) {
    const assets = [];
    if (page.assets) {
      for (const asset of page.assets) {
        if (asset) {
          assets.push(asset);
        }
      }
    }
    return assets;
  }

  protected getAssets(page: Page, sections: Section[]) {
    const assets: StrapiGqlComponentAttachmentAssetsFragmentFragment[] = [];
    assets.push(...PageService.sections.getAssetsFromSections(sections));
    assets.push(...this.getPageAssets(page));
    return assets;
  }

  protected async setPage() {
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    const page = await this.page.getDetail(this.ctx.params.slug);
    if (page) {
      this.scope.page = page;
    }
    return page;
  }

  protected setAssets(page: Page) {
    this.scope.assets = this.getAssets(page, this.scope.sections);
    return this.scope.assets;
  }

  protected async setSections(page: Page) {
    this.scope.sections = await this.page.getSections(page);
    return this.scope.sections;
  }

  protected async setOpenGraph(page: Page) {
    return await this.openGraph.setPage(
      {
        title: this.scope.header.title,
      },
      page
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    const page = await this.setPage();
    if (page) {
      await this.setSections(page);
      this.setHeader(page);
      this.setAssets(page);
      await this.setOpenGraph(page);
    }
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
