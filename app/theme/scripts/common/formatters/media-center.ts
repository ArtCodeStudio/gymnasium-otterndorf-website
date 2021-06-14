/**
 * Prepends the mediaCenter url to mediaCenter slug
 */
export const mediaCenterFormatter = {
  name: "media-center",
  read(slug?: string | null) {
    if (!slug) {
      return "";
    }
    return `/media-center/${slug}`;
  },
};
