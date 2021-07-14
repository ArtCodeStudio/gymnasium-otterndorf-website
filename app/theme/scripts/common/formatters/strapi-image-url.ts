import type {
  StrapiImage,
  StrapiImageFormatType,
  StrapiGqlImageFragmentFragment,
} from "../types";
import { strapiImageFormatter } from "./strapi-image";
import { strapiFormatter } from "./strapi";

/**
 * Get strapi image url for format
 * @see https://strapi.io/documentation/developer-docs/latest/plugins/upload.html#configuration
 */
export const strapiImageUrlFormatter = {
  name: "strapi-image-url",
  read(
    image: StrapiImage | StrapiGqlImageFragmentFragment,
    format: StrapiImageFormatType | "original" = "thumbnail"
  ) {
    const imageFormat = strapiImageFormatter.read(image, format);
    return strapiFormatter.read(imageFormat.url);
  },
};
