import type { ManagerApp } from "@manager/nest/src/types/app";
import type { ManagerOptions } from "@manager/nest/src/types/options";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const manager: ManagerOptions = {};

export const redbird: RedbirdOptions = {
  port: 8080,
  ssl: false,
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@manager/nest",
    domain: "localhost/manager",
    target: {
      port: 3333,
    },
    redbird: {},
  },
  {
    pkgName: "@gymott/nest",
    domain: "localhost",
    target: {
      port: 3000,
    },
    redbird: {},
    pm2: {
      script: "yarn workspace @gymott/nest start",
    },
  },
  {
    pkgName: "@gymott/strapi",
    domain: "localhost/admin",
    target: {
      port: 3001,
      pathname: "/admin",
    },
    redbird: {},
    pm2: {
      script: "npm run start",
      env: {
        // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
        NODE_OPTIONS: "",
        ADMIN_URL: "/admin",
      },
    },
  },
];
