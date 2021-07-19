import { GraphQLClient } from "./graphql";
import {
  StrapiGqlWorkingGroupDetailBySlugsQuery,
  StrapiGqlWorkingGroupDetailBySlugsQueryVariables,
  StrapiGqlWorkingGroupBasicBySlugsQuery,
  StrapiGqlWorkingGroupBasicBySlugsQueryVariables,
  StrapiGqlWorkingGroupInfoQuery,
  StrapiGqlWorkingGroupInfoQueryVariables,
  DynamicZoneSection,
  PageHeader,
  WorkingGroup,
  SectionObject,
  TeacherBasic,
} from "../types";
import { ENTRY_TYPE } from "../constants";
import { SectionsService } from "./sections";
import { ResponseErrorService } from "./response-error";
import { workingGroupFormatter } from "../formatters";
import workingGroupDetailBySlugs from "../../../graphql/queries/working-group-detail-by-slugs.gql";
import workingGroupBasicBySlugs from "../../../graphql/queries/working-group-basic-by-slugs.gql";
import workingGroupInfo from "../../../graphql/queries/working-group-info.gql";

export class WorkingGroupService {
  protected graphql = GraphQLClient.getInstance();
  protected static sections = SectionsService.getInstance();
  protected static instance: WorkingGroupService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (WorkingGroupService.instance) {
      return WorkingGroupService.instance;
    }
    WorkingGroupService.instance = new WorkingGroupService();
    return WorkingGroupService.instance;
  }

  public async info() {
    const vars: StrapiGqlWorkingGroupInfoQueryVariables = {};
    const res =
      await this.graphql.requestCached<StrapiGqlWorkingGroupInfoQuery>(
        workingGroupInfo,
        vars
      );
    return res.workingGroupInfo;
  }

  async listDetail(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlWorkingGroupDetailBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlWorkingGroupDetailBySlugsQuery>(
        workingGroupDetailBySlugs,
        vars
      );
    const subjects = subjectRes.workingGroups || [];
    return subjects;
  }

  async listBasic(slugs: string[] = [], limit = 50, start = 0) {
    const vars: StrapiGqlWorkingGroupBasicBySlugsQueryVariables = {
      slugs,
      limit,
      start,
    };
    const subjectRes =
      await this.graphql.requestCached<StrapiGqlWorkingGroupBasicBySlugsQuery>(
        workingGroupBasicBySlugs,
        vars
      );
    const subjects = subjectRes.workingGroups || [];
    return subjects;
  }

  async getDetail(slug: string) {
    const subjects = await this.listDetail([slug], 1);
    if (!Array.isArray(subjects) || subjects.length <= 0) {
      throw ResponseErrorService.notFound("Working Group", slug);
    }
    return subjects?.[0] || null;
  }

  async getBasic(slug: string) {
    const subjects = await this.listBasic([slug], 1);
    if (!Array.isArray(subjects) || subjects.length <= 0) {
      throw ResponseErrorService.notFound("Working Group", slug);
    }
    return subjects?.[0] || null;
  }

  async getSections(workingGroup: WorkingGroup) {
    if (workingGroup?.content) {
      const dynamicZoneSections = (workingGroup?.content ||
        []) as DynamicZoneSection[];
      return WorkingGroupService.sections.toArray(dynamicZoneSections);
    }
    return [];
  }

  public async getSectionsObject(
    workingGroup: WorkingGroup
  ): Promise<SectionObject> {
    if (!workingGroup.content) {
      return {};
    }
    const sectionsArr = await this.getSections(workingGroup);
    const sectionsObj = WorkingGroupService.sections.toObject(sectionsArr);
    return sectionsObj;
  }

  getTeachers(workingGroup: WorkingGroup): TeacherBasic[] {
    if (workingGroup?.teachers) {
      const teachers: TeacherBasic[] = [];
      for (const teacher of workingGroup?.teachers) {
        if (teacher) {
          teachers.push({
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

  public getHeader(workingGroup?: WorkingGroup, title?: string): PageHeader {
    const header: PageHeader = {
      title: workingGroup?.title || title || "AGs",
      breadcrumbs: [
        {
          type: ENTRY_TYPE.Home,
          url: "/",
          active: false,
        },
        {
          label: title,
          type: ENTRY_TYPE.WorkingGroup,
          active: workingGroup ? false : true,
          url: workingGroupFormatter.read(),
        },
      ],
    };

    if (workingGroup) {
      header.breadcrumbs.push({
        label: workingGroup.title,
        type: ENTRY_TYPE.WorkingGroup,
        active: true,
        url: workingGroupFormatter.read(workingGroup?.slug),
      });
      header.teachers = this.getTeachers(workingGroup);
    }

    return header;
  }
}
