/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: '@manager/nest',
      script: 'yarn run _start:local',
      watch: ["package.json", "../../../.pnp.js"],
      instances: 1,
      env: {},
    },
  ],
};
