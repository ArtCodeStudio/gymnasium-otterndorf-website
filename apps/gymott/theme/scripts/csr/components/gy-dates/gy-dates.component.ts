import { Component, HttpService } from "@ribajs/core";
import { hasChildNodesTrim } from "@ribajs/utils/src/dom";
import { PageService } from "../../services";
import ical from "ical/ical";
import pugTemplate from "./gy-dates.component.pug";

export interface Scope {
  events: any[];
  calendarKey: string;
}

export class GyDatesComponent extends Component {
  public static tagName = "gy-dates";
  public _debug = false;
  protected autobind = true;

  protected pageService = PageService.getInstance();

  scope: Scope = {
    events: [],
    calendarKey: "",
  };

  static get observedAttributes() {
    return ["calendar-key"];
  }

  protected requiredAttributes() {
    return [
      /*"calendar-key"*/
    ];
  }

  constructor() {
    super();
  }

  protected async setDates() {
    // TODO move to custom strapi model and remove from page?
    const calendarKey = this.scope.calendarKey;
    const calendarData = await HttpService.get(
      "/calendar",
      {},
      "text/calendar"
    );

    console.log("calendarData", calendarData);

    // TODO move logic to nest?
    const parsedData = ical.parseICS(calendarData);
    const now = new Date();
    for (const key in parsedData) {
      const element = parsedData[key];
      if (element.type === "VEVENT" && element.start) {
        const date = new Date(element.start);
        console.debug(element.categories);
        if (date.getTime() > now.getTime()) {
          console.debug(element);
          if (
            calendarKey &&
            calendarKey.trim() !== "" &&
            element.categories &&
            element.categories?.indexOf(calendarKey) !== -1
          ) {
            this.scope.events.push(element);
          } else if (!calendarKey || calendarKey.trim() === "") {
            this.scope.events.push(element);
          }
        }
      }
    }

    this.scope.events.sort(function (a, b) {
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    });
  }

  protected async beforeBind() {
    await super.beforeBind();
  }

  protected async afterBind() {
    await this.setDates();
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
