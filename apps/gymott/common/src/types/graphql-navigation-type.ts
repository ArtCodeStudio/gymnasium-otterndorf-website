export interface GraphQLNavigationType {
  __typename:
    | "ComponentLinkTypePage"
    | "ComponentLinkTypeSchulfach"
    | "ComponentLinkTypeWeb"
    | "ComponentLinkTypeBlog";
  schulfach?: {
    title: string;
    slug: string;
  };
  page?: {
    title: string;
    slug: string;
  };
  blog?: {
    title: string;
    slug: string;
  };
  URL?: string;
}
