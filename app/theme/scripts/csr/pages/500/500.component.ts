import { Component } from "@ribajs/core";
import { replaceBodyPageClass } from "../../../common";

export type Scope = Record<string, never>;

export class ErrorPageComponent extends Component {
  public static tagName = "error-page";
  public _debug = false;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(ErrorPageComponent.observedAttributes);
  }

  protected template() {
    // See apps/gymott/theme/scripts/ssr/pages/500/500.component.pug
    return null;
  }
}
