import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { BlogService, Awaited, SectionObject } from "../../../common";
import pugTemplate from "./gy-blog-entry-item.component.pug";

type Post = Awaited<ReturnType<BlogService["listPostsBasic"]>>[0];

export interface Scope {
  post?: Post;
  sections: SectionObject;
}

export class GyBlogEntryItemComponent extends Component {
  public static tagName = "gy-blog-entry-item";
  public _debug = false;
  protected autobind = true;
  protected blog = BlogService.getInstance();

  scope: Scope = {
    post: undefined,
    sections: {},
  };

  static get observedAttributes(): string[] {
    return ["post"];
  }

  protected requiredAttributes() {
    return ["post"];
  }

  protected async beforeBind() {
    await super.afterBind();
    if (this.scope.post) {
      this.scope.sections = await this.blog.getSectionsObject(this.scope.post);
    }
    console.debug("[GyBlogEntryItemComponent] post", this.scope.post);
    console.debug("[GyBlogEntryItemComponent] sections", this.scope.sections);
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
