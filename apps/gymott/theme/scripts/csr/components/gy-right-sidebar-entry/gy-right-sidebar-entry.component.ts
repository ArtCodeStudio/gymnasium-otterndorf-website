import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-right-sidebar-entry.component.pug";
import { NavigationLink } from "../../../common/types";

export interface Scope {
  entry?: NavigationLink;
}

export class GyRightSidebarEntryComponent extends Component {
  public static tagName = "gy-right-sidebar-entry";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    entry: undefined,
  };

  static get observedAttributes(): string[] {
    return ["entry"];
  }

  protected requiredAttributes() {
    return ["entry"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    // console.debug("afterBind:", this.scope.entry);
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyRightSidebarEntryComponent.observedAttributes);
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
