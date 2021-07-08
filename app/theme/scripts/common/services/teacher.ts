import { GraphQLClient } from "./graphql";
import {
  StrapiGqlTeacherDetailBySlugsQuery,
  StrapiGqlTeacherDetailBySlugsQueryVariables,
  StrapiGqlTeacherBasicBySlugsQuery,
  StrapiGqlTeacherBasicBySlugsQueryVariables,
  ResponseError,
  StrapiGqlTeacherDetailFragmentFragment,
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

  protected transform(teacher: StrapiGqlTeacherDetailFragmentFragment) {
    const result: Partial<Teacher> = {
      ...(teacher || {}),
      fullName: "",
    };
    if (typeof result.first_name === "string") {
      result.fullName += result.first_name + " ";
    }
    if (typeof result.name === "string") {
      result.fullName += result?.name;
    }

    return result as Teacher;
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
    return teachers
      .filter((teacher) => teacher !== null)
      .map((teacher) => {
        if (teacher) {
          return this.transform(teacher);
        } else {
          return teacher;
        }
      }) as Teacher[];
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
    return teachers
      .filter((teacher) => teacher !== null)
      .map((teacher) => {
        if (teacher) {
          return this.transform(teacher);
        } else {
          return teacher;
        }
      }) as Teacher[];
  }

  async getDetail(slug: string) {
    const teachers = await this.listDetail([slug], 1);
    if (!Array.isArray(teachers) || teachers.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const teacher = teachers?.[0] || null;
    if (teacher) {
      return this.transform(teacher);
    }
    return null;
  }

  async getBasic(slug: string) {
    const teachers = await this.listBasic([slug], 1);
    if (!Array.isArray(teachers) || teachers.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const teacher = teachers?.[0] || null;
    if (teacher) {
      return this.transform(teacher);
    }
    return null;
  }

  public getHeader(teachers: Teacher[]): PageHeader | Record<string, never> {
    if (teachers.length === 1) {
      const teacher = teachers[0];
      const header: PageHeader = {
        title: teacher.fullName || "",
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
            label: teacher.fullName,
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
