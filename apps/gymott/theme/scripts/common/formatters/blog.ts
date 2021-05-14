/**
 * Prepends the blog url to blog slug
 */
export const blogFormatter = {
  name: "blog",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/blog/${slug}`;
  },
};
