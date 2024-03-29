import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./teachers.component.pug";
import {
  TeacherService,
  SectionsService,
  OpenGraphService,
} from "../../services";
import {
  PageHeader,
  Teacher,
  replaceBodyPageClass,
  StrapiGqlTeacherInfoQuery,
} from "../../../common";

export interface Scope {
  params: TeachersPageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  teachers: Teacher[];
  title: string;
  description: string;
}

export class TeachersPageComponent extends PageComponent {
  public static tagName = "teachers-page";
  public _debug = false;
  protected autobind = true;

  protected teacher = TeacherService.getInstance();
  protected sections = SectionsService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    params: {},
    header: {},
    teachers: [],
    title: "Lehrer",
    description: "",
  };

  static get observedAttributes(): string[] {
    return [];
  }

  constructor() {
    super();
    this.scope.params = this.ctx.params;
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(TeachersPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async getTeachers() {
    const teachers = ((await this.teacher.listDetail()) || []) as Teacher[];
    this.scope.teachers = teachers;
    this.head.title = "Lehrer";
    return teachers;
  }

  protected async setInfo() {
    const info = await this.teacher.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
    return info;
  }

  protected setHeader(
    teachers: Teacher[],
    info: StrapiGqlTeacherInfoQuery["teacherInfo"]
  ) {
    this.scope.header = this.teacher.getHeader(teachers, info);
    this.head.title = this.scope.header.title || this.scope.title;
    return this.scope.header;
  }

  protected async setOpenGraph(info: StrapiGqlTeacherInfoQuery["teacherInfo"]) {
    return await this.openGraph.setTeacherOverview(
      {
        title: this.scope.header.title,
      },
      info
    );
  }

  protected async beforeBind() {
    const teachers = await this.getTeachers();
    const info = await this.setInfo();
    this.setHeader(teachers, info);
    await this.setOpenGraph(info);
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
