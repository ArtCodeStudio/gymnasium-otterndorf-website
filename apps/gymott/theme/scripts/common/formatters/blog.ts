/**
 * Prepends the extern strapi url to a url
 */
export const blogFormatter = {
  name: "blog",
  read(slug: string) {
    return `/blog/${slug}`;
  },
};
