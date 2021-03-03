import { Component } from "@ribajs/core";
import pugTemplate from "./gy-navbar.component.pug";

export interface Link {
  name: string;
  link: string;
}

export interface Scope {}

export class GyNavbarComponent extends Component {
  public static tagName = "gy-navbar";
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
    this.init(GyNavbarComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
