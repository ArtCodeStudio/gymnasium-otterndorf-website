import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { CalendarComponent } from "ical";
import { CalendarService } from "../../../common/services/calendar";
import pugTemplate from "./gy-section-calendar.component.pug";

export interface Scope {
  section?: any;
  calendarEntries: CalendarComponent[];
}

export class GySectionCalendarComponent extends Component {
  public static tagName = "gy-section-calendar";
  public _debug = false;
  protected autobind = true;

  scope: Scope = {
    section: null,
    calendarEntries: [],
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

  protected transformCalendarEntries() {
    if (this.scope.section?.dates) {
      this.scope.calendarEntries = this.scope.calendarEntries.slice(
        0,
        this.scope.section.dates
      );
    }

    this.scope.calendarEntries.forEach((e: any) => {
      if (!e.end || !e.start) return;
      const start = new Date(e.start);
      const end = new Date(e.end);
      e.sameDay =
        start.getDate() == end.getDate() &&
        start.getMonth() == end.getMonth() &&
        start.getFullYear() == end.getFullYear();
    });
  }

  protected async getCalendarEntries() {
    this.scope.calendarEntries = await CalendarService.getInstance().get();
    this.transformCalendarEntries();
  }

  protected async beforeBind() {
    await this.getCalendarEntries();
    await super.beforeBind();
  }

  protected connectedCallback() {
    try {
      super.connectedCallback();
      this.init(GySectionCalendarComponent.observedAttributes);
    } catch (error) {
      this.throw(error);
    }
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
