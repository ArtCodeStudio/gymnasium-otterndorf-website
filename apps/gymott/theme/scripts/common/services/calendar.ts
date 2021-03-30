import { HttpService } from "@ribajs/core";
import { hashCode } from "@ribajs/utils/src/type";
import { defaultCache } from "./cache";
import type { CalendarComponent } from "ical";

export class CalendarService {
  protected static instance: CalendarService;
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

  async get(calendarKey: string, expiresIn: number | string = "5 mins") {
    const cacheKey = hashCode(this.url + calendarKey);
    return defaultCache.resolve<CalendarComponent[]>(
      cacheKey,
      async () => {
        const res = await HttpService.getJSON<CalendarComponent[]>(
          "/api/calendar",
          { calendarKey }
        );
        const events = res.body || [];
        return events;
      },
      expiresIn
    );
  }
}
