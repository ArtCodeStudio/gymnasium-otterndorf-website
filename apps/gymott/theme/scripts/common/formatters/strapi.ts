/**
 * Prepends the extern strapi url to a url
 */
export const strapiFormatter = {
  name: "strapi",
  read(url: string) {
    if (!url.startsWith("http")) {
      url =
        window?.ssr?.env?.STRAPI_EXTERN_URL + url ||
        window?.ssr?.env?.STRAPI_EXTERN_URL + url ||
        url;
    }
    return url;
  },
};
