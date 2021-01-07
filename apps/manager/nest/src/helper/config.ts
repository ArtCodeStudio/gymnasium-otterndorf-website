import { Logger } from '@nestjs/common';
import { resolve } from 'path';
import type { ManagerApp } from '../types/app';
import type { RedbirdOptions } from '../redbird/types/options';
import { CustomConfigService } from '../config/config.module';
import { sync } from 'glob';
import { parse as dotenvParse } from 'dotenv';
import { existsSync, readFileSync } from 'fs';

const log = new Logger('config helpers');
const root = resolve(process.cwd(), '../../../');

const getWorkspaceDirs = () => {
  const mainPkg = loadJsonFile(resolve(root, 'package.json'));
  const match = mainPkg.workspaces.filter((s: string) => !s.startsWith('!'));

  let matchGlob = '';

  if (match.length === 1) {
    matchGlob = match.toString();
  } else if (match.length > 1) {
    matchGlob = `{${match.join(',')}}`;
  }

  log.debug(`matchGlob: ${matchGlob}`);

  const dirs = sync(matchGlob, {
    cwd: root,
  });
  log.debug(`workspace dirs: ${dirs}`);
  return dirs;
};

const loadJsonFile = (path: string) => {
  if (!existsSync(path)) {
    log.warn(`Path not found! ${path}`);
    return;
  }
  return JSON.parse(loadTextFile(path));
};

const loadEnvFile = (path: string) => {
  if (!existsSync(path)) {
    console.warn(`Path not found! ${path}`);
    return;
  }
  return dotenvParse(readFileSync(path, 'utf8'));
};

const loadTextFile = (path: string) => {
  if (!existsSync(path)) {
    log.warn(`Path not found! ${path}`);
    return;
  }
  return readFileSync(path, 'utf8');
};

const processAppConfigs = (apps: ManagerApp[]) => {
  const wsDirs = getWorkspaceDirs();

  // Load package.json for each workspace
  for (let wsDir of wsDirs) {
    wsDir = resolve(root, wsDir);
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    if (!existsSync(wsDir)) {
      log.warn('Directory not found! ' + wsDir);
      continue;
    }
    const pgk = loadJsonFile(resolve(wsDir, 'package.json'));
    if (!pgk) {
      log.warn('package.json not found for ' + wsDir);
      continue;
    }
    if (pgk?.name) {
      const index = apps.findIndex((app) => app.pkgName === pgk.name);
      if (index === -1) {
        log.warn('App not found for ' + pgk?.name);
        continue;
      }
      // Add more properties here if you need more
      apps[index].pkg = {
        name: pgk.name,
      };
      apps[index].dir = wsDir;
      log.debug('package.json found for ' + apps[index]?.pkgName);
    }
  }

  let shortEnv = '';

  switch (process.env.NODE_ENV) {
    case 'production':
      shortEnv = 'prod';
      break;
    case 'development':
      shortEnv = 'dev';
      break;
    case 'local':
      shortEnv = 'local';
      break;
    default:
      shortEnv = process.env.NODE_ENV;
      break;
  }

  // Set defaults for each app
  for (const app of apps) {
    if (app.dir) {
      const env = loadEnvFile(resolve(app.dir, '.env')) || {};

      app.pm2 = app.pm2 || ({} as any);
      app.pm2.name = app.pm2.name || app.pkgName + ':' + shortEnv;
      app.pm2.instances = app.pm2.instances || 1;
      app.pm2.env = app.pm2.env || {};
      app.pm2.env = {
        ...env,
        ...app.pm2.env,
      };

      // Overwrite port if set
      // TODO find port on auto
      if (app.port && app.port !== 'auto') {
        app.pm2.env.PORT = app.port.toString() || app.pm2.env.PORT;
      }
    }
  }

  log.debug(`apps: ${JSON.stringify(apps, null, 2)}`);
  return apps;
};

export const loadConfig = () => {
  const basePath = resolve(root, 'config');
  const env = process.env.NODE_ENV || 'development';
  log.debug(`Load config for "${env}"`);
  const configPath = resolve(basePath, `${env}.ts`);
  let fallbackConfigPath = '';

  switch (env) {
    case 'local':
      fallbackConfigPath = resolve(basePath, `development.ts`);
      break;
    case 'development':
      fallbackConfigPath = resolve(basePath, `local.ts`);
      break;
    case 'production':
      fallbackConfigPath = resolve(basePath, `development.ts`);
      break;
    default:
      fallbackConfigPath = resolve(basePath, `local.ts`);
      break;
  }

  const { redbird, apps } = CustomConfigService.loadConfig<{
    redbird: RedbirdOptions;
    apps: ManagerApp[];
  }>([configPath, fallbackConfigPath]);

  log.debug(`Config redbird: "${JSON.stringify(redbird)}"`);
  log.debug(`Config apps: "${JSON.stringify(apps)}"`);

  return {
    redbird,
    apps: processAppConfigs(apps),
  };
};
