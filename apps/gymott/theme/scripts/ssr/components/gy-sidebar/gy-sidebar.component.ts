import { Component } from "@ribajs/core";
import pugTemplate from "./gy-sidebar.component.pug";

export interface Link {
  name: string;
  link: string;
}

export interface Scope {}

export class GySidebarComponent extends Component {
  public static tagName = "gy-sidebar";
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
    this.init(GySidebarComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
