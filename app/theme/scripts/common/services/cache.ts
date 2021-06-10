import createCache from "keshi";
import type { Storage } from "keshi";
import { get, set, keys, del, clear } from "idb-keyval";

const idbStorage: Storage = {
  get,
  set,
  keys,
  del,
  clear: () => {
    return clear() as any;
  },
};
const defaultCache = createCache({
  // Use default memory storage on ssr
  customStorage: window.ssr ? undefined : idbStorage,
});

export { createCache, defaultCache };
