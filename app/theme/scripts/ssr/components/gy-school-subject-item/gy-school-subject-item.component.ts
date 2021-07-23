import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  SchoolSubjectService,
  SectionObject,
  SchoolSubject,
  SectionsService,
} from "../../../common";
import pugTemplate from "./gy-school-subject-item.component.pug";

export interface Scope {
  schoolSubject?: SchoolSubject;
  showDate: boolean;
  catTextAt: number;
  sections: SectionObject;
}

export class GySchoolSubjectItemComponent extends Component {
  public static tagName = "gy-school-subject-item";
  public _debug = false;
  protected autobind = true;
  protected schoolSubject = SchoolSubjectService.getInstance();

  scope: Scope = {
    schoolSubject: undefined,
    showDate: false,
    catTextAt: 300,
    sections: SectionsService.getEmptySectionsObject(),
  };

  static get observedAttributes(): string[] {
    return ["school-subject", "cat-text-at", "show-date"];
  }

  protected requiredAttributes() {
    return ["schoolSubject"];
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySchoolSubjectItemComponent.observedAttributes);
  }

  protected async setSections() {
    if (this.scope.schoolSubject) {
      this.scope.sections = await this.schoolSubject.getSectionsObject(
        this.scope.schoolSubject
      );
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
