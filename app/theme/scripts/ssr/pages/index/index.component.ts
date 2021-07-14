import { PageComponent, OpenGraphService } from "@ribajs/ssr";
import { HomeService, GeneralService } from "../../services";
import {
  Section,
  replaceBodyPageClass,
  nestFormatter,
  strapiImageUrlFormatter,
} from "../../../common";
import pugTemplate from "./index.component.pug";

export interface Scope {
  sections: Section[];
}

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = false;
  protected autobind = true;
  protected home = HomeService.getInstance();
  protected general = GeneralService.getInstance();

  protected head = {
    title: "Startseite",
  };

  scope: Scope = {
    sections: [],
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(IndexPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.scope.sections = await this.home.getSections();
    const settings = await this.general.settings();
    let image = "";

    if (settings?.image?.url) {
      // TODO get image sizes like we do it for audio files in nest?
      image = strapiImageUrlFormatter.read(settings.image, "original");
    }

    OpenGraphService.setMetaTags({
      title: this.head.title,
      image,
      type: "website",
      url: nestFormatter.read(),
    });
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(/*this.scope*/ {});
  }
}
