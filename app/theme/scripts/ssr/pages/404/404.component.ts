import { PageComponent, ErrorObj } from "@ribajs/ssr";
import pugTemplate from "./404.component.pug";
import { replaceBodyPageClass } from "../../../common";

export interface Scope {
  title: string;
  content: string;
  params: NotFoundPageComponent["ctx"]["params"];
  error?: ErrorObj;
}

export class NotFoundPageComponent extends PageComponent {
  public static tagName = "not-found-page";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    title: "",
    content: "",
    params: {},
    error: undefined,
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.head.title = "404 Not found";
    this.scope.params = this.ctx.params;
    this.scope.title = this.ctx.status.toString();
    this.scope.content = this.ctx.errorObj?.message || "Not found";
    this.scope.error = this.ctx.errorObj;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(NotFoundPageComponent.observedAttributes);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
