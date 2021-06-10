import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-page-header.component.pug";
import { PageHeader } from "../../../common/types";

export interface Scope {
  header: PageHeader | Record<string, never>;
  showDate: boolean;
}

export class GyPageHeaderComponent extends Component {
  public static tagName = "gy-page-header";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    header: {},
    showDate: true,
  };

  static get observedAttributes(): string[] {
    return ["header", "show-date"];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPageHeaderComponent.observedAttributes);
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
