import type { RedbirdRegisterOptions } from '../redbird/types/register-options';
import type { StartOptions } from 'pm2';

export interface ManagerApp {
  pkgName: string;
  domain: string;
  port?: number | 'auto';
  host?: string;
  redbird: RedbirdRegisterOptions;
  dir?: string;
  pkg?: any;
  pm2?: StartOptions;
}
