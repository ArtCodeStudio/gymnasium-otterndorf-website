import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { NewsResult } from "common/services/news";
import { NewsService } from "../../../common/services";
import { HomeNews } from "../../../common/types/home-news";
import pugTemplate from "./gy-section-news.component.pug";

export interface Scope {
  section?: HomeNews;
  news: NewsResult;
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

  protected async beforeBind() {
    // console.debug("[gy-section-news] this.scope.section", this.scope.section);
    this.scope.news = await NewsService.getInstance().getNews();
    // console.debug("[gy-section-news] this.scope.news", this.scope.news);
  }

  protected async afterBind() {
    await super.afterBind();
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
