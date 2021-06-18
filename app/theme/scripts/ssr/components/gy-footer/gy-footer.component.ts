import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { FooterService, NavigationService } from "../../../common/services";
import pugTemplate from "./gy-footer.component.pug";
import { Awaited } from "../../../common";

export interface Scope {
  data?: Awaited<ReturnType<FooterService['get']>>;
}

export class GyFooterComponent extends Component {
  public static tagName = "gy-footer";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    data: undefined
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    const credits = NavigationService.getInstance().newItem("Credits, Quellcode und API", "url", "/credits");
    this.scope.data = await FooterService.getInstance().get();
    this.scope.data?.links.unshift(credits);
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyFooterComponent.observedAttributes);
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
