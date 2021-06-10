/**
 *
 */
export const removeEmptyClockFormatter = {
  name: "remove-empty-clock",
  read(time?: string) {
    if (!time) {
      return "";
    }
    return time.replace(" um 00:00 Uhr", "");
  },
};
