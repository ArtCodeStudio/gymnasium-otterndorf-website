import { Binder } from "@ribajs/core";

/**
 * Sets the element's download value.
 */
export const blobDownloadBinder: Binder<string> = {
  name: "blob-download",
  async routine(el: HTMLElement, url: string) {
    console.debug("download", url);
    if (!url) {
      console.warn("No url to download!");
      return;
    }
    const data = await fetch(url);
    const blob = await data.blob();
    const objectUrl = URL.createObjectURL(blob);
    el.setAttribute("href", objectUrl);
  },
};
