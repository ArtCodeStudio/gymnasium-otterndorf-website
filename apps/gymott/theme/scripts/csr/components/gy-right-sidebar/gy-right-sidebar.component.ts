import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { NavigationService } from "../../services";
import pugTemplate from "./gy-right-sidebar.component.pug";
import { Awaited } from "../../../common/types";

export interface Scope {
  navEntry: Awaited<ReturnType<NavigationService["getMenu"]>> | null;
}

export class GyRightSidebarComponent extends Component {
  public static tagName = "gy-right-sidebar";
  public _debug = false;
  protected autobind = true;
  protected sidebar: HTMLElement | null = null;

  scope: Scope = {
    navEntry: null,
  };

  static get observedAttributes(): string[] {
    return ["nav-entry"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.scope.navEntry) {
      this.scope.navEntry = await NavigationService.getInstance().getMenu();
      // this.setAttribute("nav-entry", JSON.stringify(this.scope.navEntry));
      this.sidebar = this.querySelector("bs5-sidebar");
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
