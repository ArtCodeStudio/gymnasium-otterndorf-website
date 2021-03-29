import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-text.component.pug";
import marked from "marked";

export interface Scope {
  section?: {
    text: string;
  };
  text: string;
}

export class GySectionTextComponent extends Component {
  public static tagName = "gy-section-text";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: {
      text: "",
    },
    text: "",
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
    if (this.scope.section?.text) {
      this.scope.text = marked(this.scope.section?.text || "");
    }
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionTextComponent.observedAttributes);
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