import { GraphQLClient } from "./graphql";
import { StrapiGqlStudent } from "../types";
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
}
