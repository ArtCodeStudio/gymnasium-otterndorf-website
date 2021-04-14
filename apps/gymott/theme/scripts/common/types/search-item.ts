import { SearchResult } from "./search-result";

export interface SearchItem extends SearchResult {
  opts: {
    cutAt: number;
    expandable: boolean;
    expanded: boolean;
  };
}
