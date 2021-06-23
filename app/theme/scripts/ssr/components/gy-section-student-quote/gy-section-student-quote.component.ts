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
}

export class GySectionStudentQuoteComponent extends Component {
  public static tagName = "gy-section-student-quote";
  public _debug = false;
  protected autobind = true;
  protected studentQuote = StudentQuoteService.getInstance();

  scope: Scope = {
    section: undefined,
    quotes: [],
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

  protected transformQuote(quote: StudentQuote): StudentQuote {
    if (!quote) {
      return quote;
    }

    const position = kebabCase(quote.position);

    quote.bubblePositionClass = "bubble-md-" + (position || "left-top");

    // Add extra small device position classes
    if (quote.bubblePositionClass.startsWith("bubble-md-left")) {
      quote.bubblePositionClass += " bubble-top-left";
    }

    if (quote.bubblePositionClass.startsWith("bubble-md-right")) {
      quote.bubblePositionClass += " bubble-top-right";
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

    return quote;
  }

  protected transformQuotes(
    quotes: StrapiGqlStudent.QuotesFragmentFragment["quotes"]
  ): StudentQuote[] {
    if (!quotes) {
      return [];
    }
    return quotes.map((quote) => {
      return this.transformQuote(
        quote as StrapiGqlStudent.ComponentSectionsQuotes
      );
    });
  }

  protected async beforeBind() {
    await super.beforeBind();
    const quote = await this.studentQuote.get();
    if (quote?.quotes) {
      const quotes = this.transformQuotes(quote?.quotes);
      this.scope.quotes = quotes;
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
