import { Injectable } from '@nestjs/common';
import fetch from '../../dependencies/fetch';
import * as ical from 'ical';
import type { CalendarEvent } from './types/calendar-event';

@Injectable()
export class CalendarService {
  protected parseEvents(data: string, calKey?: string) {
    const parsedData = ical.parseICS(data);
    const now = new Date();
    const events: CalendarEvent[] = [];
    for (const key in parsedData) {
      const component = parsedData[key];
      switch (component.type) {
        case 'VEVENT':
          if (component.start) {
            // Only get dates in the future
            if (component.start.getTime() > now.getTime()) {
              if (
                !calKey ||
                calKey.trim() === '' ||
                (calKey &&
                  calKey.trim() !== '' &&
                  component.categories &&
                  component.categories?.indexOf(calKey) !== -1)
              ) {
                const startDateOnly = !!(component.start as any).dateOnly;
                const endDateOnly = !!(component.end as any).dateOnly;
                events.push({
                  ...component,
                  startDateOnly,
                  endDateOnly,
                });
              }
            }
          }
          break;
        case 'VALARM':
          break;
        case 'VFREEBUSY':
          break;
        case 'VJOURNAL':
          break;
        case 'VTIMEZONE':
          break;
        case 'VTODO':
          break;
        default:
          console.warn('Unknown calendar component type: ' + component.type);
          break;
      }
    }

    events.sort((a, b) => {
      return new Date(a.start).getTime() - new Date(b.start).getTime();
    });

    return events;
  }

  public async get(calKey?: string) {
    const resp = await fetch(
      'https://gymott.net/iserv/public/calendar?key=049a7daf00db139b3c3e5df3e58ba5d3',
    );
    const data = await resp.text();
    return this.parseEvents(data, calKey);
  }
}
