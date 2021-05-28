/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@ribajs/core";
import { isInViewport } from "@ribajs/utils/src/dom";
import { throttle } from "@ribajs/utils/src/control";
import pugTemplate from "./gy-blackboard.component.pug";

export interface Scope {
  backgroundImage?: string | undefined;
}

export class GyBlackboardComponent extends Component {
  public static tagName = "gy-blackboard";
  public _debug = true;
  protected autobind = true;

  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return ["background-image"];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected checkViewport() {
    if (isInViewport(this)) {
      console.log("Maybe do something");
    }
  }

  protected addEventListeners() {
    window.addEventListener("scroll", this.onScroll.bind(this), {
      passive: true,
    });
    window.addEventListener("resize", this.onResize.bind(this), {
      passive: true,
    });
  }

  protected removeEventListeners() {
    window.removeEventListener("scroll", this.onScroll.bind(this));
    window.removeEventListener("resize", this.onResize.bind(this));
  }

  /**
   * Internal "unthrottled" version of `onResize`.
   */
  protected _onResize() {
    this.checkViewport();
  }

  protected onResize = throttle(this._onResize.bind(this), 500);

  /**
   * Internal "unthrottled" version of `onScroll`.
   */
  protected _onScroll() {
    this.checkViewport();
  }

  protected onScroll = throttle(this._onScroll.bind(this), 500);

  protected async beforeBind() {
    console.log("Before bind", JSON.stringify(this.scope, null, 2));
    await super.beforeBind();
  }

  protected async afterBind() {
    this.addEventListeners();
    this.checkViewport();
    await super.afterBind();
  }

  protected initCanvas() {
    this._canvas = this.querySelector("canvas");
    this._ctx = this._canvas!.getContext("2d");
    if (this._ctx) {
      this._ctx.fillStyle = "#4e4e4e";
      this._ctx.fillRect(0, 0, this._canvas!.width, this._canvas!.height);
    }
    if (this.scope.backgroundImage) {
      const image = new Image();
      image.src = this.scope.backgroundImage;
      image.addEventListener("load", () => {
        this._ctx?.drawImage(
          image,
          (this._canvas!.width - image.width) / 2,
          (this._canvas!.height - image.height) / 2
        );
      });
    }
  }

  protected async connectedCallback() {
    super.connectedCallback();
    await this.init(GyBlackboardComponent.observedAttributes);
    this.initCanvas();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
