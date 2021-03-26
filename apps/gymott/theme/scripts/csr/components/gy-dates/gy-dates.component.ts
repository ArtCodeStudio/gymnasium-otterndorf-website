import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { CalendarService } from "../../services";

import pugTemplate from "./gy-dates.component.pug";

export interface Scope {
  events: any[];
  calendarKey: string;
}

export class GyDatesComponent extends Component {
  public static tagName = "gy-dates";
  public _debug = false;
  protected autobind = true;

  protected calendar = CalendarService.getInstance();

  scope: Scope = {
    events: [],
    calendarKey: "",
  };

  static get observedAttributes() {
    return ["calendar-key"];
  }

  constructor() {
    super();
  }

  protected async getDates() {
    const key = this.scope.calendarKey;
    this.scope.events = await this.calendar.get(key);
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await this.getDates();
    await super.afterBind();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.init(GyDatesComponent.observedAttributes);
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
