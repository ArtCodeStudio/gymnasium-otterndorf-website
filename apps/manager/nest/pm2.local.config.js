/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: '@manager/nest',
      script: 'yarn run _start:local',
      watch: false,
      instances: 1,
      env: {},
    },
  ],
};
