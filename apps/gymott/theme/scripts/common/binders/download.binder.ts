import { Binder } from "@ribajs/core";

/**
 * Sets the element's download value.
 */
export const downloadBinder: Binder<string> = {
  name: "download",
  routine(el: HTMLElement, value: string) {
    console.log("download", value);
    el.addEventListener("click", async () => {
      const data = await fetch(value);
      const blob = await data.blob();
      const url = URL.createObjectURL(blob);
      console.log("url", url);
    });
  },
};
