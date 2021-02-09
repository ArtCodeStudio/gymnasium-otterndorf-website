import type { StrapiImage, StrapiImageFormatType } from "../../common/types";

import { strapiImageFormatter } from "./strapi-image";
/**
 * Get strapi image name for format
 * @see https://strapi.io/documentation/developer-docs/latest/plugins/upload.html#configuration
 */
export const strapiImageNameFormatter = {
  name: "strapi-image-name",
  read(image: StrapiImage, format: StrapiImageFormatType = "thumbnail") {
    const imageFormat = strapiImageFormatter.read(image, format);
    return imageFormat.name;
  },
};
