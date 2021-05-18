import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSchoolSubjectBySlugsQuery,
  StrapiGqlSchoolSubjectBySlugsQueryVariables,
  ResponseError,
  DynamicZoneSection,
  StrapiGqlSchoolSubjectFragmentFragment,
} from "../../common/types";
import { SectionsService } from "./sections";

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
      const DynamicZoneSections = (schoolSubject?.content ||
        []) as DynamicZoneSection[];
      return SchoolSubjectService.sections.transform(DynamicZoneSections);
    }
    return [];
  }
}
