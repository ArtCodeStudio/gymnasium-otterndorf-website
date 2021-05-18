import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-sections.component.pug";
import { Section } from "../../../common/types";

export interface Scope {
  sections?: Section[];
  getSectionColumnClass: GySectionsComponent["getSectionColumnClass"];
}

export class GySectionsComponent extends Component {
  public static tagName = "gy-sections";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    getSectionColumnClass: this.getSectionColumnClass,
  };

  static get observedAttributes(): string[] {
    return ["sections"];
  }

  protected requiredAttributes() {
    return ["sections"];
  }

  constructor() {
    super();
  }

  public getSectionColumnClass(section: Section) {
    switch (section.__typename) {
      case "ComponentHomeNews":
        return "col-12 col-md-8";
      case "ComponentSectionFacts":
        return "col-12 col-md-4 mx-auto";
      case "ComponentHomeCalendar":
        return "col-12 col-md-4";
      default:
        return "col-12";
    }
  }

  protected async beforeBind() {
    await super.beforeBind();
    //this.scope.sections = await
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionsComponent.observedAttributes);
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
