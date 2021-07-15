import { PageComponent } from "@ribajs/ssr";
import { HomeService, OpenGraphService } from "../../services";
import { Section, replaceBodyPageClass } from "../../../common";
import pugTemplate from "./index.component.pug";

export interface Scope {
  sections: Section[];
}

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = false;
  protected autobind = true;
  protected home = HomeService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

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
    await this.openGraph.setDefault({});
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
