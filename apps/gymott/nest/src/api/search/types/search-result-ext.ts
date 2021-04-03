import type { SearchResult } from '@ribajs/nest-lunr';
import type { MatchDataExt } from './match-data-ext';
import type { Namespace } from './namespace';

export interface SearchResultExt extends SearchResult {
  /**
   * The namespace you have searched in
   */
  ns: Namespace;
  /**
   * A cloned collection of metadata associated with this document.
   */
  matchData: MatchDataExt;
}
