import { NavigationService } from "../services";
import { StrapiGqlComponentNavigationNavigationLevelEntry } from "../types";

/**
 * Get the url from strapi navigation item response
 */
export const navItemUrlFormatter = {
  name: "nav-item-url",
  read(item: StrapiGqlComponentNavigationNavigationLevelEntry) {
    return NavigationService.getInstance().getHref(item)
  },
};
