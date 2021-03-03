import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-left-sidebar.component.pug";

export interface Scope {}

export class GyLeftSidebarComponent extends Component {
  public static tagName = "gy-left-sidebar";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {};

  static get observedAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyLeftSidebarComponent.observedAttributes);
  }

  protected template() {
    // If this component has content this was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
