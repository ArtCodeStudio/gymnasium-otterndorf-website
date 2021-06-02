import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subject.component.pug";
import { SchoolSubjectService } from "../../services";
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

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    try {
      const schoolSubject = await this.schoolSubject.getDetail(
        this.ctx.params.slug
      );
      this.scope.schoolSubject = schoolSubject || null;

      if (schoolSubject) {
        if (schoolSubject?.title) {
          this.head.title = this.ctx.params.slug;
        }
        this.scope.sections = await this.schoolSubject.getSections(
          schoolSubject
        );

        if (this.scope.schoolSubject?.teachers) {
          this.scope.teachers = this.schoolSubject.getTeachers(schoolSubject);
        }

        this.scope.header = this.schoolSubject.getHeader(schoolSubject);
        if (this.scope.header) {
          this.head.title = this.scope.header.title;
        }
      }
    } catch (error) {
      this.throw(error);
    }
    await super.beforeBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
