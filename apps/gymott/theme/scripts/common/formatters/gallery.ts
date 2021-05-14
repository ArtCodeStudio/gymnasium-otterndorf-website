/**
 * Prepends the gallery url to gallery slug
 */
export const galleryFormatter = {
  name: "gallery",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/gallery/${slug}`;
  },
};
