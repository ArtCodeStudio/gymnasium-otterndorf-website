import createCache from "keshi";
import InMemoryStorage from "keshi/src/InMemoryStorage";
import type { Storage } from "keshi";
import { get, set, keys, del, clear } from "idb-keyval";

const idbStorage: Storage = { get, set, keys, del, clear };
const defaultCache = createCache({
  // Use default memory storage on ssr
  customStorage: window.ssr ? new InMemoryStorage() : idbStorage,
});

/**
 * Generate a Hash from string
 * @param str The string
 * @returns hash code
 * @see https://stackoverflow.com/a/7616484
 */
const hashCode = (str: string) => {
  let hash = 0,
    i,
    chr;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr = str.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export { createCache, defaultCache, hashCode };
