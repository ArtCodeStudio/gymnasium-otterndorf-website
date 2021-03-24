declare module "keshi" {
  import type {
    get as Get,
    set as Set,
    keys as Keys,
    del as Del,
    clear as Clear,
  } from "idb-keyval";

  export interface Storage {
    get: typeof Get;
    set: typeof Set;
    keys: typeof Keys;
    del: typeof Del;
    clear: typeof Clear;
  }

  export interface Options {
    cleanupInterval?: string;
    customStorage?: Storage;
  }

  export interface Cache {
    // private set<T>(key: string, value: T, expiresIn: number | string): Promise<T>;
    resolve<T>(
      key: string,
      value: T | (() => Promise<T>),
      expiresIn: number | string
    ): Promise<T>;
    del(key: string, matchStart: boolean): ReturnType<typeof Del>;
    clear(): ReturnType<typeof Clear>;
    teardown(): void;
  }

  const createCache: (options: Options) => Cache;

  export default createCache;
}
