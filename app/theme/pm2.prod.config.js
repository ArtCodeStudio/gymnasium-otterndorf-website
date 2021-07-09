module.exports = {
  apps: [
    {
      name: "prod:@gymott/theme",
      script: "yarn run watch:prod",
      watch: ["package.json", "../../../.pnp.js"],
      instances: 1,
      env: {
        NODE_ENV: "production",
        DEBUG: "",
      },
    },
  ],
};
