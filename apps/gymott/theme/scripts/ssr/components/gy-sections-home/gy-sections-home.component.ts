import { Component } from "@ribajs/core";
import pugTemplate from "./gy-sections-home.component.pug";

export interface Scope {
  sections?: any;
}

export class GySectionsHomeComponent extends Component {
  public static tagName = "gy-sections-home";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {};

  static get observedAttributes() {
    return ["sections"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
    //this.scope.sections = await
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionsHomeComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
