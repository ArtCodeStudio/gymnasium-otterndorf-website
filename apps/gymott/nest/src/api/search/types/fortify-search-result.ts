import type { NsSearchResult } from './ns-search-result';
import { SearchResultData } from '../types';
// import { SearchNav } from '../../nav/types';

export interface FortifySearchResult extends NsSearchResult {
  data:
    | SearchResultData['blog']
    | SearchResultData['nav']
    | SearchResultData['page']
    | SearchResultData['post'];
}
