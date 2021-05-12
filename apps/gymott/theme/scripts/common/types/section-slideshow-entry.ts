import { StrapiGqlUploadFile } from "./strapi-gql";

export interface SectionSlideshowEntry {
  id: string;
  image: Pick<StrapiGqlUploadFile, "formats"> | null;
  subtitle: string;
  link?: string;
}
