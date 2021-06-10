import { SearchResult } from "./search-result";
import { TextExpandOptions } from "./text-expand-options";

export interface SearchItem extends SearchResult {
  opts: TextExpandOptions;
}
