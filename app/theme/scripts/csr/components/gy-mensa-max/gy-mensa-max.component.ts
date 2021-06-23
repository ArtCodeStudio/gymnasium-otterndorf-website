import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { MensaMaxService } from "../../services";

import pugTemplate from "./gy-mensa-max.component.pug";

export interface Scope {
  p?: string;
  e?: string;
  html: string;
  url: string;
}

export class GyMensaMaxComponent extends Component {
  public static tagName = "gy-mensa-max";
  public _debug = false;
  protected autobind = true;

  protected mensaMax = MensaMaxService.getInstance();

  scope: Scope = {
    html: "",
    url: "",
  };

  static get observedAttributes(): string[] {
    return ["p", "e"];
  }

  protected requiredAttributes() {
    return ["p", "e"];
  }

  constructor() {
    super();
  }

  protected async getMensaMax() {
    console.debug("getMensaMax", this.scope);
    if (this.scope.e && this.scope.p) {
      try {
        const result = await this.mensaMax.get(this.scope.p, this.scope.e);
        console.debug("getMensaMax result", result);
        this.scope.url = result.url;
        this.scope.html = result.html;
      } catch (error) {
        console.error(error);
        this.scope.html = "<p> Can't get MensaMax Data!</p>";
      }
    }
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await this.getMensaMax();
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyMensaMaxComponent.observedAttributes);
  }

  protected template() {
    // If this component has no content that was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
