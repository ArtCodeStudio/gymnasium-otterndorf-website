import type { MatchData } from 'lunr';

export interface MatchDataExt extends MatchData {
  metadata: {
    [word: string]: {
      [prop: string]: {
        position: number[][];
      };
    };
  };
}
