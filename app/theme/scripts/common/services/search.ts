import { SearchResult } from "../types/search-result";
import { NestService } from "../types";

export class SearchService extends NestService {
  protected static instance: SearchService;

  protected constructor() {
    super();
  }

  public static getInstance() {
    if (SearchService.instance) {
      return SearchService.instance;
    }
    SearchService.instance = new SearchService();
    return SearchService.instance;
  }

  public async get(term: string, limit = 10) {
    const url = `${this.host}/api/search/${encodeURIComponent(
      term
    )}?limit=${limit}`;
    const res = await this._getCached<SearchResult[]>(url);
    if (res.status !== 200) {
      throw new Error(res.body.toString());
    }

    if (res.body.length >= limit) {
      res.body = res.body.slice(0, limit);
    }
    return res.body;
  }
}
