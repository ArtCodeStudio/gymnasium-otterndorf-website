import { StrapiGqlUploadFile } from "./strapi-gql";
import { ThemeColor } from "./theme-color";

export interface SectionSlideshowEntry {
  id: string;
  image: Pick<StrapiGqlUploadFile, "formats"> | null;
  subtitle: string;
  color: ThemeColor | "";
  link: string;
  label: string;
}
