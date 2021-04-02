import { StrapiGqlSearchResultQuery } from '../../strapi/types';
import { SearchPage } from '../../page/types';
import { SearchNav } from '../../nav/types';
import { SearchPost } from '../../post/types';

export interface SearchResultData {
  nav: SearchNav[];
  page: SearchPage[];
  post: SearchPost[];
  blog: any[]; // TODO
}
