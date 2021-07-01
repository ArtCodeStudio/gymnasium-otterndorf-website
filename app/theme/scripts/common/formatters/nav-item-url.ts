import { NavigationService } from "../services";
import {
  StrapiGqlComponentNavigationNavigationLevelEntry,
  NavigationLink,
} from "../types";

/**
 * Get the url from strapi navigation item response
 */
export const navItemUrlFormatter = {
  name: "nav-item-url",
  read(
    item?:
      | StrapiGqlComponentNavigationNavigationLevelEntry
      | NavigationLink
      | null
  ) {
    if (!item) {
      return undefined;
    }
    return NavigationService.getInstance().getHref(item);
  },
};
