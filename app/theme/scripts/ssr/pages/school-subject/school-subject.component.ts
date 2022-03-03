import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subject.component.pug";
import { SchoolSubjectService, OpenGraphService } from "../../services";
import {
  SchoolSubject,
  Section,
  PageHeader,
  TeacherBasic,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  sections: Section[];
  teachers: TeacherBasic[];
  header: PageHeader | Record<string, never>;
  schoolSubject: SchoolSubject | null;
}

export class SchoolSubjectPageComponent extends PageComponent {
  public static tagName = "school-subject-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubject = SchoolSubjectService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    schoolSubject: null,
    sections: [],
    teachers: [],
    header: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(SchoolSubjectPageComponent.observedAttributes);
  }

  protected async setSchoolSubject() {
    if (!this.ctx.params?.slug) {
      throw new Error("Slug is not defined!");
    }
    const schoolSubject = await this.schoolSubject.getDetail(
      this.ctx.params.slug
    );
    this.scope.schoolSubject = schoolSubject || null;
    return schoolSubject as SchoolSubject;
  }

  protected setHeader(schoolSubject: SchoolSubject) {
    this.scope.header = this.schoolSubject.getHeader(schoolSubject);
    if (this.scope.header) {
      this.head.title = this.scope.header.title;
    }
    return this.scope.header;
  }

  protected async setSections(schoolSubject: SchoolSubject) {
    this.scope.sections = await this.schoolSubject.getSections(schoolSubject);
    return this.scope.sections;
  }

  protected setTeachers(schoolSubject: SchoolSubject) {
    if (schoolSubject.teachers) {
      this.scope.teachers = this.schoolSubject.getTeachers(schoolSubject);
    }
    return this.scope.teachers;
  }

  protected async setOpenGraph(schoolSubject: SchoolSubject) {
    return await this.openGraph.setSchoolSubject(
      {
        title: this.scope.header.title,
      },
      schoolSubject
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    const schoolSubject = await this.setSchoolSubject();
    this.setHeader(schoolSubject);
    await this.setSections(schoolSubject);
    this.setTeachers(schoolSubject);
    await this.setOpenGraph(schoolSubject);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
