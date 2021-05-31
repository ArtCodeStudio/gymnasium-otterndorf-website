import { Component } from "@ribajs/core";
import { Vector2d } from "../../../common";
import pugTemplate from "./gy-blackboard.component.pug";

export interface GyBlackboardComponentScope {
  backgroundImage?: string | undefined;
  selectChalk: GyBlackboardComponent["selectChalk"];
  selectSponge: GyBlackboardComponent["selectSponge"];
  selectNone: GyBlackboardComponent["selectNone"];
}

type GyBlackboardDrawingTool =
  | GyBlackboardComponent["_chalk"]
  | GyBlackboardComponent["_sponge"];

export class GyBlackboardComponent extends Component {
  public static tagName = "gy-blackboard";
  public _debug = false;
  protected autobind = true;

  private _canvas: HTMLCanvasElement | null = null;
  private _ctx: CanvasRenderingContext2D | null = null;

  private _math = {
    clamp(x: number, max: number, min?: number) {
      if (typeof min !== "number" || min > max) min = 0;
      return x > max ? max : x < min ? min : x;
    },
    dist(a: Vector2d, b: Vector2d) {
      return this.length(this.diff(a, b));
    },
    diff(a: Vector2d, b: Vector2d) {
      return { x: a.x - b.x, y: a.y - b.y };
    },
    length(v: Vector2d) {
      return Math.sqrt(v.x * v.x + v.y * v.y);
    },
    getCoordinates: (e: MouseEvent | TouchEvent) => {
      if (!this._canvas) {
        return null;
      }
      const rect = this._canvas.getBoundingClientRect();
      const clientX =
        (e as MouseEvent).clientX || (e as TouchEvent).touches[0].clientX;
      const clientY =
        (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;

      // this.debug({ client: { x: clientX, y: clientY }, rect });
      return {
        x: ((clientX - rect.left) * this._canvas.width) / rect.width,
        y: ((clientY - rect.top) * this._canvas.height) / rect.height,
      };
    },
  };

  private _selectedTool: GyBlackboardDrawingTool | null = null;

  private _chalk = {
    size: 20,
    color: "rgba(210, 210, 210, 0.7)",
    inkAmount: 5,
    sep: 5,
    latestStrokeLength: 0,
    start: null as Vector2d | null,
    end: null as Vector2d | null,
    cur: null as Vector2d | null,
    prev: null as Vector2d | null,
    math: this._math,
    onMouseDown(event: MouseEvent | TouchEvent) {
      this.start = this.prev = this.cur = this.math.getCoordinates(event);
    },
    onMouseUp(event: MouseEvent | TouchEvent) {
      this.end = this.math.getCoordinates(event);
      this.start = this.prev = this.cur = null;
    },
    onMouseMove(event: MouseEvent | TouchEvent) {
      if (!this.start) {
        return;
      }
      this.prev = this.cur;
      this.cur = this.math.getCoordinates(event);

      if (!this.cur) {
        console.error(new Error("cur vector is falsy!"));
        return;
      }

      if (!this.prev) {
        this.prev = this.cur;
      }
      this.latestStrokeLength = this.math.length({
        x: this.cur.x - this.prev.x,
        y: this.cur.y - this.prev.y,
      });
      this.draw();
    },
    getCanvas: () => this._canvas,
    draw() {
      const canvas = this.getCanvas();

      if (!canvas) {
        console.error(new Error("canvas is falsy!"));
        return;
      }

      if (!this.cur) {
        console.error(new Error("cur vector is falsy!"));
        return;
      }

      if (!this.prev) {
        console.error(new Error("prev vector is falsy!"));
        return;
      }

      const ctx = canvas.getContext("2d");

      if (!ctx) {
        console.error(new Error("ctx is falsy!"));
        return;
      }

      const v = this.math.diff(this.cur, this.prev);
      const vlen = this.math.length(v);
      const s = Math.ceil(this.size / 2);
      const stepNum = Math.floor(vlen / s) + 1;
      v.x *= s / vlen;
      v.y *= s / vlen;

      const dotSize =
        this.sep *
        this.math.clamp((this.inkAmount / this.latestStrokeLength) * 3, 1, 0.5);
      const dotNum = Math.ceil(this.size * this.sep);

      const range = this.size / 2;

      ctx.save();
      ctx.fillStyle = this.color;
      ctx.beginPath();

      for (let i = 0; i < dotNum; i++) {
        for (let j = 0; j < stepNum; j++) {
          const p = { x: this.prev.x + v.x * j, y: this.prev.y + v.y * j };
          const r = Math.random() * range;
          const c = Math.random() * Math.PI * 2;
          const w = (Math.random() * dotSize + dotSize) / 2;
          const h = (Math.random() * dotSize + dotSize) / 2;
          const x = p.x + r * Math.sin(c) - w / 2;
          const y = p.y + r * Math.cos(c) - h / 2;
          ctx.rect(x, y, w, h);
        }
      }

      ctx.fill();
      ctx.restore();
    },
  };

  // TODO: make a real sponge, based on the FabricCanvas ink brush
  private _sponge = {
    ...this._chalk,
    color: "#4e4e4e",
    size: 80,
    inkAmount: 15,
    sep: 15,
  };

  private _selectChalk() {
    this.debug("chalk");
    this._selectedTool = this._chalk;
    this.classList.add("chalk-selected");
    this.classList.remove("sponge-selected");
  }

  public selectChalk = this._selectChalk.bind(this);

  private _selectSponge() {
    this.debug("sponge");
    // TODO
    this._selectedTool = this._sponge;
    this.classList.remove("chalk-selected");
    this.classList.add("sponge-selected");
  }

  public selectSponge = this._selectSponge.bind(this);

  private _selectNone() {
    this.debug("none");
    this.classList.remove("chalk-selected");
    this.classList.remove("sponge-selected");
  }

  public selectNone = this._selectNone.bind(this);

  scope: GyBlackboardComponentScope = {
    selectChalk: this.selectChalk,
    selectSponge: this.selectSponge,
    selectNone: this.selectNone,
  };

  static get observedAttributes(): string[] {
    return ["background-image"];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    this.debug("Before bind", JSON.stringify(this.scope, null, 2));
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
    this.debug("_math", this._math);
  }

  protected initCanvas() {
    this._canvas = this.querySelector("canvas");

    if (!this._canvas) {
      console.error(new Error("canvas is falsy!"));
      return;
    }

    this._ctx = this._canvas.getContext("2d");

    if (!this._ctx) {
      console.error(new Error("ctx is falsy!"));
      return;
    }

    this._ctx.fillStyle = "#4e4e4e";
    this._ctx.fillRect(0, 0, this._canvas.width, this._canvas.height);
    if (this.scope.backgroundImage) {
      const image = new Image();
      image.src = this.scope.backgroundImage;
      image.addEventListener("load", () => {
        if (!this._canvas) {
          console.error(new Error("canvas is falsy!"));
          return;
        }
        this._ctx?.drawImage(
          image,
          (this._canvas.width - image.width) / 2,
          (this._canvas.height - image.height) / 2
        );
      });
    }
  }

  protected _onMouseDown(event: MouseEvent | TouchEvent) {
    if (this._selectedTool) {
      this._selectedTool.onMouseDown(event);
    }
  }
  protected onMouseDown = this._onMouseDown.bind(this);

  protected _onMouseUp(event: MouseEvent | TouchEvent) {
    if (this._selectedTool) {
      this._selectedTool.onMouseUp(event);
    }
  }
  protected onMouseUp = this._onMouseUp.bind(this);

  protected _onMouseMove(event: MouseEvent | TouchEvent) {
    if (this._selectedTool) {
      this._selectedTool.onMouseMove(event);
    }
  }
  protected onMouseMove = this._onMouseMove.bind(this);

  protected addEventListeners() {
    this.addEventListener("mousedown", this.onMouseDown);
    this.addEventListener("touchstart", this.onMouseDown);

    this.addEventListener("mouseup", this.onMouseUp);
    this.addEventListener("touchend", this.onMouseUp);

    this.addEventListener("mousemove", this.onMouseMove);
    this.addEventListener("touchmove", this.onMouseMove);
  }

  protected removeEventListeners() {
    this.removeEventListener("mousedown", this.onMouseDown);
    this.removeEventListener("touchstart", this.onMouseDown);

    this.removeEventListener("mouseup", this.onMouseUp);
    this.removeEventListener("touchend", this.onMouseUp);

    this.removeEventListener("mousemove", this.onMouseMove);
    this.removeEventListener("touchmove", this.onMouseMove);
  }

  protected async connectedCallback() {
    super.connectedCallback();
    await this.init(GyBlackboardComponent.observedAttributes);
    this.initCanvas();
    this.addEventListeners();
  }

  protected disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
