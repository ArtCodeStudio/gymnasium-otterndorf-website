import type { ManagerApp } from "@manager/nest/src/types/app";
import type { ManagerOptions } from "@manager/nest/src/types/options";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const manager: ManagerOptions = {};

export const redbird: RedbirdOptions = {
  /**
   * http port is needed for LetsEncrypt challenge during request / renewal. Also enables automatic http->https redirection for registered https routes.
   */
  port: 80,
  letsencrypt: {
    path: __dirname + "./certs",
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
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@manager/nest",
    domain: "localhost/manager",
    target: {
      port: 3333,
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
    pm2: {},
  },
  {
    pkgName: "@gymott/nest",
    domain: "localhost",
    target: {
      port: 3000,
    },
    redbird: {
      ssl: {
        letsencrypt: {
          email: "hi@artandcode.studio", // Domain owner/admin email
          production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        },
      },
    },
    pm2: {},
  },
  {
    pkgName: "@gymott/strapi",
    domain: "localhost/strapi",
    target: {
      port: 3001,
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
      env: {
        // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
        NODE_OPTIONS: "",
      },
    },
  },
];
