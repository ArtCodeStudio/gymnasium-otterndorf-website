/* eslint-disable no-undef */
module.exports = {
  apps: [
    {
      name: '@manager/nest',
      script: 'yarn run _start:prod',
      watch: false,
      instances: 1,
      env: {},
    },
  ],
};
