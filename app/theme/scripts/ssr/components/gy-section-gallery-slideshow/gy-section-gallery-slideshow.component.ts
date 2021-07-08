import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-gallery-slideshow.component.pug";
import { SectionGallerySlideshow } from "../../../common/types";
import { GalleryService } from "../../services";

export interface Scope {
  section?: SectionGallerySlideshow | null;
}

export class GySectionGallerySlideshowComponent extends Component {
  public static tagName = "gy-section-gallery-slideshow";
  public static gallery = GalleryService.getInstance();
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

  protected async beforeBind() {
    const gallery = this.scope.section?.gallery;
    if (gallery?.style) {
      this.classList.add(`slideshow-style-${gallery.style}`);
    }
    if (gallery?.color?.color) {
      this.classList.add(`bg-${gallery.color?.color}`);
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
