import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { TeacherService, Teacher } from "../../../common";
import pugTemplate from "./gy-teacher-item.component.pug";

export interface Scope {
  teacher?: Teacher;
  showDate: boolean;
  showAvatar: boolean;
  showBiography: boolean;
  catTextAt: number;
}

export class GyTeacherItemComponent extends Component {
  public static tagName = "gy-teacher-item";
  public _debug = false;
  protected autobind = true;
  protected teacher = TeacherService.getInstance();

  scope: Scope = {
    teacher: undefined,
    showDate: false,
    showAvatar: false,
    showBiography: false,
    catTextAt: -1,
  };

  static get observedAttributes(): string[] {
    return ["teacher", "cat-text-at", "show-date", "show-avatar"];
  }

  protected requiredAttributes() {
    return ["teacher"];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyTeacherItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
