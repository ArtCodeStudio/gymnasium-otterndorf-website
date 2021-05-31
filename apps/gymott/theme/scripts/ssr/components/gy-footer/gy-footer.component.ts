import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { FooterService } from "../../../common/services";
import pugTemplate from "./gy-footer.component.pug";

export interface Scope {
  foo?: any;
  mapImageUrl?: string;
  mapImageAlt?: string;
  mapLink?: string;
  contactInfo?: string;
}

export class GyFooterComponent extends Component {
  public static tagName = "gy-footer";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected requiredAttributes() {
    return [];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    const footerObject = await FooterService.getInstance().get();
    if (footerObject.footer?.contact_info) {
      this.scope.contactInfo = footerObject.footer?.contact_info;
    }
    if (footerObject.footer?.map_link) {
      this.scope.mapLink = footerObject.footer?.map_link;
    }
    if (footerObject.footer?.map_image?.alternativeText) {
      this.scope.mapImageAlt = footerObject.footer?.map_image.alternativeText;
    }
    if (footerObject.footer?.map_image?.url) {
      this.scope.mapImageUrl = footerObject.footer?.map_image.url;
    }
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyFooterComponent.observedAttributes);
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
