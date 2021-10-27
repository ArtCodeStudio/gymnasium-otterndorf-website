import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-teacher-school-subject-list.component.pug";

export interface Scope {
  schoolSubjects?: any[];
  title: string;
}

export class GyTeacherSchoolSubjectListComponent extends Component {
  public static tagName = "gy-teacher-school-subject-list";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    schoolSubjects: [],
    title: "Unterrichtet",
  };

  static get observedAttributes(): string[] {
    return ["school-subjects", "title"];
  }

  protected requiredAttributes() {
    return ["school-subjects", "title"];
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyTeacherSchoolSubjectListComponent.observedAttributes);
  }

  protected template() {
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
