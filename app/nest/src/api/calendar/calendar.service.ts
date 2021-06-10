import { Injectable } from '@nestjs/common';
import * as fetch from 'node-fetch';
import * as ical from 'ical';
import type { CalendarComponent } from 'ical';

@Injectable()
export class CalendarService {
  protected parseEvents(data: string, calKey?: string) {
    const parsedData = ical.parseICS(data);
    const now = new Date();
    const events: CalendarComponent[] = [];
    for (const key in parsedData) {
      const component = parsedData[key];
      switch (component.type) {
        case 'VEVENT':
          if (component.start) {
            const date = new Date(component.start);
            // console.debug(component.categories);
            if (date.getTime() > now.getTime()) {
              // console.debug(component);
              if (
                calKey &&
                calKey.trim() !== '' &&
                component.categories &&
                component.categories?.indexOf(calKey) !== -1
              ) {
                events.push(component);
              } else if (!calKey || calKey.trim() === '') {
                events.push(component);
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
          console.warn('Unknown component type: ' + component.type);
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
