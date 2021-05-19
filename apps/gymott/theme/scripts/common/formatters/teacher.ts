/**
 * Prepends the teacher url to teacher slug
 */
export const teacherFormatter = {
  name: "teacher",
  read(slug?: string) {
    if (!slug) {
      return "";
    }
    return `/teacher/${slug}`;
  },
};
