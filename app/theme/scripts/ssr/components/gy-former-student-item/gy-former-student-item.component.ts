import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  FormerStudentService,
  StrapiGqlFormerStudentDetailFragmentFragment,
} from "../../../common";
import pugTemplate from "./gy-former-student-item.component.pug";

export interface Scope {
  formerStudent?: StrapiGqlFormerStudentDetailFragmentFragment;
}

export class GyFormerStudentItemComponent extends Component {
  public static tagName = "gy-former-student-item";
  public _debug = false;
  protected autobind = true;
  protected formerStudent = FormerStudentService.getInstance();

  scope: Scope = {
    formerStudent: undefined,
  };

  static get observedAttributes(): string[] {
    return ["former-student"];
  }

  protected requiredAttributes() {
    return ["former-student"];
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyFormerStudentItemComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
