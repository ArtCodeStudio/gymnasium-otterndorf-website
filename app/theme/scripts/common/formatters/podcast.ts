/**
 * Prepends the podcast url to podcast episode slug
 */
export const podcastFormatter = {
  name: "podcast",
  read(slug?: string) {
    if (!slug) {
      return "/podcast";
    }
    return `/podcast/${slug}`;
  },
};
