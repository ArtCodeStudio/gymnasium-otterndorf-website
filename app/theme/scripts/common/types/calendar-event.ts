import type {
  CalendarComponentType,
  CalendarComponent,
  Geo,
  FreeBusy,
} from "ical";

export type CalendarEvent = {
  type: CalendarComponentType;
  summary?: string | undefined;
  description?: string | undefined;
  url?: string | undefined;
  uid?: string | undefined;
  location?: string | undefined;
  start?: Date | undefined;
  end?: Date | undefined;
  rrule?: any;
  exdate?: { [datestr: string]: Date } | undefined;
  recurrences?: CalendarComponent[] | undefined;
  class?: string | undefined;
  transparency?: string | undefined;
  geo?: Geo | undefined;
  completion?: string | undefined;
  completed?: Date | undefined;
  categories?: string[] | undefined;
  freebusy?: FreeBusy | undefined;
  dtstamp?: Date | undefined;
  created?: Date | undefined;
  lastmodified?: Date | undefined;
  recurrenceid?: Date | undefined;
  sameDay?: boolean | undefined;
  startDateOnly: boolean;
  endDateOnly: boolean;
};
