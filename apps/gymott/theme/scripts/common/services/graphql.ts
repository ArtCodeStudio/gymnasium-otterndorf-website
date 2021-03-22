import { GraphQLClient as _GraphQLClient } from "graphql-request";
import type { RequestInit } from "graphql-request/dist/types.dom";
import authMutation from "../../../graphql/mutations/auth.gql";

export class GraphQLClient extends _GraphQLClient {
  protected static instance: GraphQLClient;

  protected constructor(url: string, options?: RequestInit) {
    super(url, options);
  }

  public static getInstance() {
    if (GraphQLClient.instance) {
      return GraphQLClient.instance;
    }
    let url = "";
    // SSR
    if (window.ssr?.env?.STRAPI_INTERN_URL) {
      url = window.ssr.env.STRAPI_INTERN_URL;
    }
    // CSR
    if (window.env?.STRAPI_EXTERN_URL) {
      url = window.env.STRAPI_EXTERN_URL;
    }
    if (!url) {
      throw new Error("GraphQL URL is required!");
    }
    url += "/graphql";
    GraphQLClient.instance = new GraphQLClient(url);
    return GraphQLClient.instance;
  }

  async auth(email: string, password: string) {
    return this.request(authMutation, { email, password });
  }
}
