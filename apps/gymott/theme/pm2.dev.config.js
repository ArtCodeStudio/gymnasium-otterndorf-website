module.exports = {
  apps: [
    {
      name: "@gymott/theme",
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
