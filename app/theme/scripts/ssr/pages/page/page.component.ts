import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./page.component.pug";
import { PageService } from "../../services";
import {
  Section,
  Page,
  PageHeader,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  assets: Page["assets"];
  sections: Section[];
  header: PageHeader | Record<string, never>;
  // blogEntries: Post[];
  // calendarKey: string;
  page: Page | Record<string, never>;
}

export class PagePageComponent extends PageComponent {
  public static tagName = "page-page";
  public _debug = false;
  protected autobind = true;

  protected page = PageService.getInstance();

  scope: Scope = {
    page: {},
    assets: [],
    // blogEntries: [],
    sections: [],
    header: {},
    // calendarKey: "",
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
  }

  protected getAssetsFromSections(sections: Section[]) {
    const assets: Page["assets"] = [];
    for (const section of sections) {
      if (
        section.__typename === "ComponentContentDownloadButton" &&
        section.file?.url
      ) {
        assets.push({
          __typename: "ComponentAttachmentAssets",
          file: section.file,
          name: section.label,
        });
      }
    }
    return assets;
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
    const assets = [];
    assets.push(...this.getAssetsFromSections(sections));
    assets.push(...this.getPageAssets(page));
    return assets;
  }

  protected setTitle(page: Page) {
    if (page?.title) {
      this.head.title = page.title;
    }
  }

  // TODO
  // protected setCalendarKey(page: Page) {
  //   this.scope.calendarKey = page?.["calendar_key"] || "";
  // }

  protected async beforeBind() {
    try {
      const page = await this.page.getDetail(this.ctx.params.slug);

      if (page) {
        this.scope.page = page;
        // this.setCalendarKey(page);
        this.setTitle(this.scope.page);
        this.scope.sections = await this.page.getSections(this.scope.page);
        this.setHeader(page);
        this.scope.assets = this.getAssets(
          this.scope.page,
          this.scope.sections
        );
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
