import { OpenGraph, OpenGraphImage } from "@ribajs/ssr";
import { StrapiImage } from "@ribajs/strapi";
import type { StrapiGqlImageFragmentFragment } from ".";

export interface OpenGraphData extends Partial<OpenGraph> {
  image:
    | string
    | string[]
    | OpenGraphImage
    | OpenGraphImage[]
    | StrapiImage
    | StrapiGqlImageFragmentFragment
    | StrapiImage[]
    | StrapiGqlImageFragmentFragment[];
}
