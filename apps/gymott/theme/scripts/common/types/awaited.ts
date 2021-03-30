// See https://devblogs.microsoft.com/typescript/announcing-typescript-4-1/#recursive-conditional-types
export type Awaited<T> = T extends PromiseLike<infer U> ? Awaited<U> : T;
