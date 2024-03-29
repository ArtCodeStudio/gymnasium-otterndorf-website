import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  BlogService,
  SectionObject,
  Post,
  SectionsService,
} from "../../../common";
import pugTemplate from "./gy-blog-entry-item.component.pug";

export interface Scope {
  post?: Post;
  showText: boolean;
  showDate: boolean;
  showTitle: boolean;
  showCategory: boolean;
  catTextAt: number;
  sections: SectionObject;
  /** If true showText will be set to false if an image is found */
  preferImage: boolean;
}

export class GyBlogEntryItemComponent extends Component {
  public static tagName = "gy-blog-entry-item";
  public _debug = false;
  protected autobind = true;
  protected blog = BlogService.getInstance();

  scope: Scope = {
    post: undefined,
    showText: true,
    showDate: true,
    showTitle: true,
    showCategory: true,
    catTextAt: 300,
    sections: SectionsService.getEmptySectionsObject(),
    preferImage: false,
  };

  static get observedAttributes(): string[] {
    return [
      "post",
      "cat-text-at",
      "show-date",
      "show-text",
      "show-title",
      "show-category",
      "prefer-image",
    ];
  }

  protected requiredAttributes() {
    return ["post"];
  }

  protected async setSections() {
    if (this.scope.post) {
      this.scope.sections = await this.blog.getSectionsObject(this.scope.post);
      if (this.scope.sections.previewImage && this.scope.preferImage) {
        this.scope.showTitle = false;
        this.scope.showText = false;
        this.scope.showDate = false;
        this.scope.showCategory = false;
      }
    }
    return this.scope.sections;
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setSections();
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
