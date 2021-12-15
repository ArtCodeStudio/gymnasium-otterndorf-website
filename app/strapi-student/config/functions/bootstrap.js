'use strict';

const exportGraphQlSchemaFile = (strapi) => {
  const { printSchema } = require('graphql/utilities/printSchema');
  const path = require('path');
  const fs = require('fs');
  const targetFile = path.resolve(__dirname, "../../exports/graphql/schema.graphql");

  if (!strapi.plugins.graphql) {
    return;
  }

  const schema = strapi
    .plugins.graphql.services['schema-generator'].generateSchema();

  const { isEmpty } = require('lodash/fp');

  if (!isEmpty(schema)) {
    try {
      fs.mkdirSync(path.dirname(targetFile), { recursive: true });
      fs.writeFileSync(targetFile, printSchema(schema));
      console.log("Graphql schema generated to " + targetFile);
    } catch (err) {
      strapi.log.error(err)
    }
    return;
  } else {
    strapi.log.warn('The GraphQL schema has not been generated because it is empty');
  }
}

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://docs-v3.strapi.io/developer-docs/latest/setup-deployment-guides/configurations.html#functions
 */

module.exports = () => {
  exportGraphQlSchemaFile(strapi);
};
