import { GraphQLClient } from "./graphql";
import { StrapiGqlStudent } from "../types";
import quoteQuery from "../../../graphql-student/queries/quote.gql";

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

  public async get() {
    const vars: StrapiGqlStudent.QuoteQueryVariables = {};
    const quoteResponse =
      await this.graphql.requestCached<StrapiGqlStudent.QuoteQuery>(
        quoteQuery,
        vars
      );
    return quoteResponse["quote"];
  }
}
