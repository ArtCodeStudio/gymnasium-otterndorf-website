module.exports = {
  apps: [
    {
      name: "prod:@gymott/theme",
      script: "yarn run watch:prod",
      watch: ["package.json", "../../../.pnp.cjs"],
      instances: 1,
      env: {
        NODE_ENV: "production",
        DEBUG: "",
      },
    },
  ],
};
