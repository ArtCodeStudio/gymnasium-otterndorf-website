import { Logger } from '@nestjs/common';
import { resolve } from 'path';
import type { ManagerConfig } from '../types/config';
import type { ManagerOptions } from '../types/options';
import type { ManagerApp } from '../types/app';
import { CustomConfigService } from '../config/config.module';
import { sync } from 'glob';
import { parse as dotenvParse } from 'dotenv';
import { existsSync, readFileSync } from 'fs';

const log = new Logger('config helpers');
const workspaceRoot = resolve(process.cwd(), '../../../');

const getWorkspaceDirs = () => {
  const mainPkg = loadJsonFile(resolve(workspaceRoot, 'package.json'));
  const match = mainPkg.workspaces.filter((s: string) => !s.startsWith('!'));

  let matchGlob = '';

  if (match.length === 1) {
    matchGlob = match.toString();
  } else if (match.length > 1) {
    matchGlob = `{${match.join(',')}}`;
  }

  log.debug(`matchGlob: ${matchGlob}`);

  const dirs = sync(matchGlob, {
    cwd: workspaceRoot,
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
    log.warn(`Path not found! ${path}`);
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

/**
 * Load package.json for each app
 * @param apps
 */
const loadPkgData = (apps: ManagerApp[]) => {
  const wsDirs = getWorkspaceDirs();
  for (let wsDir of wsDirs) {
    wsDir = resolve(workspaceRoot, wsDir);
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
        scripts: pgk.scripts,
      };
      apps[index].dir = wsDir;
      log.debug(
        `package.json found for ${apps[index]?.pkgName} in ${apps[index].dir}`,
      );
    }
  }
};

const setAppDefaults = (apps: ManagerApp[]) => {
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
    if (!app.host && app.port) {
      app.host = `http://localhost:${app.port}`;
    }

    if (app.dir) {
      const env = loadEnvFile(resolve(app.dir, '.env')) || {};

      // pm2
      app.pm2 = app.pm2 || ({} as any);
      app.pm2.name = app.pm2.name || app.pkgName + ':' + shortEnv;
      app.pm2.instances = app.pm2.instances || 1;
      app.pm2.env = app.pm2.env || {};
      app.pm2.env = {
        ...env,
        ...app.pm2.env,
      };
      app.pm2.cwd = app.dir;

      if (app.port && app.port !== 'auto') {
        // Overwrite port if set
        // TODO find port on auto
        app.pm2.env.PORT = app.port.toString() || app.pm2.env.PORT;
      }
    }
  }
};

const validateAppConfigs = (apps: ManagerApp[], manager: ManagerOptions) => {
  for (const app of apps) {
    // Ignore
    if (app.pkgName === manager.pkg.name) {
      continue;
    }
    if (!app?.pm2?.script) {
      throw new Error('You must set a script for pm2 apps!');
    }
  }
};

const processAppConfigs = (apps: ManagerApp[], manager: ManagerOptions) => {
  loadPkgData(apps);
  setAppDefaults(apps);
  validateAppConfigs(apps, manager);

  log.debug(`apps: ${JSON.stringify(apps, null, 2)}`);
};

const processManagerConfigs = (manager: ManagerOptions) => {
  // TODO use find-root?
  const path = resolve('package.json');
  manager.pkg = loadJsonFile(path);
};

export const loadConfig = () => {
  const basePath = resolve(workspaceRoot, 'config');
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

  const config = CustomConfigService.loadConfig<ManagerConfig>([
    configPath,
    fallbackConfigPath,
  ]);

  log.debug(`Config redbird: "${JSON.stringify(config.redbird)}"`);
  processManagerConfigs(config.manager);
  log.debug(`Config manager: "${JSON.stringify(config.manager)}"`);
  processAppConfigs(config.apps, config.manager);
  log.debug(`Config apps: "${JSON.stringify(config.apps)}"`);

  return config;
};
