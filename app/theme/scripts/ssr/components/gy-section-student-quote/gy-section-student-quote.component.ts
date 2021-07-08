import { Component } from "@ribajs/core";
import { kebabCase } from "@ribajs/utils";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-student-quote.component.pug";
import {
  SectionStudentQuote,
  StudentQuoteService,
  StudentQuote,
  StrapiGqlStudent,
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

  protected transformQuote(
    quote: StrapiGqlStudent.QuoteFragmentFragment & Partial<StudentQuote>
  ): StudentQuote {
    const position = kebabCase(quote.position);

    quote.positionClass = "position-md-" + (position || "left-top");

    // Add extra small device position classes
    if (quote.positionClass.startsWith("position-md-left")) {
      quote.positionClass += " position-top-left";
    }

    if (quote.positionClass.startsWith("position-md-right")) {
      quote.positionClass += " position-top-right";
    }

    quote.bubbleClass = "col-12";
    quote.mascotClass = "col-12";

    if (position.startsWith("left")) {
      quote.mascotClass =
        "order-md-1 col-12 col-md-4 d-flex justify-content-center align-items-center";
      quote.bubbleClass = "order-md-2 col-12 col-md-8";
    }

    if (position.startsWith("right")) {
      quote.bubbleClass = "order-md-1 col-12 col-md-8";
      quote.mascotClass =
        "order-md-2 col-12 col-md-4 d-flex justify-content-center align-items-center";
    }

    if (position.startsWith("top")) {
      quote.mascotClass = "order-1 col-12 d-flex align-items-center";
      quote.bubbleClass = "order-2 col-12";
      if (position.endsWith("right")) {
        quote.mascotClass += " justify-content-end ";
      }
      if (position.endsWith("left")) {
        quote.mascotClass += " justify-content-start";
      }
    }

    if (position.startsWith("bottom")) {
      quote.bubbleClass = "order-1 col-12";
      quote.mascotClass = "order-2 col-12 d-flex align-items-center";
      if (position.endsWith("right")) {
        quote.mascotClass += " d-flex justify-content-end";
      }
      if (position.endsWith("left")) {
        quote.mascotClass += " d-flex justify-content-start";
      }
    }

    if (quote.speechBubble) {
      quote.positionClass += " speech-bubble";
    }

    return quote as StudentQuote;
  }

  protected transformQuotes(
    _quotes: Array<StrapiGqlStudent.QuoteFragmentFragment | null> | null
  ): StudentQuote[] {
    if (!_quotes) {
      return [];
    }
    const qoutes: StudentQuote[] = [];
    for (const _quote of _quotes) {
      if (_quote) {
        qoutes.push(this.transformQuote(_quote));
      }
    }

    return qoutes;
  }

  protected async beforeBind() {
    await super.beforeBind();
    this.scope.color = this.scope.section?.color?.color || "yellow";
    const quotes = await this.studentQuote.list(
      [],
      this.scope.section?.limit || 1
    );
    if (quotes) {
      this.scope.quotes = this.transformQuotes(
        quotes as Array<StrapiGqlStudent.QuoteFragmentFragment | null> | null
      );
    }
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
