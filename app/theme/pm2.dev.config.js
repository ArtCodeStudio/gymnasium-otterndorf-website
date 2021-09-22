module.exports = {
  apps: [
    {
      name: "dev:@gymott/theme",
      script: "yarn workspace @gymott/theme run watch",
      watch: ["package.json", "../../../.pnp.cjs"],
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
