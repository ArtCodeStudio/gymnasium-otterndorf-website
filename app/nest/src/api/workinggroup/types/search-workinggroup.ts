import { StrapiGqlImageFragmentFragment } from '../../strapi/types';

export interface SearchWorkingGroup {
  id: string;
  title: string;
  slug: string;
  text: string;
  md: string;
  images: StrapiGqlImageFragmentFragment[];
  href: string;
}
