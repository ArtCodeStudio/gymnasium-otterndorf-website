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

const newItem = (baseItem?: GraphQLNavigationEntry): NavigationLink => {
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
