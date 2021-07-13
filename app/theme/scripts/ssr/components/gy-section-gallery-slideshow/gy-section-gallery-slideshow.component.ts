import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-gallery-slideshow.component.pug";
import { SectionGallerySlideshow } from "../../../common/types";
import { GalleryService, ColorService } from "../../services";

export interface Scope {
  section?: SectionGallerySlideshow | null;
  textColor: string;
  getTextColorClass: GySectionGallerySlideshowComponent["getTextColorClass"];
  getBackgroundColorClass: GySectionGallerySlideshowComponent["getBackgroundColorClass"];
  getButtonColorClass: GySectionGallerySlideshowComponent["getButtonColorClass"];
}

export class GySectionGallerySlideshowComponent extends Component {
  public static tagName = "gy-section-gallery-slideshow";
  public static gallery = GalleryService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    textColor: "white",
    getTextColorClass: this.getTextColorClass,
    getBackgroundColorClass: this.getBackgroundColorClass,
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

  public getBackgroundColorClass(color?: string) {
    color = color || this.scope.textColor;
    return `bg-` + color;
  }

  public getButtonColorClass(color?: string, outline = true) {
    color = color || this.scope.textColor;
    if (outline) {
      return `btn-outline-` + color;
    }
    return `btn-` + color;
  }

  protected async beforeBind() {
    const gallery = this.scope.section?.gallery;
    if (gallery?.style) {
      this.classList.add(`slideshow-style-${gallery.style}`);
    }
    if (gallery?.color?.color) {
      this.classList.add(`bg-${gallery.color?.color}`);
      this.scope.textColor = ColorService.getAccentTextColor(
        gallery.color.color
      );
    }

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
