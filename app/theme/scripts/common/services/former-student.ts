import { GraphQLClient } from "./graphql";
import {
  StrapiGqlFormerStudentDetailBySlugsQuery,
  StrapiGqlFormerStudentDetailBySlugsQueryVariables,
} from "../types";
import { SectionsService } from "./sections";
import { ResponseErrorService } from "./response-error";
import formerStudentDetailBySlugsQuery from "../../../graphql/queries/former-student-detail-by-slugs.gql";

export class FormerStudentService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: FormerStudentService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (FormerStudentService.instance) {
      return FormerStudentService.instance;
    }
    FormerStudentService.instance = new FormerStudentService();
    return FormerStudentService.instance;
  }

  async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlFormerStudentDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const formerStudentRes =
      await this.graphql.requestCached<StrapiGqlFormerStudentDetailBySlugsQuery>(
        formerStudentDetailBySlugsQuery,
        vars
      );
    const formerStudents = formerStudentRes.formerStudents || [];
    return formerStudents;
  }

  async getDetail(slug: string) {
    const formerStudents = await this.listDetail([slug], 1);
    if (!Array.isArray(formerStudents) || formerStudents.length <= 0) {
      throw ResponseErrorService.notFound("Former Student", slug);
    }
    const formerStudent = formerStudents?.[0] || null;
    return formerStudent;
  }
}
