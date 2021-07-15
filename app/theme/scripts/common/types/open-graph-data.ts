import { OpenGraph, OpenGraphImage } from "@ribajs/ssr";
import type { StrapiImage, StrapiGqlImageFragmentFragment } from ".";

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
