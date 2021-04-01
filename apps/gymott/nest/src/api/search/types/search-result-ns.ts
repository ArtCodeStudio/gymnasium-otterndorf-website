import { SearchResult } from './search-result';
import { Namespace } from './namespace';

export interface SearchResultNs extends SearchResult {
  ns: Namespace;
}
