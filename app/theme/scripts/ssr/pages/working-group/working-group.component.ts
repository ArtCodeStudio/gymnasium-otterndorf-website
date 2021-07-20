import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./working-group.component.pug";
import { WorkingGroupService, OpenGraphService } from "../../services";
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
  protected openGraph = OpenGraphService.getInstance();

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

  protected async setWorkingGroup(slug: string) {
    const workingGroup = await this.workingGroup.getDetail(slug);
    this.scope.workingGroup = workingGroup || null;
    return workingGroup;
  }

  protected setHeader(workingGroup: WorkingGroup) {
    this.scope.header = this.workingGroup.getHeader(workingGroup);
    if (this.scope.header) {
      this.head.title = this.scope.header.title;
    }
  }

  protected setTeachers(workingGroup: WorkingGroup) {
    if (workingGroup.teachers) {
      this.scope.teachers = this.workingGroup.getTeachers(workingGroup);
    }
    return this.scope.teachers;
  }

  protected async setSections(workingGroup: WorkingGroup) {
    this.scope.sections = await this.workingGroup.getSections(workingGroup);
    return this.scope.sections;
  }

  protected async setOpenGraph(workingGroup: WorkingGroup) {
    return await this.openGraph.setWorkingGroup(
      {
        title: this.scope.header.title,
      },
      workingGroup
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    const workingGroup = await this.setWorkingGroup(this.ctx.params.slug);
    if (workingGroup) {
      this.setHeader(workingGroup);
      this.setTeachers(workingGroup);
      await this.setSections(workingGroup);
      await this.setOpenGraph(workingGroup);
    }
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
