import { GraphQLClient } from "./graphql";
import {
  StrapiGqlTeacherBySlugsQuery,
  StrapiGqlTeacherBySlugsQueryVariables,
  ResponseError,
  StrapiGqlTeacherDetailFragmentFragment,
  Teacher,
  PageHeader,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { teacherFormatter } from "../formatters";
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

  async list(slugs: string[] = []) {
    const vars: StrapiGqlTeacherBySlugsQueryVariables = { slugs };
    const teacherRes =
      await this.graphql.requestCached<StrapiGqlTeacherBySlugsQuery>(
        teacherBySlugsQuery,
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

  async get(slug: string) {
    const teachers = await this.list([slug]);
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
            type: ENTRY_TYPE.Teacher,
            active: false,
            url: teacherFormatter.read(),
          },
          {
            label: teacher.fullName || "Ohne Name",
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
        title: "Übersicht",
        breadcrumbs: [
          {
            label: "Startseite",
            type: ENTRY_TYPE.Home,
            url: "/",
            active: false,
          },
          {
            label: "Lehrer",
            type: ENTRY_TYPE.SchoolSubject,
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
