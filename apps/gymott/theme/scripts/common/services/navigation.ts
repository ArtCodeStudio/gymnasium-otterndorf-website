import { GraphQLClient } from "./graphql";
import { ResponseError } from "../types/response-error";
import {
  GraphQLNavigationEntries,
  GraphQLNavigationEntry,
  NavigationLink,
} from "../types";
import toolbarQuery from "../../../graphql/queries/toolbar.gql";
import navigationQuery from "../../../graphql/queries/navigation-entries.gql";

export class NavigationService {
  protected graphql = GraphQLClient.getInstance();

  protected static instance: NavigationService;

  protected constructor() {}

  public static getInstance() {
    if (NavigationService.instance) {
      return NavigationService.instance;
    }
    NavigationService.instance = new NavigationService();
    return NavigationService.instance;
  }

  async get() {
    const toolbarRes = await this.graphql.request(toolbarQuery, {});
    if (!toolbarRes?.toolbar?.items) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const toolbar = toolbarRes?.toolbar;
    return toolbar;
  }

  protected findParent(
    link: NavigationLink,
    id: string
  ): NavigationLink | undefined {
    let parentEntry = link.children.find((child) => {
      if (child.id === id) {
        return true;
      }
    });
    if (!parentEntry) {
      for (const child of link.children) {
        parentEntry = this.findParent(child, id);
      }
    }
    return parentEntry;
  }

  protected getNewItem(baseItem?: GraphQLNavigationEntry): NavigationLink {
    if (baseItem) {
      return {
        type: "list",
        id: baseItem.navigation_link.id,
        label: baseItem.navigation_link.title,
        href: "", // TODO
        children: [],
      };
    }
    // Empty item
    return {
      type: "list",
      label: "",
      id: "",
      children: [],
    };
  }

  protected getNavigationTree(baseEntries: GraphQLNavigationEntry[]) {
    const result = this.getNewItem();
    let count = 0;
    let ignored = 0;
    const entryLength = baseEntries.length;

    do {
      for (const entry of baseEntries) {
        // Root element
        if (!entry.parent) {
          result.children.push(this.getNewItem(entry));
          count++;
        } else if (entry.parent.id) {
          // Child element
          const parentEntry = this.findParent(result, entry.parent.id);
          if (parentEntry) {
            parentEntry.children?.push(this.getNewItem(entry));
            count++;
          }
        } else {
          ignored++;
        }
      }
    } while (count + ignored < entryLength);

    if (ignored > 0) {
      console.warn(`${ignored} navigation items are ignored!`);
    }

    return result;
  }

  async getNavigation() {
    const navigationRes = (await this.graphql.request(
      navigationQuery,
      {}
    )) as GraphQLNavigationEntries;

    if (!navigationRes?.menu?.entries) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const baseEntries = navigationRes?.menu.entries;
    const tree = this.getNavigationTree(baseEntries);
    return tree;
  }
}
