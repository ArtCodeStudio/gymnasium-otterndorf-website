import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
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

  protected requiredAttributes() {
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
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionsHomeComponent.observedAttributes);
  }

  protected template() {
    // If this component has no content that was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
