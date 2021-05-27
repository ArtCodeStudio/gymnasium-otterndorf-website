import { SearchNamespace } from "./search-namespace";

export interface SearchResult {
  ref: string;
  score: number;
  ns: SearchNamespace;
  matchData: {
    metadata: {
      [term: string]: {
        [prop: string]: {
          position: number[][];
        };
      };
    };
  };
  data: {
    [prop: string]: string;
  };
}
