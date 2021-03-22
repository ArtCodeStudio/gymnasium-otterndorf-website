import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
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

  constructor() {
    super();
  }

  protected async afterBind() {
    await super.afterBind(); // This must be called on the end of this function
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionImageComponent.observedAttributes);
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
