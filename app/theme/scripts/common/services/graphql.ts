import { GraphQLClient as _GraphQLClient } from "graphql-request";
import type { Variables, RequestDocument } from "graphql-request/dist/types";
import type { RequestInit } from "graphql-request/dist/types.dom";
import authMutation from "../../../graphql/mutations/auth.gql";
import { hashCode } from "@ribajs/utils/src/type";
import { defaultCache } from "./cache";

export class GraphQLClient extends _GraphQLClient {
  protected static instance: GraphQLClient;
  protected static studentInstance: GraphQLClient;

  protected constructor(url: string, options?: RequestInit) {
    super(url, options);
  }

  public static getInstance(student = false) {
    if (student) {
      if (GraphQLClient.studentInstance) {
        return GraphQLClient.studentInstance;
      }
    } else if (GraphQLClient.instance) {
      return GraphQLClient.instance;
    }

    let url = "";
    if (student) {
      // SSR
      if (window.ssr?.env?.STRAPI_STUDENT_INTERN_URL) {
        url = window.ssr.env.STRAPI_STUDENT_INTERN_URL;
      }
      // CSR
      if (window.env?.STRAPI_STUDENT_REMOTE_URL) {
        url = window.env.STRAPI_STUDENT_REMOTE_URL;
      }
    } else {
      // SSR
      if (window.ssr?.env?.STRAPI_LOCAL_URL) {
        url = window.ssr.env.STRAPI_LOCAL_URL;
      }
      // CSR
      if (window.env?.STRAPI_REMOTE_URL) {
        url = window.env.STRAPI_REMOTE_URL;
      }
    }
    if (!url) {
      throw new Error("GraphQL URL is required!");
    }
    url += "/graphql";
    if (student) {
      GraphQLClient.studentInstance = new GraphQLClient(url);
      return GraphQLClient.studentInstance;
    } else {
      GraphQLClient.instance = new GraphQLClient(url);
      return GraphQLClient.instance;
    }
  }

  async auth(email: string, password: string) {
    return this.request(authMutation, { email, password });
  }

  async requestCached<T = any, V = Variables>(
    document: RequestDocument,
    variables?: V,
    requestHeaders?: RequestInit["headers"],
    expiresIn: number | string = "15m"
  ): Promise<T> {
    let key = JSON.stringify(document);
    if (variables) {
      key += JSON.stringify(variables);
    }
    if (requestHeaders) {
      key += JSON.stringify(requestHeaders);
    }

    return await defaultCache.resolve<T>(
      hashCode(key),
      () => {
        return super.request<T, V>(document, variables, requestHeaders);
      },
      expiresIn
    );
  }
}
