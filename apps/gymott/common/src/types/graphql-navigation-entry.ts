import { GraphQLNavigationLink } from "./graphql-navigation-link";

export interface GraphQLNavigationEntry {
  parent: {
    id: string | null;
  };
  navigation_link: GraphQLNavigationLink;
}
