declare module 'node-fetch-cookies' {
  export class CookieJar {
    constructor(
      file?: string,
      flags?: string,
      cookies?: any,
      cookieIgnoreCallback?: () => void,
    );

    addCookie(cookie: string, fromURL: string): void;
    domains(): string[];
    cookiesDomain(domain: string): void;
    cookiesValid(withSession: boolean): void;
    cookiesAll(): void;
    cookiesValidForRequest(requestURL): void;
    deleteExpired(sessionEnded): void;
    load(file?: string): Promise<void>;
    save(file?: string): Promise<void>;
  }

  function fetch(
    cookieJars: CookieJar,
    url: string,
    options: RequestInit,
  ): Promise<Response>;

  export { fetch };
}
