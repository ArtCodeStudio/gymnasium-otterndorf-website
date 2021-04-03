import type { SearchResultExt } from './search-result-ext';
import { SearchResultData } from '../types';
// import { SearchNav } from '../../nav/types';

export interface FortifySearchResult extends SearchResultExt {
  data:
    | SearchResultData['blog']
    | SearchResultData['nav']
    | SearchResultData['page']
    | SearchResultData['post'];
}
