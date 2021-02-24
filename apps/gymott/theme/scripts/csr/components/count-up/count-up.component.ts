import { Component } from "@ribajs/core";
import { CountUp } from "countup.js";
import { isInViewport } from "@ribajs/utils/src/dom";
import { throttle, debounce } from "@ribajs/utils/src/control";

export interface Scope {
  target: number;
}

export class CountUpComponent extends Component {
  public static tagName = "count-up";
  public _debug = false;
  protected autobind = true;
  protected countUp: CountUp | null = null;

  scope: Scope = {
    target: 0,
  };

  static get observedAttributes() {
    return ["target"];
  }

  protected requiredAttributes() {
    return ["target"];
  }

  constructor() {
    super();
  }

  protected checkViewport() {
    console.debug("checkViewport");
    if (isInViewport(this)) {
      this.countUp?.start();
    }
  }

  protected addEventListeners() {
    window.addEventListener("scroll", this.onScroll.bind(this), {
      passive: true,
    });
    window.addEventListener("resize", this.onResize.bind(this), {
      passive: true,
    });
  }

  protected removeEventListeners() {
    window.removeEventListener("scroll", this.onScroll.bind(this));
    window.removeEventListener("resize", this.onResize.bind(this));
  }

  protected onResize() {
    throttle(() => {
      this.checkViewport();
    }, 500)();
  }

  protected onScroll() {
    throttle(() => {
      this.checkViewport();
    }, 500)();
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.countUp = new CountUp(this, this.scope.target);
  }

  protected async afterBind() {
    this.addEventListeners();
    this.checkViewport();

    // This must be called on the end of this function
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(CountUpComponent.observedAttributes);
  }

  protected template() {
    return null;
  }
}
