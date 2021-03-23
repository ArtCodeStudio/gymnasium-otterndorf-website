import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { NavigationService } from "../../services/navigation";
import pugTemplate from "./gy-right-sidebar.component.pug";
import { Awaited } from "../../types";

export interface Scope {
  navEntry: Awaited<ReturnType<NavigationService["getNavigation"]>> | null;
}

export class GyRightSidebarComponent extends Component {
  public static tagName = "gy-right-sidebar";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    navEntry: null,
  };

  static get observedAttributes() {
    return ["nav-entry"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.scope.navEntry) {
      this.scope.navEntry = await NavigationService.getInstance().getNavigation();
      this.setAttribute("nav-entry", JSON.stringify(this.scope.navEntry));
    }

    this.debug("navEntry", this.scope.navEntry);
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyRightSidebarComponent.observedAttributes);
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
