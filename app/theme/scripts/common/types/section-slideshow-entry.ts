import { StrapiGqlImageFragmentFragment } from "./strapi-gql";
import { ThemeColor } from "./theme-color";

export interface SectionSlideshowEntry {
  id: string;
  image: StrapiGqlImageFragmentFragment | null;
  subtitle: string;
  color: ThemeColor | "";
  link: string;
  label: string;
}
