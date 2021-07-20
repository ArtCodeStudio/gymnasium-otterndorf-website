import { GraphQLClient } from "./graphql";
import {
  StrapiGqlTeacherDetailBySlugsQuery,
  StrapiGqlTeacherDetailBySlugsQueryVariables,
  StrapiGqlTeacherBasicBySlugsQuery,
  StrapiGqlTeacherBasicBySlugsQueryVariables,
  StrapiGqlTeacherInfoQuery,
  StrapiGqlTeacherInfoQueryVariables,
  Teacher,
  PageHeader,
  StrapiGqlTeacherDetailFragmentFragment,
  StrapiGqlTeacherBasicFragmentFragment,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { ResponseErrorService } from "./response-error";
import { teacherFormatter } from "../formatters";
import teacherDetailBySlugsQuery from "../../../graphql/queries/teacher-detail-by-slugs.gql";
import teacherInfo from "../../../graphql/queries/teacher-info.gql";

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

  public async info() {
    const vars: StrapiGqlTeacherInfoQueryVariables = {};
    const res = await this.graphql.requestCached<StrapiGqlTeacherInfoQuery>(
      teacherInfo,
      vars
    );
    return res.teacherInfo;
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
    if (!teachers || !Array.isArray(teachers) || teachers.length <= 0) {
      throw ResponseErrorService.notFound("Teacher", slug);
    }
    return teachers[0] as StrapiGqlTeacherDetailFragmentFragment;
  }

  async getBasic(slug: string) {
    const teachers = await this.listBasic([slug], 1);
    if (!teachers || !Array.isArray(teachers) || teachers.length <= 0) {
      throw ResponseErrorService.notFound("Teacher", slug);
    }
    return teachers[0] as StrapiGqlTeacherBasicFragmentFragment;
  }

  public getHeader(
    teachers: Teacher[],
    title?: string
  ): PageHeader | Record<string, never> {
    if (teachers.length === 1) {
      const teacher = teachers[0];
      const header: PageHeader = {
        title: teacher.name || title || "",
        breadcrumbs: [
          {
            type: ENTRY_TYPE.Home,
            url: "/",
            active: false,
          },
          {
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
        title: title || "Lehrer",
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
