/**
 * Prepends the quote url to quote slug
 */
export const studentQuoteFormatter = {
  name: "student-quote",
  read(id?: string) {
    if (!id) {
      return "/students/quote";
    }
    return `/students/quote/${id}`;
  },
};
