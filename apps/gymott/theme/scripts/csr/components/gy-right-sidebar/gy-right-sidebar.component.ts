import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils";
import {
  Bs5SidebarComponent,
  Bs5SlideshowComponent,
  TOGGLE_BUTTON,
  SlideshowState,
} from "@ribajs/bs5";
import { GyNavSlideComponent } from "../gy-nav-slide/gy-nav-slide.component";
import pugTemplate from "./gy-right-sidebar.component.pug";

export type Scope = Record<string, never>;

export class GyRightSidebarComponent extends Component {
  public static tagName = "gy-right-sidebar";
  public _debug = false;
  protected autobind = true;
  protected sidebar: Bs5SidebarComponent | null = null;
  protected navSlide: GyNavSlideComponent | null = null;
  protected slideshow: Bs5SlideshowComponent | null = null;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected setSidebarStateClassToBody(state: SlideshowState) {
    const body = document.body;
    body.classList.remove("gy-right-sidebar-hidden");
    body.classList.remove("gy-right-sidebar-overlay-right");
    body.classList.remove("gy-right-sidebar-side-right");
    body.classList.remove("gy-right-sidebar-move-right");
    body.classList.add("gy-right-sidebar-" + state);
  }

  protected _onSidebarToggle(state: SlideshowState) {
    this.slideshow?.scrollToNearestSlide();
    this.setSidebarStateClassToBody(state);
  }

  protected onSidebarToggle = this._onSidebarToggle.bind(this);

  protected async afterAllBind() {
    this.sidebar = this.querySelector<Bs5SidebarComponent>(
      Bs5SidebarComponent.tagName
    );
    this.navSlide = this.querySelector<GyNavSlideComponent>(
      GyNavSlideComponent.tagName
    );
    this.slideshow =
      this.navSlide?.querySelector<Bs5SlideshowComponent>(
        Bs5SlideshowComponent.tagName
      ) || null;
    this.sidebar?.events?.on(
      TOGGLE_BUTTON.eventNames.toggled,
      this.onSidebarToggle
    );
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
