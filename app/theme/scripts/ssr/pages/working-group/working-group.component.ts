import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./working-group.component.pug";
import { WorkingGroupService } from "../../services";
import {
  WorkingGroup,
  Section,
  PageHeader,
  TeacherBasic,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  sections: Section[];
  teachers: TeacherBasic[];
  header: PageHeader | Record<string, never>;
  workingGroup: WorkingGroup | null;
}

export class WorkingGroupPageComponent extends PageComponent {
  public static tagName = "working-group-page";
  public _debug = false;
  protected autobind = true;

  protected workingGroup = WorkingGroupService.getInstance();

  scope: Scope = {
    workingGroup: null,
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
    this.init(WorkingGroupPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    try {
      const workingGroup = await this.workingGroup.getDetail(
        this.ctx.params.slug
      );
      this.scope.workingGroup = workingGroup || null;

      if (workingGroup) {
        if (workingGroup?.title) {
          this.head.title = this.ctx.params.slug;
        }
        this.scope.sections = await this.workingGroup.getSections(workingGroup);

        if (this.scope.workingGroup?.teachers) {
          this.scope.teachers = this.workingGroup.getTeachers(workingGroup);
        }

        this.scope.header = this.workingGroup.getHeader(workingGroup);
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
