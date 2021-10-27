import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-asset-list.component.pug";

export interface Scope {
  assets?: any[];
  title: string;
}

export class GyAssetListComponent extends Component {
  public static tagName = "gy-asset-list";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    assets: [],
    title: "Downloads",
  };

  static get observedAttributes(): string[] {
    return ["assets", "title"];
  }

  protected requiredAttributes() {
    return ["assets", "title"];
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyAssetListComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
