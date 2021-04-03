import { GraphQLClient } from "./graphql";
import { ResponseError, NavigationLink } from "../types";
import {
  StrapiGqlMenuQuery,
  StrapiGqlMenuQueryVariables,
  StrapiGqlNavigationLinksByIdsQuery,
  StrapiGqlNavigationLinksByIdsQueryVariables,
} from "../types";
import menuQuery from "../../../graphql/queries/menu.gql";
import navigationLinksByIds from "../../../graphql/queries/navigation-links-by-ids.gql";

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

  protected getHref(baseItem: StrapiGqlMenuQuery["menu"]["entries"][0]) {
    const type = baseItem.navigation_link.type[0];
    if (!type) {
      return "";
    }
    switch (type.__typename) {
      case "ComponentLinkTypeBlog":
        return type.blog?.slug ? "/post/" + type.blog.slug : "";
      case "ComponentLinkTypePage":
        return type.page?.slug ? "/page/" + type.page.slug : "";
      case "ComponentLinkTypeSchulfach":
        return type.schulfach?.slug ? "/schulfach/" + type.schulfach.slug : "";
      case "ComponentLinkTypeWeb":
        return type.URL ? type.URL : "";
    }
  }

  protected newItem(
    baseItem?: StrapiGqlMenuQuery["menu"]["entries"][0]
  ): NavigationLink {
    if (baseItem) {
      return {
        type: "list",
        id: baseItem.navigation_link.id,
        label: baseItem.navigation_link.title || baseItem.title,
        href: this.getHref(baseItem),
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

  protected buildTree(baseEntries: StrapiGqlMenuQuery["menu"]["entries"] = []) {
    const result = this.newItem();
    let count = 0;
    let ignored = 0;

    const entryLength = baseEntries.length;

    do {
      for (const entry of baseEntries) {
        // Root element
        if (!entry.parent) {
          result.children.push(this.newItem(entry));
          count++;
        } else if (entry.parent.id) {
          // Child element
          const parentEntry = this.findParent(result, entry.parent.id);
          if (parentEntry) {
            parentEntry.children?.push(this.newItem(entry));
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

  public async getMenu() {
    const vars: StrapiGqlMenuQueryVariables = {};
    const navigationRes = await this.graphql.requestCached<StrapiGqlMenuQuery>(
      menuQuery,
      {},
      vars
    );

    // console.debug("navigationRes", JSON.stringify(navigationRes, null, 2));

    if (!navigationRes?.menu?.entries) {
      const error: ResponseError = new Error("Not found!");
      error.status = 404;
      throw error;
    }
    const baseEntries = navigationRes?.menu.entries;
    const tree = this.buildTree(baseEntries);
    return tree;
  }

  /**
   * List navigation links
   * @param ids Pass an empty array to get all navigation links, pass null to get no result
   * @returns
   */
  public async list(ids: string[] | null = null) {
    const vars: StrapiGqlNavigationLinksByIdsQueryVariables = { ids };
    let navs: StrapiGqlNavigationLinksByIdsQuery["navigationLinks"] = [];
    try {
      const response = await this.graphql.requestCached<StrapiGqlNavigationLinksByIdsQuery>(
        navigationLinksByIds,
        vars
      );
      navs = response.navigationLinks || [];
    } catch (error) {
      console.error(error);
    }
    return navs;
  }

  /**
   * Get navigation link
   * @param id Id of the navigation link
   * @returns
   */
  public async get(id: string) {
    const navs = await this.list([id]);
    return navs?.[0] || null;
  }
}
