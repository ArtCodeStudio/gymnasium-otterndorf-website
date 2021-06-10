import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./teacher.component.pug";
import { TeacherService } from "../../services";
import { PageHeader, Teacher, replaceBodyPageClass } from "../../../common";

export interface Scope {
  params: TeacherPageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  teachers: Teacher[];
}

export class TeacherPageComponent extends PageComponent {
  public static tagName = "teacher-page";
  public _debug = false;
  protected autobind = true;

  protected teacher = TeacherService.getInstance();

  scope: Scope = {
    params: {},
    header: {},
    teachers: [],
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
    this.init(TeacherPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  /**
   * Used if a slug is defined
   */
  protected async getTeacher(slug: string) {
    const teacher: Teacher | null = await this.teacher.getDetail(slug);
    if (!teacher) {
      this.throw(new Error(`Teacher with slug "${slug}" not found!`));
      return;
    }
    this.scope.teachers = [teacher];
    this.head.title = teacher.fullName;
  }

  /**
   * Used if no slug is defined
   */
  protected async getTeachers() {
    const teachers = ((await this.teacher.listDetail()) || []) as Teacher[];
    if (!teachers || !teachers.length) {
      this.throw(new Error(`No teachers found!`));
      return;
    }
    this.scope.teachers = teachers;
    this.head.title = "Lehrer";
  }

  protected async beforeBind() {
    if (this.ctx.params.slug) {
      await this.getTeacher(this.ctx.params.slug);
    } else {
      await this.getTeachers();
    }

    this.scope.header = this.teacher.getHeader(this.scope.teachers);

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
