import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { BlogService, SectionObject, Post } from "../../../common";
import pugTemplate from "./gy-blog-entry-item.component.pug";

export interface Scope {
  post?: Post;
  showDate: boolean;
  catTextAt: number;
  sections: SectionObject;
}

export class GyBlogEntryItemComponent extends Component {
  public static tagName = "gy-blog-entry-item";
  public _debug = false;
  protected autobind = true;
  protected blog = BlogService.getInstance();

  scope: Scope = {
    post: undefined,
    showDate: true,
    catTextAt: 300,
    sections: {},
  };

  static get observedAttributes(): string[] {
    return ["post", "cat-text-at", "show-date"];
  }

  protected requiredAttributes() {
    return ["post"];
  }

  protected async beforeBind() {
    await super.afterBind();
    if (this.scope.post) {
      this.scope.sections = await this.blog.getSectionsObject(this.scope.post);
    }
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyBlogEntryItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
