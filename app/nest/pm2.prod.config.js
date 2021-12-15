module.exports = {
  apps: [
    {
      name: 'prod:@gymott/nest',
      script: 'yarn workspace @gymott/nest run start:prod',
      env: {
        STRAPI_LOCAL_URL: 'http://127.0.0.1:3002',
        STRAPI_REMOTE_URL: 'https://strapi.gymnasium-otterndorf.de',
        STRAPI_STUDENT_INTERN_URL: 'http://127.0.0.1:3003',
        STRAPI_STUDENT_REMOTE_URL:
          'https://strapi-student.gymnasium-otterndorf.de',
        NEST_INTERN_URL: 'http://127.0.0.1:3001',
        NEST_REMOTE_URL: 'https://gymnasium-otterndorf.de',
        PORT: '3001',
      },
    },
  ],
};
