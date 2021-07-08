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

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = "Schülersprüche";
    try {
      const quotes =
        (await this.quote.list()) as StrapiGqlStudent.QuoteFragmentFragment[];

      this.scope.quotes = quotes || [];
      this.scope.header = this.quote.getHeader();
    } catch (error) {
      this.throw(error);
    }

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
