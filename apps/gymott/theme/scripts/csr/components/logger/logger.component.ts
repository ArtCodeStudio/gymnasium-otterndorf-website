import { Component } from "@ribajs/core";

export interface Scope {
  logMe: string;
}

export class LoggerComponent extends Component {
  public static tagName = "rv-logger";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    logMe: "",
  };

  static get observedAttributes() {
    return ["log-me"];
  }

  constructor(element?: HTMLElement) {
    super(element);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(LoggerComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    console.log(this.scope.logMe);
    await super.afterBind(); // This must be called on the end of this function
  }

  protected template() {
    return null;
  }
}
