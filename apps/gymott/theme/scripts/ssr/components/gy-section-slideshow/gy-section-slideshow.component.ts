import { Component } from "@ribajs/core";
import pugTemplate from "./gy-section-slideshow.component.pug";

export interface Scope {
  section?: any;
}

export class GySectionSlideshowComponent extends Component {
  public static tagName = "gy-section-slideshow";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
  };

  static get observedAttributes() {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor(element?: HTMLElement) {
    super(element);
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionSlideshowComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
