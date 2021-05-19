import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./gallery.component.pug";
import { GalleryService } from "../../services";
import {
  StrapiGqlGalleryFragmentFragment,
  StrapiImageFormatType,
} from "../../../common/types";

export interface Scope {
  title: string;
  params: GalleryPageComponent["ctx"]["params"];
  images: StrapiGqlGalleryFragmentFragment["images"];
  thumbFormat: StrapiImageFormatType;
  fullFormat: StrapiImageFormatType;
  defaultColumnClasses: string;
  leadColumnClasses: string;
  getColumnClass: GalleryPageComponent["getColumnClass"];
}

export class GalleryPageComponent extends PageComponent {
  public static tagName = "gallery-page";
  public _debug = false;
  protected autobind = true;

  protected gallery = GalleryService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    params: {},
    images: [],
    thumbFormat: "small",
    fullFormat: "large",
    defaultColumnClasses: "col-12 col-md-6 col-lg-3 col-xxl-2",
    leadColumnClasses: "col-12 col-lg-6 col-xxl-4",
    getColumnClass: this.getColumnClass,
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  public getColumnClass(index: number) {
    if (index <= 1) {
      return this.scope.leadColumnClasses;
    }
    return this.scope.defaultColumnClasses;
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GalleryPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = this.ctx.params.slug + " Gallery";
    try {
      const gallery = await this.gallery.get(this.ctx.params.slug);
      console.debug("gallery", gallery);

      if (gallery) {
        if (gallery.title) {
          this.scope.title = gallery.title;
        }
        if (gallery.images) {
          this.scope.images = gallery.images;
        }
      }
    } catch (error) {
      this.throw(error);
    }
    this.head.title = this.scope.title;
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
