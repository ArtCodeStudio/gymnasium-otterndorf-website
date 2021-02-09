import { Component } from "@ribajs/core";
import pugTemplate from "./gy-section-image.component.pug";

export interface Scope {
  section?: any;
}

export class GySectionImageComponent extends Component {
  public static tagName = "gy-section-image";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
  };

  static get observedAttributes() {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor(element?: HTMLElement) {
    super(element);
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionImageComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
