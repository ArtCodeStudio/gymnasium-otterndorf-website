import { HttpService, HttpServiceOptions } from "@ribajs/core";
import { defaultCache } from "../services/cache";

export abstract class NestService {
  protected host =
    window?.ssr?.env?.NEST_INTERN_URL || window?.env?.NEST_EXTERN_URL || "";

  protected async _get<T>(url: string, options: HttpServiceOptions = {}) {
    const res = await HttpService.getJSON<T>(url, options);
    return {
      body: res.body,
      status: res.status,
    };
  }

  protected async _getCached<T>(
    url: string,
    options: HttpServiceOptions = {},
    expiresIn: number | string = "5 mins"
  ) {
    return defaultCache.resolve<{ body: T; status: number }>(
      url + JSON.stringify(options),
      async () => {
        return await this._get<T>(url);
      },
      expiresIn
    );
  }
}
