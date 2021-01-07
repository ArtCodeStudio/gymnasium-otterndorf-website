import { Injectable, OnApplicationBootstrap, Logger } from '@nestjs/common';
import { RedbirdService } from './redbird/redbird.module';
import { Pm2Service } from './pm2/pm2.module';
import { ConfigService } from '@nestjs/config';
import type { ManagerApp } from './types/app';

@Injectable()
export class ManagerService implements OnApplicationBootstrap {
  protected log = new Logger('ManagerService');

  constructor(
    protected readonly config: ConfigService,
    protected readonly redbird: RedbirdService,
    protected readonly pm2: Pm2Service,
  ) {}

  onApplicationBootstrap() {
    this.startApps();
    this.registerApps();
  }

  async registerApps() {
    this.log.debug('registerApps');
    const apps = this.config.get<ManagerApp[]>('apps');
    await this.redbird.registerApps(apps);
  }
  async startApps() {
    this.log.debug('startApps');
    const apps = this.config.get<ManagerApp[]>('apps');
    // await this.pm2.startApps(apps);
  }
}
