import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { justDigits } from "@ribajs/utils/src/type";
import pugTemplate from "./gy-navbar.component.pug";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";
import { throttle } from "@ribajs/utils/src/control";

// eslint-disable-next-line @typescript-eslint/no-empty-interface
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
   * Used to partially hide the navigation on user scrolling
   *
   * @readonly
   * @type {number}
   * @memberof GyNavbarComponent
   */
  get marginTop(): number {
    return justDigits(this.style.marginTop || 0);
  }

  get visibleHeight(): number {
    const navbar = this.firstChild as HTMLElement | null;
    const height = Math.max(navbar?.offsetHeight || 0, this.offsetHeight);
    return height + this.marginTop;
  }

  /**
   * Set style of other elements which are depending on the navbar style
   */
  protected setDependentStyles() {
    const leftSidebar = document.getElementById("left-sidebar");
    const rightSidebar = document.getElementById("right-sidebar");
    const searchResults = Array.from(
      document.querySelectorAll<GySearchResultComponent>("gy-search-result")
    );
    const body = document.body;

    // -1 to prevent flashing on hight dpi screens
    const height = this.visibleHeight - 1;

    this.debug("setDependentStyles navbarHeight", height);

    if (leftSidebar) {
      leftSidebar.style.marginTop = height + "px";
    }

    if (rightSidebar) {
      rightSidebar.style.marginTop = height + "px";
    }

    if (searchResults) {
      for (const searchResult of searchResults) {
        searchResult.style.top = height + "px";
        searchResult.style.maxHeight = `calc(100vh - ${height}px)`;
      }
    }

    body.style.marginTop = height + "px";
  }

  /**
   * Internal "unthrottled" version of `onResize`.
   */
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
    this.removeEventListeners();
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
