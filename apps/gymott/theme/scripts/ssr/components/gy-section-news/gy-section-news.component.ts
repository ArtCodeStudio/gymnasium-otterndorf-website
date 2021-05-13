import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { NewsService } from "../../../common/services";
import { HomeNews } from "../../../common/types/home-news";
import pugTemplate from "./gy-section-news.component.pug";

enum NewsType {
  Calendar,
  Blog,
}

export interface Scope {
  section?: HomeNews;
  news: {
    author: string | undefined;
    title: string;
    date: Date;
    type: NewsType;
  }[];
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
    console.log("section", this.scope.section);
    const queryResult = await NewsService.getInstance().getNews();
    if (!queryResult) return;
    for (const result of queryResult) {
      if (!result?.title) continue;

      this.scope.news.push({
        type: NewsType.Blog,
        title: result?.title,
        author: result?.author,
        date: new Date(result?.created_at),
      });
    }
    console.log(this.scope.news);
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
