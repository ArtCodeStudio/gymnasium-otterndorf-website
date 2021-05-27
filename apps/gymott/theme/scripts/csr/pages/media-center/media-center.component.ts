import { Component, VideoComponent } from "@ribajs/core";
import { FullscreenService } from "@ribajs/extras";
import { SlideItem, ContentSliderComponent } from "@ribajs/content-slider";
import {
  StrapiGqlComponentMediaCenterMovieFragmentFragment,
  replaceBodyPageClass,
} from "../../../common";

export interface MediaCenterSlideItem extends SlideItem {
  data: StrapiGqlComponentMediaCenterMovieFragmentFragment["movie"];
}

export interface Scope {
  currentItem?: MediaCenterSlideItem;
  currentVideoSrc: string;
  watching: boolean;
  watch: MediaCenterPageComponent["watch"];
  backToOverview: MediaCenterPageComponent["backToOverview"];
}

export class MediaCenterPageComponent extends Component {
  public static tagName = "media-center-page";
  public _debug = false;
  protected autobind = true;
  protected fullscreen = FullscreenService.getSingleton();
  protected contentSlider: ContentSliderComponent | null = null;
  protected video: VideoComponent | null = null;

  scope: Scope = {
    currentItem: undefined,
    currentVideoSrc: "",
    watching: false,
    watch: this.watch.bind(this),
    backToOverview: this.backToOverview.bind(this),
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  public watch(item: MediaCenterSlideItem) {
    this.debug("watch", item.data?.url, this.scope.currentItem);
    this.scope.watching = true;
    if (!this.video) {
      this.throw(new Error("Video element not found!"));
      return;
    }

    this.video.reset();
    this.video.muted = false;
    // this.video.controls = true;
    this.video.volume = 1;
    this.video.play();
    this.fullscreen.enter(this);
  }

  public backToOverview() {
    this.scope.watching = false;
    if (!this.video) {
      this.throw(new Error("Video element not found!"));
      return;
    }
    this.video.muted = true;
    this.video.controls = false;
    this.fullscreen.exit();
  }

  protected onGoTo(data: {
    oldActiveItemEl: HTMLElement;
    newActiveItemEl: HTMLElement;
    item: MediaCenterSlideItem;
  }) {
    this.debug("onGoTo", data);
    this.scope.currentItem = data.item;
    this.scope.currentVideoSrc = this.scope.currentItem.data?.url || "";
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(MediaCenterPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async afterAllBind() {
    this.contentSlider = this.querySelector<ContentSliderComponent>(
      ContentSliderComponent.tagName
    );
    this.contentSlider?.events?.on("goTo", this.onGoTo, this);
    if (this.contentSlider?.scope.activeItem) {
      this.scope.currentItem = this.contentSlider?.scope
        .activeItem as MediaCenterSlideItem;
      this.scope.currentVideoSrc = this.scope.currentItem.data?.url || "";
    }

    this.video = this.querySelector<VideoComponent>(VideoComponent.tagName);

    await super.afterBind();
  }

  protected template() {
    // See apps/gymott/theme/scripts/ssr/pages/media-center/media-center.component.pug
    return null;
  }
}
