import { HttpService } from "@ribajs/core";
import { hashCode } from "@ribajs/utils/src/type";
import { defaultCache } from "./cache";
import { MensaMaxData } from "../types";

export class MensaMaxService {
  protected static instance: MensaMaxService;
  protected host =
    window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_INTERN_URL || "";
  protected url = "/api/mensa-max";

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (MensaMaxService.instance) {
      return MensaMaxService.instance;
    }
    MensaMaxService.instance = new MensaMaxService();
    return MensaMaxService.instance;
  }

  async get(p: string, e: string, expiresIn: number | string = "60 mins") {
    const url = `${this.host}${this.url}/${p}/${e}`;
    const cacheKey = hashCode(url);
    return defaultCache.resolve<MensaMaxData>(
      cacheKey,
      async () => {
        const res = await HttpService.getJSON<MensaMaxData>(url);
        return res.body;
      },
      expiresIn
    );
  }
}
