module.exports = {
  apps: [
    {
      name: "dev:@gymott/theme",
      script: "yarn run watch",
      watch: false,
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
