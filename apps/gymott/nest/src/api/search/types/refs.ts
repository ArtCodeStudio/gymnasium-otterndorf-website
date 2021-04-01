import { Namespace } from './namespace';

export type Refs = {
  [ns in Namespace]: string[];
};
