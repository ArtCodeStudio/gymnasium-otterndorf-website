import { PageComponent } from "@ribajs/ssr";
import { GyHomeService } from "../../services";
import { Section } from "../../../common/types";
import pugTemplate from "./index.component.pug";

export interface Scope {
  sections: Section[];
}

export class IndexPageComponent extends PageComponent {
  public static tagName = "index-page";
  public _debug = false;
  protected autobind = true;
  protected homeService: GyHomeService = GyHomeService.getInstance();

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
    this.init(IndexPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    try {
      this.scope.sections = await this.homeService.getSections();
    } catch (error) {
      this.throw(error);
    }

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(/*this.scope*/ {});
  }
}
