import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-blackboard-slideshow.component.pug";
import { SectionBlackboardSlideshow } from "../../../common/types";

export interface Scope {
  section?: SectionBlackboardSlideshow | null;
}

export class GySectionBlackboardSlideshowComponent extends Component {
  public static tagName = "gy-section-blackboard-slideshow";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor() {
    super();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionBlackboardSlideshowComponent.observedAttributes);
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
