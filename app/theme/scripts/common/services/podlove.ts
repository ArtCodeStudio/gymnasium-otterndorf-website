import { HttpService } from "@ribajs/core";
import {
  PodloveWebPlayerEpisode,
  PodloveWebPlayerConfig,
} from "@ribajs/podcast";
import { defaultCache } from "./cache";

export class PodloveService {
  protected static instance: PodloveService;
  protected host =
    window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_EXTERN_URL || "";

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (PodloveService.instance) {
      return PodloveService.instance;
    }
    PodloveService.instance = new PodloveService();
    return PodloveService.instance;
  }

  protected async _get<T>(url: string) {
    const res = await HttpService.getJSON<T>(url, {});
    if (res.status !== 200) {
      throw new Error(res.text.toString());
    }
    return res.body;
  }

  protected async _getCached<T>(url: string) {
    return defaultCache.resolve<T>(
      url,
      async () => {
        return await this._get<T>(url);
      },
      "5 mins"
    );
  }

  public async getConfig(slug: string) {
    const url = this.host + "/api/podlove/episode/" + slug;
    return await this._getCached<PodloveWebPlayerConfig>(url);
  }

  public async get(slug: string) {
    const url = this.host + "/api/podlove/episode/" + slug;
    return await this._getCached<PodloveWebPlayerEpisode>(url);
  }

  public async getByPost(slug: string) {
    const url = this.host + "/api/podlove/episode/post/" + slug;
    return await this._getCached<PodloveWebPlayerEpisode>(url);
  }
}
