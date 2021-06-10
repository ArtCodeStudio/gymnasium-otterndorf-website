import { Component } from "@ribajs/core";
import { replaceBodyPageClass } from "../../../common";

export type Scope = Record<string, never>;

export class SchoolSubjectPageComponent extends Component {
  public static tagName = "school-subject-page";
  public _debug = false;

  scope: Scope = {};

  static get observedAttributes(): string[] {
    return [];
  }

  protected connectedCallback() {
    super.connectedCallback();
    replaceBodyPageClass(this);
    this.init(SchoolSubjectPageComponent.observedAttributes);
  }

  protected template() {
    // See apps/gymott/theme/scripts/ssr/pages/school-subject/school-subject.component.pug
    return null;
  }
}
