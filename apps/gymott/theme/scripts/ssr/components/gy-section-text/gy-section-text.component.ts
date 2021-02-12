import { Component } from "@ribajs/core";
import pugTemplate from "./gy-section-text.component.pug";

export interface Scope {
  section?: any;
}

export class GySectionTextComponent extends Component {
  public static tagName = "gy-section-text";
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

  constructor() {
    super();
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionTextComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
