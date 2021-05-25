import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { BlogService } from "common/services";
import { Awaited } from "common/types";
import pugTemplate from "./blog-entry-item.component.pug";

type Post = Awaited<ReturnType<BlogService["listPostsBasic"]>>[0];

export interface Scope {
  post?: Post;
}

export class BlogEntryItemComponent extends Component {
  public static tagName = "blog-entry-item";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    post: undefined,
  };

  static get observedAttributes(): string[] {
    return ["post"];
  }

  protected requiredAttributes() {
    return ["post"];
  }

  protected async afterBind() {
    await super.afterBind();
    console.debug("[BlogEntryItemComponent] post", this.scope.post);
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(BlogEntryItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
