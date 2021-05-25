/**
 * Prepends the teacher url to teacher slug
 */
export const teacherFormatter = {
  name: "teacher",
  read(slug?: string) {
    if (!slug) {
      return `/teacher`;
    }
    return `/teacher/${slug}`;
  },
};
