import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-blog-slideshow.component.pug";
import { SectionBlogSlideshow } from "../../../common/types";
import { BlogService, SlideshowService } from "../../services";

export interface Scope {
  section?: SectionBlogSlideshow | null;
  preferImage: boolean;
  textColor: string;
  getTextColorClass: GySectionBlogSlideshowComponent["getTextColorClass"];
  getButtonColorClass: GySectionBlogSlideshowComponent["getButtonColorClass"];
}

export class GySectionBlogSlideshowComponent extends Component {
  public static tagName = "gy-section-blog-slideshow";
  public static blog = BlogService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    preferImage: false,
    textColor: "transparent",
    getTextColorClass: this.getTextColorClass,
    getButtonColorClass: this.getButtonColorClass,
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

  public getTextColorClass(color?: string) {
    color = color || this.scope.textColor;
    return `text-` + color;
  }

  public getButtonColorClass(color?: string, outline = true) {
    color = color || this.scope.textColor;
    if (outline) {
      return `btn-outline-` + color;
    }
    return `btn-` + color;
  }

  protected setStyle() {
    if (!this.scope.section) {
      this.debug("Section is required!", this.scope.section);
      return;
    }
    const { classes, preferImage, textColor } = SlideshowService.getStyle(
      this.scope.section
    );
    if (preferImage) {
      this.scope.preferImage = preferImage;
    }
    this.scope.textColor = textColor;
    this.classList.add(...classes.split(" "));
  }

  protected async beforeBind() {
    this.setStyle();
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
