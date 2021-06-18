import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-blog-slideshow.component.pug";
import { SectionBlogSlideshow } from "../../../common/types";
import { BlogService } from "../../services";

export interface Scope {
  section?: SectionBlogSlideshow | null;
}

export class GySectionBlogSlideshowComponent extends Component {
  public static tagName = "gy-section-blog-slideshow";
  public static blog = BlogService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
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
    // console.debug(
    //   "[gy-section-blog-slideshow] this.scope.section",
    //   this.scope.section
    // );
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionBlogSlideshowComponent.observedAttributes);
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
