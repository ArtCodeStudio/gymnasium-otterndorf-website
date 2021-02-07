import { GraphQLClient as _GraphQLClient,  } from "graphql-request";
import type { Variables, RequestDocument } from 'graphql-request/dist/types'
import authMutation from "../../graphql/mutations/auth.gql";

export class GraphQLClient extends _GraphQLClient {
  baseUrl = "http://localhost:4002/graphql";
  auth() {
    console.log("authMutation", authMutation);
    this.request(this.baseUrl, authMutation).then((data) => {
      console.log(data);
      return data;
    });
  }

  request(document: RequestDocument, variables?: Variables) {
    return super.request(this.baseUrl, document, variables);
  }
}
