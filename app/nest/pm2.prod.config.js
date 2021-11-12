module.exports = {
  apps: [
    {
      name: "prod:@gymott/nest",
      script: "yarn workspace @gymott/nest run start:prod",
      env: {
        STRAPI_LOCAL_URL: "http://127.0.0.1:3002",
        STRAPI_REMOTE_URL: "https://gym-strapi.artandcode.de",
        STRAPI_STUDENT_INTERN_URL: "http://127.0.0.1:3003",
        STRAPI_STUDENT_EXTERN_URL: "https://gym-strapi-student.artandcode.de",
        NEST_INTERN_URL: "http://127.0.0.1:3001",
        NEST_EXTERN_URL: "https://gym.artandcode.de/",
        PORT: "3001"
      },
    },
  ],
};
