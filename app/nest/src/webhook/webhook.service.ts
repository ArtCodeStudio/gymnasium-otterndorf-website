import { Injectable, Logger, Inject, CACHE_MANAGER } from '@nestjs/common';
import { StrapiWebhookData } from './types';
import type { Cache } from 'cache-manager';

@Injectable()
export class WebhookService {
  constructor(@Inject(CACHE_MANAGER) protected readonly cacheManager: Cache) {
    //
  }
  protected log = new Logger(this.constructor.name);
  public onWebhhook(data: StrapiWebhookData) {
    this.log.debug(`onWebhhook ${JSON.stringify(data)}`);
    this.log.debug(`Reset cache..`);
    this.cacheManager.reset();
  }
}
