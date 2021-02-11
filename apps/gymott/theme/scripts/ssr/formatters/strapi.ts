/**
 * Prepends the extern strapi url to a url
 */
export const strapiFormatter = {
  name: "strapi",
  read(url: string) {
    if (!url.startsWith("http")) {
      const strapiBaseUrl = window?.ssr?.env?.STRAPI_EXTERN_URL || "";
      url = strapiBaseUrl + url;
    }
    return url;
  },
};
