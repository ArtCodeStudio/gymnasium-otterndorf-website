import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./media-center.component.pug";
import { MediaCenterService } from "../../services";
import {
  StrapiGqlMediaCenterFragmentFragment,
  StrapiImageFormatType,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  title: string;
  params: MediaCenterPageComponent["ctx"]["params"];
  movies: StrapiGqlMediaCenterFragmentFragment["movies"];
  thumbFormat: StrapiImageFormatType;
  fullFormat: StrapiImageFormatType;
}

export class MediaCenterPageComponent extends PageComponent {
  public static tagName = "media-center-page";
  public _debug = false;
  protected autobind = true;

  protected mediaCenter = MediaCenterService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    params: {},
    movies: [],
    thumbFormat: "medium",
    fullFormat: "large",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(MediaCenterPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = this.ctx.params.slug + " MediaCenter";
    try {
      const mediaCenter = await this.mediaCenter.get(this.ctx.params.slug);
      console.debug("mediaCenter", mediaCenter);

      if (mediaCenter) {
        if (mediaCenter.title) {
          this.scope.title = mediaCenter.title;
        }
        if (mediaCenter.movies) {
          this.scope.movies = mediaCenter.movies;
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
