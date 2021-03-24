import { GraphQLClient } from "./graphql";
import { ResponseError } from "../types/response-error";
import { GraphQLNavigationEntries, helper } from "@gymott/common";
import navigationQuery from "../../../graphql/queries/navigation-entries.gql";

export class NavigationService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: NavigationService;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  protected constructor() {}

  public static getInstance() {
    if (NavigationService.instance) {
      return NavigationService.instance;
    }
    NavigationService.instance = new NavigationService();
    return NavigationService.instance;
  }

  public async get() {
    const navigationRes = (await this.graphql.request(
      navigationQuery,
      {}
    )) as GraphQLNavigationEntries;

    console.debug("navigationRes", JSON.stringify(navigationRes, null, 2));

    if (!navigationRes?.menu?.entries) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const baseEntries = navigationRes?.menu.entries;
    const tree = helper.navigation.buildTree(baseEntries);
    return tree;
  }
}
