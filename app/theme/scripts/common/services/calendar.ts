import { HttpService } from "@ribajs/core";
import { hashCode } from "@ribajs/utils/src/type";
import { defaultCache } from "./cache";
import type { CalendarComponent } from "ical";

export class CalendarService {
  protected static instance: CalendarService;
  protected host =
    window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_INTERN_URL || "";
  protected url = "/api/calendar";

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (CalendarService.instance) {
      return CalendarService.instance;
    }
    CalendarService.instance = new CalendarService();
    return CalendarService.instance;
  }

  async get(calendarKey?: string, expiresIn: number | string = "5 mins") {
    const cacheKey = hashCode(this.url + calendarKey);
    return defaultCache.resolve<CalendarComponent[]>(
      cacheKey,
      async () => {
        let options = {};
        if (calendarKey) {
          options = { calendarKey };
        }
        // console.debug(
        //   "[CalendarService] get url",
        //   this.host + "/api/calendar/"
        // );
        const res = await HttpService.getJSON<CalendarComponent[]>(
          this.host + "/api/calendar/",
          options
        );
        const events = res.body || [];
        // console.debug("[CalendarService] events", events);
        return events;
      },
      expiresIn
    );
  }
}
