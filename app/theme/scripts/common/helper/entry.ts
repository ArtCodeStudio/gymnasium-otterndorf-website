import { EntryType } from "../types";
import { ENTRY_TYPE } from "../constants";

export const getEntryType = (typename?: EntryType | ENTRY_TYPE) => {
  switch (typename) {
    case "post":
    case "BlogEntry":
      return ENTRY_TYPE.Post;
    case "ComponentContentImage":
      return ENTRY_TYPE.Image;
    case "ComponentContentText":
      return ENTRY_TYPE.Text;
    case "ComponentHomeCalendar":
      return ENTRY_TYPE.Calendar;
    case "ComponentHomeNews":
      return ENTRY_TYPE.News;
    case "ComponentSectionBlackboardSlideshow":
      return ENTRY_TYPE.BlackboardSlideshow;
    case "ComponentSectionFacts":
      return ENTRY_TYPE.Facts;
    case "ComponentSectionGallerySlideshow":
      return ENTRY_TYPE.GallerySlideshow;
    case "ComponentSectionSlideshow":
      return ENTRY_TYPE.Slideshow;
    case "page":
    case "Page":
      return ENTRY_TYPE.Page;
    case "schoolSubject":
    case "Subject":
      return ENTRY_TYPE.SchoolSubject;
    case "WorkingGroup":
    case "workinggroup":
      return ENTRY_TYPE.WorkingGroup;
    case "blog":
      return ENTRY_TYPE.Blog;
    case "nav":
      return ENTRY_TYPE.Navigation;
    case "Teacher":
    case "teacher":
      return ENTRY_TYPE.Teacher;
    case "Home":
      return ENTRY_TYPE.Home;
    case "PodcastFeed":
      return ENTRY_TYPE.Podcast;
    case "PodcastEpisode":
    case "podcast":
      return ENTRY_TYPE.PodcastEpisode;
    default:
      console.error(new Error("Unknown type: " + typename));
      return ENTRY_TYPE.Unknown;
  }
};
