/* eslint-disable @typescript-eslint/no-non-null-assertion */
import { Component } from "@ribajs/core";
import pugTemplate from "./gy-blackboard.component.pug";

interface Scope {
  backgroundImage?: string | undefined;
  selectChalk: GyBlackboardComponent["selectChalk"];
  selectSponge: GyBlackboardComponent["selectSponge"];
  selectNone: GyBlackboardComponent["selectNone"];
}

export type GyBlackboardComponentScope = Scope;

interface Vector2d {
  x: number;
  y: number;
}

type GyBlackboardDrawingTool =
  | GyBlackboardComponent["_chalk"]
  | GyBlackboardComponent["_sponge"];

export class GyBlackboardComponent extends Component {
  public static tagName = "gy-blackboard";
  public _debug = true;
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
    getCoordinates: (e: MouseEvent) => {
      if (this._canvas) {
        const rect = this._canvas.getBoundingClientRect();
        console.log({ client: { x: e.clientX, y: e.clientY }, rect });
        return {
          x: ((e.clientX - rect.left) * this._canvas.width) / rect.width,
          y: ((e.clientY - rect.top) * this._canvas.height) / rect.height,
        };
      } else {
        return null;
      }
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
    onMouseDown(event: MouseEvent) {
      this.start = this.prev = this.cur = this.math.getCoordinates(event);
    },
    onMouseUp(event: MouseEvent) {
      this.end = this.math.getCoordinates(event);
      this.start = this.prev = this.cur = null;
    },
    onMouseMove(event: MouseEvent) {
      if (!this.start) {
        return;
      }
      this.prev = this.cur;
      this.cur = this.math.getCoordinates(event);
      if (!this.prev) {
        this.prev = this.cur;
      }
      this.latestStrokeLength = this.math.length({
        x: this.cur!.x - this.prev!.x,
        y: this.cur!.y - this.prev!.y,
      });
      this.draw();
    },
    getCanvas: () => this._canvas,
    draw() {
      const canvas = this.getCanvas()!;
      const ctx = canvas.getContext("2d")!;

      const v = this.math.diff(this.cur!, this.prev!);
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
          const p = { x: this.prev!.x + v.x * j, y: this.prev!.y + v.y * j };
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
    console.log("chalk");
    this._selectedTool = this._chalk;
    this.classList.add("chalk-selected");
    this.classList.remove("sponge-selected");
  }

  public selectChalk = this._selectChalk.bind(this);

  private _selectSponge() {
    console.log("sponge");
    // TODO
    this._selectedTool = this._sponge;
    this.classList.remove("chalk-selected");
    this.classList.add("sponge-selected");
  }

  public selectSponge = this._selectSponge.bind(this);

  private _selectNone() {
    console.log("none");
    this.classList.remove("chalk-selected");
    this.classList.remove("sponge-selected");
  }

  public selectNone = this._selectNone.bind(this);

  scope: Scope = {
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
    console.log("Before bind", JSON.stringify(this.scope, null, 2));
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
    console.log(this._math);
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

  protected addEventListeners() {
    this.addEventListener("mousedown", (event: MouseEvent) => {
      if (this._selectedTool) {
        this._selectedTool.onMouseDown(event);
      }
    });
    this.addEventListener("mouseup", (event: MouseEvent) => {
      if (this._selectedTool) {
        this._selectedTool.onMouseUp(event);
      }
    });
    this.addEventListener("mousemove", (event: MouseEvent) => {
      if (this._selectedTool) {
        this._selectedTool.onMouseMove(event);
      }
    });
  }

  protected async connectedCallback() {
    super.connectedCallback();
    await this.init(GyBlackboardComponent.observedAttributes);
    this.initCanvas();
    this.addEventListeners();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
