import { Component } from "@ribajs/core";
import { SlideItem, ContentSliderComponent } from "@ribajs/content-slider";
import { StrapiGqlComponentMediaCenterMovieFragmentFragment } from "../../../common/types";

export interface MediaCenterSlideItem extends SlideItem {
  data: StrapiGqlComponentMediaCenterMovieFragmentFragment["movie"];
}

export interface Scope {
  currentItem?: MediaCenterSlideItem;
  currentVideoSrc?: string;
  play: MediaCenterPageComponent["play"];
}

export class MediaCenterPageComponent extends Component {
  public static tagName = "media-center-page";
  public _debug = false;
  protected autobind = true;
  public contentSlider: ContentSliderComponent | null = null;

  scope: Scope = {
    currentItem: undefined,
    currentVideoSrc: undefined,
    play: this.play.bind(this),
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
  }

  public play(item: MediaCenterSlideItem) {
    console.debug("play", item.data?.url, this.scope.currentItem);
  }

  protected onGoTo(data: {
    oldActiveItemEl: HTMLElement;
    newActiveItemEl: HTMLElement;
    item: MediaCenterSlideItem;
  }) {
    console.debug("onGoTo", data);
    this.scope.currentItem = data.item;
    this.scope.currentVideoSrc = this.scope.currentItem.data?.url;
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
      this.scope.currentVideoSrc = this.scope.currentItem.data?.url;
    }
    await super.afterBind();
  }

  protected template() {
    return null;
  }
}
