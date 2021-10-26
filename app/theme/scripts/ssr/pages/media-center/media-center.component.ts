import { PageComponent } from "@ribajs/ssr";
import { StrapiImageFormatType } from "@ribajs/strapi";
import pugTemplate from "./media-center.component.pug";
import { MediaCenterService, OpenGraphService } from "../../services";
import {
  StrapiGqlMediaCenterFragmentFragment,
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
  protected openGraph = OpenGraphService.getInstance();

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

  protected async setMediaCenter() {
    const mediaCenter = await this.mediaCenter.get(this.ctx.params.slug);
    if (mediaCenter) {
      if (mediaCenter.title) {
        this.scope.title = mediaCenter.title;
        this.head.title = this.scope.title;
      }
      if (mediaCenter.movies) {
        this.scope.movies = mediaCenter.movies;
      }
    }
    return mediaCenter;
  }

  protected async setOpenGraph(
    mediaCenter: StrapiGqlMediaCenterFragmentFragment
  ) {
    return await this.openGraph.setMediaCenter(
      {
        title: this.head.title,
      },
      mediaCenter
    );
  }

  protected async beforeBind() {
    const mediaCenter = await this.setMediaCenter();
    if (mediaCenter) {
      await this.setOpenGraph(mediaCenter);
    }
    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
