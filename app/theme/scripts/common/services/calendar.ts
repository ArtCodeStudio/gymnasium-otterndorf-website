import type { CalendarComponent } from "ical";
import { NestService } from "../types";

export class CalendarService extends NestService {
  protected static instance: CalendarService;
  protected url = "/api/calendar";

  protected constructor() {
    super();
  }

  public static getInstance() {
    if (CalendarService.instance) {
      return CalendarService.instance;
    }
    CalendarService.instance = new CalendarService();
    return CalendarService.instance;
  }

  async get(calendarKey?: string, expiresIn: number | string = "5 mins") {
    const url = this.host + this.url;
    let options = {};
    if (calendarKey) {
      options = { calendarKey };
    }
    const res = await this._getCached<CalendarComponent[]>(
      url,
      options,
      expiresIn
    );
    const events = res.body || [];
    return events;
  }
}
