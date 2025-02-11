module.exports = {
  apps: [
    {
      name: "prod:@gymott/strapi",
      script: "npm run start",
      env: {
        // Yarn 2 automatically injects the .pnp file over NODE_OPTIONS, this causes problems with packages that do not belong to the workspace
        NODE_OPTIONS: "",
        HOST: "0.0.0.0",
        ADMIN_URL: "/admin",
        DATABASE_CONNECTOR: "bookshelf",
        DATABASE_CLIENT: "sqlite",
        DATABASE_NAME: "strapi",
        DATABASE_USERNAME: "strapi",
        PORT: "3002"
      },
    },
  ],
};
