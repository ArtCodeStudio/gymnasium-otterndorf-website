import { GraphQLClient as _GraphQLClient } from "graphql-request";
import type { Variables, RequestDocument } from 'graphql-request/dist/types'
import authMutation from "../../graphql/mutations/auth.gql";

export class GraphQLClient extends _GraphQLClient {

  protected static instance: GraphQLClient;

  // TODO get STRAPI_EXTERN_URL env over config api
  protected constructor(url?: string, options?: RequestInit) {
    super(url || window.ssr?.env?.STRAPI_EXTERN_URL ? window.ssr?.env?.STRAPI_INTERN_URL + "/graphql" : undefined, options);
  }

  public static getInstance() {
    if(GraphQLClient.instance) {
      return GraphQLClient.instance;
    }
    GraphQLClient.instance = new GraphQLClient();
    return GraphQLClient.instance;
  }

  async auth(email: string, password: string) {
    return this.request(authMutation, {email, password});
  }

}
