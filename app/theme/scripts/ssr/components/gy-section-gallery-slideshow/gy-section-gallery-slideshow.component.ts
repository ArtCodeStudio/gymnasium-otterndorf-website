import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-gallery-slideshow.component.pug";
import { SectionGallerySlideshow } from "../../../common/types";
import { GalleryService, SlideshowService } from "../../services";

export interface Scope {
  section?: SectionGallerySlideshow | null;
  textColor: string;
  getButtonColorClass: GySectionGallerySlideshowComponent["getButtonColorClass"];
}

export class GySectionGallerySlideshowComponent extends Component {
  public static tagName = "gy-section-gallery-slideshow";
  public static gallery = GalleryService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    textColor: "transparent",
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

  public getButtonColorClass(color?: string, outline = true) {
    color = color || this.scope.textColor;
    if (outline) {
      return `btn-outline-` + color;
    }
    return `btn-` + color;
  }

  protected setStyle() {
    if (!this.scope.section?.gallery) {
      console.warn("Gallery is required!");
      return;
    }
    const { classes, textColor } = SlideshowService.getStyle(
      this.scope.section.gallery
    );
    this.scope.textColor = textColor;
    this.classList.add(...classes.split(" "));
  }

  protected async beforeBind() {
    this.setStyle();
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionGallerySlideshowComponent.observedAttributes);
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
