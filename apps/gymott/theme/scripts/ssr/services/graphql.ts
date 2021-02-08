import { GraphQLClient as CSRGraphQLClient } from "../../csr/services/graphql";

export class SSRGraphQLClient extends CSRGraphQLClient {
  protected constructor(url: string, options?: RequestInit) {
    super(url, options);
  }

  public static getInstance() {
    if (SSRGraphQLClient.instance) {
      return SSRGraphQLClient.instance;
    }
    const url = window.ssr?.env?.STRAPI_INTERN_URL
      ? window.ssr?.env?.STRAPI_INTERN_URL + "/graphql"
      : undefined;
    if (!url) {
      throw new Error("GraphQL URL is required!");
    }
    SSRGraphQLClient.instance = new SSRGraphQLClient(url);
    return SSRGraphQLClient.instance;
  }
}
