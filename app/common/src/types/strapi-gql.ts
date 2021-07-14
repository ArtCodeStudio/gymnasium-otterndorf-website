export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Input type for dynamic zone content of BlogEntry */
  BlogEntryContentDynamicZoneInput: any;
  /** A date string, such as 2007-12-03, compliant with the `full-date` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
  /** Input type for dynamic zone sections of Home */
  HomeSectionsDynamicZoneInput: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Long` scalar type represents 52-bit integers */
  Long: any;
  /** Input type for dynamic zone type of NavigationLink */
  NavigationLinkTypeDynamicZoneInput: any;
  /** Input type for dynamic zone assets of Page */
  PageAssetsDynamicZoneInput: any;
  /** Input type for dynamic zone content of Page */
  PageContentDynamicZoneInput: any;
  /** Input type for dynamic zone entries of SectionSlideshow */
  SectionSlideshowEntriesDynamicZoneInput: any;
  /** Input type for dynamic zone content of Subject */
  SubjectContentDynamicZoneInput: any;
  /** Input type for dynamic zone assets of Teacher */
  TeacherAssetsDynamicZoneInput: any;
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** Input type for dynamic zone items of Toolbar */
  ToolbarItemsDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
  /** Input type for dynamic zone content of WorkingGroup */
  WorkingGroupContentDynamicZoneInput: any;
};

export type StrapiGqlAdminUser = {
  __typename?: 'AdminUser';
  id: Scalars['ID'];
  username?: Maybe<Scalars['String']>;
  firstname: Scalars['String'];
  lastname: Scalars['String'];
};

export type StrapiGqlBlogCategory = {
  __typename?: 'BlogCategory';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  blog_entries?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
};


export type StrapiGqlBlogCategoryBlog_EntriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlBlogCategoryAggregator = {
  __typename?: 'BlogCategoryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlBlogCategoryConnection = {
  __typename?: 'BlogCategoryConnection';
  values?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  groupBy?: Maybe<StrapiGqlBlogCategoryGroupBy>;
  aggregate?: Maybe<StrapiGqlBlogCategoryAggregator>;
};

export type StrapiGqlBlogCategoryConnectionCreated_At = {
  __typename?: 'BlogCategoryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
};

export type StrapiGqlBlogCategoryConnectionId = {
  __typename?: 'BlogCategoryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
};

export type StrapiGqlBlogCategoryConnectionName = {
  __typename?: 'BlogCategoryConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
};

export type StrapiGqlBlogCategoryConnectionSlug = {
  __typename?: 'BlogCategoryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
};

export type StrapiGqlBlogCategoryConnectionUpdated_At = {
  __typename?: 'BlogCategoryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
};

export type StrapiGqlBlogCategoryGroupBy = {
  __typename?: 'BlogCategoryGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionSlug>>>;
};

export type StrapiGqlBlogCategoryInput = {
  name: Scalars['String'];
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogEntry = {
  __typename?: 'BlogEntry';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Array<Maybe<StrapiGqlBlogEntryContentDynamicZone>>>;
  blog_category?: Maybe<StrapiGqlBlogCategory>;
  slug: Scalars['String'];
  author: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogEntryAggregator = {
  __typename?: 'BlogEntryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlBlogEntryConnection = {
  __typename?: 'BlogEntryConnection';
  values?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
  groupBy?: Maybe<StrapiGqlBlogEntryGroupBy>;
  aggregate?: Maybe<StrapiGqlBlogEntryAggregator>;
};

export type StrapiGqlBlogEntryConnectionAuthor = {
  __typename?: 'BlogEntryConnectionAuthor';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionBlog_Category = {
  __typename?: 'BlogEntryConnectionBlog_category';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionCreated_At = {
  __typename?: 'BlogEntryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionId = {
  __typename?: 'BlogEntryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionPublished_At = {
  __typename?: 'BlogEntryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionSlug = {
  __typename?: 'BlogEntryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionTitle = {
  __typename?: 'BlogEntryConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryConnectionUpdated_At = {
  __typename?: 'BlogEntryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
};

export type StrapiGqlBlogEntryContentDynamicZone = StrapiGqlComponentContentText | StrapiGqlComponentContentImage | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentContentButton | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionFacts | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionFormerStudents;


export type StrapiGqlBlogEntryGroupBy = {
  __typename?: 'BlogEntryGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionTitle>>>;
  blog_category?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionBlog_Category>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionSlug>>>;
  author?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionAuthor>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionPublished_At>>>;
};

export type StrapiGqlBlogEntryInput = {
  title: Scalars['String'];
  content?: Maybe<Array<Scalars['BlogEntryContentDynamicZoneInput']>>;
  blog_category?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  author?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogInfo = {
  __typename?: 'BlogInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentAttachmentAssetInput = {
  file?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type StrapiGqlComponentAttachmentAssets = {
  __typename?: 'ComponentAttachmentAssets';
  id: Scalars['ID'];
  file?: Maybe<StrapiGqlUploadFile>;
  name: Scalars['String'];
};

export type StrapiGqlComponentBlackboardSlide = {
  __typename?: 'ComponentBlackboardSlide';
  id: Scalars['ID'];
  school_subject?: Maybe<StrapiGqlSubject>;
  image?: Maybe<StrapiGqlUploadFile>;
};

export type StrapiGqlComponentBlackboardSlideInput = {
  school_subject?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentContentButton = {
  __typename?: 'ComponentContentButton';
  id: Scalars['ID'];
  label: Scalars['String'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
  link?: Maybe<StrapiGqlNavigationLink>;
  alignment?: Maybe<StrapiGqlComponentTypesAlignment>;
};

export type StrapiGqlComponentContentButtonInput = {
  label: Scalars['String'];
  color: StrapiGqlComponentTypesColorInput;
  link?: Maybe<Scalars['ID']>;
  alignment: StrapiGqlComponentTypesAlignmentInput;
};

export type StrapiGqlComponentContentDownloadButton = {
  __typename?: 'ComponentContentDownloadButton';
  id: Scalars['ID'];
  label: Scalars['String'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
  file?: Maybe<StrapiGqlUploadFile>;
  alignment?: Maybe<StrapiGqlComponentTypesAlignment>;
};

export type StrapiGqlComponentContentDownloadButtonInput = {
  label: Scalars['String'];
  color: StrapiGqlComponentTypesColorInput;
  file?: Maybe<Scalars['ID']>;
  alignment: StrapiGqlComponentTypesAlignmentInput;
};

export type StrapiGqlComponentContentImage = {
  __typename?: 'ComponentContentImage';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  caption?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentContentImageInput = {
  image?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentContentText = {
  __typename?: 'ComponentContentText';
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentContentTextInput = {
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentGalleryImage = {
  __typename?: 'ComponentGalleryImage';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  caption?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentGalleryImageInput = {
  image?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeCalendar = {
  __typename?: 'ComponentHomeCalendar';
  id: Scalars['ID'];
  dates?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentHomeCalendarInput = {
  dates?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentHomeFact = {
  __typename?: 'ComponentHomeFact';
  id: Scalars['ID'];
  number?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeFactInput = {
  number?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeNewInput = {
  amount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlComponentHomeNews = {
  __typename?: 'ComponentHomeNews';
  id: Scalars['ID'];
  amount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
};


export type StrapiGqlComponentHomeNewsPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlComponentLinkItemLink = {
  __typename?: 'ComponentLinkItemLink';
  id: Scalars['ID'];
  navigation_link?: Maybe<StrapiGqlNavigationLink>;
};

export type StrapiGqlComponentLinkItemLinkInput = {
  navigation_link?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkItemText = {
  __typename?: 'ComponentLinkItemText';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon_name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentLinkItemTextInput = {
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon_name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentLinkTypeBlog = {
  __typename?: 'ComponentLinkTypeBlog';
  id: Scalars['ID'];
  blog?: Maybe<StrapiGqlBlogCategory>;
};

export type StrapiGqlComponentLinkTypeBlogInput = {
  blog?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeGallery = {
  __typename?: 'ComponentLinkTypeGallery';
  id: Scalars['ID'];
  gallery?: Maybe<StrapiGqlGallery>;
};

export type StrapiGqlComponentLinkTypeGalleryInput = {
  gallery?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeMediaCenter = {
  __typename?: 'ComponentLinkTypeMediaCenter';
  id: Scalars['ID'];
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
};

export type StrapiGqlComponentLinkTypeMediaCenterInput = {
  mediaCenter?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypePage = {
  __typename?: 'ComponentLinkTypePage';
  id: Scalars['ID'];
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlComponentLinkTypePageInput = {
  page?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypePodcast = {
  __typename?: 'ComponentLinkTypePodcast';
  id: Scalars['ID'];
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlComponentLinkTypePodcastInput = {
  podcastEpisode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypePost = {
  __typename?: 'ComponentLinkTypePost';
  id: Scalars['ID'];
  post?: Maybe<StrapiGqlBlogEntry>;
};

export type StrapiGqlComponentLinkTypePostInput = {
  post?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeSchulfach = {
  __typename?: 'ComponentLinkTypeSchulfach';
  id: Scalars['ID'];
  schulfach?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlComponentLinkTypeSchulfachInput = {
  schulfach?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeStrapi = {
  __typename?: 'ComponentLinkTypeStrapi';
  id: Scalars['ID'];
  URL: Scalars['String'];
};

export type StrapiGqlComponentLinkTypeStrapiInput = {
  URL: Scalars['String'];
};

export type StrapiGqlComponentLinkTypeTeacher = {
  __typename?: 'ComponentLinkTypeTeacher';
  id: Scalars['ID'];
  teacher?: Maybe<StrapiGqlTeacher>;
};

export type StrapiGqlComponentLinkTypeTeacherInput = {
  teacher?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeWeb = {
  __typename?: 'ComponentLinkTypeWeb';
  id: Scalars['ID'];
  URL: Scalars['String'];
};

export type StrapiGqlComponentLinkTypeWebInput = {
  URL?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentLinkTypeWorkingGroup = {
  __typename?: 'ComponentLinkTypeWorkingGroup';
  id: Scalars['ID'];
  working_group?: Maybe<StrapiGqlWorkingGroup>;
};

export type StrapiGqlComponentLinkTypeWorkingGroupInput = {
  working_group?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentMediaCenterMovie = {
  __typename?: 'ComponentMediaCenterMovie';
  id: Scalars['ID'];
  movie?: Maybe<StrapiGqlUploadFile>;
  caption?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  poster?: Maybe<StrapiGqlUploadFile>;
};

export type StrapiGqlComponentMediaCenterMovieInput = {
  movie?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  poster?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentNavigationNavigationEntry = {
  __typename?: 'ComponentNavigationNavigationEntry';
  id: Scalars['ID'];
  blog_eintrag?: Maybe<StrapiGqlBlogEntry>;
  schulfach?: Maybe<StrapiGqlSubject>;
  blog_kategorie?: Maybe<StrapiGqlBlogCategory>;
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlComponentNavigationNavigationEntryInput = {
  blog_eintrag?: Maybe<Scalars['ID']>;
  schulfach?: Maybe<Scalars['ID']>;
  blog_kategorie?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentNavigationNavigationLevelEntry = {
  __typename?: 'ComponentNavigationNavigationLevelEntry';
  id: Scalars['ID'];
  parent?: Maybe<StrapiGqlNavigationLink>;
  navigation_link?: Maybe<StrapiGqlNavigationLink>;
  title?: Maybe<Scalars['String']>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
};


export type StrapiGqlComponentNavigationNavigationLevelEntryChildrenArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlComponentNavigationNavigationLevelEntryInput = {
  parent?: Maybe<Scalars['ID']>;
  navigation_link?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlComponentNavigationNavigationSection = {
  __typename?: 'ComponentNavigationNavigationSection';
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  navigation_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationEntry>>>;
};

export type StrapiGqlComponentNavigationNavigationSectionInput = {
  title?: Maybe<Scalars['String']>;
  navigation_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationEntryInput>>>;
};

export type StrapiGqlComponentPodcastCategory = {
  __typename?: 'ComponentPodcastCategory';
  id: Scalars['ID'];
  name: StrapiGqlEnum_Componentpodcastcategory_Name;
};

export type StrapiGqlComponentPodcastCategoryInput = {
  name: StrapiGqlEnum_Componentpodcastcategory_Name;
};

export type StrapiGqlComponentPodcastChapterInput = {
  title: Scalars['String'];
  href?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentPodcastChapters = {
  __typename?: 'ComponentPodcastChapters';
  id: Scalars['ID'];
  title: Scalars['String'];
  href?: Maybe<StrapiGqlNavigationLink>;
  image?: Maybe<StrapiGqlUploadFile>;
  start: Scalars['String'];
};

export type StrapiGqlComponentSectionBlackboardSlideshow = {
  __typename?: 'ComponentSectionBlackboardSlideshow';
  id: Scalars['ID'];
  slides?: Maybe<Array<Maybe<StrapiGqlComponentBlackboardSlide>>>;
};

export type StrapiGqlComponentSectionBlackboardSlideshowInput = {
  slides?: Maybe<Array<Maybe<StrapiGqlComponentBlackboardSlideInput>>>;
};

export type StrapiGqlComponentSectionBlogSlideshow = {
  __typename?: 'ComponentSectionBlogSlideshow';
  id: Scalars['ID'];
  blog?: Maybe<StrapiGqlBlogCategory>;
  limit: Scalars['Int'];
  style: StrapiGqlEnum_Componentsectionblogslideshow_Style;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSectionBlogSlideshowInput = {
  blog?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  style?: Maybe<StrapiGqlEnum_Componentsectionblogslideshow_Style>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
};

export type StrapiGqlComponentSectionFactInput = {
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFactInput>>>;
  color: StrapiGqlComponentTypesColorInput;
};

export type StrapiGqlComponentSectionFacts = {
  __typename?: 'ComponentSectionFacts';
  id: Scalars['ID'];
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFact>>>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSectionFormerStudentInput = {
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentSectionFormerStudents = {
  __typename?: 'ComponentSectionFormerStudents';
  id: Scalars['ID'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  limit: Scalars['Int'];
};

export type StrapiGqlComponentSectionGallerySlideshow = {
  __typename?: 'ComponentSectionGallerySlideshow';
  id: Scalars['ID'];
  gallery?: Maybe<StrapiGqlGallery>;
  limit: Scalars['Int'];
};

export type StrapiGqlComponentSectionGallerySlideshowInput = {
  gallery?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentSectionIFrame = {
  __typename?: 'ComponentSectionIFrame';
  id: Scalars['ID'];
  URL: Scalars['String'];
  width: Scalars['String'];
  height: Scalars['String'];
};

export type StrapiGqlComponentSectionIFrameInput = {
  URL: Scalars['String'];
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSectionLatestPodcastEpisode = {
  __typename?: 'ComponentSectionLatestPodcastEpisode';
  id: Scalars['ID'];
  title: Scalars['String'];
  activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab;
};

export type StrapiGqlComponentSectionLatestPodcastEpisodeInput = {
  title: Scalars['String'];
  activeTab?: Maybe<StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab>;
};

export type StrapiGqlComponentSectionMensaMax = {
  __typename?: 'ComponentSectionMensaMax';
  id: Scalars['ID'];
  p: Scalars['String'];
  e: Scalars['String'];
};

export type StrapiGqlComponentSectionMensaMaxInput = {
  p?: Maybe<Scalars['String']>;
  e?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSectionPodcastEpisode = {
  __typename?: 'ComponentSectionPodcastEpisode';
  id: Scalars['ID'];
  podcast_episode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlComponentSectionPodcastEpisodeInput = {
  podcast_episode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentSectionSlideshow = {
  __typename?: 'ComponentSectionSlideshow';
  id: Scalars['ID'];
  slideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlComponentSectionSlideshowInput = {
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentSlideshowSlideshowEntry = {
  __typename?: 'ComponentSlideshowSlideshowEntry';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  subtitle: Scalars['String'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlog = {
  __typename?: 'ComponentSlideshowSlideshowEntryBlog';
  id: Scalars['ID'];
  subtitle: Scalars['String'];
  image?: Maybe<StrapiGqlUploadFile>;
  post?: Maybe<StrapiGqlBlogEntry>;
  label: Scalars['String'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlogInput = {
  subtitle: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color: StrapiGqlComponentTypesColorInput;
};

export type StrapiGqlComponentSlideshowSlideshowEntryInput = {
  image?: Maybe<Scalars['ID']>;
  subtitle: Scalars['String'];
  color: StrapiGqlComponentTypesColorInput;
};

export type StrapiGqlComponentSlideshowSlideshowEntryPage = {
  __typename?: 'ComponentSlideshowSlideshowEntryPage';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  subtitle: Scalars['String'];
  page?: Maybe<StrapiGqlPage>;
  label: Scalars['String'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryPageInput = {
  image?: Maybe<Scalars['ID']>;
  subtitle: Scalars['String'];
  page?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color: StrapiGqlComponentTypesColorInput;
};

export type StrapiGqlComponentStudentSectionStudentQuote = {
  __typename?: 'ComponentStudentSectionStudentQuote';
  id: Scalars['ID'];
  title: Scalars['String'];
  limit: Scalars['Int'];
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentStudentSectionStudentQuoteInput = {
  title: Scalars['String'];
  limit?: Maybe<Scalars['Int']>;
  color: StrapiGqlComponentTypesColorInput;
};

export type StrapiGqlComponentTypesAlignment = {
  __typename?: 'ComponentTypesAlignment';
  id: Scalars['ID'];
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
};

export type StrapiGqlComponentTypesAlignmentInput = {
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
};

export type StrapiGqlComponentTypesColor = {
  __typename?: 'ComponentTypesColor';
  id: Scalars['ID'];
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
};

export type StrapiGqlComponentTypesColorInput = {
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
};



export enum StrapiGqlEnum_Componentpodcastcategory_Name {
  Arts = 'Arts',
  ArtsBooks = 'Arts__Books',
  ArtsDesign = 'Arts__Design',
  ArtsFashionAndBeauty = 'Arts__Fashion_and_Beauty',
  ArtsFood = 'Arts__Food',
  ArtsPerformingArts = 'Arts__Performing_Arts',
  ArtsVisualArts = 'Arts__Visual_Arts',
  Business = 'Business',
  BusinessCareers = 'Business__Careers',
  BusinessEntrepreneurship = 'Business__Entrepreneurship',
  BusinessInvesting = 'Business__Investing',
  BusinessManagement = 'Business__Management',
  BusinessMarketing = 'Business__Marketing',
  BusinessNonProfit = 'Business__NonProfit',
  Comedy = 'Comedy',
  ComedyComedyInterviews = 'Comedy__Comedy_Interviews',
  ComedyImprov = 'Comedy__Improv',
  ComedyStandUp = 'Comedy__StandUp',
  Education = 'Education',
  EducationCourses = 'Education__Courses',
  EducationHowTo = 'Education__How_To',
  EducationLanguageLearning = 'Education__Language_Learning',
  EducationSelfImprovement = 'Education__SelfImprovement',
  Fiction = 'Fiction',
  FictionComedyFiction = 'Fiction__Comedy_Fiction',
  FictionDrama = 'Fiction__Drama',
  FictionScienceFiction = 'Fiction__Science_Fiction',
  Government = 'Government',
  History = 'History',
  HealthAndFitness = 'Health_and_Fitness',
  HealthAndFitnessAlternativeHealth = 'Health_and_Fitness__Alternative_Health',
  HealthAndFitnessFitness = 'Health_and_Fitness__Fitness',
  HealthAndFitnessMedicine = 'Health_and_Fitness__Medicine',
  HealthAndFitnessMentalHealth = 'Health_and_Fitness__Mental_Health',
  HealthAndFitnessNutrition = 'Health_and_Fitness__Nutrition',
  HealthAndFitnessSexuality = 'Health_and_Fitness__Sexuality',
  KidsAndFamily = 'Kids_and_Family',
  KidsAndFamilyEducationForKids = 'Kids_and_Family__Education_for_Kids',
  KidsAndFamilyParenting = 'Kids_and_Family__Parenting',
  KidsAndFamilyPetsAndAnimals = 'Kids_and_Family__Pets_and_Animals',
  KidsAndFamilyStoriesForKids = 'Kids_and_Family__Stories_for_Kids',
  Leisure = 'Leisure',
  LeisureAnimationAndManga = 'Leisure__Animation_and_Manga',
  LeisureAutomotive = 'Leisure__Automotive',
  LeisureAviation = 'Leisure__Aviation',
  LeisureCrafts = 'Leisure__Crafts',
  LeisureGames = 'Leisure__Games',
  LeisureHobbies = 'Leisure__Hobbies',
  LeisureHomeAndGarden = 'Leisure__Home_and_Garden',
  LeisureVideoGames = 'Leisure__Video_Games',
  Music = 'Music',
  MusicMusicCommentary = 'Music__Music_Commentary',
  MusicMusicHistory = 'Music__Music_History',
  MusicMusicInterviews = 'Music__Music_Interviews',
  News = 'News',
  NewsBusinessNews = 'News__Business_News',
  NewsDailyNews = 'News__Daily_News',
  NewsEntertainmentNews = 'News__Entertainment_News',
  NewsNewsCommentary = 'News__News_Commentary',
  NewsPolitics = 'News__Politics',
  NewsSportsNews = 'News__Sports_News',
  NewsTechNews = 'News__Tech_News',
  ReligionAndSpirituality = 'Religion_and_Spirituality',
  ReligionAndSpiritualityBuddhism = 'Religion_and_Spirituality__Buddhism',
  ReligionAndSpiritualityChristianity = 'Religion_and_Spirituality__Christianity',
  ReligionAndSpiritualityHinduism = 'Religion_and_Spirituality__Hinduism',
  ReligionAndSpiritualityIslam = 'Religion_and_Spirituality__Islam',
  ReligionAndSpiritualityJudaism = 'Religion_and_Spirituality__Judaism',
  ReligionAndSpiritualityReligion = 'Religion_and_Spirituality__Religion',
  ReligionAndSpiritualitySpirituality = 'Religion_and_Spirituality__Spirituality',
  Science = 'Science',
  ScienceAstronomy = 'Science__Astronomy',
  ScienceChemistry = 'Science__Chemistry',
  ScienceEarthSciences = 'Science__Earth_Sciences',
  ScienceLifeSciences = 'Science__Life_Sciences',
  ScienceMathematics = 'Science__Mathematics',
  ScienceNaturalSciences = 'Science__Natural_Sciences',
  ScienceNature = 'Science__Nature',
  SciencePhysics = 'Science__Physics',
  ScienceSocialSciences = 'Science__Social_Sciences',
  SocietyAndCulture = 'Society_and_Culture',
  SocietyAndCultureDocumentary = 'Society_and_Culture__Documentary',
  SocietyAndCulturePersonalJournals = 'Society_and_Culture__Personal_Journals',
  SocietyAndCulturePhilosophy = 'Society_and_Culture__Philosophy',
  SocietyAndCulturePlacesAndTravel = 'Society_and_Culture__Places_and_Travel',
  SocietyAndCultureRelationships = 'Society_and_Culture__Relationships',
  Sports = 'Sports',
  SportsBaseball = 'Sports__Baseball',
  SportsBasketball = 'Sports__Basketball',
  SportsCricket = 'Sports__Cricket',
  SportsFantasySports = 'Sports__Fantasy_Sports',
  SportsFootball = 'Sports__Football',
  SportsGolf = 'Sports__Golf',
  SportsHockey = 'Sports__Hockey',
  SportsRugby = 'Sports__Rugby',
  SportsRunning = 'Sports__Running',
  SportsSoccer = 'Sports__Soccer',
  SportsSwimming = 'Sports__Swimming',
  SportsTennis = 'Sports__Tennis',
  SportsVolleyball = 'Sports__Volleyball',
  SportsWilderness = 'Sports__Wilderness',
  SportsWrestling = 'Sports__Wrestling',
  Technology = 'Technology',
  TrueCrime = 'True_Crime',
  TvAndFilm = 'TV_and_Film',
  TvAndFilmAfterShows = 'TV_and_Film__After_Shows',
  TvAndFilmFilmHistory = 'TV_and_Film__Film_History',
  TvAndFilmFilmInterviews = 'TV_and_Film__Film_Interviews',
  TvAndFilmFilmReviews = 'TV_and_Film__Film_Reviews',
  TvAndFilmTvReviews = 'TV_and_Film__TV_Reviews'
}

export enum StrapiGqlEnum_Componentsectionblogslideshow_Style {
  Color = 'color',
  Art = 'art',
  Dreamy = 'dreamy'
}

export enum StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab {
  None = 'none',
  Shownotes = 'shownotes',
  Chapters = 'chapters',
  Files = 'files',
  Share = 'share',
  Playlist = 'playlist'
}

export enum StrapiGqlEnum_Componenttypesalignment_Alignment {
  Left = 'Left',
  Center = 'Center',
  Right = 'Right'
}

export enum StrapiGqlEnum_Componenttypescolor_Color {
  Blue = 'blue',
  Green = 'green',
  Cyan = 'cyan',
  Greenlight = 'greenlight',
  Yellow = 'yellow',
  Red = 'red',
  Light = 'light',
  Dark = 'dark',
  White = 'white'
}

export enum StrapiGqlEnum_Gallery_Style {
  Color = 'color',
  Art = 'art',
  Dreamy = 'dreamy'
}

export enum StrapiGqlEnum_Podcastepisode_Type {
  Full = 'Full',
  Trailer = 'Trailer',
  Bonus = 'Bonus'
}

export enum StrapiGqlEnum_Podcastfeed_Type {
  Episodic = 'Episodic',
  Serial = 'Serial'
}

export type StrapiGqlFileInfoInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
};

export type StrapiGqlFileInput = {
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFooter = {
  __typename?: 'Footer';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  map_image?: Maybe<StrapiGqlUploadFile>;
  map_link?: Maybe<Scalars['String']>;
  contact_info?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<StrapiGqlComponentLinkItemLink>>>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFooterInput = {
  map_image?: Maybe<Scalars['ID']>;
  map_link?: Maybe<Scalars['String']>;
  contact_info?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<StrapiGqlComponentLinkItemLinkInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudentInput = {
  name: Scalars['String'];
  slug: Scalars['String'];
  biography: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudents = {
  __typename?: 'FormerStudents';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug: Scalars['String'];
  biography: Scalars['String'];
  image?: Maybe<StrapiGqlUploadFile>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFormerStudentsAggregator = {
  __typename?: 'FormerStudentsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlFormerStudentsConnection = {
  __typename?: 'FormerStudentsConnection';
  values?: Maybe<Array<Maybe<StrapiGqlFormerStudents>>>;
  groupBy?: Maybe<StrapiGqlFormerStudentsGroupBy>;
  aggregate?: Maybe<StrapiGqlFormerStudentsAggregator>;
};

export type StrapiGqlFormerStudentsConnectionBiography = {
  __typename?: 'FormerStudentsConnectionBiography';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionCreated_At = {
  __typename?: 'FormerStudentsConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionId = {
  __typename?: 'FormerStudentsConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionImage = {
  __typename?: 'FormerStudentsConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionName = {
  __typename?: 'FormerStudentsConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionPublished_At = {
  __typename?: 'FormerStudentsConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionSlug = {
  __typename?: 'FormerStudentsConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsConnectionUpdated_At = {
  __typename?: 'FormerStudentsConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
};

export type StrapiGqlFormerStudentsGroupBy = {
  __typename?: 'FormerStudentsGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionSlug>>>;
  biography?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionBiography>>>;
  image?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionImage>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionPublished_At>>>;
};

export type StrapiGqlGallery = {
  __typename?: 'Gallery';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImage>>>;
  style: StrapiGqlEnum_Gallery_Style;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlGalleryAggregator = {
  __typename?: 'GalleryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlGalleryConnection = {
  __typename?: 'GalleryConnection';
  values?: Maybe<Array<Maybe<StrapiGqlGallery>>>;
  groupBy?: Maybe<StrapiGqlGalleryGroupBy>;
  aggregate?: Maybe<StrapiGqlGalleryAggregator>;
};

export type StrapiGqlGalleryConnectionColor = {
  __typename?: 'GalleryConnectionColor';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionCreated_At = {
  __typename?: 'GalleryConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionId = {
  __typename?: 'GalleryConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionSlug = {
  __typename?: 'GalleryConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionStyle = {
  __typename?: 'GalleryConnectionStyle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionTitle = {
  __typename?: 'GalleryConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionUpdated_At = {
  __typename?: 'GalleryConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryGroupBy = {
  __typename?: 'GalleryGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionSlug>>>;
  style?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionStyle>>>;
  color?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionColor>>>;
};

export type StrapiGqlGalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImageInput>>>;
  style?: Maybe<StrapiGqlEnum_Gallery_Style>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlHome = {
  __typename?: 'Home';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  sections?: Maybe<Array<Maybe<StrapiGqlHomeSectionsDynamicZone>>>;
};

export type StrapiGqlHomeInput = {
  sections?: Maybe<Array<Scalars['HomeSectionsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlHomeSectionsDynamicZone = StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentContentText | StrapiGqlComponentContentImage | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentHomeCalendar | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentContentButton | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionFormerStudents;


export type StrapiGqlI18NLocale = {
  __typename?: 'I18NLocale';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
};

export type StrapiGqlInputId = {
  id: Scalars['ID'];
};


export type StrapiGqlLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type StrapiGqlMediaCenter = {
  __typename?: 'MediaCenter';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  movies?: Maybe<Array<Maybe<StrapiGqlComponentMediaCenterMovie>>>;
};

export type StrapiGqlMediaCenterAggregator = {
  __typename?: 'MediaCenterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlMediaCenterConnection = {
  __typename?: 'MediaCenterConnection';
  values?: Maybe<Array<Maybe<StrapiGqlMediaCenter>>>;
  groupBy?: Maybe<StrapiGqlMediaCenterGroupBy>;
  aggregate?: Maybe<StrapiGqlMediaCenterAggregator>;
};

export type StrapiGqlMediaCenterConnectionCreated_At = {
  __typename?: 'MediaCenterConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
};

export type StrapiGqlMediaCenterConnectionId = {
  __typename?: 'MediaCenterConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
};

export type StrapiGqlMediaCenterConnectionSlug = {
  __typename?: 'MediaCenterConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
};

export type StrapiGqlMediaCenterConnectionTitle = {
  __typename?: 'MediaCenterConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
};

export type StrapiGqlMediaCenterConnectionUpdated_At = {
  __typename?: 'MediaCenterConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
};

export type StrapiGqlMediaCenterGroupBy = {
  __typename?: 'MediaCenterGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionSlug>>>;
};

export type StrapiGqlMediaCenterInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  movies?: Maybe<Array<Maybe<StrapiGqlComponentMediaCenterMovieInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMenu = {
  __typename?: 'Menu';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationLevelEntry>>>;
};

export type StrapiGqlMenuInput = {
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationLevelEntryInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMorph = StrapiGqlUsersPermissionsMe | StrapiGqlUsersPermissionsMeRole | StrapiGqlUsersPermissionsLoginPayload | StrapiGqlUserPermissionsPasswordPayload | StrapiGqlBlogCategory | StrapiGqlBlogCategoryConnection | StrapiGqlBlogCategoryAggregator | StrapiGqlBlogCategoryGroupBy | StrapiGqlBlogCategoryConnectionId | StrapiGqlBlogCategoryConnectionCreated_At | StrapiGqlBlogCategoryConnectionUpdated_At | StrapiGqlBlogCategoryConnectionName | StrapiGqlBlogCategoryConnectionSlug | StrapiGqlCreateBlogCategoryPayload | StrapiGqlUpdateBlogCategoryPayload | StrapiGqlDeleteBlogCategoryPayload | StrapiGqlBlogEntry | StrapiGqlBlogEntryConnection | StrapiGqlBlogEntryAggregator | StrapiGqlBlogEntryGroupBy | StrapiGqlBlogEntryConnectionId | StrapiGqlBlogEntryConnectionCreated_At | StrapiGqlBlogEntryConnectionUpdated_At | StrapiGqlBlogEntryConnectionTitle | StrapiGqlBlogEntryConnectionBlog_Category | StrapiGqlBlogEntryConnectionSlug | StrapiGqlBlogEntryConnectionAuthor | StrapiGqlBlogEntryConnectionPublished_At | StrapiGqlCreateBlogEntryPayload | StrapiGqlUpdateBlogEntryPayload | StrapiGqlDeleteBlogEntryPayload | StrapiGqlBlogInfo | StrapiGqlUpdateBlogInfoPayload | StrapiGqlDeleteBlogInfoPayload | StrapiGqlFooter | StrapiGqlUpdateFooterPayload | StrapiGqlDeleteFooterPayload | StrapiGqlFormerStudents | StrapiGqlFormerStudentsConnection | StrapiGqlFormerStudentsAggregator | StrapiGqlFormerStudentsGroupBy | StrapiGqlFormerStudentsConnectionId | StrapiGqlFormerStudentsConnectionCreated_At | StrapiGqlFormerStudentsConnectionUpdated_At | StrapiGqlFormerStudentsConnectionName | StrapiGqlFormerStudentsConnectionSlug | StrapiGqlFormerStudentsConnectionBiography | StrapiGqlFormerStudentsConnectionImage | StrapiGqlFormerStudentsConnectionPublished_At | StrapiGqlCreateFormerStudentPayload | StrapiGqlUpdateFormerStudentPayload | StrapiGqlDeleteFormerStudentPayload | StrapiGqlGallery | StrapiGqlGalleryConnection | StrapiGqlGalleryAggregator | StrapiGqlGalleryGroupBy | StrapiGqlGalleryConnectionId | StrapiGqlGalleryConnectionCreated_At | StrapiGqlGalleryConnectionUpdated_At | StrapiGqlGalleryConnectionTitle | StrapiGqlGalleryConnectionSlug | StrapiGqlGalleryConnectionStyle | StrapiGqlGalleryConnectionColor | StrapiGqlCreateGalleryPayload | StrapiGqlUpdateGalleryPayload | StrapiGqlDeleteGalleryPayload | StrapiGqlHome | StrapiGqlUpdateHomePayload | StrapiGqlDeleteHomePayload | StrapiGqlMediaCenter | StrapiGqlMediaCenterConnection | StrapiGqlMediaCenterAggregator | StrapiGqlMediaCenterGroupBy | StrapiGqlMediaCenterConnectionId | StrapiGqlMediaCenterConnectionCreated_At | StrapiGqlMediaCenterConnectionUpdated_At | StrapiGqlMediaCenterConnectionTitle | StrapiGqlMediaCenterConnectionSlug | StrapiGqlCreateMediaCenterPayload | StrapiGqlUpdateMediaCenterPayload | StrapiGqlDeleteMediaCenterPayload | StrapiGqlMenu | StrapiGqlUpdateMenuPayload | StrapiGqlDeleteMenuPayload | StrapiGqlNavigationLink | StrapiGqlNavigationLinkConnection | StrapiGqlNavigationLinkAggregator | StrapiGqlNavigationLinkGroupBy | StrapiGqlNavigationLinkConnectionId | StrapiGqlNavigationLinkConnectionCreated_At | StrapiGqlNavigationLinkConnectionUpdated_At | StrapiGqlNavigationLinkConnectionTitle | StrapiGqlCreateNavigationLinkPayload | StrapiGqlUpdateNavigationLinkPayload | StrapiGqlDeleteNavigationLinkPayload | StrapiGqlPageInfo | StrapiGqlUpdatePageInfoPayload | StrapiGqlDeletePageInfoPayload | StrapiGqlPage | StrapiGqlPageConnection | StrapiGqlPageAggregator | StrapiGqlPageGroupBy | StrapiGqlPageConnectionId | StrapiGqlPageConnectionCreated_At | StrapiGqlPageConnectionUpdated_At | StrapiGqlPageConnectionTitle | StrapiGqlPageConnectionSlug | StrapiGqlPageConnectionCalendar_Key | StrapiGqlCreatePagePayload | StrapiGqlUpdatePagePayload | StrapiGqlDeletePagePayload | StrapiGqlPodcastEpisode | StrapiGqlPodcastEpisodeConnection | StrapiGqlPodcastEpisodeAggregator | StrapiGqlPodcastEpisodeAggregatorSum | StrapiGqlPodcastEpisodeAggregatorAvg | StrapiGqlPodcastEpisodeAggregatorMin | StrapiGqlPodcastEpisodeAggregatorMax | StrapiGqlPodcastEpisodeGroupBy | StrapiGqlPodcastEpisodeConnectionId | StrapiGqlPodcastEpisodeConnectionCreated_At | StrapiGqlPodcastEpisodeConnectionUpdated_At | StrapiGqlPodcastEpisodeConnectionTitle | StrapiGqlPodcastEpisodeConnectionPubDate | StrapiGqlPodcastEpisodeConnectionDescription | StrapiGqlPodcastEpisodeConnectionImage | StrapiGqlPodcastEpisodeConnectionExplicit | StrapiGqlPodcastEpisodeConnectionType | StrapiGqlPodcastEpisodeConnectionBlock | StrapiGqlPodcastEpisodeConnectionSlug | StrapiGqlPodcastEpisodeConnectionSeason | StrapiGqlPodcastEpisodeConnectionEpisode | StrapiGqlPodcastEpisodeConnectionSubtitle | StrapiGqlPodcastEpisodeConnectionPublished_At | StrapiGqlCreatePodcastEpisodePayload | StrapiGqlUpdatePodcastEpisodePayload | StrapiGqlDeletePodcastEpisodePayload | StrapiGqlPodcastFeed | StrapiGqlUpdatePodcastFeedPayload | StrapiGqlDeletePodcastFeedPayload | StrapiGqlPodcaster | StrapiGqlPodcasterConnection | StrapiGqlPodcasterAggregator | StrapiGqlPodcasterGroupBy | StrapiGqlPodcasterConnectionId | StrapiGqlPodcasterConnectionCreated_At | StrapiGqlPodcasterConnectionUpdated_At | StrapiGqlPodcasterConnectionName | StrapiGqlPodcasterConnectionSlug | StrapiGqlPodcasterConnectionBiography | StrapiGqlPodcasterConnectionImage | StrapiGqlPodcasterConnectionPodcast_Episodes | StrapiGqlPodcasterConnectionPublished_At | StrapiGqlCreatePodcasterPayload | StrapiGqlUpdatePodcasterPayload | StrapiGqlDeletePodcasterPayload | StrapiGqlSchoolSubjectInfo | StrapiGqlUpdateSchoolSubjectInfoPayload | StrapiGqlDeleteSchoolSubjectInfoPayload | StrapiGqlSectionSlideshow | StrapiGqlSectionSlideshowConnection | StrapiGqlSectionSlideshowAggregator | StrapiGqlSectionSlideshowGroupBy | StrapiGqlSectionSlideshowConnectionId | StrapiGqlSectionSlideshowConnectionCreated_At | StrapiGqlSectionSlideshowConnectionUpdated_At | StrapiGqlSectionSlideshowConnectionTitle | StrapiGqlCreateSectionSlideshowPayload | StrapiGqlUpdateSectionSlideshowPayload | StrapiGqlDeleteSectionSlideshowPayload | StrapiGqlSubject | StrapiGqlSubjectConnection | StrapiGqlSubjectAggregator | StrapiGqlSubjectGroupBy | StrapiGqlSubjectConnectionId | StrapiGqlSubjectConnectionCreated_At | StrapiGqlSubjectConnectionUpdated_At | StrapiGqlSubjectConnectionTitle | StrapiGqlSubjectConnectionSlug | StrapiGqlSubjectConnectionBlackboard_Image | StrapiGqlCreateSubjectPayload | StrapiGqlUpdateSubjectPayload | StrapiGqlDeleteSubjectPayload | StrapiGqlTeacherInfo | StrapiGqlUpdateTeacherInfoPayload | StrapiGqlDeleteTeacherInfoPayload | StrapiGqlTeacher | StrapiGqlTeacherConnection | StrapiGqlTeacherAggregator | StrapiGqlTeacherGroupBy | StrapiGqlTeacherConnectionId | StrapiGqlTeacherConnectionCreated_At | StrapiGqlTeacherConnectionUpdated_At | StrapiGqlTeacherConnectionImage | StrapiGqlTeacherConnectionName | StrapiGqlTeacherConnectionSlug | StrapiGqlTeacherConnectionBiography | StrapiGqlCreateTeacherPayload | StrapiGqlUpdateTeacherPayload | StrapiGqlDeleteTeacherPayload | StrapiGqlToolbar | StrapiGqlUpdateToolbarPayload | StrapiGqlDeleteToolbarPayload | StrapiGqlWorkingGroupInfo | StrapiGqlUpdateWorkingGroupInfoPayload | StrapiGqlDeleteWorkingGroupInfoPayload | StrapiGqlWorkingGroup | StrapiGqlWorkingGroupConnection | StrapiGqlWorkingGroupAggregator | StrapiGqlWorkingGroupGroupBy | StrapiGqlWorkingGroupConnectionId | StrapiGqlWorkingGroupConnectionCreated_At | StrapiGqlWorkingGroupConnectionUpdated_At | StrapiGqlWorkingGroupConnectionTitle | StrapiGqlWorkingGroupConnectionSlug | StrapiGqlCreateWorkingGroupPayload | StrapiGqlUpdateWorkingGroupPayload | StrapiGqlDeleteWorkingGroupPayload | StrapiGqlI18NLocale | StrapiGqlUploadFile | StrapiGqlUploadFileConnection | StrapiGqlUploadFileAggregator | StrapiGqlUploadFileAggregatorSum | StrapiGqlUploadFileAggregatorAvg | StrapiGqlUploadFileAggregatorMin | StrapiGqlUploadFileAggregatorMax | StrapiGqlUploadFileGroupBy | StrapiGqlUploadFileConnectionId | StrapiGqlUploadFileConnectionCreated_At | StrapiGqlUploadFileConnectionUpdated_At | StrapiGqlUploadFileConnectionName | StrapiGqlUploadFileConnectionAlternativeText | StrapiGqlUploadFileConnectionCaption | StrapiGqlUploadFileConnectionWidth | StrapiGqlUploadFileConnectionHeight | StrapiGqlUploadFileConnectionFormats | StrapiGqlUploadFileConnectionHash | StrapiGqlUploadFileConnectionExt | StrapiGqlUploadFileConnectionMime | StrapiGqlUploadFileConnectionSize | StrapiGqlUploadFileConnectionUrl | StrapiGqlUploadFileConnectionPreviewUrl | StrapiGqlUploadFileConnectionProvider | StrapiGqlUploadFileConnectionProvider_Metadata | StrapiGqlDeleteFilePayload | StrapiGqlUsersPermissionsPermission | StrapiGqlUsersPermissionsRole | StrapiGqlUsersPermissionsRoleConnection | StrapiGqlUsersPermissionsRoleAggregator | StrapiGqlUsersPermissionsRoleGroupBy | StrapiGqlUsersPermissionsRoleConnectionId | StrapiGqlUsersPermissionsRoleConnectionName | StrapiGqlUsersPermissionsRoleConnectionDescription | StrapiGqlUsersPermissionsRoleConnectionType | StrapiGqlCreateRolePayload | StrapiGqlUpdateRolePayload | StrapiGqlDeleteRolePayload | StrapiGqlUsersPermissionsUser | StrapiGqlUsersPermissionsUserConnection | StrapiGqlUsersPermissionsUserAggregator | StrapiGqlUsersPermissionsUserGroupBy | StrapiGqlUsersPermissionsUserConnectionId | StrapiGqlUsersPermissionsUserConnectionCreated_At | StrapiGqlUsersPermissionsUserConnectionUpdated_At | StrapiGqlUsersPermissionsUserConnectionUsername | StrapiGqlUsersPermissionsUserConnectionEmail | StrapiGqlUsersPermissionsUserConnectionProvider | StrapiGqlUsersPermissionsUserConnectionConfirmed | StrapiGqlUsersPermissionsUserConnectionBlocked | StrapiGqlUsersPermissionsUserConnectionRole | StrapiGqlCreateUserPayload | StrapiGqlUpdateUserPayload | StrapiGqlDeleteUserPayload | StrapiGqlComponentAttachmentAssets | StrapiGqlComponentBlackboardSlide | StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentGalleryImage | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeFact | StrapiGqlComponentHomeNews | StrapiGqlComponentLinkItemLink | StrapiGqlComponentLinkItemText | StrapiGqlComponentLinkTypeBlog | StrapiGqlComponentLinkTypeGallery | StrapiGqlComponentLinkTypeMediaCenter | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypePodcast | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeSchulfach | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypeTeacher | StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentLinkTypeWorkingGroup | StrapiGqlComponentMediaCenterMovie | StrapiGqlComponentNavigationNavigationEntry | StrapiGqlComponentNavigationNavigationLevelEntry | StrapiGqlComponentNavigationNavigationSection | StrapiGqlComponentPodcastCategory | StrapiGqlComponentPodcastChapters | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSlideshowSlideshowEntryBlog | StrapiGqlComponentSlideshowSlideshowEntryPage | StrapiGqlComponentSlideshowSlideshowEntry | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentTypesAlignment | StrapiGqlComponentTypesColor;

export type StrapiGqlMutation = {
  __typename?: 'Mutation';
  createBlogCategory?: Maybe<StrapiGqlCreateBlogCategoryPayload>;
  updateBlogCategory?: Maybe<StrapiGqlUpdateBlogCategoryPayload>;
  deleteBlogCategory?: Maybe<StrapiGqlDeleteBlogCategoryPayload>;
  createBlogEntry?: Maybe<StrapiGqlCreateBlogEntryPayload>;
  updateBlogEntry?: Maybe<StrapiGqlUpdateBlogEntryPayload>;
  deleteBlogEntry?: Maybe<StrapiGqlDeleteBlogEntryPayload>;
  updateBlogInfo?: Maybe<StrapiGqlUpdateBlogInfoPayload>;
  deleteBlogInfo?: Maybe<StrapiGqlDeleteBlogInfoPayload>;
  updateFooter?: Maybe<StrapiGqlUpdateFooterPayload>;
  deleteFooter?: Maybe<StrapiGqlDeleteFooterPayload>;
  createFormerStudent?: Maybe<StrapiGqlCreateFormerStudentPayload>;
  updateFormerStudent?: Maybe<StrapiGqlUpdateFormerStudentPayload>;
  deleteFormerStudent?: Maybe<StrapiGqlDeleteFormerStudentPayload>;
  createGallery?: Maybe<StrapiGqlCreateGalleryPayload>;
  updateGallery?: Maybe<StrapiGqlUpdateGalleryPayload>;
  deleteGallery?: Maybe<StrapiGqlDeleteGalleryPayload>;
  updateHome?: Maybe<StrapiGqlUpdateHomePayload>;
  deleteHome?: Maybe<StrapiGqlDeleteHomePayload>;
  createMediaCenter?: Maybe<StrapiGqlCreateMediaCenterPayload>;
  updateMediaCenter?: Maybe<StrapiGqlUpdateMediaCenterPayload>;
  deleteMediaCenter?: Maybe<StrapiGqlDeleteMediaCenterPayload>;
  updateMenu?: Maybe<StrapiGqlUpdateMenuPayload>;
  deleteMenu?: Maybe<StrapiGqlDeleteMenuPayload>;
  createNavigationLink?: Maybe<StrapiGqlCreateNavigationLinkPayload>;
  updateNavigationLink?: Maybe<StrapiGqlUpdateNavigationLinkPayload>;
  deleteNavigationLink?: Maybe<StrapiGqlDeleteNavigationLinkPayload>;
  updatePageInfo?: Maybe<StrapiGqlUpdatePageInfoPayload>;
  deletePageInfo?: Maybe<StrapiGqlDeletePageInfoPayload>;
  createPage?: Maybe<StrapiGqlCreatePagePayload>;
  updatePage?: Maybe<StrapiGqlUpdatePagePayload>;
  deletePage?: Maybe<StrapiGqlDeletePagePayload>;
  createPodcastEpisode?: Maybe<StrapiGqlCreatePodcastEpisodePayload>;
  updatePodcastEpisode?: Maybe<StrapiGqlUpdatePodcastEpisodePayload>;
  deletePodcastEpisode?: Maybe<StrapiGqlDeletePodcastEpisodePayload>;
  updatePodcastFeed?: Maybe<StrapiGqlUpdatePodcastFeedPayload>;
  deletePodcastFeed?: Maybe<StrapiGqlDeletePodcastFeedPayload>;
  createPodcaster?: Maybe<StrapiGqlCreatePodcasterPayload>;
  updatePodcaster?: Maybe<StrapiGqlUpdatePodcasterPayload>;
  deletePodcaster?: Maybe<StrapiGqlDeletePodcasterPayload>;
  updateSchoolSubjectInfo?: Maybe<StrapiGqlUpdateSchoolSubjectInfoPayload>;
  deleteSchoolSubjectInfo?: Maybe<StrapiGqlDeleteSchoolSubjectInfoPayload>;
  createSectionSlideshow?: Maybe<StrapiGqlCreateSectionSlideshowPayload>;
  updateSectionSlideshow?: Maybe<StrapiGqlUpdateSectionSlideshowPayload>;
  deleteSectionSlideshow?: Maybe<StrapiGqlDeleteSectionSlideshowPayload>;
  createSubject?: Maybe<StrapiGqlCreateSubjectPayload>;
  updateSubject?: Maybe<StrapiGqlUpdateSubjectPayload>;
  deleteSubject?: Maybe<StrapiGqlDeleteSubjectPayload>;
  updateTeacherInfo?: Maybe<StrapiGqlUpdateTeacherInfoPayload>;
  deleteTeacherInfo?: Maybe<StrapiGqlDeleteTeacherInfoPayload>;
  createTeacher?: Maybe<StrapiGqlCreateTeacherPayload>;
  updateTeacher?: Maybe<StrapiGqlUpdateTeacherPayload>;
  deleteTeacher?: Maybe<StrapiGqlDeleteTeacherPayload>;
  updateToolbar?: Maybe<StrapiGqlUpdateToolbarPayload>;
  deleteToolbar?: Maybe<StrapiGqlDeleteToolbarPayload>;
  updateWorkingGroupInfo?: Maybe<StrapiGqlUpdateWorkingGroupInfoPayload>;
  deleteWorkingGroupInfo?: Maybe<StrapiGqlDeleteWorkingGroupInfoPayload>;
  createWorkingGroup?: Maybe<StrapiGqlCreateWorkingGroupPayload>;
  updateWorkingGroup?: Maybe<StrapiGqlUpdateWorkingGroupPayload>;
  deleteWorkingGroup?: Maybe<StrapiGqlDeleteWorkingGroupPayload>;
  /** Delete one file */
  deleteFile?: Maybe<StrapiGqlDeleteFilePayload>;
  /** Create a new role */
  createRole?: Maybe<StrapiGqlCreateRolePayload>;
  /** Update an existing role */
  updateRole?: Maybe<StrapiGqlUpdateRolePayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<StrapiGqlDeleteRolePayload>;
  /** Create a new user */
  createUser?: Maybe<StrapiGqlCreateUserPayload>;
  /** Update an existing user */
  updateUser?: Maybe<StrapiGqlUpdateUserPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<StrapiGqlDeleteUserPayload>;
  upload: StrapiGqlUploadFile;
  multipleUpload: Array<Maybe<StrapiGqlUploadFile>>;
  updateFileInfo: StrapiGqlUploadFile;
  login: StrapiGqlUsersPermissionsLoginPayload;
  register: StrapiGqlUsersPermissionsLoginPayload;
  forgotPassword?: Maybe<StrapiGqlUserPermissionsPasswordPayload>;
  resetPassword?: Maybe<StrapiGqlUsersPermissionsLoginPayload>;
  emailConfirmation?: Maybe<StrapiGqlUsersPermissionsLoginPayload>;
};


export type StrapiGqlMutationCreateBlogCategoryArgs = {
  input?: Maybe<StrapiGqlCreateBlogCategoryInput>;
};


export type StrapiGqlMutationUpdateBlogCategoryArgs = {
  input?: Maybe<StrapiGqlUpdateBlogCategoryInput>;
};


export type StrapiGqlMutationDeleteBlogCategoryArgs = {
  input?: Maybe<StrapiGqlDeleteBlogCategoryInput>;
};


export type StrapiGqlMutationCreateBlogEntryArgs = {
  input?: Maybe<StrapiGqlCreateBlogEntryInput>;
};


export type StrapiGqlMutationUpdateBlogEntryArgs = {
  input?: Maybe<StrapiGqlUpdateBlogEntryInput>;
};


export type StrapiGqlMutationDeleteBlogEntryArgs = {
  input?: Maybe<StrapiGqlDeleteBlogEntryInput>;
};


export type StrapiGqlMutationUpdateBlogInfoArgs = {
  input?: Maybe<StrapiGqlUpdateBlogInfoInput>;
};


export type StrapiGqlMutationUpdateFooterArgs = {
  input?: Maybe<StrapiGqlUpdateFooterInput>;
};


export type StrapiGqlMutationCreateFormerStudentArgs = {
  input?: Maybe<StrapiGqlCreateFormerStudentInput>;
};


export type StrapiGqlMutationUpdateFormerStudentArgs = {
  input?: Maybe<StrapiGqlUpdateFormerStudentInput>;
};


export type StrapiGqlMutationDeleteFormerStudentArgs = {
  input?: Maybe<StrapiGqlDeleteFormerStudentInput>;
};


export type StrapiGqlMutationCreateGalleryArgs = {
  input?: Maybe<StrapiGqlCreateGalleryInput>;
};


export type StrapiGqlMutationUpdateGalleryArgs = {
  input?: Maybe<StrapiGqlUpdateGalleryInput>;
};


export type StrapiGqlMutationDeleteGalleryArgs = {
  input?: Maybe<StrapiGqlDeleteGalleryInput>;
};


export type StrapiGqlMutationUpdateHomeArgs = {
  input?: Maybe<StrapiGqlUpdateHomeInput>;
};


export type StrapiGqlMutationCreateMediaCenterArgs = {
  input?: Maybe<StrapiGqlCreateMediaCenterInput>;
};


export type StrapiGqlMutationUpdateMediaCenterArgs = {
  input?: Maybe<StrapiGqlUpdateMediaCenterInput>;
};


export type StrapiGqlMutationDeleteMediaCenterArgs = {
  input?: Maybe<StrapiGqlDeleteMediaCenterInput>;
};


export type StrapiGqlMutationUpdateMenuArgs = {
  input?: Maybe<StrapiGqlUpdateMenuInput>;
};


export type StrapiGqlMutationCreateNavigationLinkArgs = {
  input?: Maybe<StrapiGqlCreateNavigationLinkInput>;
};


export type StrapiGqlMutationUpdateNavigationLinkArgs = {
  input?: Maybe<StrapiGqlUpdateNavigationLinkInput>;
};


export type StrapiGqlMutationDeleteNavigationLinkArgs = {
  input?: Maybe<StrapiGqlDeleteNavigationLinkInput>;
};


export type StrapiGqlMutationUpdatePageInfoArgs = {
  input?: Maybe<StrapiGqlUpdatePageInfoInput>;
};


export type StrapiGqlMutationCreatePageArgs = {
  input?: Maybe<StrapiGqlCreatePageInput>;
};


export type StrapiGqlMutationUpdatePageArgs = {
  input?: Maybe<StrapiGqlUpdatePageInput>;
};


export type StrapiGqlMutationDeletePageArgs = {
  input?: Maybe<StrapiGqlDeletePageInput>;
};


export type StrapiGqlMutationCreatePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlCreatePodcastEpisodeInput>;
};


export type StrapiGqlMutationUpdatePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlUpdatePodcastEpisodeInput>;
};


export type StrapiGqlMutationDeletePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlDeletePodcastEpisodeInput>;
};


export type StrapiGqlMutationUpdatePodcastFeedArgs = {
  input?: Maybe<StrapiGqlUpdatePodcastFeedInput>;
};


export type StrapiGqlMutationCreatePodcasterArgs = {
  input?: Maybe<StrapiGqlCreatePodcasterInput>;
};


export type StrapiGqlMutationUpdatePodcasterArgs = {
  input?: Maybe<StrapiGqlUpdatePodcasterInput>;
};


export type StrapiGqlMutationDeletePodcasterArgs = {
  input?: Maybe<StrapiGqlDeletePodcasterInput>;
};


export type StrapiGqlMutationUpdateSchoolSubjectInfoArgs = {
  input?: Maybe<StrapiGqlUpdateSchoolSubjectInfoInput>;
};


export type StrapiGqlMutationCreateSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlCreateSectionSlideshowInput>;
};


export type StrapiGqlMutationUpdateSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlUpdateSectionSlideshowInput>;
};


export type StrapiGqlMutationDeleteSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlDeleteSectionSlideshowInput>;
};


export type StrapiGqlMutationCreateSubjectArgs = {
  input?: Maybe<StrapiGqlCreateSubjectInput>;
};


export type StrapiGqlMutationUpdateSubjectArgs = {
  input?: Maybe<StrapiGqlUpdateSubjectInput>;
};


export type StrapiGqlMutationDeleteSubjectArgs = {
  input?: Maybe<StrapiGqlDeleteSubjectInput>;
};


export type StrapiGqlMutationUpdateTeacherInfoArgs = {
  input?: Maybe<StrapiGqlUpdateTeacherInfoInput>;
};


export type StrapiGqlMutationCreateTeacherArgs = {
  input?: Maybe<StrapiGqlCreateTeacherInput>;
};


export type StrapiGqlMutationUpdateTeacherArgs = {
  input?: Maybe<StrapiGqlUpdateTeacherInput>;
};


export type StrapiGqlMutationDeleteTeacherArgs = {
  input?: Maybe<StrapiGqlDeleteTeacherInput>;
};


export type StrapiGqlMutationUpdateToolbarArgs = {
  input?: Maybe<StrapiGqlUpdateToolbarInput>;
};


export type StrapiGqlMutationUpdateWorkingGroupInfoArgs = {
  input?: Maybe<StrapiGqlUpdateWorkingGroupInfoInput>;
};


export type StrapiGqlMutationCreateWorkingGroupArgs = {
  input?: Maybe<StrapiGqlCreateWorkingGroupInput>;
};


export type StrapiGqlMutationUpdateWorkingGroupArgs = {
  input?: Maybe<StrapiGqlUpdateWorkingGroupInput>;
};


export type StrapiGqlMutationDeleteWorkingGroupArgs = {
  input?: Maybe<StrapiGqlDeleteWorkingGroupInput>;
};


export type StrapiGqlMutationDeleteFileArgs = {
  input?: Maybe<StrapiGqlDeleteFileInput>;
};


export type StrapiGqlMutationCreateRoleArgs = {
  input?: Maybe<StrapiGqlCreateRoleInput>;
};


export type StrapiGqlMutationUpdateRoleArgs = {
  input?: Maybe<StrapiGqlUpdateRoleInput>;
};


export type StrapiGqlMutationDeleteRoleArgs = {
  input?: Maybe<StrapiGqlDeleteRoleInput>;
};


export type StrapiGqlMutationCreateUserArgs = {
  input?: Maybe<StrapiGqlCreateUserInput>;
};


export type StrapiGqlMutationUpdateUserArgs = {
  input?: Maybe<StrapiGqlUpdateUserInput>;
};


export type StrapiGqlMutationDeleteUserArgs = {
  input?: Maybe<StrapiGqlDeleteUserInput>;
};


export type StrapiGqlMutationUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  info?: Maybe<StrapiGqlFileInfoInput>;
  file: Scalars['Upload'];
};


export type StrapiGqlMutationMultipleUploadArgs = {
  refId?: Maybe<Scalars['ID']>;
  ref?: Maybe<Scalars['String']>;
  field?: Maybe<Scalars['String']>;
  source?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
};


export type StrapiGqlMutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: StrapiGqlFileInfoInput;
};


export type StrapiGqlMutationLoginArgs = {
  input: StrapiGqlUsersPermissionsLoginInput;
};


export type StrapiGqlMutationRegisterArgs = {
  input: StrapiGqlUsersPermissionsRegisterInput;
};


export type StrapiGqlMutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type StrapiGqlMutationResetPasswordArgs = {
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
  code: Scalars['String'];
};


export type StrapiGqlMutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};

export type StrapiGqlNavigationLink = {
  __typename?: 'NavigationLink';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<StrapiGqlNavigationLinkTypeDynamicZone>>>;
};

export type StrapiGqlNavigationLinkAggregator = {
  __typename?: 'NavigationLinkAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlNavigationLinkConnection = {
  __typename?: 'NavigationLinkConnection';
  values?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
  groupBy?: Maybe<StrapiGqlNavigationLinkGroupBy>;
  aggregate?: Maybe<StrapiGqlNavigationLinkAggregator>;
};

export type StrapiGqlNavigationLinkConnectionCreated_At = {
  __typename?: 'NavigationLinkConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
};

export type StrapiGqlNavigationLinkConnectionId = {
  __typename?: 'NavigationLinkConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
};

export type StrapiGqlNavigationLinkConnectionTitle = {
  __typename?: 'NavigationLinkConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
};

export type StrapiGqlNavigationLinkConnectionUpdated_At = {
  __typename?: 'NavigationLinkConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
};

export type StrapiGqlNavigationLinkGroupBy = {
  __typename?: 'NavigationLinkGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionTitle>>>;
};

export type StrapiGqlNavigationLinkInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Scalars['NavigationLinkTypeDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlNavigationLinkTypeDynamicZone = StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentLinkTypeSchulfach | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeBlog | StrapiGqlComponentLinkTypeTeacher | StrapiGqlComponentLinkTypeGallery | StrapiGqlComponentLinkTypeMediaCenter | StrapiGqlComponentLinkTypePodcast | StrapiGqlComponentLinkTypeWorkingGroup;


export type StrapiGqlPage = {
  __typename?: 'Page';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  slug: Scalars['String'];
  content?: Maybe<Array<Maybe<StrapiGqlPageContentDynamicZone>>>;
  calendar_key?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Maybe<StrapiGqlPageAssetsDynamicZone>>>;
  blog_categories?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
};


export type StrapiGqlPageBlog_CategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlPageAggregator = {
  __typename?: 'PageAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPageAssetsDynamicZone = StrapiGqlComponentAttachmentAssets;


export type StrapiGqlPageConnection = {
  __typename?: 'PageConnection';
  values?: Maybe<Array<Maybe<StrapiGqlPage>>>;
  groupBy?: Maybe<StrapiGqlPageGroupBy>;
  aggregate?: Maybe<StrapiGqlPageAggregator>;
};

export type StrapiGqlPageConnectionCalendar_Key = {
  __typename?: 'PageConnectionCalendar_key';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageConnectionId = {
  __typename?: 'PageConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageConnectionSlug = {
  __typename?: 'PageConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPageConnection>;
};

export type StrapiGqlPageContentDynamicZone = StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentContentButton | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentHomeNews | StrapiGqlComponentHomeCalendar | StrapiGqlComponentSectionFacts | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionFormerStudents;


export type StrapiGqlPageGroupBy = {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlPageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlPageConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPageConnectionSlug>>>;
  calendar_key?: Maybe<Array<Maybe<StrapiGqlPageConnectionCalendar_Key>>>;
};

export type StrapiGqlPageInfo = {
  __typename?: 'PageInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrapiGqlPageInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPageInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  calendar_key?: Maybe<Scalars['String']>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastEpisode = {
  __typename?: 'PodcastEpisode';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  pubDate?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: Maybe<StrapiGqlUploadFile>;
  explicit: Scalars['Boolean'];
  type: StrapiGqlEnum_Podcastepisode_Type;
  block: Scalars['Boolean'];
  slug: Scalars['String'];
  season: Scalars['Int'];
  episode: Scalars['Int'];
  subtitle: Scalars['String'];
  chapters?: Maybe<Array<Maybe<StrapiGqlComponentPodcastChapters>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  content?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
  contributors?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
};


export type StrapiGqlPodcastEpisodeContentArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlPodcastEpisodeContributorsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlPodcastEpisodeAggregator = {
  __typename?: 'PodcastEpisodeAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<StrapiGqlPodcastEpisodeAggregatorSum>;
  avg?: Maybe<StrapiGqlPodcastEpisodeAggregatorAvg>;
  min?: Maybe<StrapiGqlPodcastEpisodeAggregatorMin>;
  max?: Maybe<StrapiGqlPodcastEpisodeAggregatorMax>;
};

export type StrapiGqlPodcastEpisodeAggregatorAvg = {
  __typename?: 'PodcastEpisodeAggregatorAvg';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorMax = {
  __typename?: 'PodcastEpisodeAggregatorMax';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorMin = {
  __typename?: 'PodcastEpisodeAggregatorMin';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorSum = {
  __typename?: 'PodcastEpisodeAggregatorSum';
  season?: Maybe<Scalars['Float']>;
  episode?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeConnection = {
  __typename?: 'PodcastEpisodeConnection';
  values?: Maybe<Array<Maybe<StrapiGqlPodcastEpisode>>>;
  groupBy?: Maybe<StrapiGqlPodcastEpisodeGroupBy>;
  aggregate?: Maybe<StrapiGqlPodcastEpisodeAggregator>;
};

export type StrapiGqlPodcastEpisodeConnectionBlock = {
  __typename?: 'PodcastEpisodeConnectionBlock';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionCreated_At = {
  __typename?: 'PodcastEpisodeConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionDescription = {
  __typename?: 'PodcastEpisodeConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionEpisode = {
  __typename?: 'PodcastEpisodeConnectionEpisode';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionExplicit = {
  __typename?: 'PodcastEpisodeConnectionExplicit';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionId = {
  __typename?: 'PodcastEpisodeConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionImage = {
  __typename?: 'PodcastEpisodeConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionPubDate = {
  __typename?: 'PodcastEpisodeConnectionPubDate';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionPublished_At = {
  __typename?: 'PodcastEpisodeConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionSeason = {
  __typename?: 'PodcastEpisodeConnectionSeason';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionSlug = {
  __typename?: 'PodcastEpisodeConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionSubtitle = {
  __typename?: 'PodcastEpisodeConnectionSubtitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionTitle = {
  __typename?: 'PodcastEpisodeConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionType = {
  __typename?: 'PodcastEpisodeConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeConnectionUpdated_At = {
  __typename?: 'PodcastEpisodeConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
};

export type StrapiGqlPodcastEpisodeGroupBy = {
  __typename?: 'PodcastEpisodeGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionTitle>>>;
  pubDate?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionPubDate>>>;
  description?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionDescription>>>;
  image?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionImage>>>;
  explicit?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionExplicit>>>;
  type?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionType>>>;
  block?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionBlock>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSlug>>>;
  season?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSeason>>>;
  episode?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionEpisode>>>;
  subtitle?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSubtitle>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionPublished_At>>>;
};

export type StrapiGqlPodcastEpisodeInput = {
  title: Scalars['String'];
  content?: Maybe<Array<Maybe<Scalars['ID']>>>;
  pubDate?: Maybe<Scalars['DateTime']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  explicit?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StrapiGqlEnum_Podcastepisode_Type>;
  block?: Maybe<Scalars['Boolean']>;
  slug: Scalars['String'];
  season?: Maybe<Scalars['Int']>;
  episode: Scalars['Int'];
  subtitle: Scalars['String'];
  chapters?: Maybe<Array<Maybe<StrapiGqlComponentPodcastChapterInput>>>;
  contributors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastFeed = {
  __typename?: 'PodcastFeed';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<StrapiGqlUploadFile>;
  language: Scalars['String'];
  category?: Maybe<Array<Maybe<StrapiGqlComponentPodcastCategory>>>;
  explicit: Scalars['Boolean'];
  author: Scalars['String'];
  owner_name: Scalars['String'];
  owner_email: Scalars['String'];
  type: StrapiGqlEnum_Podcastfeed_Type;
  copyright: Scalars['String'];
  block: Scalars['Boolean'];
  complete: Scalars['Boolean'];
  subtitle: Scalars['String'];
  blogs?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
};


export type StrapiGqlPodcastFeedBlogsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlPodcastFeedInput = {
  title: Scalars['String'];
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  category?: Maybe<Array<StrapiGqlComponentPodcastCategoryInput>>;
  explicit?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Scalars['String']>;
  owner_name: Scalars['String'];
  owner_email?: Maybe<Scalars['String']>;
  type?: Maybe<StrapiGqlEnum_Podcastfeed_Type>;
  copyright?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subtitle: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcaster = {
  __typename?: 'Podcaster';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  image?: Maybe<StrapiGqlUploadFile>;
  podcast_episodes?: Maybe<StrapiGqlPodcastEpisode>;
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcasterAggregator = {
  __typename?: 'PodcasterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPodcasterConnection = {
  __typename?: 'PodcasterConnection';
  values?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
  groupBy?: Maybe<StrapiGqlPodcasterGroupBy>;
  aggregate?: Maybe<StrapiGqlPodcasterAggregator>;
};

export type StrapiGqlPodcasterConnectionBiography = {
  __typename?: 'PodcasterConnectionBiography';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionCreated_At = {
  __typename?: 'PodcasterConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionId = {
  __typename?: 'PodcasterConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionImage = {
  __typename?: 'PodcasterConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionName = {
  __typename?: 'PodcasterConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionPodcast_Episodes = {
  __typename?: 'PodcasterConnectionPodcast_episodes';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionPublished_At = {
  __typename?: 'PodcasterConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionSlug = {
  __typename?: 'PodcasterConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterConnectionUpdated_At = {
  __typename?: 'PodcasterConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlPodcasterConnection>;
};

export type StrapiGqlPodcasterGroupBy = {
  __typename?: 'PodcasterGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionSlug>>>;
  biography?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionBiography>>>;
  image?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionImage>>>;
  podcast_episodes?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionPodcast_Episodes>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionPublished_At>>>;
};

export type StrapiGqlPodcasterInput = {
  name: Scalars['String'];
  slug?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  podcast_episodes?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum StrapiGqlPublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type StrapiGqlQuery = {
  __typename?: 'Query';
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
  blogCategories?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  blogCategoriesConnection?: Maybe<StrapiGqlBlogCategoryConnection>;
  blogEntry?: Maybe<StrapiGqlBlogEntry>;
  blogEntries?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
  blogEntriesConnection?: Maybe<StrapiGqlBlogEntryConnection>;
  blogInfo?: Maybe<StrapiGqlBlogInfo>;
  footer?: Maybe<StrapiGqlFooter>;
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
  formerStudents?: Maybe<Array<Maybe<StrapiGqlFormerStudents>>>;
  formerStudentsConnection?: Maybe<StrapiGqlFormerStudentsConnection>;
  gallery?: Maybe<StrapiGqlGallery>;
  galleries?: Maybe<Array<Maybe<StrapiGqlGallery>>>;
  galleriesConnection?: Maybe<StrapiGqlGalleryConnection>;
  home?: Maybe<StrapiGqlHome>;
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
  mediaCenters?: Maybe<Array<Maybe<StrapiGqlMediaCenter>>>;
  mediaCentersConnection?: Maybe<StrapiGqlMediaCenterConnection>;
  menu?: Maybe<StrapiGqlMenu>;
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
  navigationLinks?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
  navigationLinksConnection?: Maybe<StrapiGqlNavigationLinkConnection>;
  pageInfo?: Maybe<StrapiGqlPageInfo>;
  page?: Maybe<StrapiGqlPage>;
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
  pagesConnection?: Maybe<StrapiGqlPageConnection>;
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
  podcastEpisodes?: Maybe<Array<Maybe<StrapiGqlPodcastEpisode>>>;
  podcastEpisodesConnection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  podcastFeed?: Maybe<StrapiGqlPodcastFeed>;
  podcaster?: Maybe<StrapiGqlPodcaster>;
  podcasters?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
  podcastersConnection?: Maybe<StrapiGqlPodcasterConnection>;
  schoolSubjectInfo?: Maybe<StrapiGqlSchoolSubjectInfo>;
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
  sectionSlideshows?: Maybe<Array<Maybe<StrapiGqlSectionSlideshow>>>;
  sectionSlideshowsConnection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  subject?: Maybe<StrapiGqlSubject>;
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  subjectsConnection?: Maybe<StrapiGqlSubjectConnection>;
  teacherInfo?: Maybe<StrapiGqlTeacherInfo>;
  teacher?: Maybe<StrapiGqlTeacher>;
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  teachersConnection?: Maybe<StrapiGqlTeacherConnection>;
  toolbar?: Maybe<StrapiGqlToolbar>;
  workingGroupInfo?: Maybe<StrapiGqlWorkingGroupInfo>;
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
  workingGroups?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
  workingGroupsConnection?: Maybe<StrapiGqlWorkingGroupConnection>;
  files?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
  filesConnection?: Maybe<StrapiGqlUploadFileConnection>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRole>>>;
  rolesConnection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  user?: Maybe<StrapiGqlUsersPermissionsUser>;
  users?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
  usersConnection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  me?: Maybe<StrapiGqlUsersPermissionsMe>;
};


export type StrapiGqlQueryBlogCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogCategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogCategoriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogEntryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogEntriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogEntriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFooterArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFormerStudentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFormerStudentsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFormerStudentsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryGalleryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryGalleriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryGalleriesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryHomeArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryMediaCenterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryMediaCentersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryMediaCentersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryMenuArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryNavigationLinkArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryNavigationLinksArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryNavigationLinksConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPageInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPagesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPodcastEpisodeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcastEpisodesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcastEpisodesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPodcastFeedArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcasterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcastersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcastersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQuerySchoolSubjectInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySectionSlideshowArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySectionSlideshowsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySectionSlideshowsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQuerySubjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySubjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySubjectsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryTeacherInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryTeacherArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryTeachersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryTeachersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryToolbarArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupsConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryFilesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFilesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryRolesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryRolesConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryUsersConnectionArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlRoleInput = {
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSchoolSubjectInfo = {
  __typename?: 'SchoolSubjectInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrapiGqlSchoolSubjectInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSectionSlideshow = {
  __typename?: 'SectionSlideshow';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  entries: Array<Maybe<StrapiGqlSectionSlideshowEntriesDynamicZone>>;
  title: Scalars['String'];
};

export type StrapiGqlSectionSlideshowAggregator = {
  __typename?: 'SectionSlideshowAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlSectionSlideshowConnection = {
  __typename?: 'SectionSlideshowConnection';
  values?: Maybe<Array<Maybe<StrapiGqlSectionSlideshow>>>;
  groupBy?: Maybe<StrapiGqlSectionSlideshowGroupBy>;
  aggregate?: Maybe<StrapiGqlSectionSlideshowAggregator>;
};

export type StrapiGqlSectionSlideshowConnectionCreated_At = {
  __typename?: 'SectionSlideshowConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
};

export type StrapiGqlSectionSlideshowConnectionId = {
  __typename?: 'SectionSlideshowConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
};

export type StrapiGqlSectionSlideshowConnectionTitle = {
  __typename?: 'SectionSlideshowConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
};

export type StrapiGqlSectionSlideshowConnectionUpdated_At = {
  __typename?: 'SectionSlideshowConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
};

export type StrapiGqlSectionSlideshowEntriesDynamicZone = StrapiGqlComponentSlideshowSlideshowEntry | StrapiGqlComponentSlideshowSlideshowEntryBlog | StrapiGqlComponentSlideshowSlideshowEntryPage;


export type StrapiGqlSectionSlideshowGroupBy = {
  __typename?: 'SectionSlideshowGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionTitle>>>;
};

export type StrapiGqlSectionSlideshowInput = {
  entries: Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>;
  title: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSubject = {
  __typename?: 'Subject';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Array<Maybe<StrapiGqlSubjectContentDynamicZone>>>;
  slug: Scalars['String'];
  blackboard_image?: Maybe<StrapiGqlUploadFile>;
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
};


export type StrapiGqlSubjectTeachersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlSubjectAggregator = {
  __typename?: 'SubjectAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlSubjectConnection = {
  __typename?: 'SubjectConnection';
  values?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  groupBy?: Maybe<StrapiGqlSubjectGroupBy>;
  aggregate?: Maybe<StrapiGqlSubjectAggregator>;
};

export type StrapiGqlSubjectConnectionBlackboard_Image = {
  __typename?: 'SubjectConnectionBlackboard_image';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectConnectionCreated_At = {
  __typename?: 'SubjectConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectConnectionId = {
  __typename?: 'SubjectConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectConnectionSlug = {
  __typename?: 'SubjectConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectConnectionTitle = {
  __typename?: 'SubjectConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectConnectionUpdated_At = {
  __typename?: 'SubjectConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlSubjectConnection>;
};

export type StrapiGqlSubjectContentDynamicZone = StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentContentButton | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentHomeNews | StrapiGqlComponentHomeCalendar | StrapiGqlComponentSectionFacts | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionFormerStudents;


export type StrapiGqlSubjectGroupBy = {
  __typename?: 'SubjectGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionSlug>>>;
  blackboard_image?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionBlackboard_Image>>>;
};

export type StrapiGqlSubjectInput = {
  title: Scalars['String'];
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  slug: Scalars['String'];
  blackboard_image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  image?: Maybe<StrapiGqlUploadFile>;
  name: Scalars['String'];
  slug: Scalars['String'];
  biography?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Maybe<StrapiGqlTeacherAssetsDynamicZone>>>;
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  working_groups?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
};


export type StrapiGqlTeacherSubjectsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlTeacherWorking_GroupsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlTeacherAggregator = {
  __typename?: 'TeacherAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlTeacherAssetsDynamicZone = StrapiGqlComponentAttachmentAssets;


export type StrapiGqlTeacherConnection = {
  __typename?: 'TeacherConnection';
  values?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  groupBy?: Maybe<StrapiGqlTeacherGroupBy>;
  aggregate?: Maybe<StrapiGqlTeacherAggregator>;
};

export type StrapiGqlTeacherConnectionBiography = {
  __typename?: 'TeacherConnectionBiography';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionCreated_At = {
  __typename?: 'TeacherConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionId = {
  __typename?: 'TeacherConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionImage = {
  __typename?: 'TeacherConnectionImage';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionName = {
  __typename?: 'TeacherConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionSlug = {
  __typename?: 'TeacherConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionUpdated_At = {
  __typename?: 'TeacherConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherGroupBy = {
  __typename?: 'TeacherGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionUpdated_At>>>;
  image?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionImage>>>;
  name?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionSlug>>>;
  biography?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionBiography>>>;
};

export type StrapiGqlTeacherInfo = {
  __typename?: 'TeacherInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrapiGqlTeacherInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacherInput = {
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug: Scalars['String'];
  biography?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Scalars['TeacherAssetsDynamicZoneInput']>>;
  working_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};


export type StrapiGqlToolbar = {
  __typename?: 'Toolbar';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  items?: Maybe<Array<Maybe<StrapiGqlToolbarItemsDynamicZone>>>;
};

export type StrapiGqlToolbarInput = {
  items?: Maybe<Array<Scalars['ToolbarItemsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlToolbarItemsDynamicZone = StrapiGqlComponentLinkItemText;



export type StrapiGqlUploadFile = {
  __typename?: 'UploadFile';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  name: Scalars['String'];
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  ext?: Maybe<Scalars['String']>;
  mime: Scalars['String'];
  size: Scalars['Float'];
  url: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<StrapiGqlMorph>>>;
};


export type StrapiGqlUploadFileRelatedArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlUploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
  sum?: Maybe<StrapiGqlUploadFileAggregatorSum>;
  avg?: Maybe<StrapiGqlUploadFileAggregatorAvg>;
  min?: Maybe<StrapiGqlUploadFileAggregatorMin>;
  max?: Maybe<StrapiGqlUploadFileAggregatorMax>;
};

export type StrapiGqlUploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileConnection = {
  __typename?: 'UploadFileConnection';
  values?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
  groupBy?: Maybe<StrapiGqlUploadFileGroupBy>;
  aggregate?: Maybe<StrapiGqlUploadFileAggregator>;
};

export type StrapiGqlUploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  key?: Maybe<Scalars['JSON']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  key?: Maybe<Scalars['Float']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  key?: Maybe<Scalars['Int']>;
  connection?: Maybe<StrapiGqlUploadFileConnection>;
};

export type StrapiGqlUploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionUpdated_At>>>;
  name?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionName>>>;
  alternativeText?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionCaption>>>;
  width?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionWidth>>>;
  height?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionHeight>>>;
  formats?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionHash>>>;
  ext?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionExt>>>;
  mime?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionMime>>>;
  size?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionSize>>>;
  url?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionUrl>>>;
  previewUrl?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionProvider_Metadata>>>;
};

export type StrapiGqlUserInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUserPermissionsPasswordPayload = {
  __typename?: 'UserPermissionsPasswordPayload';
  ok: Scalars['Boolean'];
};

export type StrapiGqlUsersPermissionsLoginInput = {
  identifier: Scalars['String'];
  password: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsLoginPayload = {
  __typename?: 'UsersPermissionsLoginPayload';
  jwt?: Maybe<Scalars['String']>;
  user: StrapiGqlUsersPermissionsMe;
};

export type StrapiGqlUsersPermissionsMe = {
  __typename?: 'UsersPermissionsMe';
  id: Scalars['ID'];
  username: Scalars['String'];
  email: Scalars['String'];
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<StrapiGqlUsersPermissionsMeRole>;
};

export type StrapiGqlUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  id: Scalars['ID'];
  type: Scalars['String'];
  controller: Scalars['String'];
  action: Scalars['String'];
  enabled: Scalars['Boolean'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
};

export type StrapiGqlUsersPermissionsRegisterInput = {
  username: Scalars['String'];
  email: Scalars['String'];
  password: Scalars['String'];
};

export type StrapiGqlUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  id: Scalars['ID'];
  name: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsPermission>>>;
  users?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
};


export type StrapiGqlUsersPermissionsRolePermissionsArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlUsersPermissionsRoleUsersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlUsersPermissionsRoleAggregator = {
  __typename?: 'UsersPermissionsRoleAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUsersPermissionsRoleConnection = {
  __typename?: 'UsersPermissionsRoleConnection';
  values?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRole>>>;
  groupBy?: Maybe<StrapiGqlUsersPermissionsRoleGroupBy>;
  aggregate?: Maybe<StrapiGqlUsersPermissionsRoleAggregator>;
};

export type StrapiGqlUsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
};

export type StrapiGqlUsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
};

export type StrapiGqlUsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
};

export type StrapiGqlUsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
};

export type StrapiGqlUsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionName>>>;
  description?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionDescription>>>;
  type?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionType>>>;
};

export type StrapiGqlUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
  email: Scalars['String'];
  provider?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
};

export type StrapiGqlUsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  values?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
  groupBy?: Maybe<StrapiGqlUsersPermissionsUserGroupBy>;
  aggregate?: Maybe<StrapiGqlUsersPermissionsUserAggregator>;
};

export type StrapiGqlUsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  key?: Maybe<Scalars['Boolean']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
};

export type StrapiGqlUsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionUsername>>>;
  email?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionEmail>>>;
  provider?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionProvider>>>;
  confirmed?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionConfirmed>>>;
  blocked?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionBlocked>>>;
  role?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionRole>>>;
};

export type StrapiGqlWorkingGroup = {
  __typename?: 'WorkingGroup';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  content?: Maybe<Array<Maybe<StrapiGqlWorkingGroupContentDynamicZone>>>;
  slug: Scalars['String'];
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
};


export type StrapiGqlWorkingGroupTeachersArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlWorkingGroupAggregator = {
  __typename?: 'WorkingGroupAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlWorkingGroupConnection = {
  __typename?: 'WorkingGroupConnection';
  values?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
  groupBy?: Maybe<StrapiGqlWorkingGroupGroupBy>;
  aggregate?: Maybe<StrapiGqlWorkingGroupAggregator>;
};

export type StrapiGqlWorkingGroupConnectionCreated_At = {
  __typename?: 'WorkingGroupConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
};

export type StrapiGqlWorkingGroupConnectionId = {
  __typename?: 'WorkingGroupConnectionId';
  key?: Maybe<Scalars['ID']>;
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
};

export type StrapiGqlWorkingGroupConnectionSlug = {
  __typename?: 'WorkingGroupConnectionSlug';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
};

export type StrapiGqlWorkingGroupConnectionTitle = {
  __typename?: 'WorkingGroupConnectionTitle';
  key?: Maybe<Scalars['String']>;
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
};

export type StrapiGqlWorkingGroupConnectionUpdated_At = {
  __typename?: 'WorkingGroupConnectionUpdated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
};

export type StrapiGqlWorkingGroupContentDynamicZone = StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionFacts | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentText | StrapiGqlComponentContentImage | StrapiGqlComponentContentButton | StrapiGqlComponentHomeNews | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeFact | StrapiGqlComponentStudentSectionStudentQuote;


export type StrapiGqlWorkingGroupGroupBy = {
  __typename?: 'WorkingGroupGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionSlug>>>;
};

export type StrapiGqlWorkingGroupInfo = {
  __typename?: 'WorkingGroupInfo';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
};

export type StrapiGqlWorkingGroupInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlWorkingGroupInput = {
  title: Scalars['String'];
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['WorkingGroupContentDynamicZoneInput']>>;
  slug: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlCreateBlogCategoryInput = {
  data?: Maybe<StrapiGqlBlogCategoryInput>;
};

export type StrapiGqlCreateBlogCategoryPayload = {
  __typename?: 'createBlogCategoryPayload';
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
};

export type StrapiGqlCreateBlogEntryInput = {
  data?: Maybe<StrapiGqlBlogEntryInput>;
};

export type StrapiGqlCreateBlogEntryPayload = {
  __typename?: 'createBlogEntryPayload';
  blogEntry?: Maybe<StrapiGqlBlogEntry>;
};

export type StrapiGqlCreateFormerStudentInput = {
  data?: Maybe<StrapiGqlFormerStudentInput>;
};

export type StrapiGqlCreateFormerStudentPayload = {
  __typename?: 'createFormerStudentPayload';
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
};

export type StrapiGqlCreateGalleryInput = {
  data?: Maybe<StrapiGqlGalleryInput>;
};

export type StrapiGqlCreateGalleryPayload = {
  __typename?: 'createGalleryPayload';
  gallery?: Maybe<StrapiGqlGallery>;
};

export type StrapiGqlCreateMediaCenterInput = {
  data?: Maybe<StrapiGqlMediaCenterInput>;
};

export type StrapiGqlCreateMediaCenterPayload = {
  __typename?: 'createMediaCenterPayload';
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
};

export type StrapiGqlCreateNavigationLinkInput = {
  data?: Maybe<StrapiGqlNavigationLinkInput>;
};

export type StrapiGqlCreateNavigationLinkPayload = {
  __typename?: 'createNavigationLinkPayload';
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
};

export type StrapiGqlCreatePageInput = {
  data?: Maybe<StrapiGqlPageInput>;
};

export type StrapiGqlCreatePagePayload = {
  __typename?: 'createPagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlCreatePodcastEpisodeInput = {
  data?: Maybe<StrapiGqlPodcastEpisodeInput>;
};

export type StrapiGqlCreatePodcastEpisodePayload = {
  __typename?: 'createPodcastEpisodePayload';
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlCreatePodcasterInput = {
  data?: Maybe<StrapiGqlPodcasterInput>;
};

export type StrapiGqlCreatePodcasterPayload = {
  __typename?: 'createPodcasterPayload';
  podcaster?: Maybe<StrapiGqlPodcaster>;
};

export type StrapiGqlCreateRoleInput = {
  data?: Maybe<StrapiGqlRoleInput>;
};

export type StrapiGqlCreateRolePayload = {
  __typename?: 'createRolePayload';
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
};

export type StrapiGqlCreateSectionSlideshowInput = {
  data?: Maybe<StrapiGqlSectionSlideshowInput>;
};

export type StrapiGqlCreateSectionSlideshowPayload = {
  __typename?: 'createSectionSlideshowPayload';
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlCreateSubjectInput = {
  data?: Maybe<StrapiGqlSubjectInput>;
};

export type StrapiGqlCreateSubjectPayload = {
  __typename?: 'createSubjectPayload';
  subject?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlCreateTeacherInput = {
  data?: Maybe<StrapiGqlTeacherInput>;
};

export type StrapiGqlCreateTeacherPayload = {
  __typename?: 'createTeacherPayload';
  teacher?: Maybe<StrapiGqlTeacher>;
};

export type StrapiGqlCreateUserInput = {
  data?: Maybe<StrapiGqlUserInput>;
};

export type StrapiGqlCreateUserPayload = {
  __typename?: 'createUserPayload';
  user?: Maybe<StrapiGqlUsersPermissionsUser>;
};

export type StrapiGqlCreateWorkingGroupInput = {
  data?: Maybe<StrapiGqlWorkingGroupInput>;
};

export type StrapiGqlCreateWorkingGroupPayload = {
  __typename?: 'createWorkingGroupPayload';
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
};

export type StrapiGqlDeleteBlogCategoryInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteBlogCategoryPayload = {
  __typename?: 'deleteBlogCategoryPayload';
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
};

export type StrapiGqlDeleteBlogEntryInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteBlogEntryPayload = {
  __typename?: 'deleteBlogEntryPayload';
  blogEntry?: Maybe<StrapiGqlBlogEntry>;
};

export type StrapiGqlDeleteBlogInfoPayload = {
  __typename?: 'deleteBlogInfoPayload';
  blogInfo?: Maybe<StrapiGqlBlogInfo>;
};

export type StrapiGqlDeleteFileInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteFilePayload = {
  __typename?: 'deleteFilePayload';
  file?: Maybe<StrapiGqlUploadFile>;
};

export type StrapiGqlDeleteFooterPayload = {
  __typename?: 'deleteFooterPayload';
  footer?: Maybe<StrapiGqlFooter>;
};

export type StrapiGqlDeleteFormerStudentInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteFormerStudentPayload = {
  __typename?: 'deleteFormerStudentPayload';
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
};

export type StrapiGqlDeleteGalleryInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteGalleryPayload = {
  __typename?: 'deleteGalleryPayload';
  gallery?: Maybe<StrapiGqlGallery>;
};

export type StrapiGqlDeleteHomePayload = {
  __typename?: 'deleteHomePayload';
  home?: Maybe<StrapiGqlHome>;
};

export type StrapiGqlDeleteMediaCenterInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteMediaCenterPayload = {
  __typename?: 'deleteMediaCenterPayload';
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
};

export type StrapiGqlDeleteMenuPayload = {
  __typename?: 'deleteMenuPayload';
  menu?: Maybe<StrapiGqlMenu>;
};

export type StrapiGqlDeleteNavigationLinkInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteNavigationLinkPayload = {
  __typename?: 'deleteNavigationLinkPayload';
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
};

export type StrapiGqlDeletePageInfoPayload = {
  __typename?: 'deletePageInfoPayload';
  pageInfo?: Maybe<StrapiGqlPageInfo>;
};

export type StrapiGqlDeletePageInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlDeletePodcastEpisodeInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeletePodcastEpisodePayload = {
  __typename?: 'deletePodcastEpisodePayload';
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlDeletePodcastFeedPayload = {
  __typename?: 'deletePodcastFeedPayload';
  podcastFeed?: Maybe<StrapiGqlPodcastFeed>;
};

export type StrapiGqlDeletePodcasterInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeletePodcasterPayload = {
  __typename?: 'deletePodcasterPayload';
  podcaster?: Maybe<StrapiGqlPodcaster>;
};

export type StrapiGqlDeleteRoleInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
};

export type StrapiGqlDeleteSchoolSubjectInfoPayload = {
  __typename?: 'deleteSchoolSubjectInfoPayload';
  schoolSubjectInfo?: Maybe<StrapiGqlSchoolSubjectInfo>;
};

export type StrapiGqlDeleteSectionSlideshowInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteSectionSlideshowPayload = {
  __typename?: 'deleteSectionSlideshowPayload';
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlDeleteSubjectInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteSubjectPayload = {
  __typename?: 'deleteSubjectPayload';
  subject?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlDeleteTeacherInfoPayload = {
  __typename?: 'deleteTeacherInfoPayload';
  teacherInfo?: Maybe<StrapiGqlTeacherInfo>;
};

export type StrapiGqlDeleteTeacherInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteTeacherPayload = {
  __typename?: 'deleteTeacherPayload';
  teacher?: Maybe<StrapiGqlTeacher>;
};

export type StrapiGqlDeleteToolbarPayload = {
  __typename?: 'deleteToolbarPayload';
  toolbar?: Maybe<StrapiGqlToolbar>;
};

export type StrapiGqlDeleteUserInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteUserPayload = {
  __typename?: 'deleteUserPayload';
  user?: Maybe<StrapiGqlUsersPermissionsUser>;
};

export type StrapiGqlDeleteWorkingGroupInfoPayload = {
  __typename?: 'deleteWorkingGroupInfoPayload';
  workingGroupInfo?: Maybe<StrapiGqlWorkingGroupInfo>;
};

export type StrapiGqlDeleteWorkingGroupInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteWorkingGroupPayload = {
  __typename?: 'deleteWorkingGroupPayload';
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
};

export type StrapiGqlEditBlogCategoryInput = {
  name?: Maybe<Scalars['String']>;
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditBlogEntryInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Scalars['BlogEntryContentDynamicZoneInput']>>;
  blog_category?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  author?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditBlogInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentAttachmentAssetInput = {
  id?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentBlackboardSlideInput = {
  id?: Maybe<Scalars['ID']>;
  school_subject?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentContentButtonInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  link?: Maybe<Scalars['ID']>;
  alignment?: Maybe<StrapiGqlEditComponentTypesAlignmentInput>;
};

export type StrapiGqlEditComponentContentDownloadButtonInput = {
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  file?: Maybe<Scalars['ID']>;
  alignment?: Maybe<StrapiGqlEditComponentTypesAlignmentInput>;
};

export type StrapiGqlEditComponentContentImageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentContentTextInput = {
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentGalleryImageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentHomeCalendarInput = {
  id?: Maybe<Scalars['ID']>;
  dates?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentHomeFactInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentHomeNewInput = {
  id?: Maybe<Scalars['ID']>;
  amount?: Maybe<Scalars['Int']>;
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditComponentLinkItemLinkInput = {
  id?: Maybe<Scalars['ID']>;
  navigation_link?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkItemTextInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  icon_name?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentLinkTypeBlogInput = {
  id?: Maybe<Scalars['ID']>;
  blog?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeGalleryInput = {
  id?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeMediaCenterInput = {
  id?: Maybe<Scalars['ID']>;
  mediaCenter?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypePageInput = {
  id?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypePodcastInput = {
  id?: Maybe<Scalars['ID']>;
  podcastEpisode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypePostInput = {
  id?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeSchulfachInput = {
  id?: Maybe<Scalars['ID']>;
  schulfach?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeStrapiInput = {
  id?: Maybe<Scalars['ID']>;
  URL?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentLinkTypeTeacherInput = {
  id?: Maybe<Scalars['ID']>;
  teacher?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeWebInput = {
  id?: Maybe<Scalars['ID']>;
  URL?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentLinkTypeWorkingGroupInput = {
  id?: Maybe<Scalars['ID']>;
  working_group?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentMediaCenterMovieInput = {
  id?: Maybe<Scalars['ID']>;
  movie?: Maybe<Scalars['ID']>;
  caption?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  poster?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentNavigationNavigationEntryInput = {
  id?: Maybe<Scalars['ID']>;
  blog_eintrag?: Maybe<Scalars['ID']>;
  schulfach?: Maybe<Scalars['ID']>;
  blog_kategorie?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentNavigationNavigationLevelEntryInput = {
  id?: Maybe<Scalars['ID']>;
  parent?: Maybe<Scalars['ID']>;
  navigation_link?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditComponentNavigationNavigationSectionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  navigation_entry?: Maybe<Array<Maybe<StrapiGqlEditComponentNavigationNavigationEntryInput>>>;
};

export type StrapiGqlEditComponentPodcastCategoryInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<StrapiGqlEnum_Componentpodcastcategory_Name>;
};

export type StrapiGqlEditComponentPodcastChapterInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  href?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionBlackboardSlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  slides?: Maybe<Array<Maybe<StrapiGqlEditComponentBlackboardSlideInput>>>;
};

export type StrapiGqlEditComponentSectionBlogSlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  blog?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  style?: Maybe<StrapiGqlEnum_Componentsectionblogslideshow_Style>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentSectionFactInput = {
  id?: Maybe<Scalars['ID']>;
  facts?: Maybe<Array<Maybe<StrapiGqlEditComponentHomeFactInput>>>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentSectionFormerStudentInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentSectionGallerySlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentSectionIFrameInput = {
  id?: Maybe<Scalars['ID']>;
  URL?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionLatestPodcastEpisodeInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  activeTab?: Maybe<StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab>;
};

export type StrapiGqlEditComponentSectionMensaMaxInput = {
  id?: Maybe<Scalars['ID']>;
  p?: Maybe<Scalars['String']>;
  e?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionPodcastEpisodeInput = {
  id?: Maybe<Scalars['ID']>;
  podcast_episode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSectionSlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryBlogInput = {
  id?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryPageInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentStudentSectionStudentQuoteInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
};

export type StrapiGqlEditComponentTypesAlignmentInput = {
  id?: Maybe<Scalars['ID']>;
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
};

export type StrapiGqlEditComponentTypesColorInput = {
  id?: Maybe<Scalars['ID']>;
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
};

export type StrapiGqlEditFileInput = {
  name?: Maybe<Scalars['String']>;
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  ext?: Maybe<Scalars['String']>;
  mime?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Float']>;
  url?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditFooterInput = {
  map_image?: Maybe<Scalars['ID']>;
  map_link?: Maybe<Scalars['String']>;
  contact_info?: Maybe<Scalars['String']>;
  link?: Maybe<Array<Maybe<StrapiGqlEditComponentLinkItemLinkInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditFormerStudentInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditGalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlEditComponentGalleryImageInput>>>;
  style?: Maybe<StrapiGqlEnum_Gallery_Style>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditHomeInput = {
  sections?: Maybe<Array<Scalars['HomeSectionsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditLocaleInput = {
  name?: Maybe<Scalars['String']>;
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditMediaCenterInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  movies?: Maybe<Array<Maybe<StrapiGqlEditComponentMediaCenterMovieInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditMenuInput = {
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlEditComponentNavigationNavigationLevelEntryInput>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditNavigationLinkInput = {
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Scalars['NavigationLinkTypeDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPageInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPageInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  calendar_key?: Maybe<Scalars['String']>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcastEpisodeInput = {
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<Scalars['ID']>>>;
  pubDate?: Maybe<Scalars['DateTime']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  explicit?: Maybe<Scalars['Boolean']>;
  type?: Maybe<StrapiGqlEnum_Podcastepisode_Type>;
  block?: Maybe<Scalars['Boolean']>;
  slug?: Maybe<Scalars['String']>;
  season?: Maybe<Scalars['Int']>;
  episode?: Maybe<Scalars['Int']>;
  subtitle?: Maybe<Scalars['String']>;
  chapters?: Maybe<Array<Maybe<StrapiGqlEditComponentPodcastChapterInput>>>;
  contributors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcastFeedInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  category?: Maybe<Array<Maybe<StrapiGqlEditComponentPodcastCategoryInput>>>;
  explicit?: Maybe<Scalars['Boolean']>;
  author?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  owner_email?: Maybe<Scalars['String']>;
  type?: Maybe<StrapiGqlEnum_Podcastfeed_Type>;
  copyright?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Boolean']>;
  complete?: Maybe<Scalars['Boolean']>;
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  subtitle?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcasterInput = {
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  podcast_episodes?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditRoleInput = {
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSchoolSubjectInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSectionSlideshowInput = {
  entries: Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>;
  title?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSubjectInput = {
  title?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  slug?: Maybe<Scalars['String']>;
  blackboard_image?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditTeacherInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditTeacherInput = {
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  slug?: Maybe<Scalars['String']>;
  biography?: Maybe<Scalars['String']>;
  assets?: Maybe<Array<Scalars['TeacherAssetsDynamicZoneInput']>>;
  working_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditToolbarInput = {
  items?: Maybe<Array<Scalars['ToolbarItemsDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditUserInput = {
  username?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  blocked?: Maybe<Scalars['Boolean']>;
  role?: Maybe<Scalars['ID']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditWorkingGroupInfoInput = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditWorkingGroupInput = {
  title?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['WorkingGroupContentDynamicZoneInput']>>;
  slug?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUpdateBlogCategoryInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditBlogCategoryInput>;
};

export type StrapiGqlUpdateBlogCategoryPayload = {
  __typename?: 'updateBlogCategoryPayload';
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
};

export type StrapiGqlUpdateBlogEntryInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditBlogEntryInput>;
};

export type StrapiGqlUpdateBlogEntryPayload = {
  __typename?: 'updateBlogEntryPayload';
  blogEntry?: Maybe<StrapiGqlBlogEntry>;
};

export type StrapiGqlUpdateBlogInfoInput = {
  data?: Maybe<StrapiGqlEditBlogInfoInput>;
};

export type StrapiGqlUpdateBlogInfoPayload = {
  __typename?: 'updateBlogInfoPayload';
  blogInfo?: Maybe<StrapiGqlBlogInfo>;
};

export type StrapiGqlUpdateFooterInput = {
  data?: Maybe<StrapiGqlEditFooterInput>;
};

export type StrapiGqlUpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<StrapiGqlFooter>;
};

export type StrapiGqlUpdateFormerStudentInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditFormerStudentInput>;
};

export type StrapiGqlUpdateFormerStudentPayload = {
  __typename?: 'updateFormerStudentPayload';
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
};

export type StrapiGqlUpdateGalleryInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditGalleryInput>;
};

export type StrapiGqlUpdateGalleryPayload = {
  __typename?: 'updateGalleryPayload';
  gallery?: Maybe<StrapiGqlGallery>;
};

export type StrapiGqlUpdateHomeInput = {
  data?: Maybe<StrapiGqlEditHomeInput>;
};

export type StrapiGqlUpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<StrapiGqlHome>;
};

export type StrapiGqlUpdateMediaCenterInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditMediaCenterInput>;
};

export type StrapiGqlUpdateMediaCenterPayload = {
  __typename?: 'updateMediaCenterPayload';
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
};

export type StrapiGqlUpdateMenuInput = {
  data?: Maybe<StrapiGqlEditMenuInput>;
};

export type StrapiGqlUpdateMenuPayload = {
  __typename?: 'updateMenuPayload';
  menu?: Maybe<StrapiGqlMenu>;
};

export type StrapiGqlUpdateNavigationLinkInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditNavigationLinkInput>;
};

export type StrapiGqlUpdateNavigationLinkPayload = {
  __typename?: 'updateNavigationLinkPayload';
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
};

export type StrapiGqlUpdatePageInfoInput = {
  data?: Maybe<StrapiGqlEditPageInfoInput>;
};

export type StrapiGqlUpdatePageInfoPayload = {
  __typename?: 'updatePageInfoPayload';
  pageInfo?: Maybe<StrapiGqlPageInfo>;
};

export type StrapiGqlUpdatePageInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditPageInput>;
};

export type StrapiGqlUpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlUpdatePodcastEpisodeInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditPodcastEpisodeInput>;
};

export type StrapiGqlUpdatePodcastEpisodePayload = {
  __typename?: 'updatePodcastEpisodePayload';
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlUpdatePodcastFeedInput = {
  data?: Maybe<StrapiGqlEditPodcastFeedInput>;
};

export type StrapiGqlUpdatePodcastFeedPayload = {
  __typename?: 'updatePodcastFeedPayload';
  podcastFeed?: Maybe<StrapiGqlPodcastFeed>;
};

export type StrapiGqlUpdatePodcasterInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditPodcasterInput>;
};

export type StrapiGqlUpdatePodcasterPayload = {
  __typename?: 'updatePodcasterPayload';
  podcaster?: Maybe<StrapiGqlPodcaster>;
};

export type StrapiGqlUpdateRoleInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditRoleInput>;
};

export type StrapiGqlUpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
};

export type StrapiGqlUpdateSchoolSubjectInfoInput = {
  data?: Maybe<StrapiGqlEditSchoolSubjectInfoInput>;
};

export type StrapiGqlUpdateSchoolSubjectInfoPayload = {
  __typename?: 'updateSchoolSubjectInfoPayload';
  schoolSubjectInfo?: Maybe<StrapiGqlSchoolSubjectInfo>;
};

export type StrapiGqlUpdateSectionSlideshowInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditSectionSlideshowInput>;
};

export type StrapiGqlUpdateSectionSlideshowPayload = {
  __typename?: 'updateSectionSlideshowPayload';
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlUpdateSubjectInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditSubjectInput>;
};

export type StrapiGqlUpdateSubjectPayload = {
  __typename?: 'updateSubjectPayload';
  subject?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlUpdateTeacherInfoInput = {
  data?: Maybe<StrapiGqlEditTeacherInfoInput>;
};

export type StrapiGqlUpdateTeacherInfoPayload = {
  __typename?: 'updateTeacherInfoPayload';
  teacherInfo?: Maybe<StrapiGqlTeacherInfo>;
};

export type StrapiGqlUpdateTeacherInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditTeacherInput>;
};

export type StrapiGqlUpdateTeacherPayload = {
  __typename?: 'updateTeacherPayload';
  teacher?: Maybe<StrapiGqlTeacher>;
};

export type StrapiGqlUpdateToolbarInput = {
  data?: Maybe<StrapiGqlEditToolbarInput>;
};

export type StrapiGqlUpdateToolbarPayload = {
  __typename?: 'updateToolbarPayload';
  toolbar?: Maybe<StrapiGqlToolbar>;
};

export type StrapiGqlUpdateUserInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditUserInput>;
};

export type StrapiGqlUpdateUserPayload = {
  __typename?: 'updateUserPayload';
  user?: Maybe<StrapiGqlUsersPermissionsUser>;
};

export type StrapiGqlUpdateWorkingGroupInfoInput = {
  data?: Maybe<StrapiGqlEditWorkingGroupInfoInput>;
};

export type StrapiGqlUpdateWorkingGroupInfoPayload = {
  __typename?: 'updateWorkingGroupInfoPayload';
  workingGroupInfo?: Maybe<StrapiGqlWorkingGroupInfo>;
};

export type StrapiGqlUpdateWorkingGroupInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditWorkingGroupInput>;
};

export type StrapiGqlUpdateWorkingGroupPayload = {
  __typename?: 'updateWorkingGroupPayload';
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
};

export type StrapiGqlAlignmentFragmentFragment = (
  { __typename?: 'ComponentTypesAlignment' }
  & Pick<StrapiGqlComponentTypesAlignment, 'alignment'>
);

export type StrapiGqlBlogCategoryBasicFragmentFragment = (
  { __typename: 'BlogCategory' }
  & Pick<StrapiGqlBlogCategory, 'id' | 'created_at' | 'updated_at' | 'name' | 'slug'>
  & { blog_entries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryBasicFragmentFragment
  )>>> }
);

export type StrapiGqlBlogCategoryDetailFragmentFragment = (
  { __typename: 'BlogCategory' }
  & Pick<StrapiGqlBlogCategory, 'id' | 'created_at' | 'updated_at' | 'name' | 'slug'>
  & { blog_entries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryDetailFragmentFragment
  )>>> }
);

export type StrapiGqlBlogEntryBasicFragmentFragment = (
  { __typename: 'BlogEntry' }
  & Pick<StrapiGqlBlogEntry, 'id' | 'title' | 'slug' | 'created_at' | 'updated_at' | 'published_at' | 'author'>
  & { blog_category?: Maybe<(
    { __typename?: 'BlogCategory' }
    & Pick<StrapiGqlBlogCategory, 'slug' | 'name'>
  )>, content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentContentButton' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentStudentSectionStudentQuote' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionMensaMax' } | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionFormerStudents' }>>> }
);

export type StrapiGqlBlogEntryDetailFragmentFragment = (
  { __typename: 'BlogEntry' }
  & Pick<StrapiGqlBlogEntry, 'id' | 'title' | 'slug' | 'created_at' | 'updated_at' | 'published_at' | 'author'>
  & { blog_category?: Maybe<(
    { __typename?: 'BlogCategory' }
    & Pick<StrapiGqlBlogCategory, 'slug' | 'name'>
  )>, content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionSlideshow' }
    & StrapiGqlComponentSectionSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentContentButton' }
    & StrapiGqlComponentContentButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlogSlideshow' }
    & StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlackboardSlideshow' }
    & StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' } | (
    { __typename: 'ComponentHomeNews' }
    & StrapiGqlComponentHomeNewsFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFacts' }
    & StrapiGqlComponentSectionFactsFragmentFragment
  ) | (
    { __typename: 'ComponentStudentSectionStudentQuote' }
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  ) | (
    { __typename: 'ComponentSectionIFrame' }
    & StrapiGqlComponentSectionIFrameFragmentFragment
  ) | (
    { __typename: 'ComponentSectionMensaMax' }
    & StrapiGqlComponentSectionMensaMaxFragmentFragment
  ) | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentContentDownloadButton' }
    & StrapiGqlComponentContentDownloadButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionLatestPodcastEpisode' }
    & StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFormerStudents' }
    & StrapiGqlComponentSectionFormerStudentsFragmentFragment
  )>>> }
);

export type StrapiGqlColorFragmentFragment = (
  { __typename?: 'ComponentTypesColor' }
  & Pick<StrapiGqlComponentTypesColor, 'color'>
);

export type StrapiGqlComponentAttachmentAssetsFragmentFragment = (
  { __typename?: 'ComponentAttachmentAssets' }
  & Pick<StrapiGqlComponentAttachmentAssets, 'name'>
  & { file?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<StrapiGqlUploadFile, 'url'>
  )> }
);

export type StrapiGqlComponentBlackboardSlideFragmentFragment = (
  { __typename?: 'ComponentBlackboardSlide' }
  & Pick<StrapiGqlComponentBlackboardSlide, 'id'>
  & { school_subject?: Maybe<(
    { __typename?: 'Subject' }
    & StrapiGqlSchoolSubjectBasicFragmentFragment
  )>, image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlComponentContentButtonFragmentFragment = (
  { __typename?: 'ComponentContentButton' }
  & Pick<StrapiGqlComponentContentButton, 'id' | 'label'>
  & { alignment?: Maybe<(
    { __typename?: 'ComponentTypesAlignment' }
    & StrapiGqlAlignmentFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )>, link?: Maybe<(
    { __typename?: 'NavigationLink' }
    & StrapiGqlNavigationLinkFragmentFragment
  )> }
);

export type StrapiGqlComponentContentDownloadButtonFragmentFragment = (
  { __typename?: 'ComponentContentDownloadButton' }
  & Pick<StrapiGqlComponentContentDownloadButton, 'id' | 'label'>
  & { alignment?: Maybe<(
    { __typename?: 'ComponentTypesAlignment' }
    & StrapiGqlAlignmentFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )>, file?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<StrapiGqlUploadFile, 'url'>
  )> }
);

export type StrapiGqlComponentContentImageFragmentFragment = (
  { __typename?: 'ComponentContentImage' }
  & Pick<StrapiGqlComponentContentImage, 'id' | 'caption'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlComponentContentTextFragmentFragment = (
  { __typename?: 'ComponentContentText' }
  & Pick<StrapiGqlComponentContentText, 'id' | 'text'>
);

export type StrapiGqlComponentGalleryImageFragmentFragment = (
  { __typename?: 'ComponentGalleryImage' }
  & Pick<StrapiGqlComponentGalleryImage, 'id' | 'title' | 'caption'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlComponentHomeNewsFragmentFragment = (
  { __typename?: 'ComponentHomeNews' }
  & Pick<StrapiGqlComponentHomeNews, 'amount'>
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & StrapiGqlPageBasicFragmentFragment
  )>>> }
);

export type StrapiGqlComponentMediaCenterMovieFragmentFragment = (
  { __typename?: 'ComponentMediaCenterMovie' }
  & Pick<StrapiGqlComponentMediaCenterMovie, 'id' | 'title' | 'caption'>
  & { movie?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<StrapiGqlUploadFile, 'url'>
  )>, poster?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<StrapiGqlUploadFile, 'formats'>
  )> }
);

export type StrapiGqlComponentPodcastCategoryFragmentFragment = (
  { __typename?: 'ComponentPodcastCategory' }
  & Pick<StrapiGqlComponentPodcastCategory, 'name'>
);

export type StrapiGqlComponentPodcastChaptersFragmentFragment = (
  { __typename: 'ComponentPodcastChapters' }
  & Pick<StrapiGqlComponentPodcastChapters, 'id' | 'start' | 'title'>
  & { href?: Maybe<(
    { __typename?: 'NavigationLink' }
    & StrapiGqlNavigationLinkFragmentFragment
  )>, image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment = (
  { __typename?: 'ComponentSectionBlackboardSlideshow' }
  & Pick<StrapiGqlComponentSectionBlackboardSlideshow, 'id'>
  & { slides?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentBlackboardSlide' }
    & StrapiGqlComponentBlackboardSlideFragmentFragment
  )>>> }
);

export type StrapiGqlComponentSectionBlogSlideshowFragmentFragment = (
  { __typename?: 'ComponentSectionBlogSlideshow' }
  & Pick<StrapiGqlComponentSectionBlogSlideshow, 'id' | 'limit' | 'style'>
  & { blog?: Maybe<(
    { __typename?: 'BlogCategory' }
    & StrapiGqlBlogCategoryBasicFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )> }
);

export type StrapiGqlComponentSectionFactsFragmentFragment = (
  { __typename?: 'ComponentSectionFacts' }
  & { facts?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentHomeFact' }
    & Pick<StrapiGqlComponentHomeFact, 'number' | 'title' | 'subtitle'>
  )>>>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )> }
);

export type StrapiGqlComponentSectionFormerStudentsFragmentFragment = (
  { __typename?: 'ComponentSectionFormerStudents' }
  & Pick<StrapiGqlComponentSectionFormerStudents, 'title' | 'description' | 'limit'>
);

export type StrapiGqlComponentSectionGallerySlideshowFragmentFragment = (
  { __typename?: 'ComponentSectionGallerySlideshow' }
  & Pick<StrapiGqlComponentSectionGallerySlideshow, 'id' | 'limit'>
  & { gallery?: Maybe<(
    { __typename?: 'Gallery' }
    & StrapiGqlGalleryFragmentFragment
  )> }
);

export type StrapiGqlComponentSectionIFrameFragmentFragment = (
  { __typename?: 'ComponentSectionIFrame' }
  & Pick<StrapiGqlComponentSectionIFrame, 'id' | 'URL' | 'width' | 'height'>
);

export type StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment = (
  { __typename?: 'ComponentSectionLatestPodcastEpisode' }
  & Pick<StrapiGqlComponentSectionLatestPodcastEpisode, 'id' | 'title' | 'activeTab'>
);

export type StrapiGqlComponentSectionMensaMaxFragmentFragment = (
  { __typename?: 'ComponentSectionMensaMax' }
  & Pick<StrapiGqlComponentSectionMensaMax, 'id' | 'p' | 'e'>
);

export type StrapiGqlComponentSectionPodcastEpisodeFragmentFragment = (
  { __typename: 'ComponentSectionPodcastEpisode' }
  & { podcast_episode?: Maybe<(
    { __typename?: 'PodcastEpisode' }
    & StrapiGqlPodcastEpisodeBasicFragmentFragment
  )> }
);

export type StrapiGqlComponentSectionSlideshowFragmentFragment = (
  { __typename?: 'ComponentSectionSlideshow' }
  & { slideshow?: Maybe<(
    { __typename?: 'SectionSlideshow' }
    & Pick<StrapiGqlSectionSlideshow, 'id'>
  )> }
);

export type StrapiGqlComponentSlideshowEntryBlogFragmentFragment = (
  { __typename?: 'ComponentSlideshowSlideshowEntryBlog' }
  & Pick<StrapiGqlComponentSlideshowSlideshowEntryBlog, 'id' | 'subtitle' | 'label'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )>, post?: Maybe<(
    { __typename: 'BlogEntry' }
    & Pick<StrapiGqlBlogEntry, 'slug'>
  )> }
);

export type StrapiGqlComponentSlideshowEntryPageFragmentFragment = (
  { __typename?: 'ComponentSlideshowSlideshowEntryPage' }
  & Pick<StrapiGqlComponentSlideshowSlideshowEntryPage, 'id' | 'subtitle' | 'label'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )>, page?: Maybe<(
    { __typename: 'Page' }
    & Pick<StrapiGqlPage, 'slug'>
  )> }
);

export type StrapiGqlComponentSlideshowEntryFragmentFragment = (
  { __typename?: 'ComponentSlideshowSlideshowEntry' }
  & Pick<StrapiGqlComponentSlideshowSlideshowEntry, 'id' | 'subtitle'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )> }
);

export type StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment = (
  { __typename?: 'ComponentStudentSectionStudentQuote' }
  & Pick<StrapiGqlComponentStudentSectionStudentQuote, 'id' | 'title' | 'limit'>
  & { color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )> }
);

export type StrapiGqlFormerStudentDetailFragmentFragment = (
  { __typename?: 'FormerStudents' }
  & Pick<StrapiGqlFormerStudents, 'id' | 'slug' | 'name' | 'biography'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlGalleryFragmentFragment = (
  { __typename?: 'Gallery' }
  & Pick<StrapiGqlGallery, 'id' | 'slug' | 'title' | 'style'>
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentGalleryImage' }
    & StrapiGqlComponentGalleryImageFragmentFragment
  )>>>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & StrapiGqlColorFragmentFragment
  )> }
);

export type StrapiGqlHomeFragmentFragment = (
  { __typename?: 'Home' }
  & { sections?: Maybe<Array<Maybe<(
    { __typename: 'ComponentSectionSlideshow' }
    & StrapiGqlComponentSectionSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFacts' }
    & StrapiGqlComponentSectionFactsFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentHomeNews' }
    & StrapiGqlComponentHomeNewsFragmentFragment
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' } | (
    { __typename: 'ComponentSectionBlackboardSlideshow' }
    & StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentStudentSectionStudentQuote' }
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  ) | (
    { __typename: 'ComponentContentButton' }
    & StrapiGqlComponentContentButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlogSlideshow' }
    & StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionIFrame' }
    & StrapiGqlComponentSectionIFrameFragmentFragment
  ) | (
    { __typename: 'ComponentSectionMensaMax' }
    & StrapiGqlComponentSectionMensaMaxFragmentFragment
  ) | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentContentDownloadButton' }
    & StrapiGqlComponentContentDownloadButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionLatestPodcastEpisode' }
    & StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFormerStudents' }
    & StrapiGqlComponentSectionFormerStudentsFragmentFragment
  )>>> }
);

export type StrapiGqlImageFragmentFragment = (
  { __typename?: 'UploadFile' }
  & Pick<StrapiGqlUploadFile, 'formats' | 'alternativeText' | 'url'>
);

export type StrapiGqlMediaCenterFragmentFragment = (
  { __typename?: 'MediaCenter' }
  & Pick<StrapiGqlMediaCenter, 'id' | 'slug' | 'title'>
  & { movies?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentMediaCenterMovie' }
    & StrapiGqlComponentMediaCenterMovieFragmentFragment
  )>>> }
);

export type StrapiGqlMenuFragmentFragment = (
  { __typename?: 'Menu' }
  & { entries?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentNavigationNavigationLevelEntry' }
    & Pick<StrapiGqlComponentNavigationNavigationLevelEntry, 'id' | 'title' | 'hideInSidebar'>
    & { parent?: Maybe<(
      { __typename?: 'NavigationLink' }
      & Pick<StrapiGqlNavigationLink, 'id'>
    )>, navigation_link?: Maybe<(
      { __typename?: 'NavigationLink' }
      & StrapiGqlNavigationLinkFragmentFragment
    )> }
  )>>> }
);

export type StrapiGqlNavigationLinkFragmentFragment = (
  { __typename?: 'NavigationLink' }
  & Pick<StrapiGqlNavigationLink, 'id' | 'title'>
  & { type?: Maybe<Array<Maybe<(
    { __typename: 'ComponentLinkTypeWeb' }
    & Pick<StrapiGqlComponentLinkTypeWeb, 'URL'>
  ) | (
    { __typename: 'ComponentLinkTypeSchulfach' }
    & { schulfach?: Maybe<(
      { __typename?: 'Subject' }
      & Pick<StrapiGqlSubject, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypePage' }
    & { page?: Maybe<(
      { __typename?: 'Page' }
      & Pick<StrapiGqlPage, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypeStrapi' }
    & Pick<StrapiGqlComponentLinkTypeStrapi, 'URL'>
  ) | (
    { __typename: 'ComponentLinkTypePost' }
    & { post?: Maybe<(
      { __typename?: 'BlogEntry' }
      & Pick<StrapiGqlBlogEntry, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypeBlog' }
    & { blog?: Maybe<(
      { __typename?: 'BlogCategory' }
      & Pick<StrapiGqlBlogCategory, 'name' | 'slug'>
    )> }
  ) | { __typename: 'ComponentLinkTypeTeacher' } | (
    { __typename: 'ComponentLinkTypeGallery' }
    & { gallery?: Maybe<(
      { __typename?: 'Gallery' }
      & Pick<StrapiGqlGallery, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypeMediaCenter' }
    & { mediaCenter?: Maybe<(
      { __typename?: 'MediaCenter' }
      & Pick<StrapiGqlMediaCenter, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypePodcast' }
    & { podcastEpisode?: Maybe<(
      { __typename?: 'PodcastEpisode' }
      & Pick<StrapiGqlPodcastEpisode, 'title' | 'slug'>
    )> }
  ) | (
    { __typename: 'ComponentLinkTypeWorkingGroup' }
    & { working_group?: Maybe<(
      { __typename?: 'WorkingGroup' }
      & Pick<StrapiGqlWorkingGroup, 'title' | 'slug'>
    )> }
  )>>> }
);

export type StrapiGqlPageBasicFragmentFragment = (
  { __typename: 'Page' }
  & Pick<StrapiGqlPage, 'id' | 'created_at' | 'updated_at' | 'title' | 'slug'>
  & { content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentContentButton' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentStudentSectionStudentQuote' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionFormerStudents' }>>> }
);

export type StrapiGqlPageDetailFragmentFragment = (
  { __typename: 'Page' }
  & Pick<StrapiGqlPage, 'id' | 'created_at' | 'updated_at' | 'title' | 'slug' | 'calendar_key'>
  & { assets?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentAttachmentAssets' }
    & StrapiGqlComponentAttachmentAssetsFragmentFragment
  )>>>, content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentSectionSlideshow' }
    & StrapiGqlComponentSectionSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlackboardSlideshow' }
    & StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentContentButton' }
    & StrapiGqlComponentContentButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlogSlideshow' }
    & StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentHomeNews' }
    & StrapiGqlComponentHomeNewsFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' } | (
    { __typename: 'ComponentSectionFacts' }
    & StrapiGqlComponentSectionFactsFragmentFragment
  ) | (
    { __typename: 'ComponentStudentSectionStudentQuote' }
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  ) | (
    { __typename: 'ComponentSectionIFrame' }
    & StrapiGqlComponentSectionIFrameFragmentFragment
  ) | (
    { __typename: 'ComponentSectionMensaMax' }
    & StrapiGqlComponentSectionMensaMaxFragmentFragment
  ) | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentContentDownloadButton' }
    & StrapiGqlComponentContentDownloadButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionLatestPodcastEpisode' }
    & StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFormerStudents' }
    & StrapiGqlComponentSectionFormerStudentsFragmentFragment
  )>>> }
);

export type StrapiGqlPodcastEpisodeBasicFragmentFragment = (
  { __typename: 'PodcastEpisode' }
  & Pick<StrapiGqlPodcastEpisode, 'id' | 'title' | 'subtitle' | 'slug' | 'pubDate' | 'published_at' | 'description' | 'episode' | 'season'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlPodcastEpisodeDetailFragmentFragment = (
  { __typename: 'PodcastEpisode' }
  & Pick<StrapiGqlPodcastEpisode, 'id' | 'title' | 'subtitle' | 'slug' | 'pubDate' | 'published_at' | 'description' | 'explicit' | 'episode' | 'season' | 'type' | 'block'>
  & { content?: Maybe<Array<Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlPodcastEpisodeUploadFileFragmentFragment
  )>>>, image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, chapters?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentPodcastChapters' }
    & StrapiGqlComponentPodcastChaptersFragmentFragment
  )>>>, contributors?: Maybe<Array<Maybe<(
    { __typename?: 'Podcaster' }
    & StrapiGqlPodcasterBasicFragmentFragment
  )>>> }
);

export type StrapiGqlPodcastEpisodeUploadFileFragmentFragment = (
  { __typename?: 'UploadFile' }
  & Pick<StrapiGqlUploadFile, 'mime' | 'url' | 'ext' | 'name' | 'size'>
);

export type StrapiGqlPodcasterBasicFragmentFragment = (
  { __typename?: 'Podcaster' }
  & Pick<StrapiGqlPodcaster, 'id' | 'slug' | 'name' | 'biography'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )> }
);

export type StrapiGqlPodcasterDetailFragmentFragment = (
  { __typename?: 'Podcaster' }
  & Pick<StrapiGqlPodcaster, 'id' | 'slug' | 'name' | 'biography'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, podcast_episodes?: Maybe<(
    { __typename?: 'PodcastEpisode' }
    & StrapiGqlPodcastEpisodeBasicFragmentFragment
  )> }
);

export type StrapiGqlSchoolSubjectBasicFragmentFragment = (
  { __typename: 'Subject' }
  & Pick<StrapiGqlSubject, 'id' | 'slug' | 'title' | 'created_at' | 'updated_at'>
  & { content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentContentButton' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentStudentSectionStudentQuote' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionFormerStudents' }>>> }
);

export type StrapiGqlSchoolSubjectDetailFragmentFragment = (
  { __typename: 'Subject' }
  & Pick<StrapiGqlSubject, 'id' | 'slug' | 'title' | 'created_at' | 'updated_at'>
  & { teachers?: Maybe<Array<Maybe<(
    { __typename?: 'Teacher' }
    & StrapiGqlTeacherBasicFragmentFragment
  )>>>, content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionSlideshow' }
    & StrapiGqlComponentSectionSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlackboardSlideshow' }
    & StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentContentButton' }
    & StrapiGqlComponentContentButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlogSlideshow' }
    & StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentHomeNews' }
    & StrapiGqlComponentHomeNewsFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' } | (
    { __typename: 'ComponentSectionFacts' }
    & StrapiGqlComponentSectionFactsFragmentFragment
  ) | (
    { __typename: 'ComponentStudentSectionStudentQuote' }
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  ) | (
    { __typename: 'ComponentSectionIFrame' }
    & StrapiGqlComponentSectionIFrameFragmentFragment
  ) | (
    { __typename: 'ComponentSectionMensaMax' }
    & StrapiGqlComponentSectionMensaMaxFragmentFragment
  ) | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentContentDownloadButton' }
    & StrapiGqlComponentContentDownloadButtonFragmentFragment
  ) | (
    { __typename: 'ComponentSectionLatestPodcastEpisode' }
    & StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFormerStudents' }
    & StrapiGqlComponentSectionFormerStudentsFragmentFragment
  )>>> }
);

export type StrapiGqlSectionSlideshowFragmentFragment = (
  { __typename?: 'SectionSlideshow' }
  & Pick<StrapiGqlSectionSlideshow, 'title' | 'id'>
  & { entries: Array<Maybe<(
    { __typename?: 'ComponentSlideshowSlideshowEntry' }
    & StrapiGqlComponentSlideshowEntryFragmentFragment
  ) | (
    { __typename?: 'ComponentSlideshowSlideshowEntryBlog' }
    & StrapiGqlComponentSlideshowEntryBlogFragmentFragment
  ) | (
    { __typename?: 'ComponentSlideshowSlideshowEntryPage' }
    & StrapiGqlComponentSlideshowEntryPageFragmentFragment
  )>> }
);

export type StrapiGqlTeacherBasicFragmentFragment = (
  { __typename?: 'Teacher' }
  & Pick<StrapiGqlTeacher, 'id' | 'slug' | 'name'>
);

export type StrapiGqlTeacherDetailFragmentFragment = (
  { __typename?: 'Teacher' }
  & Pick<StrapiGqlTeacher, 'id' | 'slug' | 'name' | 'biography'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & StrapiGqlImageFragmentFragment
  )>, subjects?: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & StrapiGqlSchoolSubjectBasicFragmentFragment
  )>>>, working_groups?: Maybe<Array<Maybe<(
    { __typename?: 'WorkingGroup' }
    & StrapiGqlWorkingGroupBasicFragmentFragment
  )>>>, assets?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentAttachmentAssets' }
    & StrapiGqlComponentAttachmentAssetsFragmentFragment
  )>>> }
);

export type StrapiGqlWorkingGroupBasicFragmentFragment = (
  { __typename: 'WorkingGroup' }
  & Pick<StrapiGqlWorkingGroup, 'id' | 'slug' | 'title' | 'created_at' | 'updated_at'>
  & { content?: Maybe<Array<Maybe<{ __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentContentDownloadButton' } | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | { __typename: 'ComponentContentButton' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentStudentSectionStudentQuote' }>>> }
);

export type StrapiGqlWorkingGroupDetailFragmentFragment = (
  { __typename: 'WorkingGroup' }
  & Pick<StrapiGqlWorkingGroup, 'id' | 'slug' | 'title' | 'created_at' | 'updated_at'>
  & { teachers?: Maybe<Array<Maybe<(
    { __typename?: 'Teacher' }
    & StrapiGqlTeacherBasicFragmentFragment
  )>>>, content?: Maybe<Array<Maybe<(
    { __typename: 'ComponentSectionIFrame' }
    & StrapiGqlComponentSectionIFrameFragmentFragment
  ) | (
    { __typename: 'ComponentSectionSlideshow' }
    & StrapiGqlComponentSectionSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionPodcastEpisode' }
    & StrapiGqlComponentSectionPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFormerStudents' }
    & StrapiGqlComponentSectionFormerStudentsFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlogSlideshow' }
    & StrapiGqlComponentSectionBlogSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionBlackboardSlideshow' }
    & StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment
  ) | (
    { __typename: 'ComponentSectionMensaMax' }
    & StrapiGqlComponentSectionMensaMaxFragmentFragment
  ) | (
    { __typename: 'ComponentSectionLatestPodcastEpisode' }
    & StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment
  ) | (
    { __typename: 'ComponentSectionFacts' }
    & StrapiGqlComponentSectionFactsFragmentFragment
  ) | (
    { __typename: 'ComponentContentDownloadButton' }
    & StrapiGqlComponentContentDownloadButtonFragmentFragment
  ) | (
    { __typename: 'ComponentContentText' }
    & StrapiGqlComponentContentTextFragmentFragment
  ) | (
    { __typename: 'ComponentContentImage' }
    & StrapiGqlComponentContentImageFragmentFragment
  ) | (
    { __typename: 'ComponentContentButton' }
    & StrapiGqlComponentContentButtonFragmentFragment
  ) | (
    { __typename: 'ComponentHomeNews' }
    & StrapiGqlComponentHomeNewsFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | (
    { __typename: 'ComponentStudentSectionStudentQuote' }
    & StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment
  )>>> }
);

export type StrapiGqlUnnamed_1_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type StrapiGqlUnnamed_1_Mutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UsersPermissionsLoginPayload' }
    & Pick<StrapiGqlUsersPermissionsLoginPayload, 'jwt'>
  ) }
);

export type StrapiGqlBlogCategoriesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogCategoriesBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { blogCategories?: Maybe<Array<Maybe<(
    { __typename?: 'BlogCategory' }
    & StrapiGqlBlogCategoryBasicFragmentFragment
  )>>> }
);

export type StrapiGqlBlogCategoriesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogCategoriesDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { blogCategories?: Maybe<Array<Maybe<(
    { __typename?: 'BlogCategory' }
    & StrapiGqlBlogCategoryDetailFragmentFragment
  )>>> }
);

export type StrapiGqlBlogEntriesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogEntriesBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { blogEntries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryBasicFragmentFragment
  )>>> }
);

export type StrapiGqlBlogEntriesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogEntriesDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { blogEntries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryDetailFragmentFragment
  )>>> }
);

export type StrapiGqlBlogInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlBlogInfoQuery = (
  { __typename?: 'Query' }
  & { blogInfo?: Maybe<(
    { __typename?: 'BlogInfo' }
    & Pick<StrapiGqlBlogInfo, 'title' | 'description'>
  )> }
);

export type StrapiGqlFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlFooterQuery = (
  { __typename?: 'Query' }
  & { footer?: Maybe<(
    { __typename?: 'Footer' }
    & Pick<StrapiGqlFooter, 'map_link' | 'contact_info'>
    & { map_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & StrapiGqlImageFragmentFragment
    )>, link?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentLinkItemLink' }
      & { navigation_link?: Maybe<(
        { __typename?: 'NavigationLink' }
        & StrapiGqlNavigationLinkFragmentFragment
      )> }
    )>>> }
  )> }
);

export type StrapiGqlFormerStudentDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlFormerStudentDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { formerStudents?: Maybe<Array<Maybe<(
    { __typename?: 'FormerStudents' }
    & StrapiGqlFormerStudentDetailFragmentFragment
  )>>> }
);

export type StrapiGqlGalleryBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlGalleryBySlugsQuery = (
  { __typename?: 'Query' }
  & { galleries?: Maybe<Array<Maybe<(
    { __typename?: 'Gallery' }
    & StrapiGqlGalleryFragmentFragment
  )>>> }
);

export type StrapiGqlHomeSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlHomeSectionsQuery = (
  { __typename?: 'Query' }
  & { home?: Maybe<(
    { __typename?: 'Home' }
    & StrapiGqlHomeFragmentFragment
  )> }
);

export type StrapiGqlMediaCenterBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlMediaCenterBySlugsQuery = (
  { __typename?: 'Query' }
  & { mediaCenters?: Maybe<Array<Maybe<(
    { __typename?: 'MediaCenter' }
    & StrapiGqlMediaCenterFragmentFragment
  )>>> }
);

export type StrapiGqlMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlMenuQuery = (
  { __typename?: 'Query' }
  & { menu?: Maybe<(
    { __typename?: 'Menu' }
    & StrapiGqlMenuFragmentFragment
  )> }
);

export type StrapiGqlNavigationLinksByIdsQueryVariables = Exact<{
  ids: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlNavigationLinksByIdsQuery = (
  { __typename?: 'Query' }
  & { navigationLinks?: Maybe<Array<Maybe<(
    { __typename?: 'NavigationLink' }
    & StrapiGqlNavigationLinkFragmentFragment
  )>>> }
);

export type StrapiGqlPageBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPageBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & StrapiGqlPageBasicFragmentFragment
  )>>> }
);

export type StrapiGqlPageDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPageDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & StrapiGqlPageDetailFragmentFragment
  )>>> }
);

export type StrapiGqlPageInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlPageInfoQuery = (
  { __typename?: 'Query' }
  & { pageInfo?: Maybe<(
    { __typename?: 'PageInfo' }
    & Pick<StrapiGqlPageInfo, 'title' | 'description'>
  )> }
);

export type StrapiGqlPodcastConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlPodcastConfigQuery = (
  { __typename?: 'Query' }
  & { podcastFeed?: Maybe<(
    { __typename?: 'PodcastFeed' }
    & Pick<StrapiGqlPodcastFeed, 'id' | 'title' | 'subtitle' | 'description' | 'language' | 'explicit' | 'author' | 'owner_name' | 'owner_email' | 'type' | 'copyright' | 'block' | 'complete'>
    & { image?: Maybe<(
      { __typename?: 'UploadFile' }
      & StrapiGqlImageFragmentFragment
    )>, category?: Maybe<Array<Maybe<(
      { __typename?: 'ComponentPodcastCategory' }
      & StrapiGqlComponentPodcastCategoryFragmentFragment
    )>>>, blogs?: Maybe<Array<Maybe<(
      { __typename?: 'BlogCategory' }
      & StrapiGqlBlogCategoryBasicFragmentFragment
    )>>> }
  )> }
);

export type StrapiGqlPodcastEpisodesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcastEpisodesBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { podcastEpisodes?: Maybe<Array<Maybe<(
    { __typename?: 'PodcastEpisode' }
    & StrapiGqlPodcastEpisodeBasicFragmentFragment
  )>>> }
);

export type StrapiGqlPodcastEpisodesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcastEpisodesDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { podcastEpisodes?: Maybe<Array<Maybe<(
    { __typename?: 'PodcastEpisode' }
    & StrapiGqlPodcastEpisodeDetailFragmentFragment
  )>>> }
);

export type StrapiGqlPodcasterBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcasterBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { podcasters?: Maybe<Array<Maybe<(
    { __typename?: 'Podcaster' }
    & StrapiGqlPodcasterBasicFragmentFragment
  )>>> }
);

export type StrapiGqlPodcasterDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcasterDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { podcasters?: Maybe<Array<Maybe<(
    { __typename?: 'Podcaster' }
    & StrapiGqlPodcasterDetailFragmentFragment
  )>>> }
);

export type StrapiGqlSchoolSubjectBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlSchoolSubjectBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { subjects?: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & StrapiGqlSchoolSubjectBasicFragmentFragment
  )>>> }
);

export type StrapiGqlSchoolSubjectDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlSchoolSubjectDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { subjects?: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & StrapiGqlSchoolSubjectDetailFragmentFragment
  )>>> }
);

export type StrapiGqlSchoolSubjectInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlSchoolSubjectInfoQuery = (
  { __typename?: 'Query' }
  & { schoolSubjectInfo?: Maybe<(
    { __typename?: 'SchoolSubjectInfo' }
    & Pick<StrapiGqlSchoolSubjectInfo, 'title' | 'description'>
  )> }
);

export type StrapiGqlSearchResultQueryVariables = Exact<{
  pageSlugs?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  postSlugs?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  navIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type StrapiGqlSearchResultQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & StrapiGqlPageBasicFragmentFragment
  )>>>, blogEntries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryBasicFragmentFragment
  )>>>, navigationLinks?: Maybe<Array<Maybe<(
    { __typename?: 'NavigationLink' }
    & StrapiGqlNavigationLinkFragmentFragment
  )>>> }
);

export type StrapiGqlSectionSlideshowByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type StrapiGqlSectionSlideshowByIdQuery = (
  { __typename?: 'Query' }
  & { sectionSlideshow?: Maybe<(
    { __typename?: 'SectionSlideshow' }
    & StrapiGqlSectionSlideshowFragmentFragment
  )> }
);

export type StrapiGqlTeacherBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlTeacherBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { teachers?: Maybe<Array<Maybe<(
    { __typename?: 'Teacher' }
    & StrapiGqlTeacherBasicFragmentFragment
  )>>> }
);

export type StrapiGqlTeacherDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlTeacherDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { teachers?: Maybe<Array<Maybe<(
    { __typename?: 'Teacher' }
    & StrapiGqlTeacherDetailFragmentFragment
  )>>> }
);

export type StrapiGqlTeacherInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlTeacherInfoQuery = (
  { __typename?: 'Query' }
  & { teacherInfo?: Maybe<(
    { __typename?: 'TeacherInfo' }
    & Pick<StrapiGqlTeacherInfo, 'title' | 'description'>
  )> }
);

export type StrapiGqlToolbarQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlToolbarQuery = (
  { __typename?: 'Query' }
  & { toolbar?: Maybe<(
    { __typename?: 'Toolbar' }
    & { items?: Maybe<Array<Maybe<(
      { __typename: 'ComponentLinkItemText' }
      & Pick<StrapiGqlComponentLinkItemText, 'name' | 'link'>
    )>>> }
  )> }
);

export type StrapiGqlWorkingGroupBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlWorkingGroupBasicBySlugsQuery = (
  { __typename?: 'Query' }
  & { workingGroups?: Maybe<Array<Maybe<(
    { __typename?: 'WorkingGroup' }
    & StrapiGqlWorkingGroupBasicFragmentFragment
  )>>> }
);

export type StrapiGqlWorkingGroupDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlWorkingGroupDetailBySlugsQuery = (
  { __typename?: 'Query' }
  & { workingGroups?: Maybe<Array<Maybe<(
    { __typename?: 'WorkingGroup' }
    & StrapiGqlWorkingGroupDetailFragmentFragment
  )>>> }
);

export type StrapiGqlWorkingGroupInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlWorkingGroupInfoQuery = (
  { __typename?: 'Query' }
  & { workingGroupInfo?: Maybe<(
    { __typename?: 'WorkingGroupInfo' }
    & Pick<StrapiGqlWorkingGroupInfo, 'title' | 'description'>
  )> }
);
