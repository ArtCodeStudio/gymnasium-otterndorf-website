import { GraphQLClient } from "./graphql";
import {
  NavigationLink,
  StrapiGqlNavigationLink,
  StrapiGqlComponentLinkItemLink,
  StrapiGqlComponentLinkTypeWeb,
  StrapiGqlComponentLinkTypeStrapi,
  StrapiGqlComponentLinkTypeTeacher,
  StrapiGqlComponentLinkTypeMediaCenter,
  StrapiGqlEnum_Podcastepisode_Type,
  StrapiGqlComponentLinkTypeWorkingGroup,
} from "../types";
import {
  strapiFormatter,
  pageFormatter,
  postFormatter,
  blogFormatter,
  schoolSubjectFormatter,
  mediaCenterFormatter,
  galleryFormatter,
  podcastFormatter,
  workingGroupFormatter,
} from "../formatters";
import {
  StrapiGqlMenuQuery,
  StrapiGqlMenuQueryVariables,
  StrapiGqlNavigationLinksByIdsQuery,
  StrapiGqlNavigationLinksByIdsQueryVariables,
  StrapiGqlMenuFragmentFragment,
  StrapiGqlComponentNavigationNavigationLevelEntry,
} from "../types";
import { ResponseErrorService } from "./response-error";
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

  public getHref(
    baseItem:
      | StrapiGqlComponentNavigationNavigationLevelEntry
      | StrapiGqlNavigationLink
      | NavigationLink
  ) {
    let navigationLink: StrapiGqlNavigationLink | undefined;
    if ((baseItem as StrapiGqlNavigationLink).type) {
      navigationLink = baseItem as StrapiGqlNavigationLink;
    }

    if (
      (baseItem as StrapiGqlComponentNavigationNavigationLevelEntry)
        .navigation_link
    ) {
      navigationLink = (
        baseItem as StrapiGqlComponentNavigationNavigationLevelEntry
      ).navigation_link as StrapiGqlNavigationLink;
    }

    if (!navigationLink) {
      console.warn("Navigation link not found!", baseItem);
      return;
    }

    const type = navigationLink.type?.[0];
    if (!type) {
      return "";
    }
    switch (type.__typename) {
      case "ComponentLinkTypePost":
        return postFormatter.read(type.post?.slug);
      case "ComponentLinkTypeBlog":
        return blogFormatter.read(type.blog?.slug);
      case "ComponentLinkTypePage":
        return pageFormatter.read(type.page?.slug);
      case "ComponentLinkTypeSchoolSubject":
        return schoolSubjectFormatter.read(type.school_subject?.slug);
      case "ComponentLinkTypeWeb":
        return type.URL || "";
      case "ComponentLinkTypeStrapi":
        return strapiFormatter.read(type.URL);
      case "ComponentLinkTypeMediaCenter":
        return mediaCenterFormatter.read(type.mediaCenter?.slug);
      case "ComponentLinkTypeGallery":
        return galleryFormatter.read(type.gallery?.slug);
      case "ComponentLinkTypePodcast":
        return podcastFormatter.read(type.podcastEpisode?.slug);
      case "ComponentLinkTypeWorkingGroup":
        return workingGroupFormatter.read(type.working_group?.slug);
    }
  }

  public newItem(
    title: string,
    type:
      | "page"
      | "url"
      | "strapi"
      | "subject"
      | "post"
      | "blog"
      | "gallery"
      | "mediacenter"
      | "podcast"
      | "workinggroup",
    urlOrSlug: string
  ): StrapiGqlComponentLinkItemLink {
    const item: StrapiGqlComponentLinkItemLink = {
      __typename: "ComponentLinkItemLink",
      id: "0",
      navigation_link: {
        __typename: "NavigationLink",
        id: "0",
        created_at: "0",
        updated_at: "0",
        title,
        type: [],
      },
    };

    switch (type) {
      case "page":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypePage",
          id: "0",
          page: {
            id: "0",
            created_at: "0",
            updated_at: "0",
            slug: urlOrSlug,
            title,
          },
        });
        break;
      case "url":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypeWeb",
          URL: urlOrSlug,
        } as StrapiGqlComponentLinkTypeWeb);
        break;
      case "strapi":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypeStrapi",
          id: "0",
          URL: urlOrSlug,
        } as StrapiGqlComponentLinkTypeStrapi);
        break;
      case "subject":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypeTeacher",
          id: "0",
          title,
          slug: urlOrSlug,
        } as StrapiGqlComponentLinkTypeTeacher);
        break;
      case "workinggroup":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypeWorkingGroup",
          id: "0",
          title,
          slug: urlOrSlug,
        } as StrapiGqlComponentLinkTypeWorkingGroup);
        break;
      case "mediacenter":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypeMediaCenter",
          id: "0",
          mediaCenter: {
            id: "0",
            created_at: "0",
            updated_at: "0",
            title,
            slug: urlOrSlug,
          },
        } as StrapiGqlComponentLinkTypeMediaCenter);
        break;
      case "post":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypePost",
          id: "0",
          post: {
            __typename: "BlogEntry",
            id: "0",
            created_at: "0",
            updated_at: "0",
            author: "",
            title,
            slug: urlOrSlug,
          },
        });
        break;
      case "podcast":
        item.navigation_link?.type?.push({
          __typename: "ComponentLinkTypePodcast",
          id: "0",
          podcastEpisode: {
            __typename: "PodcastEpisode",
            id: "0",
            description: "",
            block: false,
            episode: 0,
            explicit: false,
            season: 0,
            subtitle: "",
            type: StrapiGqlEnum_Podcastepisode_Type.Full,

            created_at: "0",
            updated_at: "0",
            title,
            slug: urlOrSlug,
          },
        });
        break;
      default:
        console.debug(
          `TODO Add support to generate link item of type "${type}"`
        );
        break;
    }

    return item;
  }

  protected newLink(
    baseItem?: StrapiGqlComponentNavigationNavigationLevelEntry
  ): NavigationLink {
    if (baseItem) {
      const href = this.getHref(baseItem);
      return {
        type: "list",
        id: baseItem?.navigation_link?.id || "",
        label: baseItem?.navigation_link?.title || baseItem.title || "",
        hideInSidebar: baseItem.hideInSidebar || false,
        href,
        children: [],
      };
    }
    // Empty item
    return {
      type: "list",
      label: "",
      id: "",
      children: [],
      hideInSidebar: false,
    };
  }

  protected buildTree(
    baseEntries: StrapiGqlMenuFragmentFragment["entries"] = []
  ) {
    const result = this.newLink();
    let count = 0;
    let ignored = 0;

    if (!baseEntries) {
      return result;
    }

    const entryLength = baseEntries.length;
    do {
      for (const entry of baseEntries) {
        if (!entry) {
          ignored++;
          continue;
        }
        // Root element
        if (!entry.parent) {
          result.children.push(
            this.newLink(
              entry as StrapiGqlComponentNavigationNavigationLevelEntry
            )
          );
          count++;
        } else if (entry.parent.id) {
          // Child element
          const parentEntry = this.findParent(result, entry.parent.id);
          if (parentEntry) {
            parentEntry.children?.push(
              this.newLink(
                entry as StrapiGqlComponentNavigationNavigationLevelEntry
              )
            );
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

  public static getMaxDepth(tree: NavigationLink, depth = 0) {
    if (!Array.isArray(tree.children) || tree.children.length <= 0) {
      return depth;
    }
    depth++;
    let maxDepth = 0;
    for (const children of tree.children) {
      maxDepth = Math.max(maxDepth, this.getMaxDepth(children, depth));
    }
    return maxDepth;
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
      throw ResponseErrorService.notFound("Navigation");
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
      const response =
        await this.graphql.requestCached<StrapiGqlNavigationLinksByIdsQuery>(
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
