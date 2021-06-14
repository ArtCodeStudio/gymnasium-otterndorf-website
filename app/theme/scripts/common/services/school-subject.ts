import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSchoolSubjectDetailBySlugsQuery,
  StrapiGqlSchoolSubjectDetailBySlugsQueryVariables,
  StrapiGqlSchoolSubjectBasicBySlugsQuery,
  StrapiGqlSchoolSubjectBasicBySlugsQueryVariables,
  ResponseError,
  DynamicZoneSection,
  PageHeader,
  SchoolSubject,
  SectionObject,
  TeacherBasic,
} from "../../common/types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { schoolSubjectFormatter } from "../formatters";
import schoolSubjectDetailBySlugs from "../../../graphql/queries/school-subject-detail-by-slugs.gql";
import schoolSubjectBasicBySlugs from "../../../graphql/queries/school-subject-basic-by-slugs.gql";

export class SchoolSubjectService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: SchoolSubjectService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (SchoolSubjectService.instance) {
      return SchoolSubjectService.instance;
    }
    SchoolSubjectService.instance = new SchoolSubjectService();
    return SchoolSubjectService.instance;
  }

  async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlSchoolSubjectDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlSchoolSubjectDetailBySlugsQuery>(
        schoolSubjectDetailBySlugs,
        vars
      );
    const subjects = subjectRes.subjects || [];
    return subjects;
  }

  async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlSchoolSubjectBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlSchoolSubjectBasicBySlugsQuery>(
        schoolSubjectBasicBySlugs,
        vars
      );
    const subjects = subjectRes.subjects || [];
    return subjects;
  }

  async getDetail(slug: string) {
    const subjects = await this.listDetail([slug], 1);
    if (!Array.isArray(subjects) || subjects.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return subjects?.[0] || null;
  }

  async getBasic(slug: string) {
    const subjects = await this.listBasic([slug], 1);
    if (!Array.isArray(subjects) || subjects.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return subjects?.[0] || null;
  }

  async getSections(schoolSubject: SchoolSubject) {
    if (schoolSubject?.content) {
      const dynamicZoneSections = (schoolSubject?.content ||
        []) as DynamicZoneSection[];
      return SchoolSubjectService.sections.toArray(dynamicZoneSections);
    }
    return [];
  }

  public async getSectionsObject(
    schoolSubject: SchoolSubject
  ): Promise<SectionObject> {
    if (!schoolSubject.content) {
      return {};
    }
    const sectionsArr = await this.getSections(schoolSubject);
    const sectionsObj = SchoolSubjectService.sections.toObject(sectionsArr);
    return sectionsObj;
  }

  getTeachers(schoolSubject: SchoolSubject): TeacherBasic[] {
    if (schoolSubject?.teachers) {
      const teachers: TeacherBasic[] = [];
      for (const teacher of schoolSubject?.teachers) {
        if (teacher) {
          teachers.push({
            first_name: teacher.first_name || "",
            id: teacher.id || "",
            name: teacher.name || "",
            slug: teacher.slug || "",
          });
        }
      }
      return teachers;
    }
    return [];
  }

  getHeader(schoolSubject?: SchoolSubject): PageHeader {
    const header: PageHeader = {
      title: schoolSubject?.title || "Schulfächer",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: "Schulfächer",
          type: ENTRY_TYPE.SchoolSubject,
          active: schoolSubject ? false : true,
          url: schoolSubjectFormatter.read(),
        },
      ],
    };

    if (schoolSubject) {
      header.breadcrumbs.push({
        label: schoolSubject.title,
        type: ENTRY_TYPE.SchoolSubject,
        active: true,
        url: schoolSubjectFormatter.read(schoolSubject?.slug),
      });
      header.teachers = this.getTeachers(schoolSubject);
    }

    return header;
  }
}
