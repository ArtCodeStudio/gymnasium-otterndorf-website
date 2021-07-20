import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./students-quotes.component.pug";
import { StudentQuoteService } from "../../services";
import {
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlStudent,
} from "../../../common";

export interface Scope {
  params: StudentsQuotesPageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  quotes: StrapiGqlStudent.QuoteFragmentFragment[];
}

export class StudentsQuotesPageComponent extends PageComponent {
  public static tagName = "students-quotes-page";
  public _debug = false;
  protected autobind = true;

  protected quote = StudentQuoteService.getInstance();

  scope: Scope = {
    params: {},
    header: {},
    quotes: [],
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(StudentsQuotesPageComponent.observedAttributes);
  }

  protected async setStudentsQuotes() {
    const quotes =
      (await this.quote.list()) as StrapiGqlStudent.QuoteFragmentFragment[];

    this.scope.quotes = quotes || [];
    return quotes;
  }

  protected setHeader() {
    this.scope.header = this.quote.getHeader();
    this.head.title = this.scope.header.title || "Schülersprüche";
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setStudentsQuotes();
    this.setHeader();
    this.setHeader();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
