import type { StrapiImage, StrapiImageFormatType } from "../types";
import { strapiImageFormatter } from "./strapi-image";
import { strapiStudentFormatter } from "./strapi-student";

/**
 * Get strapi image url for format
 * @see https://strapi.io/documentation/developer-docs/latest/plugins/upload.html#configuration
 */
export const strapiStudentImageUrlFormatter = {
  name: "strapi-student-image-url",
  read(image: StrapiImage, format: StrapiImageFormatType = "thumbnail") {
    const imageFormat = strapiImageFormatter.read(image, format);
    return strapiStudentFormatter.read(imageFormat.url);
  },
};
