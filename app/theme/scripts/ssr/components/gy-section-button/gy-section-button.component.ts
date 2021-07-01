import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-button.component.pug";
import { SectionContentButton, NavigationLink } from "../../../common/types";
import {
  navItemUrlFormatter,
  strapiFormatter,
} from "../../../common/formatters";

export interface Scope {
  section?: SectionContentButton;
  btnCls: string;
  style: Partial<CSSStyleDeclaration>;
  link: string;
}

export class GySectionButtonComponent extends Component {
  public static tagName = "gy-section-button";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: undefined,
    btnCls: "",
    style: {},
    link: "",
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
    if (!this.scope.section) {
      throw new Error('"section" attribute is required!');
    }
    const color = this.scope.section.color?.color || "blue";
    this.scope.btnCls = `btn-outline-${color}`;

    if (this.scope.section.__typename === "ComponentContentButton") {
      this.scope.link =
        navItemUrlFormatter.read(
          this.scope.section.link as unknown as NavigationLink
        ) || "";
    } else if (
      this.scope.section.__typename === "ComponentContentDownloadButton"
    ) {
      this.scope.link = strapiFormatter.read(this.scope.section.file?.url);
    }

    switch (this.scope.section.alignment?.alignment?.toLowerCase()) {
      case "left":
        this.scope.style = {
          marginRight: "auto",
        };
        break;
      case "right":
        this.scope.style = {
          marginLeft: "auto",
        };
        break;
      case "center":
      default:
        this.scope.style = {
          marginLeft: "auto",
          marginRight: "auto",
        };
        break;
    }
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionButtonComponent.observedAttributes);
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
