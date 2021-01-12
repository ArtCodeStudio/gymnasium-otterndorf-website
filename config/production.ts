import type { ManagerApp } from "@manager/nest/src/types/app";
import type { ManagerOptions } from "@manager/nest/src/types/options";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

import { resolve } from "path";

export const manager: ManagerOptions = {
  pkgName: "@manager/nest",
  domain: "manager.artandcode.de",
  pm2: {},
};

export const redbird: RedbirdOptions = {
  /**
   * http port is needed for LetsEncrypt challenge during request / renewal. Also enables automatic http->https redirection for registered https routes.
   */
  port: 80,
  letsencrypt: {
    path: resolve(__dirname, "certs"),
    /**
     *  LetsEncrypt minimal web server port for handling challenges. Routed 80->9999, no need to open 9999 in firewall. Default 3000 if not defined.
     */
    port: 9999,
  },
  ssl: {
    http2: true,
    /**
     * SSL port used to serve registered https routes with LetsEncrypt certificate.
     */
    port: 443,
  },
  appDefaults: {
    ssl: {
      letsencrypt: {
        email: "hi@artandcode.studio", // Domain owner/admin email
        production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
      },
    },
  },
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@gymott/nest",
    domain: "gymott.artandcode.de",
    pm2: {
      script: "yarn workspace @gymott/nest start",
    },
  },
  {
    pkgName: "@gymott/strapi",
    domain: "gymott.artandcode.de/admin",
    target: {
      pathname: "/admin",
    },
    redbird: {
      ssl: {
        letsencrypt: {
          email: "hi@artandcode.studio", // Domain owner/admin email
          production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        },
      },
    },
    pm2: {
      script: "npm run start",
      env: {
        // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
        NODE_OPTIONS: "",
        ADMIN_URL: "/admin",
        DATABASE_CONNECTOR: "bookshelf",
        DATABASE_CLIENT: "sqlite",
      },
    },
  },
];
