module.exports = ({ env }) => {
  const adminUrl = env('ADMIN_URL', '/admin');
  console.debug("adminUrl", adminUrl);
  return {
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1337),
    admin: {
      url: adminUrl,
      auth: {
        secret: env('ADMIN_JWT_SECRET', '6f7beacdfe8e02ea570eea0ddf7c2091'),
      },
    },
  }

};
