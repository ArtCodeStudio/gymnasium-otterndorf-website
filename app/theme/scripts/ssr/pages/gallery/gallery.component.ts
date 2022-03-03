import { PageComponent } from "@ribajs/ssr";
import { StrapiImageFormatType } from "@ribajs/strapi";
import pugTemplate from "./gallery.component.pug";
import { GalleryService, OpenGraphService } from "../../services";
import {
  StrapiGqlGalleryFragmentFragment,
  replaceBodyPageClass,
} from "../../../common";

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
  protected openGraph = OpenGraphService.getInstance();

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
    replaceBodyPageClass(this);
    this.init(GalleryPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async setGallery() {
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    const gallery = await this.gallery.get(this.ctx.params.slug);
    if (gallery) {
      if (gallery.title) {
        this.scope.title = gallery.title;
        this.head.title = this.scope.title;
      }
      if (gallery.images) {
        this.scope.images = gallery.images;
      }
    }
    return gallery;
  }

  protected setStyle(gallery: StrapiGqlGalleryFragmentFragment) {
    if (gallery.style) {
      this.classList.add(`gallery-style-${gallery.style}`);
    }
    if (gallery.color?.color) {
      this.classList.add(`bg-${gallery.color?.color}`);
    }
  }

  protected async setOpenGraph(gallery: StrapiGqlGalleryFragmentFragment) {
    return await this.openGraph.setGallery(
      {
        title: this.head.title,
      },
      gallery
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    this.head.title = this.ctx.params.slug + " Gallery";
    const gallery = await this.setGallery();
    if (gallery) {
      this.setStyle(gallery);
      await this.setOpenGraph(gallery);
    }
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
