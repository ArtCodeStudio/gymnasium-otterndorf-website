import { StrapiGqlImageFragmentFragment } from '../../strapi/types';

export interface SearchPost {
  id: string;
  title: string;
  slug: string;
  text: string;
  md: string;
  images: StrapiGqlImageFragmentFragment[];
  updatedAt: string;
  href: string;
  author: string;
  category: string;
}
