module.exports = ({ env }) => {
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
      url: env('ADMIN_URL', '/admin'),
      auth: {
        secret: env('ADMIN_JWT_SECRET', '6f7beacdfe8e02ea570eea0ddf7c2091'),
      },
    },
  }
};
