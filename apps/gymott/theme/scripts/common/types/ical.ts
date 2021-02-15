declare module "ical/ical" {
  import type { parseICS } from "ical";
  const ical: {
    parseICS: typeof parseICS;
  };
  export = ical;
}
