import { Component } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import {
  StrapiGqlComponentHomeCalendar,
  CalendarEvent,
} from "../../../common/types";
import { CalendarService } from "../../../common/services/calendar";
import pugTemplate from "./gy-section-calendar.component.pug";

export interface Scope {
  section?: StrapiGqlComponentHomeCalendar | null;
  calendarEntries: CalendarEvent[];
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
    return ["section"];F
  }

  constructor() {
    super();
  }

  protected transformCalendarEntries() {
    for (const entry of this.scope.calendarEntries) {
      if (!entry.end || !entry.start) continue;
      const start = new Date(entry.start);
      const end = new Date(entry.end);
      entry.sameDay =
        start.getDate() == end.getDate() &&
        start.getMonth() == end.getMonth() &&
        start.getFullYear() == end.getFullYear();
    }
  }

  protected async getCalendarEntries() {
    this.scope.calendarEntries.push(
      ...(await CalendarService.getInstance().get(
        undefined,
        this.scope.section?.dates || undefined
      ))
    );
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
