/**
 * Prepends the extern strapi url to a url
 */
export const strapiFormatter = {
  name: "strapi",
  read(url?: string) {
    if (!url) {
      return "";
    }
    if (typeof url !== "string") {
      console.warn(
        `Strapi formatter works only with strings, but got "${typeof url}"`
      );
      return url;
    }
    if (url.startsWith("http")) {
      return url;
    }

    let host =
      window?.env?.STRAPI_EXTERN_URL ||
      window?.ssr?.env?.STRAPI_EXTERN_URL ||
      "";

    if (host.endsWith("/")) {
      host = host.substring(0, host.length - 1);
    }

    if (url.startsWith("/")) {
      url = url.substring(1);
    }

    return `${host}/${url}`;
  },
};
