/**
 * Prepends the extern strapi url to a url
 */
export const schoolSubjectFormatter = {
  name: "schoolsubject",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/schulfach/${slug}`;
  },
};
