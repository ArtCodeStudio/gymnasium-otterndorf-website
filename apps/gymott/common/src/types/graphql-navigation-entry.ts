import { GraphQLNavigationLink } from "./graphql-navigation-link";

export interface GraphQLNavigationEntry {
  parent: {
    id: string | null;
  };
  title: string;
  navigation_link: GraphQLNavigationLink;
}
