/**
 * Prepends the extern strapi url to a url
 */
export const pageFormatter = {
  name: "page",
  read(slug: string) {
    return `/page/${slug}`;
  },
};
