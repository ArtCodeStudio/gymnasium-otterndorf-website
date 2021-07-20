import { PageComponent } from "@ribajs/ssr";
import pugTemplate from "./working-groups.component.pug";
import { WorkingGroupService, OpenGraphService } from "../../services";
import {
  WorkingGroup,
  PageHeader,
  replaceBodyPageClass,
  StrapiGqlWorkingGroupInfoQuery,
} from "../../../common";

export interface Scope {
  header: PageHeader | Record<string, never>;
  workingGroups: WorkingGroup[];
  title: string;
  description: string;
}

export class WorkingGroupsPageComponent extends PageComponent {
  public static tagName = "working-groups-page";
  public _debug = false;
  protected autobind = true;

  protected workingGroup = WorkingGroupService.getInstance();
  protected openGraph = OpenGraphService.getInstance();

  scope: Scope = {
    workingGroups: [],
    header: {},
    title: "AGs",
    description: "",
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

  protected async setWorkingGroups() {
    const workingGroups =
      (await this.workingGroup.listBasic()) as WorkingGroup[];

    if (workingGroups) {
      this.scope.workingGroups = workingGroups;
    }
    return workingGroups;
  }

  protected async setInfo() {
    const info = await this.workingGroup.info();
    if (info) {
      this.scope.title = info.title || this.scope.title;
      this.scope.description = info.description || this.scope.description;
    }
    return info;
  }

  protected setHeader(
    info: StrapiGqlWorkingGroupInfoQuery["workingGroupInfo"]
  ) {
    this.scope.header = this.workingGroup.getHeader(
      undefined,
      this.scope.title || info?.title
    );
    this.head.title = this.scope.header.title;
    return this.scope.header;
  }

  protected async setOpenGraph(
    info: StrapiGqlWorkingGroupInfoQuery["workingGroupInfo"]
  ) {
    return await this.openGraph.setWorkingGroupOverview(
      {
        title: this.scope.header.title,
      },
      info
    );
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setWorkingGroups();
    const info = await this.setInfo();
    this.setHeader(info);
    await this.setOpenGraph(info);
  }

  protected template() {
    return pugTemplate(this.scope);
  }
}
