import { GraphQLClient } from "./graphql";
import {
  StrapiGqlSectionSlideshowByIdQuery,
  StrapiGqlSectionSlideshowByIdQueryVariables,
  DynamicZoneSection,
  StrapiGqlComponentSlideshowEntryPageFragmentFragment,
  Section,
  SectionObject,
  SectionSlideshowEntry,
  StrapiGqlComponentSlideshowEntryFragmentFragment,
  StrapiGqlComponentSlideshowEntryBlogFragmentFragment,
  HomeNews,
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

  toObject(sectionsArr: Section[]) {
    const sectionsObj: SectionObject = {};
    for (const section of sectionsArr) {
      switch (section.__typename) {
        case "ComponentContentImage":
          sectionsObj.image = section;
          break;
        case "ComponentContentText":
          sectionsObj.text = section;
          break;
        case "ComponentContentButton":
          sectionsObj.button = section;
          break;
        case "ComponentContentDownloadButton":
          sectionsObj.button = section;
          break;
        case "ComponentHomeCalendar":
          sectionsObj.calendar = section;
          break;
        case "ComponentHomeNews":
          sectionsObj.news = section;
          break;
        case "ComponentSectionBlackboardSlideshow":
          sectionsObj.blackboardSlideshow = section;
          break;
        case "ComponentSectionBlogSlideshow":
          sectionsObj.blogSlideshow = section;
          break;
        case "ComponentSectionFacts":
          sectionsObj.facts = section;
          break;
        case "ComponentSectionGallerySlideshow":
          sectionsObj.gallerySlideshow = section;
          break;
        case "ComponentSectionSlideshow":
          sectionsObj.slideshow = section;
          break;
        case "ComponentStudentSectionStudentQuote":
          sectionsObj.studentQuote = section;
          break;
        case "ComponentSectionIFrame":
          sectionsObj.iframe = section;
          break;
        case "ComponentSectionMensaMax":
          sectionsObj.mensamax = section;
          break;
        case "PodcastEpisode":
          sectionsObj.podcastEpisode = section;
          break;
        case "ComponentSectionLatestPodcastEpisode":
          sectionsObj.latestPodcastEpisode = section;
          break;
        default:
          console.warn(
            `[SectionsService] Unknown section type "${
              (section as any)?.__typename
            }" detected!`
          );
          break;
      }
    }
    return sectionsObj;
  }

  async toArray(dynamicZoneSections: DynamicZoneSection[]) {
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
              id: dynamicZoneSection.id,
              text: dynamicZoneSection.text || "",
            });
            break;
          case "ComponentContentDownloadButton":
          case "ComponentContentButton":
            sections.push(dynamicZoneSection);
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
            sections.push(dynamicZoneSection as HomeNews);
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
          case "ComponentSectionBlogSlideshow":
            const sectionBlogSlideshow = clone(true, dynamicZoneSection);
            if (
              sectionBlogSlideshow.blog?.blog_entries?.length &&
              sectionBlogSlideshow.blog?.blog_entries?.length >
                sectionBlogSlideshow.limit
            ) {
              sectionBlogSlideshow.blog.blog_entries =
                sectionBlogSlideshow.blog.blog_entries.slice(
                  0,
                  sectionBlogSlideshow.limit
                );
            }
            sections.push(sectionBlogSlideshow);
            break;
          case "ComponentHomeCalendar":
            sections.push(dynamicZoneSection);
            break;
          case "ComponentSectionBlackboardSlideshow":
            sections.push(dynamicZoneSection);
            break;
          case "ComponentStudentSectionStudentQuote":
            sections.push(dynamicZoneSection);
            break;
          case "ComponentSectionIFrame":
            sections.push(dynamicZoneSection);
            break;
          case "ComponentSectionMensaMax":
            sections.push(dynamicZoneSection);
            break;
          case "ComponentSectionPodcastEpisode":
            if (dynamicZoneSection.podcast_episode) {
              sections.push(dynamicZoneSection.podcast_episode);
            }
            break;
          case "ComponentSectionLatestPodcastEpisode":
            sections.push(dynamicZoneSection);
            break;
          default:
            console.warn(
              `[SectionsService] Unknown section type "${
                (dynamicZoneSection as any)?.__typename
              }" detected!`
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
