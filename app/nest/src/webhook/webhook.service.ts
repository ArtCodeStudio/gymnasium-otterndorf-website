import { Injectable, Logger, Inject, CACHE_MANAGER } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { StrapiWebhookData } from './types';
import { AppConfig } from '../types';

import type { Cache } from 'cache-manager';
import { RefreshCacheService } from '@ribajs/nest-theme';
import { SearchService } from '../api/search/search.service';
import { SuggestService } from '@ribajs/nest-lunr';

@Injectable()
export class WebhookService {
  app: AppConfig;
  constructor(
    @Inject(CACHE_MANAGER) protected readonly cacheManager: Cache,
    protected readonly refresh: RefreshCacheService,
    protected readonly config: ConfigService,
    protected readonly search: SearchService,
    protected readonly suggest: SuggestService,
  ) {
    this.app = this.config.get<AppConfig>('app');
  }
  protected log = new Logger(this.constructor.name);
  public async onWebhook(data: StrapiWebhookData) {
    // this.log.debug(`onWebhook ${JSON.stringify(data)}`);
    this.log.debug(`Reset cache..`);
    await this.cacheManager.reset();
    this.log.debug(`Refresh search..`);
    await this.search.refresh();
    this.log.debug(`Reset suggestions..`);
    await this.suggest.resetAll();
    this.log.debug(`Update cache..`);
    await this.refresh.refresh(process.env.NEST_EXTERN_URL);
  }
}
