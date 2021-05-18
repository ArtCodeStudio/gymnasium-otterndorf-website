/**
 * Prepends the gallery url to gallery slug
 */
export const galleryFormatter = {
  name: "gallery",
  read(slug?: string, index?: number, gid?: number) {
    if (!slug) {
      return "";
    }
    if (typeof index === "number") {
      gid = gid || 1;
      return `/gallery/${slug}#&gid=${gid}&pid=${index + 1}`;
    }
    return `/gallery/${slug}`;
  },
};
