import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-right-sidebar.component.pug";

export interface Scope {}

export class GyRightSidebarComponent extends Component {
  public static tagName = "gy-right-sidebar";
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
    this.init(GyRightSidebarComponent.observedAttributes);
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
