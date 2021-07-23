import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  PageService,
  SectionObject,
  Page,
  SectionsService,
} from "../../../common";
import pugTemplate from "./gy-page-item.component.pug";

export interface Scope {
  page?: Page;
  showDate: boolean;
  showTitle: boolean;
  showType: boolean;
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
    showDate: false,
    showTitle: true,
    showType: false,
    catTextAt: 300,
    sections: SectionsService.getEmptySectionsObject(),
  };

  static get observedAttributes(): string[] {
    return ["page", "cat-text-at", "show-date"];
  }

  protected requiredAttributes() {
    return ["page"];
  }

  protected async setSections() {
    if (this.scope.page) {
      this.scope.sections = await this.page.getSectionsObject(this.scope.page);
    }
    return this.scope.sections;
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setSections();
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
