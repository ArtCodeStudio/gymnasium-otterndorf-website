import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-iframe.component.pug";
import { SectionIFrame } from "../../../common/types";

export interface Scope {
  section?: SectionIFrame;
  style: any;
}

export class GySectionIFrameComponent extends Component {
  public static tagName = "gy-section-iframe";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
    style: {},
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
    this.scope.style = {
      width: this.scope.section?.width,
      height: this.scope.section?.height,
    };
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionIFrameComponent.observedAttributes);
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
