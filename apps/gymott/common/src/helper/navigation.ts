import { NavigationLink, GraphQLNavigationEntry } from "../types";

const findParent = (
  link: NavigationLink,
  id: string
): NavigationLink | undefined => {
  let parentEntry = link.children.find((child) => {
    if (child.id === id) {
      return true;
    }
  });
  if (!parentEntry) {
    for (const child of link.children) {
      parentEntry = findParent(child, id);
    }
  }
  return parentEntry;
};

const getHref = (baseItem: GraphQLNavigationEntry) => {
  const type = baseItem.navigation_link.type[0];
  if (!type) {
    return "";
  }
  switch (type.__typename) {
    case "ComponentLinkTypeBlog":
      return type.blog?.slug ? "/blog/article/" + type.blog.slug : "";
    case "ComponentLinkTypePage":
      return type.page?.slug ? "/pages/" + type.page.slug : "";
    case "ComponentLinkTypeSchulfach":
      return type.schulfach?.slug ? "/schulfach/" + type.schulfach.slug : "";
    case "ComponentLinkTypeWeb":
      return type.URL ? type.URL : "";
    default:
      console.warn(`Unknown navigation type: "${type.__typename}"`);
      return "";
  }
};

const newItem = (baseItem?: GraphQLNavigationEntry): NavigationLink => {
  if (baseItem) {
    return {
      type: "list",
      id: baseItem.navigation_link.id,
      label: baseItem.navigation_link.title || baseItem.title,
      href: getHref(baseItem),
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
};

const buildTree = (baseEntries: GraphQLNavigationEntry[]) => {
  const result = newItem();
  let count = 0;
  let ignored = 0;
  const entryLength = baseEntries.length;

  do {
    for (const entry of baseEntries) {
      // Root element
      if (!entry.parent) {
        result.children.push(newItem(entry));
        count++;
      } else if (entry.parent.id) {
        // Child element
        const parentEntry = findParent(result, entry.parent.id);
        if (parentEntry) {
          parentEntry.children?.push(newItem(entry));
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
};

export const navigation = {
  newItem,
  buildTree,
};
