import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { justDigits } from "@ribajs/utils/src/type";
import pugTemplate from "./gy-navbar.component.pug";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";
import { throttle } from "@ribajs/utils/src/control";
import { ScrollEventsService } from "@ribajs/extras";
import { Bs5Service, Breakpoint, Bs5SidebarComponent } from "@ribajs/bs5";

export interface Scope {
  show: GyNavbarComponent["show"];
  hide: GyNavbarComponent["hide"];
  showSidebar: GyNavbarComponent["showSidebar"];
  hideSidebar: GyNavbarComponent["hideSidebar"];
  toggleSidebar: GyNavbarComponent["toggleSidebar"];
}

export class GyNavbarComponent extends Component {
  public static tagName = "gy-navbar";
  public _debug = false;
  protected autobind = true;
  protected contentScroll = new ScrollEventsService(window);
  protected sidebar: Bs5SidebarComponent | null = null;
  protected bs5: Bs5Service;

  scope: Scope = {
    show: this.show,
    hide: this.hide,
    showSidebar: this.showSidebar,
    hideSidebar: this.hideSidebar,
    toggleSidebar: this.toggleSidebar,
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.bs5 = Bs5Service.getSingleton();
  }

  /**
   * Used to partially hide the navigation on user scrolling
   *
   * @readonly
   * @type {number}
   * @memberof GyNavbarComponent
   */
  get top(): number {
    return justDigits(this.style.top || 0);
  }

  get height(): number {
    const height = Math.max(this.offsetHeight || 0, this.offsetHeight);
    return height;
  }

  get visibleHeight(): number {
    return this.height + this.top;
  }

  get searchHeight(): number {
    const searchCol = this.querySelector<HTMLDivElement>(".col-search");
    const height = searchCol?.offsetHeight || 0;
    return height;
  }

  /**
   * Show navbar
   */
  public show() {
    this.style.top = "0";
    this._onResize();
  }

  /**
   * Hide navbar
   */
  public hide() {
    const moveUp = this.height - this.searchHeight;
    this.style.top = `-${moveUp}px`;
    this._onResize();
  }

  public hideIfViewport() {
    if (this.bs5?.isActiveBreakpointSmallerThan("md")) {
      this.hide();
    }
  }

  public showSidebar() {
    this.sidebar?.show();
  }

  public hideSidebar() {
    this.sidebar?.hide();
  }

  public toggleSidebar() {
    this.sidebar?.toggle();
  }

  /**
   * Set style of other elements which are depending on the navbar style
   */
  protected setDependentStyles() {
    const searchResults = Array.from(
      document.querySelectorAll<GySearchResultComponent>("gy-search-result")
    );
    const body = document.body;
    const hideNavbarShadowEl = document.querySelector<HTMLElement>(
      ".hide-navbar-shadow"
    );
    const sidebarToolbar = document.querySelector<HTMLElement>(
      "bs5-sidebar .toolbar-row"
    );

    if (searchResults) {
      for (const searchResult of searchResults) {
        // -1 to prevent flashing on hight dpi screens
        searchResult.style.top = this.visibleHeight - 1 + "px";
        searchResult.style.maxHeight = `calc(100vh - ${this.visibleHeight - 1
          }px)`;
      }
    }

    body.style.marginTop = this.height + "px";

    if (hideNavbarShadowEl) {
      hideNavbarShadowEl.style.height = this.visibleHeight + "px";
    }

    if (sidebarToolbar) {
      if (this.bs5.isActiveBreakpointGreaterThan("lg")) {
        sidebarToolbar.style.height = this.visibleHeight + "px";
      } else {
        sidebarToolbar.style.height = "auto";
      }
    }
  }

  /**
   * Internal "unthrottled" version of `onResize`.
   */
  protected _onResize() {
    this.setDependentStyles();
  }

  protected onResize = throttle(this._onResize.bind(this));

  protected _onScroll(event: Event | CustomEvent) {
    const scrollPosition = (event as CustomEvent).detail.currentPosition;
    // If position is top
    if (scrollPosition.y <= this.height) {
      this.show();
    }

    // If position is bottom
    if (scrollPosition.y + this.visibleHeight >= scrollPosition.maxY) {
      this.hideIfViewport();
    }
  }
  protected onScroll = this._onScroll.bind(this);

  protected _onScrollUp(/*event: CustomEvent*/) {
    this.hideIfViewport();
  }
  protected onScrollUp = this._onScrollUp.bind(this);

  protected _onScrollDown(/*event: CustomEvent*/) {
    this.show();
  }
  protected onScrollDown = this._onScrollDown.bind(this);

  // On all Components are ready
  protected async afterAllBind() {
    this.setDependentStyles();
    this.sidebar = document.querySelector(Bs5SidebarComponent.tagName);
  }

  protected onBreakpointChanges(breakpoint: Breakpoint) {
    this.debug("onBreakpointChanges", breakpoint);
  }

  protected addEventListeners() {
    window.addEventListener("resize", this.onResize, { passive: true });
    window.addEventListener("scrolling", this.onScroll);
    window.addEventListener("scrollup", this.onScrollUp);
    window.addEventListener("scrolldown", this.onScrollDown);
    this.bs5.events.on("breakpoint:changed", this.onBreakpointChanges, this);
  }

  protected removeEventListeners() {
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scrolling", this.onScroll);
    window.removeEventListener("scrollup", this.onScrollUp);
    window.removeEventListener("scrolldown", this.onScrollDown);
    this.bs5.events.off("breakpoint:changed", this.onBreakpointChanges, this);
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
