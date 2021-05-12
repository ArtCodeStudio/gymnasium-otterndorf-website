import { StrapiGqlComponentHomeFact, Maybe } from "./strapi-gql";

export interface SectionFacts {
  __typename: "ComponentSectionFacts";
  facts: Maybe<
    Pick<StrapiGqlComponentHomeFact, "number" | "title" | "subtitle">
  >[];
  size: number;
}
