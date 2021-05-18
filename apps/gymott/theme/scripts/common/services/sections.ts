import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSectionSlideshowByIdQuery,
  StrapiGqlSectionSlideshowByIdQueryVariables,
  DynamicZoneSection,
  StrapiGqlComponentSlideshowEntryPageFragmentFragment,
  Section,
  SectionSlideshowEntry,
  StrapiGqlComponentSlideshowEntryFragmentFragment,
  StrapiGqlComponentSlideshowEntryBlogFragmentFragment,
} from "../types";
import sectionSlideshowById from "../../../graphql/queries/section-slideshow-by-id.gql";
import { postFormatter, pageFormatter } from "../formatters";
import { clone } from "@ribajs/utils";

export class SectionsService {
  protected static instance: SectionsService;
  protected graphql = GraphQLClient.getInstance();

  protected constructor() {
    /** protected */
  }

  public static getInstance() {
    if (this.instance) {
      return this.instance;
    }
    this.instance = new this();
    return this.instance;
  }

  async transform(dynamicZoneSections: DynamicZoneSection[]) {
    const sections: Section[] = [];
    for (let i = 0; i < dynamicZoneSections.length; i++) {
      if (dynamicZoneSections[i]) {
        const dynamicZoneSection = dynamicZoneSections[i];
        switch (dynamicZoneSection?.__typename) {
          case "ComponentContentImage":
            sections.push({
              __typename: dynamicZoneSection.__typename,
              caption: dynamicZoneSection.caption || "",
              id: dynamicZoneSection.id || "",
              image: dynamicZoneSection.image || null,
            });
            break;
          case "ComponentContentText":
            sections.push({
              __typename: dynamicZoneSection.__typename,
              id: dynamicZoneSection.id || "",
              text: dynamicZoneSection.text || "",
            });
            break;
          case "ComponentSectionSlideshow":
            if (dynamicZoneSection.slideshow?.id) {
              const slideshow = await this.getSlideshow(
                dynamicZoneSection["slideshow"].id
              );
              if (slideshow) {
                sections.push({
                  __typename: dynamicZoneSection.__typename,
                  entries: this.transformSlideshowEntries(
                    (slideshow.entries as any) || []
                  ),
                  id: slideshow.id,
                  title: slideshow.title,
                });
              }
            }

            break;
          case "ComponentSectionFacts":
            sections.push({
              __typename: dynamicZoneSection.__typename,
              facts: dynamicZoneSection.facts || [],
              size: dynamicZoneSection.size || 12,
            });
            break;
          case "ComponentHomeNews":
            sections.push({
              __typename: dynamicZoneSection.__typename,
              amount: dynamicZoneSection.amount || 3,
            });
            break;
          case "ComponentSectionGallerySlideshow":
            const sectionGallerySlideshow = clone(true, dynamicZoneSection);
            if (
              sectionGallerySlideshow.gallery?.images?.length &&
              sectionGallerySlideshow.gallery.images.length >
                sectionGallerySlideshow.limit
            ) {
              sectionGallerySlideshow.gallery.images =
                sectionGallerySlideshow.gallery.images.slice(
                  0,
                  sectionGallerySlideshow.limit
                );
            }

            sections.push(sectionGallerySlideshow);
            break;
          default:
            console.warn(
              `[SectionsService] Unknown section type "${dynamicZoneSection?.__typename}" detected!`
            );
            sections.push(dynamicZoneSection as any);
        }
      }
    }
    return sections;
  }

  async getSlideshow(id: string) {
    const vars: StrapiGqlSectionSlideshowByIdQueryVariables = { id };
    const slideshowResponse =
      await this.graphql.requestCached<StrapiGqlSectionSlideshowByIdQuery>(
        sectionSlideshowById,
        vars
      );
    return slideshowResponse["sectionSlideshow"];
  }

  transformSlideshowEntries(
    entries: (StrapiGqlComponentSlideshowEntryPageFragmentFragment &
      StrapiGqlComponentSlideshowEntryFragmentFragment &
      StrapiGqlComponentSlideshowEntryBlogFragmentFragment)[]
  ) {
    const result: SectionSlideshowEntry[] = entries.map((entry) => {
      const type = entry.page?.__typename || entry.post?.__typename;
      let link: string | undefined;
      switch (type) {
        case "BlogEntry":
          if (entry.post?.slug) {
            link = postFormatter.read(entry.post.slug);
          }
        case "Page":
          if (entry.page?.slug) {
            link = pageFormatter.read(entry.page.slug);
          }
      }

      return {
        id: entry.id,
        subtitle: entry.subtitle || "",
        image: entry.image || null,
        color: entry.color?.color || "",
        label: entry.label || "",
        link,
      } as SectionSlideshowEntry;
    });
    return result;
  }
}
