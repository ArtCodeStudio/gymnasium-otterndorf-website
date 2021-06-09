/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: "dev:@artcodestudio/node-app-manager",
      script: "yarn run start:dev",
      watch: ["package.json", ".pnp.js"],
      instances: 1,
      env: {},
    },
  ],
};
