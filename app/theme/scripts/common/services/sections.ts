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
  StrapiGqlComponentAttachmentAssetsFragmentFragment,
  HomeNews,
  StrapiGqlImageFragmentFragment,
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

  public static getEmptySectionsObject() {
    const sectionsObj: SectionObject = {
      previewImage: undefined,
      previewText: "",
      images: [],
      texts: [],
      buttons: [],
      facts: [],
      news: [],
      calendars: [],
      slideshows: [],
      gallerySlideshows: [],
      blackboardSlideshows: [],
      blogSlideshows: [],
      studentQuotes: [],
      iframes: [],
      mensamaxs: [],
      podcastEpisodes: [],
      latestPodcastEpisodes: [],
      formerStudents: [],
    };
    return sectionsObj;
  }

  public async getPreviewImage(
    sectionsObj: SectionObject
  ): Promise<StrapiGqlImageFragmentFragment | undefined> {
    const image =
      sectionsObj.images[0]?.image ||
      sectionsObj.podcastEpisodes[0]?.image ||
      sectionsObj.slideshows[0]?.entries[0]?.image ||
      sectionsObj.gallerySlideshows[0]?.gallery?.images?.[0]?.image ||
      undefined;

    // if (
    //   !image &&
    //   sectionsObj.blogSlideshows[0]?.blog?.blog_entries?.[0]?.content
    // ) {
    //   const blogSections = await this.toArray(
    //     sectionsObj.blogSlideshows[0].blog.blog_entries[0]
    //       .content as DynamicZoneSection[]
    //   );
    //   image = await this.getPreviewImage(await this.toObject(blogSections));
    // }

    return image;
  }

  public getPreviewText(sectionsObj: SectionObject) {
    return (
      sectionsObj.texts[0]?.text ||
      sectionsObj.podcastEpisodes[0]?.description ||
      ""
    );
  }

  public async toObject(sectionsArr: Section[]) {
    const sectionsObj = SectionsService.getEmptySectionsObject();
    for (const section of sectionsArr) {
      switch (section.__typename) {
        case "ComponentContentImage":
          // TODO array?
          sectionsObj.images.push(section);
          break;
        case "ComponentContentText":
          sectionsObj.texts.push(section);
          break;
        case "ComponentContentButton":
        case "ComponentContentDownloadButton":
          sectionsObj.buttons.push(section);
          break;
        case "ComponentHomeCalendar":
          sectionsObj.calendars.push(section);
          break;
        case "ComponentHomeNews":
          sectionsObj.news.push(section);
          break;
        case "ComponentSectionBlackboardSlideshow":
          sectionsObj.blackboardSlideshows.push(section);
          break;
        case "ComponentSectionBlogSlideshow":
          sectionsObj.blogSlideshows.push(section);
          break;
        case "ComponentSectionFacts":
          sectionsObj.facts.push(section);
          break;
        case "ComponentSectionGallerySlideshow":
          sectionsObj.gallerySlideshows.push(section);
          break;
        case "ComponentSectionSlideshow":
          sectionsObj.slideshows.push(section);
          break;
        case "ComponentStudentSectionStudentQuote":
          sectionsObj.studentQuotes.push(section);
          break;
        case "ComponentSectionIFrame":
          sectionsObj.iframes.push(section);
          break;
        case "ComponentSectionMensaMax":
          sectionsObj.mensamaxs.push(section);
          break;
        case "PodcastEpisode":
          sectionsObj.podcastEpisodes.push(section);
          break;
        case "ComponentSectionLatestPodcastEpisode":
          sectionsObj.latestPodcastEpisodes.push(section);
          break;
        case "ComponentSectionFormerStudents":
          sectionsObj.formerStudents.push(section);
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

    sectionsObj.previewImage = await this.getPreviewImage(sectionsObj);
    sectionsObj.previewText = this.getPreviewText(sectionsObj);

    return sectionsObj;
  }

  public async toArray(dynamicZoneSections: DynamicZoneSection[]) {
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
              // TODO add to graphql
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
            sections.push(dynamicZoneSection);
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
          case "ComponentSectionFormerStudents":
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

  public getAssetsFromSections(sections: Section[]) {
    const assets: StrapiGqlComponentAttachmentAssetsFragmentFragment[] = [];
    for (const section of sections) {
      if (
        section.__typename === "ComponentContentDownloadButton" &&
        section.file?.url
      ) {
        assets.push({
          __typename: "ComponentAttachmentAssets",
          file: section.file,
          name: section.label,
        });
      }
    }
    return assets;
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
