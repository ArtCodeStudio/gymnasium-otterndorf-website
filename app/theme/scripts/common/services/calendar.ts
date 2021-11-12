import { NestService, CalendarEvent } from "../types";

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

  async get(
    calendarKey?: string,
    limit = 10,
    expiresIn: number | string = "12h"
  ) {
    const url = this.host + this.url;
    let options = {};
    if (calendarKey) {
      options = { calendarKey };
    }
    const res = await this._getCached<CalendarEvent[]>(url, options, expiresIn);
    let events = res?.body || [];

    if (events.length >= limit) {
      events = events.slice(0, limit);
    }

    return events;
  }
}
