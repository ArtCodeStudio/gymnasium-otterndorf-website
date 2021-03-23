import { Component } from "@ribajs/core";
import { NavigationService } from "../../services/navigation";

export interface Link {
  name: string;
  link: string;
}

export interface Scope {
  type: string;
  items: Link[];
}

export class GyLinkListComponent extends Component {
  public static tagName = "gy-link-list";
  public _debug = false;
  protected autobind = true;

  protected NavigationService = NavigationService.getInstance();

  scope: Scope = {
    type: "toolbar",
    items: [],
  };

  static get observedAttributes() {
    return ["type"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    await super.beforeBind();
    if (this.scope.type === "toolbar") {
      try {
        const toolbar = await this.NavigationService.get();
        // console.log("toolbar", toolbar);
        if (toolbar) {
          if (toolbar?.items) {
            this.scope.items = toolbar.items;
          }
        }
      } catch (error) {
        console.error(error);
        throw error;
      }
    } else {
      console.warn("Unknown gy-link-list type: " + this.scope.type);
    }
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyLinkListComponent.observedAttributes);
  }

  protected template() {
    return null;
  }
}
