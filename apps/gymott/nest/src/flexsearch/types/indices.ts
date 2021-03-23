import type { Index } from 'flexsearch';

export interface Indices {
  [key: string]: Index<unknown>;
}
