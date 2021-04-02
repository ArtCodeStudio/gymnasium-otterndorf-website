import type { SearchResult } from '@ribajs/nest-lunr';
import type { Namespace } from './namespace';

export interface NsSearchResult extends SearchResult {
  /**
   * The namespace you have searched in
   */
  ns: Namespace;
}
