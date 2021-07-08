import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-blog-slideshow.component.pug";
import { SectionBlogSlideshow } from "../../../common/types";
import { BlogService } from "../../services";

export interface Scope {
  section?: SectionBlogSlideshow | null;
  preferImage: boolean;
}

export class GySectionBlogSlideshowComponent extends Component {
  public static tagName = "gy-section-blog-slideshow";
  public static blog = BlogService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    preferImage: false,
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

  protected async beforeBind() {
    if (this.scope.section?.style) {
      this.classList.add(`slideshow-style-${this.scope.section.style}`);
      switch (this.scope.section?.style) {
        case "art":
        case "dreamy":
          this.scope.preferImage = true;
          break;
      }
    }
    if (this.scope.section?.color?.color) {
      this.classList.add(`bg-${this.scope.section.color?.color}`);
    }
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionBlogSlideshowComponent.observedAttributes);
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
