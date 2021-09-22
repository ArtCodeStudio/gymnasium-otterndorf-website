/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: "local:@artcodestudio/node-app-manager",
      script: "yarn run start:local",
      watch: ["package.json", ".pnp.cjs"],
      instances: 1,
      env: {},
    },
  ],
};
