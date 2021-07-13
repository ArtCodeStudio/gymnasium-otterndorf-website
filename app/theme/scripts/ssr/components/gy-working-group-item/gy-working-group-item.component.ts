import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  WorkingGroupService,
  SectionObject,
  WorkingGroup,
} from "../../../common";
import pugTemplate from "./gy-working-group-item.component.pug";

export interface Scope {
  workingGroup?: WorkingGroup;
  showDate: boolean;
  catTextAt: number;
  sections: SectionObject;
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
    sections: {},
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

  protected async beforeBind() {
    await super.beforeBind();
    if (this.scope.workingGroup) {
      try {
        this.scope.sections = await this.workingGroup.getSectionsObject(
          this.scope.workingGroup
        );
      } catch (error) {
        this.throw(error);
      }
    }
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
