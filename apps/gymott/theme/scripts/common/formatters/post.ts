/**
 * Prepends the extern strapi url to a url
 */
export const postFormatter = {
  name: "post",
  read(slug: string) {
    return `/post/${slug}`;
  },
};
