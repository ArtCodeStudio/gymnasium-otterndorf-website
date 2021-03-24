import { GraphQLNavigationType } from "./graphql-navigation-type";

export interface GraphQLNavigationLink {
  id: string;
  title: string;
  type: GraphQLNavigationType[];
}
