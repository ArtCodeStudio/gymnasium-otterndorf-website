import { GraphQLClient } from "./graphql";
import { ResponseError } from "../types/response-error";
import {
  StrapiGqlNavigationEntriesQuery,
  StrapiGqlNavigationEntries,
  helper,
} from "@gymott/common";
import navigationQuery from "../../../graphql/queries/navigation-entries.gql";

export class NavigationService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: NavigationService;

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (NavigationService.instance) {
      return NavigationService.instance;
    }
    NavigationService.instance = new NavigationService();
    return NavigationService.instance;
  }

  public async get() {
    const navigationRes = await this.graphql.requestCached<StrapiGqlNavigationEntriesQuery>(
      navigationQuery,
      {}
    );

    console.debug("navigationRes", JSON.stringify(navigationRes, null, 2));

    if (!navigationRes?.menu?.entries) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const baseEntries = navigationRes?.menu.entries;
    const tree = helper.navigation.buildTree(
      baseEntries as StrapiGqlNavigationEntries
    );
    return tree;
  }
}
