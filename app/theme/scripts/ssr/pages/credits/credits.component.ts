import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./credits.component.pug";
import { replaceBodyPageClass } from "../../../common";

export class CreditsPageComponent extends PageComponent {
  public static tagName = "credits-page";
  public _debug = false;
  protected autobind = true;

  scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(CreditsPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = "Credits, Quellcode und API";
    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
