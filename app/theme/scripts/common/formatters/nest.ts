/**
 * Prepends the extern / intern nest url to a url
 */
export const nestFormatter = {
  name: "nest",
  read(url?: string) {
    if (!url) {
      return "";
    }
    if (typeof url !== "string") {
      console.warn(
        `Nest formatter works only with strings, but got "${typeof url}"`
      );
      return url;
    }
    if (!url.startsWith("http")) {
      const host =
        window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_INTERN_URL || "";
      url = host + url;
    }
    return url;
  },
};
