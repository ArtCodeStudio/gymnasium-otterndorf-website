/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const strapi = require("./app/strapi/pm2.prod.config");
const strapiStudent = require("./app/strapi-student/pm2.prod.config");
const nest = require("./app/nest/pm2.prod.config");

const setCwd = (apps, _dir) => {
  const dir = path.resolve(__dirname, _dir);
  for (const app of apps) {
    app.cwd = dir;
  }
};

setCwd(strapi.apps, "app/strapi");
setCwd(strapiStudent.apps, "app/strapi-student");
setCwd(nest.apps, "app/nest");

const apps = [];
apps.push(...strapi.apps);
apps.push(...strapiStudent.apps);
apps.push(...nest.apps);

module.exports = {
  apps,
};
