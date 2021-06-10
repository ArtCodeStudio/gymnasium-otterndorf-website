import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-student-quote.component.pug";
import {
  SectionStudentQuote,
  StudentQuoteService,
  Awaited,
} from "../../../common";

export interface Scope {
  section?: SectionStudentQuote;
  quote?: Awaited<ReturnType<StudentQuoteService["get"]>>;
}

export class GySectionStudentQuoteComponent extends Component {
  public static tagName = "gy-section-student-quote";
  public _debug = false;
  protected autobind = true;
  protected studentQuote = StudentQuoteService.getInstance();

  scope: Scope = {
    section: undefined,
    quote: undefined,
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
    this.scope.quote = await this.studentQuote.get();
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
