import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSchoolSubjectBySlugsQuery,
  StrapiGqlSchoolSubjectBySlugsQueryVariables,
  ResponseError,
  DynamicZoneSection,
  StrapiGqlSchoolSubjectFragmentFragment,
  PageHeader,
  TeacherBasic,
} from "../../common/types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { schoolSubjectFormatter } from "../formatters";
import schoolSubjectBySlugs from "../../../graphql/queries/school-subject-by-slugs.gql";

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

  async list(slugs: string[] = []) {
    const vars: StrapiGqlSchoolSubjectBySlugsQueryVariables = { slugs };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlSchoolSubjectBySlugsQuery>(
        schoolSubjectBySlugs,
        vars
      );
    const subjects = subjectRes.subjects || [];
    return subjects;
  }

  async get(slug: string) {
    const subjects = await this.list([slug]);
    if (!Array.isArray(subjects) || subjects.length <= 0) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    return subjects?.[0] || null;
  }

  async getSections(schoolSubject: StrapiGqlSchoolSubjectFragmentFragment) {
    if (schoolSubject?.content) {
      const dynamicZoneSections = (schoolSubject?.content ||
        []) as DynamicZoneSection[];
      return SchoolSubjectService.sections.transform(dynamicZoneSections);
    }
    return [];
  }

  getTeachers(
    schoolSubject: StrapiGqlSchoolSubjectFragmentFragment
  ): TeacherBasic[] {
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

  getHeader(schoolSubject: StrapiGqlSchoolSubjectFragmentFragment): PageHeader {
    const header: PageHeader = {
      title: schoolSubject.title || "",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: "Schulfach",
          type: ENTRY_TYPE.SchoolSubject,
          active: false,
        },
        {
          label: schoolSubject.title,
          type: ENTRY_TYPE.SchoolSubject,
          active: true,
          url: schoolSubjectFormatter.read(schoolSubject.slug),
        },
      ],
      teachers: this.getTeachers(schoolSubject),
    };
    return header;
  }
}
