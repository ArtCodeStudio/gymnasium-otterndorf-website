import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-navbar.component.pug";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";
import { throttle } from "@ribajs/utils/src/control";

export interface Scope {}

export class GyNavbarComponent extends Component {
  public static tagName = "gy-navbar";
  public _debug = false;
  protected autobind = true;
  protected lifecycle = LifecycleService.getInstance();

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  /**
   * Set style of other elements which are depending on the navbar style
   */
  protected setDependentStyles() {
    const navbar = this.firstChild as HTMLElement | null;
    const navbarHeight = Math.max(navbar?.offsetHeight || 0, this.offsetHeight);
    const leftSidebar = document.getElementById("left-sidebar");
    const rightSidebar = document.getElementById("right-sidebar");
    const searchResults = Array.from(
      document.querySelectorAll<GySearchResultComponent>("gy-search-result")
    );
    const body = document.body;

    this.debug("setDependentStyles navbarHeight", navbarHeight);

    if (leftSidebar) {
      leftSidebar.style.marginTop = navbarHeight - 1 + "px";
    }

    if (rightSidebar) {
      rightSidebar.style.marginTop = navbarHeight - 1 + "px";
    }

    if (searchResults) {
      for (const searchResult of searchResults) {
        searchResult.style.top = navbarHeight - 1 + "px";
        searchResult.style.maxHeight = `calc(100vh - ${navbarHeight - 1}px)`;
      }
    }

    body.style.marginTop = navbarHeight + "px";
  }

  protected _onResize() {
    this.setDependentStyles();
  }

  protected onResize = throttle(this._onResize.bind(this));

  // On all Components are ready
  protected onAllComponentsBound() {
    this.setDependentStyles();
  }

  protected addEventListeners() {
    this.lifecycle.events.on(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );
    window.addEventListener("resize", this.onResize, { passive: true });
  }

  protected removeEventListeners() {
    this.lifecycle.events.off(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );
    window.removeEventListener("resize", this.onResize);
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.addEventListeners();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyNavbarComponent.observedAttributes);
  }

  protected disconnectedCallback() {
    if (this.tabs) {
      this.tabs.forEach((tab) => {
        tab.removeEventListener("shown.bs.tab", this.onTabShownEventHandler);
      });
    }
    window.removeEventListener("resize", this.onResizeEventHandler);
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
