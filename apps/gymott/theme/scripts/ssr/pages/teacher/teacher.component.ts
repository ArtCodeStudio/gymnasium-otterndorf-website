import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./teacher.component.pug";
import { TeacherService } from "../../services";
import { StrapiGqlTeacherDetailFragmentFragment } from "../../../common/types";

export interface Scope {
  params: TeacherPageComponent["ctx"]["params"];
  fullName: string;
  teacher: StrapiGqlTeacherDetailFragmentFragment | null;
}

export class TeacherPageComponent extends PageComponent {
  public static tagName = "teacher-page";
  public _debug = false;
  protected autobind = true;

  protected teacher = TeacherService.getInstance();

  scope: Scope = {
    params: {},
    fullName: "",
    teacher: null,
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
    this.init(TeacherPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.scope.teacher = await this.teacher.get(this.ctx.params.slug);
    if (this.scope.teacher?.first_name) {
      this.scope.fullName = this.scope.teacher?.first_name + " ";
    }
    this.scope.fullName += this.scope.teacher?.name;
    this.head.title = this.scope.fullName;
    document.body.classList.add(TeacherPageComponent.tagName.toLowerCase());
    await super.beforeBind();
  }

  protected async afterBind() {
    await super.afterBind();
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
