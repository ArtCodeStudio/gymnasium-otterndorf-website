/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: '@manager/nest',
      script: 'yarn run _start:dev',
      watch: ["package.json", "../../../package.json"],
      instances: 1,
      env: {},
    },
  ],
};
