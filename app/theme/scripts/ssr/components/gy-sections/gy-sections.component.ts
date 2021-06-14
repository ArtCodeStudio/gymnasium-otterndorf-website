import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-sections.component.pug";
import { Section, PageHeader } from "../../../common/types";

export interface Scope {
  sections?: Section[];
  context?: "index" | "page" | "school-subject" | "blog" | "post" | "teacher";
  header: PageHeader | Record<string, never>;
  getSectionColumnClass: GySectionsComponent["getSectionColumnClass"];
  getIndexForPageHeader: GySectionsComponent["getIndexForPageHeader"];
}

export class GySectionsComponent extends Component {
  public static tagName = "gy-sections";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    header: {},
    getSectionColumnClass: this.getSectionColumnClass,
    getIndexForPageHeader: this.getIndexForPageHeader,
  };

  static get observedAttributes(): string[] {
    return ["sections", "context", "header"];
  }

  protected requiredAttributes() {
    return ["sections"];
  }

  constructor() {
    super();
  }

  /**
   * Position of the page header depending on the context and teaser sections (such as a slideshow section)
   * - `0` if there is no page teaser
   * - `1` if a teaser is placed in the first position.
   * - `-1` if no header is to be displayed (e.g. on the index page)
   */
  public getIndexForPageHeader() {
    if (this.scope.context === "index") {
      return -1;
    }
    if (this.scope.sections?.length) {
      if (
        this.scope.sections[0].__typename?.toLowerCase().includes("slideshow")
      ) {
        return 1;
      }
    }
    return 0;
  }

  public getSectionColumnClass(section: Section) {
    switch (section.__typename) {
      case "ComponentContentText":
      case "ComponentContentImage":
      case "ComponentContentButton":
        return "col-12 col-md-8 offset-md-2";
      case "ComponentHomeNews":
        return "col-12 col-md-8 mx-auto";
      case "ComponentSectionFacts":
        return "col-12";
      case "ComponentHomeCalendar":
        return "col-12 col-md-4 mx-auto";
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
