import type { StrapiImage, StrapiImageFormatType } from "../../common/types";

import { strapiImageFormatter } from "./strapi-image";
/**
 * Get strapi image url for format
 * @see https://strapi.io/documentation/developer-docs/latest/plugins/upload.html#configuration
 */
export const strapiImageUrlFormatter = {
  name: "strapi-image-url",
  read(image: StrapiImage, format: StrapiImageFormatType = "thumbnail") {
    const imageFormat = strapiImageFormatter.read(image, format);
    if (!imageFormat.url.startsWith("http")) {
      const strapiBaseUrl = window?.ssr?.env?.STRAPI_EXTERN_URL || "";
      imageFormat.url = strapiBaseUrl + imageFormat.url;
    }
    return imageFormat.url;
  },
};
