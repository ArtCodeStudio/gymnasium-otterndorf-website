import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./teacher.component.pug";
import { TeacherService, SectionsService } from "../../services";
import {
  Section,
  PageHeader,
  Teacher,
  replaceBodyPageClass,
  StrapiGqlComponentAttachmentAssetsFragmentFragment,
} from "../../../common";

export interface Scope {
  assets: Teacher["assets"];
  sections: Section[];
  params: TeacherPageComponent["ctx"]["params"];
  header: PageHeader | Record<string, never>;
  teachers: Teacher[];
  title: string;
  description: string;
}

export class TeacherPageComponent extends PageComponent {
  public static tagName = "teacher-page";
  public _debug = false;
  protected autobind = true;

  protected teacher = TeacherService.getInstance();
  protected sections = SectionsService.getInstance();

  scope: Scope = {
    sections: [],
    assets: [],
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
    this.init(TeacherPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected getTeacherAssets(teacher: Teacher) {
    const assets = [];
    if (teacher.assets) {
      for (const asset of teacher.assets) {
        if (asset) {
          assets.push(asset);
        }
      }
    }
    return assets;
  }

  protected getAssets(teacher: Teacher, sections: Section[]) {
    const assets: StrapiGqlComponentAttachmentAssetsFragmentFragment[] = [];
    assets.push(...this.sections.getAssetsFromSections(sections));
    assets.push(...this.getTeacherAssets(teacher));
    return assets;
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
    this.scope.title = teacher.name;
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

  protected async setInfo() {
    const info = await this.teacher.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
  }

  protected async beforeBind() {
    if (this.ctx.params.slug) {
      await this.getTeacher(this.ctx.params.slug);
      const teacher = this.scope.teachers[0];
      if (teacher) {
        // this.scope.sections = await this.teacher.getSections(teacher);
        this.scope.assets = this.getAssets(teacher, this.scope.sections);
      }
    } else {
      await this.getTeachers();
    }

    await this.setInfo();

    this.head.title = this.scope.title;

    this.scope.header = this.teacher.getHeader(
      this.scope.teachers,
      this.scope.title
    );

    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
