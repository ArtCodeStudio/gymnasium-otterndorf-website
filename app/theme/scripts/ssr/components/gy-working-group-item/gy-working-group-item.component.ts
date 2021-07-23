import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  WorkingGroupService,
  SectionObject,
  WorkingGroup,
  SectionsService,
  StrapiGqlImageFragmentFragment,
} from "../../../common";
import pugTemplate from "./gy-working-group-item.component.pug";

export interface Scope {
  workingGroup?: WorkingGroup;
  showDate: boolean;
  catTextAt: number;
  sections: SectionObject;
  md: string;
  image?: StrapiGqlImageFragmentFragment;
}

export class GyWorkingGroupItemComponent extends Component {
  public static tagName = "gy-working-group-item";
  public _debug = false;
  protected autobind = true;
  protected workingGroup = WorkingGroupService.getInstance();

  scope: Scope = {
    workingGroup: undefined,
    showDate: false,
    catTextAt: 300,
    sections: SectionsService.getEmptySectionsObject(),
    md: "",
    image: undefined,
  };

  static get observedAttributes(): string[] {
    return ["working-group", "cat-text-at", "show-date"];
  }

  protected requiredAttributes() {
    return ["workingGroup"];
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyWorkingGroupItemComponent.observedAttributes);
  }

  protected async setSections() {
    if (this.scope.workingGroup) {
      this.scope.sections = await this.workingGroup.getSectionsObject(
        this.scope.workingGroup
      );
      this.scope.md =
        this.scope.sections.texts[0]?.text ||
        this.scope.sections.podcastEpisodes[0]?.description ||
        "";

      this.scope.image =
        this.scope.sections.images[0]?.image ||
        this.scope.sections.podcastEpisodes[0]?.image ||
        undefined;
    }
    return this.scope.sections;
  }

  protected async beforeBind() {
    await super.beforeBind();
    await this.setSections();
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
