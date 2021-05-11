import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-text.component.pug";
import { MarkdownService } from "../../services";
import { SectionContentText } from "../../../common/types";

export interface Scope {
  section: SectionContentText;
  text: string;
}

export class GySectionTextComponent extends Component {
  public static tagName = "gy-section-text";
  public _debug = false;
  protected autobind = true;
  protected markdown = MarkdownService.getInstance();

  scope: Scope = {
    section: {
      __typename: "ComponentContentText",
      text: "",
      id: "",
    },
    text: "",
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
    await super.beforeBind();
    this.scope.text = this.markdown.render(this.scope.section?.text || "");
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionTextComponent.observedAttributes);
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
