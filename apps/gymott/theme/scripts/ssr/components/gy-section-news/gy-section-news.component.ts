import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { HomeNews } from "common/types/home-news";
import pugTemplate from "./gy-section-news.component.pug";

export interface Scope {
  section?: HomeNews;
  news: any[];
}

export class GySectionNewsComponent extends Component {
  public static tagName = "gy-section-news";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
    news: [],
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor() {
    super();
  }

  protected async afterBind() {
    await super.afterBind();
    console.log("section", this.scope.section);
    for (let i = 0; i < (this.scope.section?.amount || 0); i++) {}
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionNewsComponent.observedAttributes);
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
