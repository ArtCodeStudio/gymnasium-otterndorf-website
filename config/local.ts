import type { ManagerApp } from "@manager/nest/src/types/app";
import type { RedbirdOptions } from "@manager/nest/src/redbird/types/options";

export const redbird: RedbirdOptions = {
  port: 8080,
  ssl: false,
};

export const apps: ManagerApp[] = [
  {
    pkgName: "@manager/nest",
    domain: "localhost/manager",
    port: 3333,
    redbird: {},
  },
  {
    pkgName: "@gymott/nest",
    domain: "localhost",
    port: 3000,
    redbird: {},
  },
  {
    pkgName: "@gymott/strapi",
    domain: "localhost/strapi",
    port: 3001,
    redbird: {},
  },
];
