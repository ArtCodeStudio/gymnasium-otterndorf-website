/**
 * Prepends the extern / intern nest url to a url
 */
export const nestFormatter = {
  name: "nest",
  read(url = "") {
    if (typeof url !== "string") {
      console.warn(
        `Nest formatter works only with strings, but got "${typeof url}"`
      );
      return url;
    }
    if (url.startsWith("http")) {
      return url;
    }
    let host =
      window?.ssr?.env?.NEST_REMOTE_URL || window?.env?.NEST_REMOTE_URL || "";

    if (host.endsWith("/")) {
      host = host.substring(0, host.length - 1);
    }

    if (url.startsWith("/")) {
      url = url.substring(1);
    }

    return `${host}/${url}`;
  },
};
