import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./working-groups.component.pug";
import { WorkingGroupService } from "../../services";
import {
  WorkingGroup,
  PageHeader,
  replaceBodyPageClass,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  workingGroups: WorkingGroup[];
}

export class WorkingGroupsPageComponent extends PageComponent {
  public static tagName = "working-groups-page";
  public _debug = false;
  protected autobind = true;

  protected workingGroup = WorkingGroupService.getInstance();

  scope: Scope = {
    workingGroups: [],
    header: {},
  };

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(WorkingGroupsPageComponent.observedAttributes);
  }

  protected requiredAttributes(): string[] {
    return [];
  }

  protected async beforeBind() {
    this.head.title = this.ctx.params.slug;
    try {
      const workingGroups =
        (await this.workingGroup.listBasic()) as WorkingGroup[];
      if (workingGroups) {
        this.scope.workingGroups = workingGroups;
        this.scope.header = this.workingGroup.getHeader();
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
