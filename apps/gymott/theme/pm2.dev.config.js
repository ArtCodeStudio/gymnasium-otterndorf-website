module.exports = {
  apps: [
    {
      name: "dev:@gymott/theme",
      script: "yarn run watch",
      watch: ["package.json"],
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
