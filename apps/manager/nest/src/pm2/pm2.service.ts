import {
  Injectable,
  Logger,
  OnApplicationBootstrap,
  OnApplicationShutdown,
} from '@nestjs/common';
import { ManagerApp } from '../types/app';
import * as pm2 from 'pm2';
import type { Proc, ProcessDescription } from 'pm2';
import { promisify } from 'util';

@Injectable()
export class Pm2Service
  implements OnApplicationBootstrap, OnApplicationShutdown {
  log = new Logger('Pm2');

  // constructor() {}

  onApplicationBootstrap() {
    pm2.connect(this.onError.bind(this));
  }

  onApplicationShutdown() {
    pm2.disconnect();
  }

  protected onError(err: Error) {
    if (err) {
      this.log.debug('Stop');
      this.log.error(err);
      pm2.disconnect();
      throw err;
    }
  }

  /**
   *
   * @param app
   * @see https://pm2.keymetrics.io/docs/usage/pm2-api/#programmatic-api
   */
  public async startApp(app: ManagerApp) {
    this.log.debug(`Start new process "${app.pkgName}"`);
    return new Promise((resolve, reject) => {
      pm2.start(app.pm2, (err: Error, proc: Proc) => {
        if (err) {
          this.log.error(err);
          return reject(err);
        }
        this.log.debug('Process started');
        console.debug(proc);
        resolve(proc);
      });
    });
  }

  /**
   *
   * @param apps
   * @see https://pm2.keymetrics.io/docs/usage/pm2-api/#programmatic-api
   */
  public async startApps(apps: ManagerApp[]) {
    for (const app of apps) {
      await this.startApp(app);
    }
  }

  public async delete(id: number | string) {
    return new Promise((resolve, reject) => {
      pm2.delete(id, (err, proc) => {
        if (err) {
          this.log.error(err);
          return reject(err);
        }
        return resolve(proc);
      });
    });
  }

  public async stop(id: number | string) {
    return new Promise((resolve, reject) => {
      pm2.stop(id, (err, proc) => {
        if (err) {
          this.log.error(err);
          return reject(err);
        }
        return resolve(proc);
      });
    });
  }

  public async restartApp(app: ManagerApp) {
    this.log.debug(`Restart process "${app.pkgName}"`);
    let proc = await this.getProcessByName(app.pm2.name);
    if (!proc) {
      this.log.warn('Process not found!');
      return;
    }
    proc = await this.stop(proc.pid);
    proc = await this.delete(proc.pid);
    return this.startApp(app);
  }

  public async getProcessByName(slug: string) {
    try {
      const processDescriptionList = await promisify(pm2.list)();
      const matches = processDescriptionList.filter(
        (proc) => proc.name === slug,
      );
      if (matches.length > 0) {
        return matches[0];
      }
      return null;
    } catch (error) {
      this.log.error(error);
      return null;
    }
  }
}
