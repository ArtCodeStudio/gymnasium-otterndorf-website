/**
 * Prepends the mediaCenter url to mediaCenter slug
 */
export const mediaCenterFormatter = {
  name: "media-center",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/media-center/${slug}`;
  },
};
