import { GraphQLClient } from './graphql';

export class SSRGraphQLClient extends GraphQLClient {
    protected constructor(url?: string, options?: RequestInit) {
        super(url || window.ssr?.env?.STRAPI_INTERN_URL ? window.ssr?.env?.STRAPI_INTERN_URL + "/graphql" : undefined, options);
    }

    public static getInstance() {
        if(SSRGraphQLClient.instance) {
          return SSRGraphQLClient.instance;
        }
        SSRGraphQLClient.instance = new SSRGraphQLClient();
        return SSRGraphQLClient.instance;
      }
}