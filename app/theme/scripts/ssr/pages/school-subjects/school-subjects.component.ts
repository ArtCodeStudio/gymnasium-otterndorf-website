import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subjects.component.pug";
import { SchoolSubjectService } from "../../services";
import {
  SchoolSubject,
  PageHeader,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  schoolSubjects: SchoolSubject[];
}

export class SchoolSubjectsPageComponent extends PageComponent {
  public static tagName = "school-subjects-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubject = SchoolSubjectService.getInstance();

  scope: Scope = {
    schoolSubjects: [],
    header: {},
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

  protected async beforeBind() {
    this.head.title = this.ctx.params.slug;
    try {
      const schoolSubjects =
        (await this.schoolSubject.listBasic()) as SchoolSubject[];
      if (schoolSubjects) {
        this.scope.schoolSubjects = schoolSubjects;
        this.scope.header = this.schoolSubject.getHeader();
      }
    } catch (error) {
      this.throw(error);
    }
    this.head.title = this.scope.header.title;
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
