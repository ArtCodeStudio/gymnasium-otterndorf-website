/* eslint-disable @typescript-eslint/no-non-null-assertion */
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
    color: "rgba(254, 254, 254, 0.6)",
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
      const stepNum = this.math.clamp(Math.floor(vlen / s), 37, 1);
      v.x *= s / vlen;
      v.y *= s / vlen;

      const dotSize =
        this.sep *
        this.math.clamp(
          (this.inkAmount / this.latestStrokeLength) * 2.25,
          0.72,
          0.5
        );
      const dotNum = Math.ceil(this.size * this.sep);

      const range = this.size / 2;

      ctx.save();
      ctx.fillStyle = this.color;
      // ctx.globalCompositeOperation = "lighter";
      ctx.strokeStyle = "rgba(230, 230, 230, 0.25)";
      ctx.beginPath();
      for (let i = 0; i < dotNum; i++) {
        let r = Math.random() * range;
        let c = Math.random() * Math.PI * 2;
        let w = (Math.random() * dotSize + dotSize) / 2;
        let h = (Math.random() * dotSize + dotSize) / 2;
        for (let j = 1; j <= stepNum; j++) {
          if (j % 3 === 0) {
            r = Math.random() * range;
            c = Math.random() * Math.PI * 2;
            w = (Math.random() * dotSize + dotSize) / 2;
            h = (Math.random() * dotSize + dotSize) / 2;
          }
          const p = { x: this.prev!.x + v.x * j, y: this.prev!.y + v.y * j };
          const x = p.x + r * Math.sin(c) - w / 2;
          const y = p.y + r * Math.cos(c) - h / 2;
          if (Math.random() > 0.0705) {
            // ctx.fillStyle = this.color;
            //
            if (Math.random() > 0.1) {
              ctx.lineWidth = Math.min(w, h) / 2;
              const arr = [
                [
                  [
                    this.prev!.x +
                      v.x * (j - 1) +
                      2 * r * (Math.random() - 0.5),
                    this.prev!.y +
                      2 * r * (Math.random() - 0.5) +
                      v.y * (j - 1),
                  ],
                  [
                    this.prev!.x + w * Math.sin(c) + v.x * j,
                    this.prev!.y + h * Math.cos(c) + v.y * j,
                  ],
                ],
                [
                  [this.prev!.x + v.x * (j - 1), this.prev!.y + v.y * (j - 1)],
                  [
                    this.prev!.x +
                      w * Math.sin(c) +
                      v.x * j +
                      2 * r * (Math.random() - 0.5),
                    this.prev!.y +
                      h * Math.cos(c) +
                      v.y * j +
                      2 * r * (Math.random() - 0.5),
                  ],
                ],
              ];
              if (Math.random() > 0.25) {
                (ctx.moveTo as any)(...arr[0][0]);
                (ctx.lineTo as any)(...arr[0][1]);
              } else {
                (ctx.moveTo as any)(...arr[1][1]);
                (ctx.lineTo as any)(...arr[1][0]);
              }
            }
            if (Math.random() > 0.205) {
              ctx.rect(x, y, w, h);
            }
          }
          if (Math.random() > 0.44) {
            ctx.lineWidth = Math.min(w, h);
            ctx.lineCap = ctx.lineJoin = "round";
            if (Math.random() > 0.5) {
              ctx.moveTo(this.prev!.x, this.prev!.y);
              ctx.lineTo(x + w, y + h);
            } else {
              ctx.moveTo(this.prev!.x + w, this.prev!.y + h);
              ctx.lineTo(x, y);
            }
          }
        }
      }
      ctx.fill();
      ctx.stroke();
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
    strokeCount: 0 as number,
    dripCount: 0 as number,
    draww() {
      // const canvas = this.getCanvas();
      this.strokeCount++;
      this.dripCount++;
    },
    onMouseDown(event: MouseEvent | TouchEvent) {
      this.start = this.prev = this.cur = this.math.getCoordinates(event);
    },
  };

  private _selectChalk() {
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
    this._selectedTool = null;
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
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
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
