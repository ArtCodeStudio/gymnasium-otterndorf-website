import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-student-quote.component.pug";
import {
  SectionStudentQuote,
  StudentQuoteService,
  StudentQuote,
} from "../../../common";

export interface Scope {
  section?: SectionStudentQuote;
  quotes: StudentQuote[];
  color: string;
}

export class GySectionStudentQuoteComponent extends Component {
  public static tagName = "gy-section-student-quote";
  public _debug = false;
  protected autobind = true;
  protected studentQuote = StudentQuoteService.getInstance();

  scope: Scope = {
    section: undefined,
    quotes: [],
    color: "yellow",
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
    this.scope.color = this.scope.section?.color?.color || "yellow";
    this.scope.quotes = (await this.studentQuote.list(
      [],
      this.scope.section?.limit || 1
    )) as StudentQuote[];
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionStudentQuoteComponent.observedAttributes);
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
