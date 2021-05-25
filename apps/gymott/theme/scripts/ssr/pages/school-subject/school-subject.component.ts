import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subject.component.pug";
import { SchoolSubjectService } from "../../services";
import {
  StrapiGqlSchoolSubjectFragmentFragment,
  Section,
  PageHeader,
  TeacherBasic,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  title: string;
  params: SchoolSubjectPageComponent["ctx"]["params"];
  sections: Section[];
  teachers: TeacherBasic[];
  header: PageHeader | Record<string, never>;
  schoolSubject: StrapiGqlSchoolSubjectFragmentFragment | null;
}

export class SchoolSubjectPageComponent extends PageComponent {
  public static tagName = "school-subject-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubject = SchoolSubjectService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    schoolSubject: null,
    params: {},
    sections: [],
    teachers: [],
    header: {},
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
    this.init(SchoolSubjectPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = this.ctx.params.slug;
    try {
      const schoolSubject = await this.schoolSubject.get(this.ctx.params.slug);
      this.scope.schoolSubject = schoolSubject || null;

      console.debug("this.scope.schoolSubject", this.scope.schoolSubject);

      if (schoolSubject) {
        if (schoolSubject?.title) {
          this.scope.title = schoolSubject?.title;
        }
        this.scope.sections = await this.schoolSubject.getSections(
          schoolSubject
        );

        if (this.scope.schoolSubject?.teachers) {
          this.scope.teachers = this.schoolSubject.getTeachers(schoolSubject);
        }

        this.scope.header = this.schoolSubject.getHeader(schoolSubject);
      }
    } catch (error) {
      this.throw(error);
    }
    this.head.title = this.scope.title;
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
