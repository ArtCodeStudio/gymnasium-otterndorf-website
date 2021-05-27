import { getEntryType } from "../helper";
import { EntryType } from "../types";
import { ENTRY_TYPE } from "../constants";

/**
 * Get type for entry like Page, BlogEntry, School Subject and more
 */
export const entryTypeColorFormatter = {
  name: "entry-type-color",
  read(typename?: EntryType) {
    const type = getEntryType(typename);
    switch (type) {
      case ENTRY_TYPE.News:
      case ENTRY_TYPE.Post:
      case ENTRY_TYPE.Blog:
        return "green";
      case ENTRY_TYPE.Page:
        return "cyan";
      case ENTRY_TYPE.SchoolSubject:
        return "greenlight";
      case ENTRY_TYPE.Navigation:
      case ENTRY_TYPE.Calendar:
        return "blue";
      // TODO
      case ENTRY_TYPE.Image:
      case ENTRY_TYPE.Text:
      case ENTRY_TYPE.BlackboardSlideshow:
      case ENTRY_TYPE.Facts:
      case ENTRY_TYPE.GallerySlideshow:
      case ENTRY_TYPE.Slideshow:
        return "muted";
      case ENTRY_TYPE.Unknown:
      default:
        return "red";
    }
  },
};
