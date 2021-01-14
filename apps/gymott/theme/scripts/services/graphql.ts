import { GraphQLClient as _GraphQLClient, gql } from "graphql-request";
import rawAuthMutation from "../../graphql/mutations/auth.gql";

export class GraphQLClient extends _GraphQLClient {
  auth() {
    const authMutation = gql`
      ${rawAuthMutation}
    `;
    console.log("authMutation", authMutation);
    this.request(authMutation).then((data) => {
      console.log(data);
      return data;
    });
  }
}
