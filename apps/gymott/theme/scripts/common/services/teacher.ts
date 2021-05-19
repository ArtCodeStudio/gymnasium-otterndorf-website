import { GraphQLClient } from "./graphql";
import {
  StrapiGqlTeacherBySlugsQuery,
  StrapiGqlTeacherBySlugsQueryVariables,
  ResponseError,
} from "../types";
import { SectionsService } from "./sections";
import teacherBySlugsQuery from "../../../graphql/queries/teacher-by-slugs.gql";

export class TeacherService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: TeacherService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (TeacherService.instance) {
      return TeacherService.instance;
    }
    TeacherService.instance = new TeacherService();
    return TeacherService.instance;
  }

  async list(slugs: string[] = []) {
    const vars: StrapiGqlTeacherBySlugsQueryVariables = { slugs };
    const teacherRes =
      await this.graphql.requestCached<StrapiGqlTeacherBySlugsQuery>(
        teacherBySlugsQuery,
        vars
      );
    const teachers = teacherRes.teachers || [];
    return teachers;
  }

  async get(slug: string) {
    const teachers = await this.list([slug]);
    if (!Array.isArray(teachers) || teachers.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const teacher = teachers?.[0] || null;
    return teacher;
  }
}
