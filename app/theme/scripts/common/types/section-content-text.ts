import { StrapiGqlComponentContentTextFragmentFragment } from "./strapi-gql";

export interface SectionContentText
  extends StrapiGqlComponentContentTextFragmentFragment {
  /** Markdown text */
  text: string;
}
