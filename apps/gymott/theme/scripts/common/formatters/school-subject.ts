/**
 * Prepends the school subject url to page slug
 */
export const schoolSubjectFormatter = {
  name: "school-subject",
  read(slug?: string) {
    if (!slug) {
      return "/school-subject";
    }
    return `/school-subject/${slug}`;
  },
};
