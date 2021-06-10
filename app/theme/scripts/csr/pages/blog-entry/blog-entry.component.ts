import { Component } from "@ribajs/core";
import { replaceBodyPageClass } from "../../../common";

export type Scope = Record<string, never>;

export class BlogEntryPageComponent extends Component {
  public static tagName = "blog-entry-page";
  public _debug = false;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(BlogEntryPageComponent.observedAttributes);
  }

  protected template() {
    // See apps/gymott/theme/scripts/ssr/pages/blog-entry/blog-entry.component.pug
    return null;
  }
}
