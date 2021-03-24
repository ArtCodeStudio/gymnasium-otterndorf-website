import type { ManagerApp } from "@manager/nest/src/types/app";
import type { ManagerOptions } from "@manager/nest/src/types/options";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const manager: ManagerOptions = {
  pkgName: "@manager/nest",
  domain: "localhost",
  target: {
    port: 4000,
  },
  pm2: {},
};

export const redbird: RedbirdOptions = {
  ssl: false,
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@gymott/nest",
    domain: "localhost",
    target: {
      // This port will also be the set as env.PORT in pm2
      port: 4001,
    },
    pm2: {
      script: "yarn workspace @gymott/nest watch --inspect",
      env: {
        STRAPI_INTERN_URL: "https://gym-strapi.artandcode.de",
        STRAPI_EXTERN_URL: "https://gym-strapi.artandcode.de",
      },
    },
  },
  // {
  //   pkgName: "@gymott/strapi",
  //   domain: "localhost",
  //   target: {
  //     // This port will also be the set as env.PORT in pm2
  //     port: 4002,
  //   },
  //   pm2: {
  //     script: "npm run develop",
  //     env: {
  //       // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
  //       NODE_OPTIONS: "",
  //       ADMIN_URL: "/admin",
  //       DATABASE_CONNECTOR: "bookshelf",
  //       DATABASE_CLIENT: "sqlite",
  //       DATABASE_NAME: "strapi",
  //       DATABASE_USERNAME: "strapi",
  //       NODE_ENV: "development",
  //     },
  //   },
  // },
];
