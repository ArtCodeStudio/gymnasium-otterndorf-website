module.exports = {
  apps: [
    {
      name: "dev:@gymott/theme",
      script: "yarn run watch",
      watch: ["package.json", "../../../.pnp.js"],
      watch_delay: 3000,
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
