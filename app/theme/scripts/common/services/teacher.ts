import { GraphQLClient } from "./graphql";
import {
  StrapiGqlTeacherDetailBySlugsQuery,
  StrapiGqlTeacherDetailBySlugsQueryVariables,
  StrapiGqlTeacherBasicBySlugsQuery,
  StrapiGqlTeacherBasicBySlugsQueryVariables,
  ResponseError,
  Teacher,
  PageHeader,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { teacherFormatter } from "../formatters";
import teacherDetailBySlugsQuery from "../../../graphql/queries/teacher-detail-by-slugs.gql";

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

  async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlTeacherDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const teacherRes =
      await this.graphql.requestCached<StrapiGqlTeacherDetailBySlugsQuery>(
        teacherDetailBySlugsQuery,
        vars
      );
    const teachers = teacherRes.teachers || [];
    return teachers;
  }

  async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlTeacherBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const teacherRes =
      await this.graphql.requestCached<StrapiGqlTeacherBasicBySlugsQuery>(
        teacherDetailBySlugsQuery,
        vars
      );
    const teachers = teacherRes.teachers || [];
    return teachers;
  }

  async getDetail(slug: string) {
    const teachers = await this.listDetail([slug], 1);
    if (!Array.isArray(teachers) || teachers.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const teacher = teachers?.[0] || null;
    return teacher;
  }

  async getBasic(slug: string) {
    const teachers = await this.listBasic([slug], 1);
    if (!Array.isArray(teachers) || teachers.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const teacher = teachers?.[0] || null;
    return teacher;
  }

  public getHeader(teachers: Teacher[]): PageHeader | Record<string, never> {
    if (teachers.length === 1) {
      const teacher = teachers[0];
      const header: PageHeader = {
        title: teacher.name || "",
        breadcrumbs: [
          {
            type: ENTRY_TYPE.Home,
            url: "/",
            active: false,
          },
          {
            label: "Lehrer",
            type: ENTRY_TYPE.Teacher,
            active: false,
            url: teacherFormatter.read(),
          },
          {
            label: teacher.name,
            type: ENTRY_TYPE.Teacher,
            active: true,
            url: teacherFormatter.read(teacher.slug),
          },
        ],
      };
      return header;
    }

    if (teachers.length > 1) {
      const header: PageHeader = {
        title: "Lehrer",
        breadcrumbs: [
          {
            type: ENTRY_TYPE.Home,
            url: "/",
            active: false,
          },
          {
            type: ENTRY_TYPE.Teacher,
            active: true,
            url: teacherFormatter.read(),
          },
        ],
      };
      return header;
    }

    return {};
  }
}
