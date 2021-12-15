module.exports = {
  apps: [
    {
      name: 'local:@gymott/nest',
      script: 'yarn workspace @gymott/nest run watch',
      watch: ['package.json'],
      env: {
        STRAPI_LOCAL_URL: 'https://strapi.gymnasium-otterndorf.de',
        STRAPI_REMOTE_URL: 'https://strapi.gymnasium-otterndorf.de',
        STRAPI_STUDENT_INTERN_URL:
          'https://strapi-student.gymnasium-otterndorf.de',
        STRAPI_STUDENT_REMOTE_URL:
          'https://strapi-student.gymnasium-otterndorf.de',
        NEST_INTERN_URL: 'http://localhost:4001',
        NEST_REMOTE_URL: 'http://localhost:4001',
        PORT: '4001',
      },
    },
  ],
};
