import { Component } from "@ribajs/core";
import { ToolbarService } from "../../services/toolbar";

export interface Link {
  name: string;
  link: string;
}

export interface Scope {
  type: string,
  items: Link[];
}

export class LinkListComponent extends Component {
  public static tagName = "link-list";
  public _debug = false;
  protected autobind = true;

  protected toolbarService = ToolbarService.getInstance();

  scope: Scope = {
    type: 'toolbar',
    items: [
      {
        name: "Home",
        link: "/",
      },
      {
        name: "Cool",
        link: "/pages/cool",
      },
      {
        name: "Nice",
        link: "/pages/nice",
      },
      {
        name: "Different",
        link: "/pages/different",
      },
    ],
  };

  static get observedAttributes() {
    return ['type'];
  }

  constructor(element?: HTMLElement) {
    super(element);
  }

  protected async beforeBind() {
    await super.beforeBind();
    // TODO need logic to wait for this component
    // if (this.scope.type === 'toolbar') {
    //   try {
    //     const toolbar = await this.toolbarService.get();
    //     console.log("toolbar", toolbar);
    //     if (toolbar) {
    //       if (toolbar?.items) {
    //         this.scope.items = toolbar.items;
    //       }
    //     }
    //   } catch (error) {
    //     console.error(error);
    //     throw error;
    //   }
    // } else {
    //   console.warn("Unknown link-list type: " + this.scope.type);
    // }

  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(LinkListComponent.observedAttributes);
  }

  protected template() {
    return null;
  }
}
