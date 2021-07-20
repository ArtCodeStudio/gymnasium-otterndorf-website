import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subjects.component.pug";
import { SchoolSubjectService, OpenGraphService } from "../../services";
import {
  SchoolSubject,
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlSchoolSubjectInfoQuery,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  schoolSubjects: SchoolSubject[];
  title: string;
  description: string;
}

export class SchoolSubjectsPageComponent extends PageComponent {
  public static tagName = "school-subjects-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubject = SchoolSubjectService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    schoolSubjects: [],
    header: {},
    title: "Schulfächer",
    description: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(SchoolSubjectsPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async setInfo() {
    const info = await this.schoolSubject.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
    return info;
  }

  protected async setSchoolSubjects() {
    const schoolSubjects =
      (await this.schoolSubject.listBasic()) as SchoolSubject[];
    await this.setInfo();
    if (schoolSubjects) {
      this.scope.schoolSubjects = schoolSubjects;
    }
    return schoolSubjects;
  }

  protected setHeader(
    info: StrapiGqlSchoolSubjectInfoQuery["schoolSubjectInfo"]
  ) {
    this.scope.header = this.schoolSubject.getHeader(
      undefined,
      this.scope.title || info?.title
    );
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph(
    info: StrapiGqlSchoolSubjectInfoQuery["schoolSubjectInfo"]
  ) {
    return await this.openGraph.setSchoolSubjectOverview(
      {
        title: this.scope.header.title,
      },
      info
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setSchoolSubjects();
    const info = await this.setInfo();
    this.setHeader(info);
    await this.setOpenGraph(info);
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
