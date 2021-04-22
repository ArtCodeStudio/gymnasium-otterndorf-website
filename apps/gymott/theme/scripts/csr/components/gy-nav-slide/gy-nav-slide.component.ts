import { Component } from "@ribajs/core";
import {
  SlideshowSlide,
  Bs5SlideshowComponent,
  Bs5SidebarComponent,
} from "@ribajs/bs5";
import { Pjax } from "@ribajs/router";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-nav-slide.component.pug";
import { NavigationLink } from "../../../common/types";
import { NavigationService } from "../../services";

export interface Slide extends Partial<SlideshowSlide> {
  entry?: NavigationLink;
}

export interface Scope {
  entry?: NavigationLink;
  slides: Slide[];
  onNavTapstart: GyNavSlideComponent["onNavTapstart"];
  onNavTap: GyNavSlideComponent["onNavTap"];
}

export class GyNavSlideComponent extends Component {
  public static tagName = "gy-nav-slide";
  public _debug = false;
  protected autobind = true;
  protected slideshow: Bs5SlideshowComponent | null = null;
  protected sidebar: Bs5SidebarComponent | null = null;
  protected pjax?: Pjax;

  scope: Scope = {
    entry: undefined,
    slides: [],
    onNavTapstart: this.onNavTapstart.bind(this),
    onNavTap: this.onNavTap.bind(this),
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

  public onNavTapstart(child: NavigationLink, currentSlide: Slide) {
    console.debug("onNavTapstart", child);
    const index = currentSlide.index;
    if (typeof index === "undefined") {
      throw new Error("index not set!");
    }
    if (!child.children.length) {
      console.warn("No children");
    }
    this.scope.slides[index + 1].entry = child;
  }

  public onNavTap(child: NavigationLink, currentSlide: Slide) {
    const index = currentSlide.index;
    if (typeof index === "undefined") {
      throw new Error("index not set!");
    }
    if (child.href) {
      this.pjax?.goTo(child.href);
      this.slideshow?.goTo(0);
      this.sidebar?.hide();
      return;
    }
    this.onNavTapstart(child, currentSlide);
    this.slideshow?.goTo(index + 1);
  }

  protected newSlide(index: number, active = false) {
    const slide: Partial<SlideshowSlide> = {
      content: "Slide " + (index + 1),
      index,
      handle: index.toString(),
      active,
      class: "slide col-12 p-0",
    };
    return slide;
  }

  // protected setSlideContent(depth: number, entry: NavigationLink) {

  // }

  protected initSlides() {
    if (!this.scope.entry) {
      throw new Error("entry not set!");
    }
    const slidesSize = NavigationService.getMaxDepth(this.scope.entry);
    console.debug("slidesSize", slidesSize);
    this.scope.slides = new Array(slidesSize);
    for (let i = 0; i < this.scope.slides.length; i++) {
      this.scope.slides[i] = this.newSlide(i);
    }
    if (slidesSize > 0) {
      this.scope.slides[0].entry = this.scope.entry;
    }
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.initSlides();
  }

  protected async afterBind() {
    // console.debug("afterBind:", this.scope.entry);
    this.pjax = Pjax.getInstance();
    await super.afterBind();
  }

  protected async afterAllBind() {
    this.slideshow = this.querySelector(Bs5SlideshowComponent.tagName);
    this.sidebar = this.querySelector(Bs5SidebarComponent.tagName);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyNavSlideComponent.observedAttributes);
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
