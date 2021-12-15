/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");

const common = require("./app/common/pm2.dev.config");
const theme = require("./app/theme/pm2.dev.config");
const nest = require("./app/nest/pm2.local.config");

const setCwd = (apps, _dir) => {
  const dir = path.resolve(__dirname, _dir);
  for (const app of apps) {
    app.cwd = dir;
  }
};

setCwd(nest.apps, "app/nest");
setCwd(common.apps, "app/common");
setCwd(theme.apps, "app/theme");
setCwd(nest.apps, "app/nest");

const apps = [];
apps.push(...common.apps);
apps.push(...theme.apps);
apps.push(...nest.apps);

module.exports = {
  apps,
};
