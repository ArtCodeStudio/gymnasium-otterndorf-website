import { HttpService } from "@ribajs/core";
import { defaultCache } from "./cache";
import { SearchResult } from "../types/search-result";

export class SearchService {
  protected static instance: SearchService;
  protected host =
    window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_INTERN_URL || "";

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (SearchService.instance) {
      return SearchService.instance;
    }
    SearchService.instance = new SearchService();
    return SearchService.instance;
  }

  protected async _get(url: string) {
    const res = await HttpService.getJSON<SearchResult[]>(url, {});
    if (res.status !== 200) {
      throw new Error(res.body.toString());
    }
    return res.body;
  }

  public async get(term: string) {
    const url = this.host + "/api/search/" + encodeURIComponent(term);
    return defaultCache.resolve<SearchResult[]>(
      url,
      async () => {
        return await this._get(url);
      },
      "5 mins"
    );
  }
}
