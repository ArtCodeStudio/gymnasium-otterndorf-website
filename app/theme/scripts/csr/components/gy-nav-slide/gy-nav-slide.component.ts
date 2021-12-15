import { Component } from "@ribajs/core";
import { SlideshowSlide, Bs5SlideshowComponent } from "@ribajs/bs5";
import { Pjax } from "@ribajs/router";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-nav-slide.component.pug";
import { NavigationLink } from "../../../common/types";
import { NavigationService } from "../../services";
import { EventDispatcher } from "@ribajs/events";

export interface Slide extends Partial<SlideshowSlide> {
  entry?: NavigationLink;
  caption: string;
}

export interface Scope {
  entry?: NavigationLink;
  slides: Slide[];
  onNavTapstart: GyNavSlideComponent["onNavTapstart"];
  onNavTap: GyNavSlideComponent["onNavTap"];
  onBackTap: GyNavSlideComponent["onBackTap"];
}

export class GyNavSlideComponent extends Component {
  public static tagName = "gy-nav-slide";
  public _debug = false;
  protected autobind = true;
  protected slideshow: Bs5SlideshowComponent | null = null;
  protected pjax?: Pjax;
  protected routerEvents = new EventDispatcher("main");

  scope: Scope = {
    entry: undefined,
    slides: [],
    onNavTapstart: this.onNavTapstart.bind(this),
    onNavTap: this.onNavTap.bind(this),
    onBackTap: this.onBackTap.bind(this),
  };

  static get observedAttributes(): string[] {
    return ["entry"];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  public onNavTapstart(child: NavigationLink, currentSlide: Slide) {
    const index = currentSlide.index;
    if (typeof index === "undefined") {
      throw new Error("index not set!");
    }
    if (!child.children.length) {
      this.debug("No children");
    }
    if (!this.scope.slides[index + 1]) {
      console.warn("No next slide!");
      return;
    }
    this.scope.slides[index + 1].caption = child?.label || "";
    this.scope.slides[index + 1].entry = child;
  }

  public onNavTap(child: NavigationLink, currentSlide: Slide, event: Event) {
    const index = currentSlide.index;
    if (typeof index === "undefined") {
      throw new Error("index not set!");
    }
    event.stopPropagation();
    if (!child.children.length && child.href) {
      this.pjax?.goTo(child.href);
      return;
    }
    this.onNavTapstart(child, currentSlide);
    this.slideshow?.goTo(index + 1);
  }

  public onBackTap(currentSlide: Slide) {
    const index = currentSlide.index;
    if (typeof index === "undefined") {
      throw new Error("index not set!");
    }
    this.slideshow?.goTo(index - 1);
  }

  protected newSlide(index: number) {
    const slide: Slide = {
      content: "Slide " + (index + 1),
      caption: "",
      index,
      handle: index.toString(),
      active: false,
    };
    return slide;
  }

  protected initSlides() {
    if (!this.scope.entry) {
      throw new Error("entry not set!");
    }
    const slidesSize = NavigationService.getMaxDepth(this.scope.entry);
    this.scope.slides = new Array(slidesSize);
    for (let i = 0; i < this.scope.slides.length; i++) {
      this.scope.slides[i] = this.newSlide(i);
      if (i === 0) {
        this.scope.slides[i].entry = this.scope.entry;
      } else {
        this.scope.slides[i].caption = "Zurück";
      }
    }
  }

  protected onPageChanges() {
    setTimeout(() => {
      this.slideshow?.goTo(0);
    }, 100);
  }

  protected initRouterEventDispatcher() {
    this.routerEvents.on("newPageReady", this.onPageChanges, this);
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.scope.entry) {
      this.scope.entry = await NavigationService.getInstance().getMenu();
    }
    this.initSlides();
    this.initRouterEventDispatcher();
  }

  protected async afterBind() {
    if (!window.ssr) {
      this.pjax = Pjax.getInstance();
    }
    await super.afterBind();
  }

  protected async afterAllBind() {
    await super.afterAllBind();
    if (!this.slideshow) {
      this.slideshow = this.querySelector(Bs5SlideshowComponent.tagName);

      if (!this.slideshow) {
        console.warn("Slideshow not found!");
      }
    }
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
