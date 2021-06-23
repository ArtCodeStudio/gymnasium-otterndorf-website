import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-mensa-max.component.pug";
import { SectionMensaMax } from "../../../common/types";

export interface Scope {
  section?: SectionMensaMax;
  html: string;
}

export class GySectionMensaMaxComponent extends Component {
  public static tagName = "gy-section-mensa-max";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
    html: "",
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    if (!this.scope.section?.p || !this.scope.section?.e) {
      this.throw(new Error("section.p and section.e must be defined!"));
      return;
    }
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionMensaMaxComponent.observedAttributes);
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
