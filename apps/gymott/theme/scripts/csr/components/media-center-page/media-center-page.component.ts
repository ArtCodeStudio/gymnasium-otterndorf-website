import { Component, VideoComponent, VideoComponentScope } from "@ribajs/core";
import { FullscreenService } from "@ribajs/extras";
import { SlideItem, ContentSliderComponent } from "@ribajs/content-slider";
import { StrapiGqlComponentMediaCenterMovieFragmentFragment } from "../../../common/types";

export interface MediaCenterSlideItem extends SlideItem {
  data: StrapiGqlComponentMediaCenterMovieFragmentFragment["movie"];
}

export interface Scope {
  currentItem?: MediaCenterSlideItem;
  currentVideoSrc: string;
  watch: boolean;
  play: MediaCenterPageComponent["play"];
  pause: MediaCenterPageComponent["pause"];
  video: VideoComponentScope | Record<string, never>;
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
    watch: false,
    play: this.play.bind(this),
    pause: this.pause.bind(this),
    video: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  public play(item: MediaCenterSlideItem) {
    console.debug("play", item.data?.url, this.scope.currentItem);
    this.scope.watch = true;
    if (!this.video) {
      this.throw(new Error("Video element not found!"));
      return;
    }

    this.video.reset();
    this.video.muted = false;
    this.video.volume = 1;
    this.video.play();
    this.fullscreen.enter();
  }

  public pause() {
    this.scope.watch = false;
    if (!this.video) {
      this.throw(new Error("Video element not found!"));
      return;
    }
    this.video.muted = true;
    this.fullscreen.exit();
  }

  protected onGoTo(data: {
    oldActiveItemEl: HTMLElement;
    newActiveItemEl: HTMLElement;
    item: MediaCenterSlideItem;
  }) {
    console.debug("onGoTo", data);
    this.scope.currentItem = data.item;
    this.scope.currentVideoSrc = this.scope.currentItem.data?.url || "";
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(MediaCenterPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
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
    if (this.video) {
      this.scope.video = this.video?.scope;
    }

    await super.afterBind();
  }

  protected template() {
    return null;
  }
}
