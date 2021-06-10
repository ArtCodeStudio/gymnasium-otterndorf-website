import { Component } from "@ribajs/core";
import { replaceBodyPageClass } from "../../../common";

export type Scope = Record<string, never>;

export class SitemapPageComponent extends Component {
  public static tagName = "sitemap-page";
  public _debug = false;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(SitemapPageComponent.observedAttributes);
  }

  protected template() {
    // See apps/gymott/theme/scripts/ssr/pages/sitemap/sitemap.component.pug
    return null;
  }
}
