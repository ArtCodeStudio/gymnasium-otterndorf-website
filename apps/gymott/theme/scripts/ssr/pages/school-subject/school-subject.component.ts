import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./school-subject.component.pug";
import { SchoolSubjectService } from "../../services";

export interface Scope {
  title: string;
  params: SchoolSubjectPageComponent["ctx"]["params"];
  assets: any[];
  content: any;
  blogEntries: any[];
  calendarKey: string;
  schoolSubject: any;
}

export class SchoolSubjectPageComponent extends PageComponent {
  public static tagName = "school-subject-page";
  public _debug = false;
  protected autobind = true;

  protected schoolSubjectService = SchoolSubjectService.getInstance();

  scope: Scope = {
    title: "{params.slug | capitalize}",
    schoolSubject: {},
    assets: [],
    blogEntries: [],
    params: {},
    content: {},
    calendarKey: "",
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
    this.init(SchoolSubjectPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = "You are " + this.ctx.params.slug;
    try {
      const schoolSubject = await this.schoolSubjectService.get(
        this.ctx.params.slug
      );
      this.scope.schoolSubject = schoolSubject;

      console.debug("schoolSubject", schoolSubject);
      if (schoolSubject) {
        if (schoolSubject?.title) {
          this.scope.title = schoolSubject?.title;
        }
        if (schoolSubject?.content) {
          this.scope.content = schoolSubject.content;
        }
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
