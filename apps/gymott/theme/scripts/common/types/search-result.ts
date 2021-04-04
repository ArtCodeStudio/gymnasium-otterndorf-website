export interface SearchResult {
  ref: string;
  score: number;
  ns: string;
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
