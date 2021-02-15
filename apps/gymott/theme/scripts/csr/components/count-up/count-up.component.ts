import { Component } from "@ribajs/core";
import { CountUp } from "countup.js";
import { isInViewport } from "@ribajs/utils/src/dom";

export interface Scope {
  target: number;
}

export class CountUpComponent extends Component {
  public static tagName = "count-up";
  public _debug = false;
  protected autobind = true;

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

  protected async afterBind() {
    await super.afterBind();
    const countUp = new CountUp(this, this.scope.target);
    const listener = () => {
      if (isInViewport(this)) {
        countUp.start();
        window.removeEventListener("scroll", listener);
      }
    };
    window.addEventListener("scroll", listener);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(CountUpComponent.observedAttributes);
  }

  protected template() {
    return null;
  }
}
