import type {
  CalendarComponentType,
  CalendarComponent,
  FreeBusy,
  Geo,
} from 'ical';

export interface CalendarEvent {
  type: CalendarComponentType;
  summary?: string;
  description?: string;
  url?: string;
  uid?: string;
  location?: string;
  start?: Date;
  end?: Date;
  rrule?: any;
  exdate?: { [datestr: string]: Date };
  recurrences?: CalendarComponent[];
  class?: string;
  transparency?: string;
  geo?: Geo;
  completion?: string;
  completed?: Date;
  categories?: string[];
  freebusy?: FreeBusy;
  dtstamp?: Date;
  created?: Date;
  lastmodified?: Date;
  recurrenceid?: Date;
  startDateOnly: boolean;
  endDateOnly: boolean;
}
