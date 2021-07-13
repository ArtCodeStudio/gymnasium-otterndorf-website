import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import pugTemplate from "./gy-section-former-students.component.pug";
import {
  SectionFormerStudents,
  StrapiGqlFormerStudentDetailFragmentFragment,
} from "../../../common/types";
import { FormerStudentService } from "../../services";

export interface Scope {
  section?: SectionFormerStudents | null;
  formerStudents: StrapiGqlFormerStudentDetailFragmentFragment[];
}

export class GySectionFormerStudentsComponent extends Component {
  public static tagName = "gy-section-former-students";
  public formerStudent = FormerStudentService.getInstance();
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    formerStudents: [],
  };

  static get observedAttributes(): string[] {
    return ["section"];
  }

  protected requiredAttributes() {
    return ["section"];
  }

  constructor() {
    super();
  }

  protected async beforeBind() {
    this.scope.formerStudents = (await this.formerStudent.listDetail(
      [],
      this.scope.section?.limit || 15
    )) as StrapiGqlFormerStudentDetailFragmentFragment[];
    await super.beforeBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GySectionFormerStudentsComponent.observedAttributes);
  }

  protected template() {
    // If this component has no content that was rendered server side
    if (!hasChildNodesTrim(this)) {
      return pugTemplate(this.scope);
    } else {
      return null;
    }
  }
}
