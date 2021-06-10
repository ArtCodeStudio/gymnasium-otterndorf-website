/**
 * Prepends the page url to page slug
 */
export const pageFormatter = {
  name: "page",
  read(slug?: string) {
    if (!slug) {
      return "/page";
    }
    return `/page/${slug}`;
  },
};
