import { HttpService } from "@ribajs/core";
import { defaultCache } from "./cache";
import { SuggestResult } from "../types/suggest-result";

export class SuggestService {
  protected static instance: SuggestService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (SuggestService.instance) {
      return SuggestService.instance;
    }
    SuggestService.instance = new SuggestService();
    return SuggestService.instance;
  }

  protected async _get(url: string) {
    const res = await HttpService.getJSON<SuggestResult[]>(url, {});
    if (res.status !== 200) {
      throw new Error(res.body.toString());
    }
    return res.body;
  }

  public async get(word: string) {
    const url = "/api/suggest/" + encodeURIComponent(word);
    return defaultCache.resolve<SuggestResult[]>(
      url,
      async () => {
        return await this._get(url);
      },
      "5 mins"
    );
  }
}
