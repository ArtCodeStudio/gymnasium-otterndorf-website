import { NestService, SuggestResult } from "../types";

export class SuggestService extends NestService {
  protected static instance: SuggestService;

  protected constructor() {
    super();
  }

  public static getInstance() {
    if (SuggestService.instance) {
      return SuggestService.instance;
    }
    SuggestService.instance = new SuggestService();
    return SuggestService.instance;
  }

  public async get(word: string) {
    const url = this.host + "/api/suggest/" + encodeURIComponent(word);
    const res = await this._getCached<SuggestResult[]>(url);
    return res?.body;
  }
}
