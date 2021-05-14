/**
 * Prepends the post / blog entry url to post / blog entry slug
 */
export const postFormatter = {
  name: "post",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/post/${slug}`;
  },
};
