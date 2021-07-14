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
  title: string;
  description: string;
}

export class SchoolSubjectsPageComponent extends PageComponent {
  public static tagName = "school-subjects-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubject = SchoolSubjectService.getInstance();

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
  }

  protected async beforeBind() {
    try {
      const schoolSubjects =
        (await this.schoolSubject.listBasic()) as SchoolSubject[];
      await this.setInfo();
      if (schoolSubjects) {
        this.scope.schoolSubjects = schoolSubjects;
        this.scope.header = this.schoolSubject.getHeader(
          undefined,
          this.scope.title
        );
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
