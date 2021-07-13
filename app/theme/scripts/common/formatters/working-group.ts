/**
 * Prepends the working group url to page slug
 */
export const workingGroupFormatter = {
  name: "working-group",
  read(slug?: string) {
    if (!slug) {
      return "/working-group";
    }
    return `/working-group/${slug}`;
  },
};
