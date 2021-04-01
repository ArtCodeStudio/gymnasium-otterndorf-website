import type { SearchResult } from './search-result';
import { Namespace } from './namespace';

export type SearchResults = {
  [ns in Namespace]: SearchResult[];
};
