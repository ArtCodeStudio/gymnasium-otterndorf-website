import { Component } from "@ribajs/core";

import template from "./gy-home.component.html";
import { GyHomeService } from "../../services/home";

export interface Scope {
  sections?: any;
}

export class GyHomeComponent extends Component {
  public static tagName = "gy-home";
  public _debug = false;
  protected autobind = true;
  protected homeService: GyHomeService = GyHomeService.getInstance();

  scope: Scope = {};

  static get observedAttributes() {
    return [];
  }

  constructor(element?: HTMLElement) {
    super(element);
  }

  protected async afterBind() {
    this.scope.sections = await this.homeService.getHomeSections();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyHomeComponent.observedAttributes);
  }

  protected template() {
    return template;
  }
}
