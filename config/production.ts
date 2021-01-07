import type { ManagerApp } from "@manager/nest/src/types/app";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const redbird: RedbirdOptions = {
  /**
   * http port is needed for LetsEncrypt challenge during request / renewal. Also enables automatic http->https redirection for registered https routes.
   */
  port: 80,
  letsencrypt: {
    path: __dirname + "/certs",
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
    port: 3333,
    redbird: {
      ssl: {
        letsencrypt: {
          email: "hi@artandcode.studio", // Domain owner/admin email
          production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        },
      },
    },
  },
  {
    pkgName: "@gymott/nest",
    domain: "localhost",
    port: 3000,
    redbird: {
      ssl: {
        letsencrypt: {
          email: "hi@artandcode.studio", // Domain owner/admin email
          production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        },
      },
    },
  },
  {
    pkgName: "@gymott/strapi",
    domain: "localhost/strapi",
    port: 3001,
    redbird: {
      ssl: {
        letsencrypt: {
          email: "hi@artandcode.studio", // Domain owner/admin email
          production: false, // WARNING: Only use this flag when the proxy is verified to work correctly to avoid being banned!
        },
      },
    },
  },
];
