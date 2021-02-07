import type { ManagerApp } from "@manager/nest/src/types/app";
import type { ManagerOptions } from "@manager/nest/src/types/options";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const manager: ManagerOptions = {
  pkgName: "@manager/nest",
  domain: "local-manager", // Add this host to /etc/hosts
};

export const redbird: RedbirdOptions = {
  ssl: false,
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@gymott/nest",
    domain: "local-gymott", // Add this host to /etc/hosts
    pm2: {
      script: "yarn workspace @gymott/nest watch",
    },
  },
  {
    pkgName: "@gymott/strapi",
    domain: "local-gymott-strapi", // Add this host to /etc/hosts
    target: {
      pathname: "/admin",
    },
    pm2: {
      script: "npm run watch",
      env: {
        // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
        NODE_OPTIONS: "",
        ADMIN_URL: "/admin",
        DATABASE_CONNECTOR: "bookshelf",
        DATABASE_CLIENT: "mysql",
        DATABASE_NAME: "gymott",
        DATABASE_USER: "gymott",
        DATABASE_PASSWORD: "gymott",
      },
    },
  },
];
