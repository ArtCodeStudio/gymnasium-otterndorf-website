import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { themeBackgroundClassFormatter } from "../../../common/formatters/index";
import pugTemplate from "./gy-section-facts.component.pug";

export interface Scope {
  section?: any;
}

export class GySectionFactsComponent extends Component {
  public static tagName = "gy-section-facts";
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

  protected async beforeBind() {
    this.classList.add(
      themeBackgroundClassFormatter.read(
        this.scope.section?.color?.color || "cyan"
      )
    );
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionFactsComponent.observedAttributes);
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
