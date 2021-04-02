import { StrapiGqlSearchResultQuery } from '../../strapi/types';
import { SearchPage } from '../../page/types';
// import { SearchNav } from '../../nav/types';

export interface SearchResultData {
  nav: StrapiGqlSearchResultQuery['navigationLinks'];
  page: SearchPage[];
  post: StrapiGqlSearchResultQuery['blogEntries'];
  blog: any[]; // TODO
}
