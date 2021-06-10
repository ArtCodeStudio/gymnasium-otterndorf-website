/**
 * @see // https://strapi.io/documentation/developer-docs/latest/concepts/configurations.html#database
 * @param {*} context
 */
module.exports = ({ env }) => {
  /**
   * Connector used by the current connection. bookshelf or mongoose
   */
  const connector = env("DATABASE_CONNECTOR", "bookshelf");

  /**
   * Database client to create the connection. sqlite or postgres or mysql.
   */
  const client = env("DATABASE_CLIENT", "sqlite");

  if (connector === "bookshelf") {
    if (client === "sqlite") {
      return {
        defaultConnection: "default",
        connections: {
          default: {
            connector,
            settings: {
              client,
              filename: env("DATABASE_SQLITE_PATH", ".tmp/data.db"),
            },
            options: {
              useNullAsDefault: true,
            },
          },
        },
      };
    }
    if (client === "postgres") {
      const config = {
        defaultConnection: "default",
        connections: {
          default: {
            connector,
            settings: {
              client,
              host: env("DATABASE_HOST", "localhost"),
              port: env.int("DATABASE_PORT", 5432),
              database: env("DATABASE_NAME", "strapi"),
              username: env("DATABASE_USERNAME", "strapi"),
              password: env("DATABASE_PASSWORD", "strapi"),
              timezone: env("DATABASE_TIMEZONE"),
              schema: env("DATABASE_SCHEMA", "public"),
              ssl: {
                rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
              },
            },
            options: {
              debug: env.bool("DATABASE_DEBUG", false),
              autoMigration: env.bool("DATABASE_AUTO_MIGRATION", true),
              ssl: env.bool("DATABASE_SSL", false),
            },
          },
        },
      };
      return config;
    }
    if (client === "mysql") {
      return {
        defaultConnection: "default",
        connections: {
          default: {
            connector: "bookshelf",
            settings: {
              client,
              host: env("DATABASE_HOST", "localhost"),
              port: env.int("DATABASE_PORT", 3306),
              database: env("DATABASE_NAME", "strapi"),
              username: env("DATABASE_USERNAME", "strapi"),
              password: env("DATABASE_PASSWORD", "strapi"),
            },
            options: {},
          },
        },
      };
    }
  }

  if (connector === "mongoose") {
    return {
      defaultConnection: "default",
      connections: {
        default: {
          connector,
          settings: {
            client,
            host: env("DATABASE_HOST"),
            port: env.int("DATABASE_PORT"),
            database: env("DATABASE_NAME"),
            username: env("DATABASE_USERNAME"),
            password: env("DATABASE_PASSWORD"),
            uri: env("DATABASE_URI"),
          },
          options: {
            useNullAsDefault: true,
            ssl: env.boolean("DATABASE_SSL", false),
            debug: env.boolean("DATABASE_DEBUG", false),
            authenticationDatabase: env("DATABASE_AUTHENTICATION"),
          },
        },
      },
    };
  }

  return {};
};
