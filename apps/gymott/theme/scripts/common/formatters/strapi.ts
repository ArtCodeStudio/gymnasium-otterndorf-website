/**
 * Prepends the extern strapi url to a url
 */
export const strapiFormatter = {
  name: "strapi",
  read(url: string) {
    if (typeof url !== "string") {
      console.warn(
        `Strapi formatter works only with strings, but got "${typeof url}"`
      );
      return url;
    }
    if (!url.startsWith("http")) {
      const strapiUrl =
        window?.env?.STRAPI_EXTERN_URL ||
        window?.ssr?.env?.STRAPI_EXTERN_URL ||
        "";
      url = strapiUrl + url;
    }
    return url;
  },
};
