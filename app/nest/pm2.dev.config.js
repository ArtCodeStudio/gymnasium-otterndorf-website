module.exports = {
  apps: [
    {
      name: "dev:@gymott/nest",
      script: "yarn workspace @gymott/nest run watch",
      watch: ["package.json"],
      env: {
        STRAPI_LOCAL_URL: "http://127.0.0.1:4002",
        STRAPI_REMOTE_URL: "https://gym-strapi.artandcode.de",
        STRAPI_STUDENT_INTERN_URL: "http://127.0.0.1:4003",
        STRAPI_STUDENT_EXTERN_URL: "https://gym-strapi-student.artandcode.de",
        NEST_INTERN_URL: "http://127.0.0.1:4001",
        NEST_EXTERN_URL: "https://gym.artandcode.de/",
        PORT: "4001"
      },
    },
  ],
};
