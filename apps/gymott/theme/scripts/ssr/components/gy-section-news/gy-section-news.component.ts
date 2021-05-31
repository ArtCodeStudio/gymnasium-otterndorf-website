import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { BlogService, HomeNews, Post } from "../../../common";
import pugTemplate from "./gy-section-news.component.pug";

export interface Scope {
  section?: HomeNews;
  posts: Post[];
}

export class GySectionNewsComponent extends Component {
  public static tagName = "gy-section-news";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
    posts: [],
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  protected async beforeBind() {
    this.debug("[gy-section-news] this.scope.section", this.scope.section);
    this.scope.section?.pages;
    this.scope.posts = await BlogService.getInstance().listPostsBasic(
      [],
      this.scope.section?.amount || 2
    );
    this.debug("[gy-section-news] this.scope.news", this.scope.posts);
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
