import { Injectable, Logger } from '@nestjs/common';
import * as redbird from 'redbird';
import { ConfigService } from '@nestjs/config';
import type { ManagerApp } from '../types/app';
import type { RedbirdOptions } from './types/options';

@Injectable()
export class RedbirdService {
  protected proxy: any; // TODO type redbird proxy
  protected log = new Logger('RedbirdService');

  constructor(protected readonly config: ConfigService) {
    const redbirdOptions = this.config.get<RedbirdOptions>('redbird');
    this.log.log('Redbird options: ' + JSON.stringify(redbirdOptions, null, 2));
    this.proxy = redbird(redbirdOptions);
  }

  // Also possible on runtime, see https://github.com/OptimalBits/redbird#adding-and-removing-resolvers-at-runtime
  async registerApp(app: ManagerApp) {
    let host = app.host;

    if (!host && app.port) {
      host = `http://localhost:${app.port}`;
    }

    await this.proxy.register(app.domain, host, app.redbird);
  }

  async registerApps(apps: ManagerApp[]) {
    for (const app of apps) {
      await this.registerApp(app);
    }
  }
}
