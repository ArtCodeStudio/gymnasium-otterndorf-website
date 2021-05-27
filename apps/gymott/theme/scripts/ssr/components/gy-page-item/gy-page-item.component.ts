import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PageService, SectionObject, Page } from "../../../common";
import pugTemplate from "./gy-page-item.component.pug";

export interface Scope {
  page?: Page;
  catTextAt: number;
  sections: SectionObject;
}

export class GyPageItemComponent extends Component {
  public static tagName = "gy-page-item";
  public _debug = false;
  protected autobind = true;
  protected page = PageService.getInstance();

  scope: Scope = {
    page: undefined,
    catTextAt: 300,
    sections: {},
  };

  static get observedAttributes(): string[] {
    return ["page", "cat-text-at"];
  }

  protected requiredAttributes() {
    return ["page"];
  }

  protected async beforeBind() {
    await super.afterBind();
    if (this.scope.page) {
      this.scope.sections = await this.page.getSectionsObject(this.scope.page);
    }
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyPageItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
