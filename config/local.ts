import type { ManagerApp } from "@artcodestudio/node-app-manager/src/types/app";
import type { ManagerOptions } from "@artcodestudio/node-app-manager/src/types/options";
import type { RedbirdOptions } from "@artcodestudio/node-app-manager/src/redbird/types/options";

export const manager: ManagerOptions = {
  pkgName: "@artcodestudio/node-app-manager",
  domain: "manager.localhost",
  target: {
    port: 4001,
  },
  pm2: {},
};

export const redbird: RedbirdOptions = {
  ssl: false,
  port: 4000,
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@gymott/nest",
    domain: "gym.localhost",
    target: {
      // This port will also be the set as env.PORT in pm2
      port: 4002,
    },
    pm2: {
      script: "yarn workspace @gymott/nest watch",
      // The app restarts by itself on changes but this is not working fpr new packages, so we also watch the package.json with pm2
      watch: ["package.json", "./.pnp.cjs"],
      env: {
        STRAPI_LOCAL_URL: "https://gym-strapi.artandcode.de",
        STRAPI_REMOTE_URL: "https://gym-strapi.artandcode.de",
        STRAPI_STUDENT_INTERN_URL: "https://gym-strapi-student.artandcode.de",
        STRAPI_STUDENT_EXTERN_URL: "https://gym-strapi-student.artandcode.de",
        NEST_INTERN_URL: "http://gym.localhost:4000",
        NEST_EXTERN_URL: "http://gym.localhost:4000",
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
