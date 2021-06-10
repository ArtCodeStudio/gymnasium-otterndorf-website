/**
 * Prepends the extern strapi url to a url
 */
export const strapiStudentFormatter = {
  name: "strapi-student",
  read(url?: string) {
    if (!url) {
      return "";
    }
    if (typeof url !== "string") {
      console.warn(
        `Strapi student formatter works only with strings, but got "${typeof url}"`
      );
      return url;
    }
    if (!url.startsWith("http")) {
      const strapiStudentUrl =
        window?.env?.STRAPI_STUDENT_EXTERN_URL ||
        window?.ssr?.env?.STRAPI_STUDENT_EXTERN_URL ||
        "";
      url = strapiStudentUrl + url;
    }
    return url;
  },
};
