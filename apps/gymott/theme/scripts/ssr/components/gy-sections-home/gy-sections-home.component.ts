import { Component } from "@ribajs/core";
import pugTemplate from "./gy-sections-home.component.pug";
import { GyHomeService } from "../../services/home";

export interface Scope {
  sections?: any;
}

export class GySectionsHomeComponent extends Component {
  public static tagName = "gy-sections-home";
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
    await super.afterBind();
    this.scope.sections = await this.homeService.getHomeSections();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionsHomeComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
