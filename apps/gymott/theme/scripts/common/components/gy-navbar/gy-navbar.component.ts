import { Component, LifecycleService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { justDigits } from "@ribajs/utils/src/type";
import pugTemplate from "./gy-navbar.component.pug";
import { GySearchResultComponent } from "../gy-search-result/gy-search-result.component";
import { throttle } from "@ribajs/utils/src/control";
import { ScrollEventsService } from "@ribajs/extras";

export interface Scope {
  show: GyNavbarComponent["show"];
  hide: GyNavbarComponent["hide"];
}

export class GyNavbarComponent extends Component {
  public static tagName = "gy-navbar";
  public _debug = false;
  protected autobind = true;
  protected lifecycle = LifecycleService.getInstance();
  protected contentScroll = new ScrollEventsService(window);

  scope: Scope = {
    show: this.show,
    hide: this.hide,
  };

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

  /**
   * Set style of other elements which are depending on the navbar style
   */
  protected setDependentStyles() {
    const searchResults = Array.from(
      document.querySelectorAll<GySearchResultComponent>("gy-search-result")
    );
    const body = document.body;

    // -1 to prevent flashing on hight dpi screens

    if (searchResults) {
      for (const searchResult of searchResults) {
        searchResult.style.top = this.visibleHeight - 1 + "px";
        searchResult.style.maxHeight = `calc(100vh - ${
          this.visibleHeight - 1
        }px)`;
      }
    }

    body.style.marginTop = this.height + "px";
  }

  /**
   * Internal "unthrottled" version of `onResize`.
   */
  protected _onResize() {
    this.setDependentStyles();
  }

  protected onResize = throttle(this._onResize.bind(this));

  protected _onScrollUp(event: CustomEvent) {
    console.debug("on scrollup", event.detail);
    this.show();
  }
  protected onScrollUp = this._onScrollUp.bind(this);

  protected _onScrollDown(event: CustomEvent) {
    console.debug("on scrolldown", event.detail);
    this.hide();
  }
  protected onScrollDown = this._onScrollDown.bind(this);

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
    window.addEventListener("scrollup", this.onScrollUp);
    window.addEventListener("scrolldown", this.onScrollDown);
  }

  protected removeEventListeners() {
    this.lifecycle.events.off(
      "ComponentLifecycle:allBound",
      this.onAllComponentsBound,
      this
    );
    window.removeEventListener("resize", this.onResize);
    window.removeEventListener("scrollup", this.onScrollUp);
    window.removeEventListener("scrolldown", this.onScrollDown);
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
