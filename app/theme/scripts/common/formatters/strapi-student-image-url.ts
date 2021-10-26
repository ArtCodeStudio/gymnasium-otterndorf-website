import { strapiImageFormatter, StrapiImage, StrapiImageFormatType } from "@ribajs/strapi";
import { strapiStudentFormatter } from "./strapi-student";

/**
 * Get strapi image url for format
 * @see https://strapi.io/documentation/developer-docs/latest/plugins/upload.html#configuration
 */
export const strapiStudentImageUrlFormatter = {
  name: "strapi-student-image-url",
  read(
    image: StrapiImage,
    format: StrapiImageFormatType | "original" = "thumbnail"
  ) {
    const imageFormat = strapiImageFormatter.read(image, format);
    return strapiStudentFormatter.read(imageFormat?.url);
  },
};
