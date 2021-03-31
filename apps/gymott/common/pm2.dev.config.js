module.exports = {
  apps: [
    {
      name: "dev:@gymott/common",
      script: "yarn run watch",
      watch: [
        "package.json",
        "../../../.pnp.js",
        "../strapi/exports/graphql",
        "../theme/graphql",
      ],
      watch_delay: 0,
      instances: 1,
      env: {
        NODE_ENV: "development",
        DEBUG: "",
      },
    },
  ],
};
