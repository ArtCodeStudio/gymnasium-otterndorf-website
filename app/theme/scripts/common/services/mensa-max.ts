import { MensaMaxData, NestService } from "../types";

export class MensaMaxService extends NestService {
  protected static instance: MensaMaxService;
  protected url = "/api/mensa-max";

  protected constructor() {
    super();
  }

  public static getInstance() {
    if (MensaMaxService.instance) {
      return MensaMaxService.instance;
    }
    MensaMaxService.instance = new MensaMaxService();
    return MensaMaxService.instance;
  }

  async get(p: string, e: string, expiresIn: number | string = "12h") {
    const url = `${this.host}${this.url}/${p}/${e}`;
    const res = await this._getCached<MensaMaxData>(url, {}, expiresIn);
    return await res?.body;
  }
}
