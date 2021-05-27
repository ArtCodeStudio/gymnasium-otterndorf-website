import { getEntryType } from "../helper";
import { EntryType } from "../types";
import { ENTRY_TYPE } from "../constants";

/**
 * Get type for entry like Page, BlogEntry, School Subject and more
 */
export const entryTypeNameFormatter = {
  name: "entry-type-name",
  read(typename?: EntryType) {
    const type = getEntryType(typename);
    switch (type) {
      case ENTRY_TYPE.Post:
        return "Artikel";
      case ENTRY_TYPE.Page:
        return "Seite";
      case ENTRY_TYPE.Image:
        return "Bild";
      case ENTRY_TYPE.Text:
        return "Text";
      case ENTRY_TYPE.Calendar:
        return "Kalender";
      case ENTRY_TYPE.News:
        return "Aktuelles";
      case ENTRY_TYPE.BlackboardSlideshow:
        return "Schultafel";
      case ENTRY_TYPE.Facts:
        return "In Zahlen";
      case ENTRY_TYPE.GallerySlideshow:
        return "Gallery";
      case ENTRY_TYPE.Slideshow:
        return "Slideshow";
      case ENTRY_TYPE.SchoolSubject:
        return "Schulfach";
      case ENTRY_TYPE.Blog:
        return "Blog";
      case ENTRY_TYPE.Navigation:
        return "Navigation";
      case ENTRY_TYPE.Unknown:
        return "Unbekannter Type: " + typename;
      default:
        return "Unbekannter Type: " + typename;
    }
  },
};
