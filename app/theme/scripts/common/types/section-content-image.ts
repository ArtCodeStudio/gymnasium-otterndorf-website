import { StrapiGqlUploadFile } from "./strapi-gql";

export interface SectionContentImage {
  __typename: "ComponentContentImage";
  id: string;
  image: Pick<StrapiGqlUploadFile, "formats"> | null;
  caption: string;
}
