import { SectionSlideshowLink } from "../types";
import { postFormatter } from "./post";
import { pageFormatter } from "./page";

/**
 * Prepends the extern strapi url to a url
 */
export const slideshowLinkFormatter = {
  name: "slideshow-link",
  read(link: SectionSlideshowLink) {
    if (link.slug) {
      switch (link.__typename) {
        case "BlogEntry":
          return postFormatter.read(link.slug);
        case "PageEntry":
          return pageFormatter.read(link.slug);
      }
    }
  },
};
