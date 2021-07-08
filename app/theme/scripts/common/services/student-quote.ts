import { GraphQLClient } from "./graphql";
import { StrapiGqlStudent, PageHeader } from "../types";
import { ENTRY_TYPE } from "../constants";
import { studentQuoteFormatter } from "../formatters";
import quotesByIdsQuery from "../../../graphql-student/queries/quotes-by-ids.gql";

export class StudentQuoteService {
  protected graphql = GraphQLClient.getInstance(true);

  protected static instance: StudentQuoteService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (StudentQuoteService.instance) {
      return StudentQuoteService.instance;
    }
    StudentQuoteService.instance = new StudentQuoteService();
    return StudentQuoteService.instance;
  }

  public async list(ids: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlStudent.QuotesByIdsQueryVariables = {
      ids,
      limit,
      start,
    };
    const quoteResponse =
      await this.graphql.requestCached<StrapiGqlStudent.QuotesByIdsQuery>(
        quotesByIdsQuery,
        vars
      );
    return quoteResponse?.["quotes"] || [];
  }

  public async get(
    id: string
  ): Promise<StrapiGqlStudent.QuoteFragmentFragment | null> {
    return (await this.list([id], 1))[0] || null;
  }

  public getHeader(quote?: StrapiGqlStudent.QuoteFragmentFragment | null) {
    const header: PageHeader = {
      title: quote?.title || "Schülersprüche",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: "Schülersprüche",
          type: ENTRY_TYPE.StudentQuote,
          active: quote ? false : true,
          url: studentQuoteFormatter.read(),
        },
      ],
    };

    if (quote) {
      header.breadcrumbs.push({
        label: quote.title || "Spruch",
        type: ENTRY_TYPE.StudentQuote,
        active: true,
        url: studentQuoteFormatter.read(quote?.id),
      });
    }

    return header;
  }
}
