import { StrapiGqlComponentNavigationNavigationLevelEntry } from "../types";

/**
 * Get the label from strapi navigation item response
 */
export const navItemLabelFormatter = {
  name: "nav-item-label",
  read(item: StrapiGqlComponentNavigationNavigationLevelEntry) {
    return item.navigation_link?.title || item.title;
  },
};
