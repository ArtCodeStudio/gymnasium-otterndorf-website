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
  firstname: Scalars['String'];
  id: Scalars['ID'];
  lastname: Scalars['String'];
  username?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogCategory = {
  __typename?: 'BlogCategory';
  blog_entries?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlBlogCategoryBlog_EntriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlBlogCategoryAggregator>;
  groupBy?: Maybe<StrapiGqlBlogCategoryGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
};

export type StrapiGqlBlogCategoryConnectionCreated_At = {
  __typename?: 'BlogCategoryConnectionCreated_at';
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogCategoryConnectionId = {
  __typename?: 'BlogCategoryConnectionId';
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogCategoryConnectionName = {
  __typename?: 'BlogCategoryConnectionName';
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogCategoryConnectionSlug = {
  __typename?: 'BlogCategoryConnectionSlug';
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogCategoryConnectionUpdated_At = {
  __typename?: 'BlogCategoryConnectionUpdated_at';
  connection?: Maybe<StrapiGqlBlogCategoryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogCategoryGroupBy = {
  __typename?: 'BlogCategoryGroupBy';
  created_at?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionId>>>;
  name?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlBlogCategoryConnectionUpdated_At>>>;
};

export type StrapiGqlBlogCategoryInput = {
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogEntry = {
  __typename?: 'BlogEntry';
  author: Scalars['String'];
  blog_category?: Maybe<StrapiGqlBlogCategory>;
  content?: Maybe<Array<Maybe<StrapiGqlBlogEntryContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlBlogEntryAggregator = {
  __typename?: 'BlogEntryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlBlogEntryConnection = {
  __typename?: 'BlogEntryConnection';
  aggregate?: Maybe<StrapiGqlBlogEntryAggregator>;
  groupBy?: Maybe<StrapiGqlBlogEntryGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
};

export type StrapiGqlBlogEntryConnectionAuthor = {
  __typename?: 'BlogEntryConnectionAuthor';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogEntryConnectionBlog_Category = {
  __typename?: 'BlogEntryConnectionBlog_category';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogEntryConnectionCreated_At = {
  __typename?: 'BlogEntryConnectionCreated_at';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogEntryConnectionId = {
  __typename?: 'BlogEntryConnectionId';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogEntryConnectionPublished_At = {
  __typename?: 'BlogEntryConnectionPublished_at';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogEntryConnectionSlug = {
  __typename?: 'BlogEntryConnectionSlug';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogEntryConnectionTitle = {
  __typename?: 'BlogEntryConnectionTitle';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlBlogEntryConnectionUpdated_At = {
  __typename?: 'BlogEntryConnectionUpdated_at';
  connection?: Maybe<StrapiGqlBlogEntryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlBlogEntryContentDynamicZone = StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentStudentSectionStudentQuote;

export type StrapiGqlBlogEntryGroupBy = {
  __typename?: 'BlogEntryGroupBy';
  author?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionAuthor>>>;
  blog_category?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionBlog_Category>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionId>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionSlug>>>;
  title?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlBlogEntryConnectionUpdated_At>>>;
};

export type StrapiGqlBlogEntryInput = {
  author: Scalars['String'];
  blog_category?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['BlogEntryContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlBlogInfo = {
  __typename?: 'BlogInfo';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlBlogInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentAttachmentAssetInput = {
  file?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
};

export type StrapiGqlComponentAttachmentAssets = {
  __typename?: 'ComponentAttachmentAssets';
  file?: Maybe<StrapiGqlUploadFile>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type StrapiGqlComponentBlackboardSlide = {
  __typename?: 'ComponentBlackboardSlide';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  school_subject?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlComponentBlackboardSlideInput = {
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  school_subject?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentContentButton = {
  __typename?: 'ComponentContentButton';
  alignment?: Maybe<StrapiGqlComponentTypesAlignment>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  label: Scalars['String'];
  link?: Maybe<StrapiGqlNavigationLink>;
};

export type StrapiGqlComponentContentButtonInput = {
  alignment: StrapiGqlComponentTypesAlignmentInput;
  color: StrapiGqlComponentTypesColorInput;
  disabled?: Maybe<Scalars['Boolean']>;
  label: Scalars['String'];
  link?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentContentDownloadButton = {
  __typename?: 'ComponentContentDownloadButton';
  alignment?: Maybe<StrapiGqlComponentTypesAlignment>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
  disabled?: Maybe<Scalars['Boolean']>;
  file?: Maybe<StrapiGqlUploadFile>;
  id: Scalars['ID'];
  label: Scalars['String'];
};

export type StrapiGqlComponentContentDownloadButtonInput = {
  alignment: StrapiGqlComponentTypesAlignmentInput;
  color: StrapiGqlComponentTypesColorInput;
  disabled?: Maybe<Scalars['Boolean']>;
  file?: Maybe<Scalars['ID']>;
  label: Scalars['String'];
};

export type StrapiGqlComponentContentImage = {
  __typename?: 'ComponentContentImage';
  caption?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
};

export type StrapiGqlComponentContentImageInput = {
  caption?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentContentText = {
  __typename?: 'ComponentContentText';
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentContentTextInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentGalleryImage = {
  __typename?: 'ComponentGalleryImage';
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentGalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeCalendar = {
  __typename?: 'ComponentHomeCalendar';
  dates?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
};

export type StrapiGqlComponentHomeCalendarInput = {
  dates?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
};

export type StrapiGqlComponentHomeFact = {
  __typename?: 'ComponentHomeFact';
  id: Scalars['ID'];
  number?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeFactInput = {
  number?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentHomeNewInput = {
  amount?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlComponentHomeNews = {
  __typename?: 'ComponentHomeNews';
  amount?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
};


export type StrapiGqlComponentHomeNewsPagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  icon_name?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentLinkItemTextInput = {
  icon_name?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentLinkTypeBlog = {
  __typename?: 'ComponentLinkTypeBlog';
  blog?: Maybe<StrapiGqlBlogCategory>;
  id: Scalars['ID'];
};

export type StrapiGqlComponentLinkTypeBlogInput = {
  blog?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeGallery = {
  __typename?: 'ComponentLinkTypeGallery';
  gallery?: Maybe<StrapiGqlGallery>;
  id: Scalars['ID'];
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

export type StrapiGqlComponentLinkTypeSchoolSubject = {
  __typename?: 'ComponentLinkTypeSchoolSubject';
  id: Scalars['ID'];
  school_subject?: Maybe<StrapiGqlSubject>;
};

export type StrapiGqlComponentLinkTypeSchoolSubjectInput = {
  school_subject?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentLinkTypeStrapi = {
  __typename?: 'ComponentLinkTypeStrapi';
  URL: Scalars['String'];
  id: Scalars['ID'];
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
  URL: Scalars['String'];
  id: Scalars['ID'];
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
  caption?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  movie?: Maybe<StrapiGqlUploadFile>;
  poster?: Maybe<StrapiGqlUploadFile>;
  title: Scalars['String'];
};

export type StrapiGqlComponentMediaCenterMovieInput = {
  caption?: Maybe<Scalars['String']>;
  movie?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
  title: Scalars['String'];
};

export type StrapiGqlComponentNavigationNavigationLevelEntry = {
  __typename?: 'ComponentNavigationNavigationLevelEntry';
  children?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  isRootElement?: Maybe<Scalars['Boolean']>;
  navigation_link?: Maybe<StrapiGqlNavigationLink>;
  parent?: Maybe<StrapiGqlNavigationLink>;
  title?: Maybe<Scalars['String']>;
};


export type StrapiGqlComponentNavigationNavigationLevelEntryChildrenArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlComponentNavigationNavigationLevelEntryInput = {
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  isRootElement?: Maybe<Scalars['Boolean']>;
  navigation_link?: Maybe<Scalars['ID']>;
  parent?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
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
  href?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type StrapiGqlComponentPodcastChapters = {
  __typename?: 'ComponentPodcastChapters';
  href?: Maybe<StrapiGqlNavigationLink>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  start: Scalars['String'];
  title: Scalars['String'];
};

export type StrapiGqlComponentSectionBlackboardSlideshow = {
  __typename?: 'ComponentSectionBlackboardSlideshow';
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
};


export type StrapiGqlComponentSectionBlackboardSlideshowSubjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlComponentSectionBlackboardSlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlComponentSectionBlogSlideshow = {
  __typename?: 'ComponentSectionBlogSlideshow';
  blog?: Maybe<StrapiGqlBlogCategory>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  limit: Scalars['Int'];
  style: StrapiGqlEnum_Componentsectionblogslideshow_Style;
};

export type StrapiGqlComponentSectionBlogSlideshowInput = {
  blog?: Maybe<Scalars['ID']>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  style?: Maybe<StrapiGqlEnum_Componentsectionblogslideshow_Style>;
};

export type StrapiGqlComponentSectionFactInput = {
  color: StrapiGqlComponentTypesColorInput;
  disabled?: Maybe<Scalars['Boolean']>;
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFactInput>>>;
};

export type StrapiGqlComponentSectionFacts = {
  __typename?: 'ComponentSectionFacts';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  disabled?: Maybe<Scalars['Boolean']>;
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFact>>>;
  id: Scalars['ID'];
};

export type StrapiGqlComponentSectionFormerStudentInput = {
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type StrapiGqlComponentSectionFormerStudents = {
  __typename?: 'ComponentSectionFormerStudents';
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  limit: Scalars['Int'];
  title: Scalars['String'];
};

export type StrapiGqlComponentSectionGallerySlideshow = {
  __typename?: 'ComponentSectionGallerySlideshow';
  disabled?: Maybe<Scalars['Boolean']>;
  gallery?: Maybe<StrapiGqlGallery>;
  id: Scalars['ID'];
  limit: Scalars['Int'];
};

export type StrapiGqlComponentSectionGallerySlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  gallery?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentSectionIFrame = {
  __typename?: 'ComponentSectionIFrame';
  URL: Scalars['String'];
  disabled?: Maybe<Scalars['Boolean']>;
  height: Scalars['String'];
  id: Scalars['ID'];
  width: Scalars['String'];
};

export type StrapiGqlComponentSectionIFrameInput = {
  URL: Scalars['String'];
  disabled?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSectionLatestPodcastEpisode = {
  __typename?: 'ComponentSectionLatestPodcastEpisode';
  activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type StrapiGqlComponentSectionLatestPodcastEpisodeInput = {
  activeTab?: Maybe<StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab>;
  disabled?: Maybe<Scalars['Boolean']>;
  title: Scalars['String'];
};

export type StrapiGqlComponentSectionMensaMax = {
  __typename?: 'ComponentSectionMensaMax';
  disabled?: Maybe<Scalars['Boolean']>;
  e: Scalars['String'];
  id: Scalars['ID'];
  p: Scalars['String'];
};

export type StrapiGqlComponentSectionMensaMaxInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  e?: Maybe<Scalars['String']>;
  p?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSectionPodcastEpisode = {
  __typename?: 'ComponentSectionPodcastEpisode';
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  podcast_episode?: Maybe<StrapiGqlPodcastEpisode>;
};

export type StrapiGqlComponentSectionPodcastEpisodeInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  podcast_episode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentSectionSlideshow = {
  __typename?: 'ComponentSectionSlideshow';
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  slideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlComponentSectionSlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentSectionSubjectSelection = {
  __typename?: 'ComponentSectionSubjectSelection';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  p1?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  p2?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  p3?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  p4?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  p5?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  title?: Maybe<Scalars['String']>;
};


export type StrapiGqlComponentSectionSubjectSelectionP1Args = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlComponentSectionSubjectSelectionP2Args = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlComponentSectionSubjectSelectionP3Args = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlComponentSectionSubjectSelectionP4Args = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlComponentSectionSubjectSelectionP5Args = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlComponentSectionSubjectSelectionInput = {
  description?: Maybe<Scalars['String']>;
  p1?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p2?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p3?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p4?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p5?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSlideshowSlideshowEntry = {
  __typename?: 'ComponentSlideshowSlideshowEntry';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlog = {
  __typename?: 'ComponentSlideshowSlideshowEntryBlog';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  label: Scalars['String'];
  post?: Maybe<StrapiGqlBlogEntry>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlogInput = {
  color: StrapiGqlComponentTypesColorInput;
  image?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  post?: Maybe<Scalars['ID']>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentSlideshowSlideshowEntryInput = {
  color: StrapiGqlComponentTypesColorInput;
  image?: Maybe<Scalars['ID']>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentSlideshowSlideshowEntryPage = {
  __typename?: 'ComponentSlideshowSlideshowEntryPage';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  label: Scalars['String'];
  page?: Maybe<StrapiGqlPage>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentSlideshowSlideshowEntryPageInput = {
  color: StrapiGqlComponentTypesColorInput;
  image?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  subtitle: Scalars['String'];
};

export type StrapiGqlComponentStudentSectionStudentQuote = {
  __typename?: 'ComponentStudentSectionStudentQuote';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  disabled?: Maybe<Scalars['Boolean']>;
  id: Scalars['ID'];
  limit: Scalars['Int'];
  title: Scalars['String'];
};

export type StrapiGqlComponentStudentSectionStudentQuoteInput = {
  color: StrapiGqlComponentTypesColorInput;
  disabled?: Maybe<Scalars['Boolean']>;
  limit?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
};

export type StrapiGqlComponentTypesAlignment = {
  __typename?: 'ComponentTypesAlignment';
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
  id: Scalars['ID'];
};

export type StrapiGqlComponentTypesAlignmentInput = {
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
};

export type StrapiGqlComponentTypesColor = {
  __typename?: 'ComponentTypesColor';
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
  id: Scalars['ID'];
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
  HealthAndFitness = 'Health_and_Fitness',
  HealthAndFitnessAlternativeHealth = 'Health_and_Fitness__Alternative_Health',
  HealthAndFitnessFitness = 'Health_and_Fitness__Fitness',
  HealthAndFitnessMedicine = 'Health_and_Fitness__Medicine',
  HealthAndFitnessMentalHealth = 'Health_and_Fitness__Mental_Health',
  HealthAndFitnessNutrition = 'Health_and_Fitness__Nutrition',
  HealthAndFitnessSexuality = 'Health_and_Fitness__Sexuality',
  History = 'History',
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
  TvAndFilm = 'TV_and_Film',
  TvAndFilmAfterShows = 'TV_and_Film__After_Shows',
  TvAndFilmFilmHistory = 'TV_and_Film__Film_History',
  TvAndFilmFilmInterviews = 'TV_and_Film__Film_Interviews',
  TvAndFilmFilmReviews = 'TV_and_Film__Film_Reviews',
  TvAndFilmTvReviews = 'TV_and_Film__TV_Reviews',
  Technology = 'Technology',
  TrueCrime = 'True_Crime'
}

export enum StrapiGqlEnum_Componentsectionblogslideshow_Style {
  Art = 'art',
  Color = 'color',
  Dreamy = 'dreamy'
}

export enum StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab {
  Chapters = 'chapters',
  Files = 'files',
  None = 'none',
  Playlist = 'playlist',
  Share = 'share',
  Shownotes = 'shownotes'
}

export enum StrapiGqlEnum_Componenttypesalignment_Alignment {
  Center = 'Center',
  Left = 'Left',
  Right = 'Right'
}

export enum StrapiGqlEnum_Componenttypescolor_Color {
  Blue = 'blue',
  Cyan = 'cyan',
  Dark = 'dark',
  Green = 'green',
  Greenlight = 'greenlight',
  Light = 'light',
  Red = 'red',
  White = 'white',
  Yellow = 'yellow'
}

export enum StrapiGqlEnum_Gallery_Style {
  Art = 'art',
  Color = 'color',
  Dreamy = 'dreamy'
}

export enum StrapiGqlEnum_Podcastepisode_Type {
  Bonus = 'Bonus',
  Full = 'Full',
  Trailer = 'Trailer'
}

export enum StrapiGqlEnum_Podcastfeed_Type {
  Episodic = 'Episodic',
  Serial = 'Serial'
}

export type StrapiGqlFileInfoInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size: Scalars['Float'];
  updated_by?: Maybe<Scalars['ID']>;
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};

export type StrapiGqlFooter = {
  __typename?: 'Footer';
  contact_info?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  link?: Maybe<Array<Maybe<StrapiGqlComponentLinkItemLink>>>;
  map_image?: Maybe<StrapiGqlUploadFile>;
  map_link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlFooterInput = {
  contact_info?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  link?: Maybe<Array<Maybe<StrapiGqlComponentLinkItemLinkInput>>>;
  map_image?: Maybe<Scalars['ID']>;
  map_link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudentInput = {
  biography: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudents = {
  __typename?: 'FormerStudents';
  biography: Scalars['String'];
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  name: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  slug: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlFormerStudentsAggregator = {
  __typename?: 'FormerStudentsAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlFormerStudentsConnection = {
  __typename?: 'FormerStudentsConnection';
  aggregate?: Maybe<StrapiGqlFormerStudentsAggregator>;
  groupBy?: Maybe<StrapiGqlFormerStudentsGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlFormerStudents>>>;
};

export type StrapiGqlFormerStudentsConnectionBiography = {
  __typename?: 'FormerStudentsConnectionBiography';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlFormerStudentsConnectionCreated_At = {
  __typename?: 'FormerStudentsConnectionCreated_at';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFormerStudentsConnectionId = {
  __typename?: 'FormerStudentsConnectionId';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudentsConnectionImage = {
  __typename?: 'FormerStudentsConnectionImage';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlFormerStudentsConnectionName = {
  __typename?: 'FormerStudentsConnectionName';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlFormerStudentsConnectionPublished_At = {
  __typename?: 'FormerStudentsConnectionPublished_at';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFormerStudentsConnectionSlug = {
  __typename?: 'FormerStudentsConnectionSlug';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlFormerStudentsConnectionUpdated_At = {
  __typename?: 'FormerStudentsConnectionUpdated_at';
  connection?: Maybe<StrapiGqlFormerStudentsConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFormerStudentsGroupBy = {
  __typename?: 'FormerStudentsGroupBy';
  biography?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionBiography>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionId>>>;
  image?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionImage>>>;
  name?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionName>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlFormerStudentsConnectionUpdated_At>>>;
};

export type StrapiGqlGallery = {
  __typename?: 'Gallery';
  color?: Maybe<StrapiGqlComponentTypesColor>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImage>>>;
  slug?: Maybe<Scalars['String']>;
  style: StrapiGqlEnum_Gallery_Style;
  title?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlGalleryAggregator = {
  __typename?: 'GalleryAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlGalleryConnection = {
  __typename?: 'GalleryConnection';
  aggregate?: Maybe<StrapiGqlGalleryAggregator>;
  groupBy?: Maybe<StrapiGqlGalleryGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlGallery>>>;
};

export type StrapiGqlGalleryConnectionColor = {
  __typename?: 'GalleryConnectionColor';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlGalleryConnectionCreated_At = {
  __typename?: 'GalleryConnectionCreated_at';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlGalleryConnectionId = {
  __typename?: 'GalleryConnectionId';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlGalleryConnectionSlug = {
  __typename?: 'GalleryConnectionSlug';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlGalleryConnectionStyle = {
  __typename?: 'GalleryConnectionStyle';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlGalleryConnectionTitle = {
  __typename?: 'GalleryConnectionTitle';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlGalleryConnectionUpdated_At = {
  __typename?: 'GalleryConnectionUpdated_at';
  connection?: Maybe<StrapiGqlGalleryConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlGalleryGroupBy = {
  __typename?: 'GalleryGroupBy';
  color?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionColor>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionId>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionSlug>>>;
  style?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionStyle>>>;
  title?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionUpdated_At>>>;
};

export type StrapiGqlGalleryInput = {
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
  created_by?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImageInput>>>;
  slug?: Maybe<Scalars['String']>;
  style?: Maybe<StrapiGqlEnum_Gallery_Style>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlGeneralSettingInput = {
  author_email?: Maybe<Scalars['String']>;
  author_name?: Maybe<Scalars['String']>;
  copyright: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlGeneralSettings = {
  __typename?: 'GeneralSettings';
  author_email?: Maybe<Scalars['String']>;
  author_name?: Maybe<Scalars['String']>;
  copyright: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  language?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlHome = {
  __typename?: 'Home';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  sections?: Maybe<Array<Maybe<StrapiGqlHomeSectionsDynamicZone>>>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlHomeInput = {
  created_by?: Maybe<Scalars['ID']>;
  sections?: Maybe<Array<Scalars['HomeSectionsDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlHomeSectionsDynamicZone = StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentStudentSectionStudentQuote;

export type StrapiGqlI18NLocale = {
  __typename?: 'I18NLocale';
  code?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlInputId = {
  id: Scalars['ID'];
};

export type StrapiGqlLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMediaCenter = {
  __typename?: 'MediaCenter';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  movies?: Maybe<Array<Maybe<StrapiGqlComponentMediaCenterMovie>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlMediaCenterAggregator = {
  __typename?: 'MediaCenterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlMediaCenterConnection = {
  __typename?: 'MediaCenterConnection';
  aggregate?: Maybe<StrapiGqlMediaCenterAggregator>;
  groupBy?: Maybe<StrapiGqlMediaCenterGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlMediaCenter>>>;
};

export type StrapiGqlMediaCenterConnectionCreated_At = {
  __typename?: 'MediaCenterConnectionCreated_at';
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlMediaCenterConnectionId = {
  __typename?: 'MediaCenterConnectionId';
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMediaCenterConnectionSlug = {
  __typename?: 'MediaCenterConnectionSlug';
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlMediaCenterConnectionTitle = {
  __typename?: 'MediaCenterConnectionTitle';
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlMediaCenterConnectionUpdated_At = {
  __typename?: 'MediaCenterConnectionUpdated_at';
  connection?: Maybe<StrapiGqlMediaCenterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlMediaCenterGroupBy = {
  __typename?: 'MediaCenterGroupBy';
  created_at?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionId>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionSlug>>>;
  title?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlMediaCenterConnectionUpdated_At>>>;
};

export type StrapiGqlMediaCenterInput = {
  created_by?: Maybe<Scalars['ID']>;
  movies?: Maybe<Array<Maybe<StrapiGqlComponentMediaCenterMovieInput>>>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMenu = {
  __typename?: 'Menu';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationLevelEntry>>>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlMenuInput = {
  created_by?: Maybe<Scalars['ID']>;
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlComponentNavigationNavigationLevelEntryInput>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlMorph = StrapiGqlBlogCategory | StrapiGqlBlogCategoryAggregator | StrapiGqlBlogCategoryConnection | StrapiGqlBlogCategoryConnectionCreated_At | StrapiGqlBlogCategoryConnectionId | StrapiGqlBlogCategoryConnectionName | StrapiGqlBlogCategoryConnectionSlug | StrapiGqlBlogCategoryConnectionUpdated_At | StrapiGqlBlogCategoryGroupBy | StrapiGqlBlogEntry | StrapiGqlBlogEntryAggregator | StrapiGqlBlogEntryConnection | StrapiGqlBlogEntryConnectionAuthor | StrapiGqlBlogEntryConnectionBlog_Category | StrapiGqlBlogEntryConnectionCreated_At | StrapiGqlBlogEntryConnectionId | StrapiGqlBlogEntryConnectionPublished_At | StrapiGqlBlogEntryConnectionSlug | StrapiGqlBlogEntryConnectionTitle | StrapiGqlBlogEntryConnectionUpdated_At | StrapiGqlBlogEntryGroupBy | StrapiGqlBlogInfo | StrapiGqlComponentAttachmentAssets | StrapiGqlComponentBlackboardSlide | StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentGalleryImage | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeFact | StrapiGqlComponentHomeNews | StrapiGqlComponentLinkItemLink | StrapiGqlComponentLinkItemText | StrapiGqlComponentLinkTypeBlog | StrapiGqlComponentLinkTypeGallery | StrapiGqlComponentLinkTypeMediaCenter | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypePodcast | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeSchoolSubject | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypeTeacher | StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentLinkTypeWorkingGroup | StrapiGqlComponentMediaCenterMovie | StrapiGqlComponentNavigationNavigationLevelEntry | StrapiGqlComponentPodcastCategory | StrapiGqlComponentPodcastChapters | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionSubjectSelection | StrapiGqlComponentSlideshowSlideshowEntry | StrapiGqlComponentSlideshowSlideshowEntryBlog | StrapiGqlComponentSlideshowSlideshowEntryPage | StrapiGqlComponentStudentSectionStudentQuote | StrapiGqlComponentTypesAlignment | StrapiGqlComponentTypesColor | StrapiGqlFooter | StrapiGqlFormerStudents | StrapiGqlFormerStudentsAggregator | StrapiGqlFormerStudentsConnection | StrapiGqlFormerStudentsConnectionBiography | StrapiGqlFormerStudentsConnectionCreated_At | StrapiGqlFormerStudentsConnectionId | StrapiGqlFormerStudentsConnectionImage | StrapiGqlFormerStudentsConnectionName | StrapiGqlFormerStudentsConnectionPublished_At | StrapiGqlFormerStudentsConnectionSlug | StrapiGqlFormerStudentsConnectionUpdated_At | StrapiGqlFormerStudentsGroupBy | StrapiGqlGallery | StrapiGqlGalleryAggregator | StrapiGqlGalleryConnection | StrapiGqlGalleryConnectionColor | StrapiGqlGalleryConnectionCreated_At | StrapiGqlGalleryConnectionId | StrapiGqlGalleryConnectionSlug | StrapiGqlGalleryConnectionStyle | StrapiGqlGalleryConnectionTitle | StrapiGqlGalleryConnectionUpdated_At | StrapiGqlGalleryGroupBy | StrapiGqlGeneralSettings | StrapiGqlHome | StrapiGqlI18NLocale | StrapiGqlMediaCenter | StrapiGqlMediaCenterAggregator | StrapiGqlMediaCenterConnection | StrapiGqlMediaCenterConnectionCreated_At | StrapiGqlMediaCenterConnectionId | StrapiGqlMediaCenterConnectionSlug | StrapiGqlMediaCenterConnectionTitle | StrapiGqlMediaCenterConnectionUpdated_At | StrapiGqlMediaCenterGroupBy | StrapiGqlMenu | StrapiGqlNavigationLink | StrapiGqlNavigationLinkAggregator | StrapiGqlNavigationLinkConnection | StrapiGqlNavigationLinkConnectionCreated_At | StrapiGqlNavigationLinkConnectionId | StrapiGqlNavigationLinkConnectionTitle | StrapiGqlNavigationLinkConnectionUpdated_At | StrapiGqlNavigationLinkGroupBy | StrapiGqlPage | StrapiGqlPageAggregator | StrapiGqlPageConnection | StrapiGqlPageConnectionCalendar_Key | StrapiGqlPageConnectionCreated_At | StrapiGqlPageConnectionId | StrapiGqlPageConnectionSlug | StrapiGqlPageConnectionTitle | StrapiGqlPageConnectionUpdated_At | StrapiGqlPageGroupBy | StrapiGqlPageInfo | StrapiGqlPodcastEpisode | StrapiGqlPodcastEpisodeAggregator | StrapiGqlPodcastEpisodeAggregatorAvg | StrapiGqlPodcastEpisodeAggregatorMax | StrapiGqlPodcastEpisodeAggregatorMin | StrapiGqlPodcastEpisodeAggregatorSum | StrapiGqlPodcastEpisodeConnection | StrapiGqlPodcastEpisodeConnectionBlock | StrapiGqlPodcastEpisodeConnectionCreated_At | StrapiGqlPodcastEpisodeConnectionDescription | StrapiGqlPodcastEpisodeConnectionEpisode | StrapiGqlPodcastEpisodeConnectionExplicit | StrapiGqlPodcastEpisodeConnectionId | StrapiGqlPodcastEpisodeConnectionImage | StrapiGqlPodcastEpisodeConnectionPubDate | StrapiGqlPodcastEpisodeConnectionPublished_At | StrapiGqlPodcastEpisodeConnectionSeason | StrapiGqlPodcastEpisodeConnectionSlug | StrapiGqlPodcastEpisodeConnectionSubtitle | StrapiGqlPodcastEpisodeConnectionTitle | StrapiGqlPodcastEpisodeConnectionType | StrapiGqlPodcastEpisodeConnectionUpdated_At | StrapiGqlPodcastEpisodeGroupBy | StrapiGqlPodcastFeed | StrapiGqlPodcaster | StrapiGqlPodcasterAggregator | StrapiGqlPodcasterConnection | StrapiGqlPodcasterConnectionBiography | StrapiGqlPodcasterConnectionCreated_At | StrapiGqlPodcasterConnectionId | StrapiGqlPodcasterConnectionImage | StrapiGqlPodcasterConnectionName | StrapiGqlPodcasterConnectionPodcast_Episodes | StrapiGqlPodcasterConnectionPublished_At | StrapiGqlPodcasterConnectionSlug | StrapiGqlPodcasterConnectionUpdated_At | StrapiGqlPodcasterGroupBy | StrapiGqlSchoolSubjectInfo | StrapiGqlSectionSlideshow | StrapiGqlSectionSlideshowAggregator | StrapiGqlSectionSlideshowConnection | StrapiGqlSectionSlideshowConnectionCreated_At | StrapiGqlSectionSlideshowConnectionId | StrapiGqlSectionSlideshowConnectionTitle | StrapiGqlSectionSlideshowConnectionUpdated_At | StrapiGqlSectionSlideshowGroupBy | StrapiGqlSubject | StrapiGqlSubjectAggregator | StrapiGqlSubjectConnection | StrapiGqlSubjectConnectionBlackboard_Image | StrapiGqlSubjectConnectionCreated_At | StrapiGqlSubjectConnectionId | StrapiGqlSubjectConnectionSlug | StrapiGqlSubjectConnectionTitle | StrapiGqlSubjectConnectionUpdated_At | StrapiGqlSubjectGroupBy | StrapiGqlTeacher | StrapiGqlTeacherAggregator | StrapiGqlTeacherConnection | StrapiGqlTeacherConnectionBiography | StrapiGqlTeacherConnectionCreated_At | StrapiGqlTeacherConnectionId | StrapiGqlTeacherConnectionImage | StrapiGqlTeacherConnectionName | StrapiGqlTeacherConnectionSlug | StrapiGqlTeacherConnectionUpdated_At | StrapiGqlTeacherGroupBy | StrapiGqlTeacherInfo | StrapiGqlToolbar | StrapiGqlUploadFile | StrapiGqlUploadFileAggregator | StrapiGqlUploadFileAggregatorAvg | StrapiGqlUploadFileAggregatorMax | StrapiGqlUploadFileAggregatorMin | StrapiGqlUploadFileAggregatorSum | StrapiGqlUploadFileConnection | StrapiGqlUploadFileConnectionAlternativeText | StrapiGqlUploadFileConnectionCaption | StrapiGqlUploadFileConnectionCreated_At | StrapiGqlUploadFileConnectionExt | StrapiGqlUploadFileConnectionFormats | StrapiGqlUploadFileConnectionHash | StrapiGqlUploadFileConnectionHeight | StrapiGqlUploadFileConnectionId | StrapiGqlUploadFileConnectionMime | StrapiGqlUploadFileConnectionName | StrapiGqlUploadFileConnectionPreviewUrl | StrapiGqlUploadFileConnectionProvider | StrapiGqlUploadFileConnectionProvider_Metadata | StrapiGqlUploadFileConnectionSize | StrapiGqlUploadFileConnectionUpdated_At | StrapiGqlUploadFileConnectionUrl | StrapiGqlUploadFileConnectionWidth | StrapiGqlUploadFileGroupBy | StrapiGqlUserPermissionsPasswordPayload | StrapiGqlUsersPermissionsLoginPayload | StrapiGqlUsersPermissionsMe | StrapiGqlUsersPermissionsMeRole | StrapiGqlUsersPermissionsPermission | StrapiGqlUsersPermissionsRole | StrapiGqlUsersPermissionsRoleAggregator | StrapiGqlUsersPermissionsRoleConnection | StrapiGqlUsersPermissionsRoleConnectionDescription | StrapiGqlUsersPermissionsRoleConnectionId | StrapiGqlUsersPermissionsRoleConnectionName | StrapiGqlUsersPermissionsRoleConnectionType | StrapiGqlUsersPermissionsRoleGroupBy | StrapiGqlUsersPermissionsUser | StrapiGqlUsersPermissionsUserAggregator | StrapiGqlUsersPermissionsUserConnection | StrapiGqlUsersPermissionsUserConnectionBlocked | StrapiGqlUsersPermissionsUserConnectionConfirmed | StrapiGqlUsersPermissionsUserConnectionCreated_At | StrapiGqlUsersPermissionsUserConnectionEmail | StrapiGqlUsersPermissionsUserConnectionId | StrapiGqlUsersPermissionsUserConnectionProvider | StrapiGqlUsersPermissionsUserConnectionRole | StrapiGqlUsersPermissionsUserConnectionUpdated_At | StrapiGqlUsersPermissionsUserConnectionUsername | StrapiGqlUsersPermissionsUserGroupBy | StrapiGqlWorkingGroup | StrapiGqlWorkingGroupAggregator | StrapiGqlWorkingGroupConnection | StrapiGqlWorkingGroupConnectionCreated_At | StrapiGqlWorkingGroupConnectionId | StrapiGqlWorkingGroupConnectionSlug | StrapiGqlWorkingGroupConnectionTitle | StrapiGqlWorkingGroupConnectionUpdated_At | StrapiGqlWorkingGroupGroupBy | StrapiGqlWorkingGroupInfo | StrapiGqlCreateBlogCategoryPayload | StrapiGqlCreateBlogEntryPayload | StrapiGqlCreateFormerStudentPayload | StrapiGqlCreateGalleryPayload | StrapiGqlCreateMediaCenterPayload | StrapiGqlCreateNavigationLinkPayload | StrapiGqlCreatePagePayload | StrapiGqlCreatePodcastEpisodePayload | StrapiGqlCreatePodcasterPayload | StrapiGqlCreateRolePayload | StrapiGqlCreateSectionSlideshowPayload | StrapiGqlCreateSubjectPayload | StrapiGqlCreateTeacherPayload | StrapiGqlCreateUserPayload | StrapiGqlCreateWorkingGroupPayload | StrapiGqlDeleteBlogCategoryPayload | StrapiGqlDeleteBlogEntryPayload | StrapiGqlDeleteBlogInfoPayload | StrapiGqlDeleteFilePayload | StrapiGqlDeleteFooterPayload | StrapiGqlDeleteFormerStudentPayload | StrapiGqlDeleteGalleryPayload | StrapiGqlDeleteGeneralSettingPayload | StrapiGqlDeleteHomePayload | StrapiGqlDeleteMediaCenterPayload | StrapiGqlDeleteMenuPayload | StrapiGqlDeleteNavigationLinkPayload | StrapiGqlDeletePageInfoPayload | StrapiGqlDeletePagePayload | StrapiGqlDeletePodcastEpisodePayload | StrapiGqlDeletePodcastFeedPayload | StrapiGqlDeletePodcasterPayload | StrapiGqlDeleteRolePayload | StrapiGqlDeleteSchoolSubjectInfoPayload | StrapiGqlDeleteSectionSlideshowPayload | StrapiGqlDeleteSubjectPayload | StrapiGqlDeleteTeacherInfoPayload | StrapiGqlDeleteTeacherPayload | StrapiGqlDeleteToolbarPayload | StrapiGqlDeleteUserPayload | StrapiGqlDeleteWorkingGroupInfoPayload | StrapiGqlDeleteWorkingGroupPayload | StrapiGqlUpdateBlogCategoryPayload | StrapiGqlUpdateBlogEntryPayload | StrapiGqlUpdateBlogInfoPayload | StrapiGqlUpdateFooterPayload | StrapiGqlUpdateFormerStudentPayload | StrapiGqlUpdateGalleryPayload | StrapiGqlUpdateGeneralSettingPayload | StrapiGqlUpdateHomePayload | StrapiGqlUpdateMediaCenterPayload | StrapiGqlUpdateMenuPayload | StrapiGqlUpdateNavigationLinkPayload | StrapiGqlUpdatePageInfoPayload | StrapiGqlUpdatePagePayload | StrapiGqlUpdatePodcastEpisodePayload | StrapiGqlUpdatePodcastFeedPayload | StrapiGqlUpdatePodcasterPayload | StrapiGqlUpdateRolePayload | StrapiGqlUpdateSchoolSubjectInfoPayload | StrapiGqlUpdateSectionSlideshowPayload | StrapiGqlUpdateSubjectPayload | StrapiGqlUpdateTeacherInfoPayload | StrapiGqlUpdateTeacherPayload | StrapiGqlUpdateToolbarPayload | StrapiGqlUpdateUserPayload | StrapiGqlUpdateWorkingGroupInfoPayload | StrapiGqlUpdateWorkingGroupPayload;

export type StrapiGqlMutation = {
  __typename?: 'Mutation';
  createBlogCategory?: Maybe<StrapiGqlCreateBlogCategoryPayload>;
  createBlogEntry?: Maybe<StrapiGqlCreateBlogEntryPayload>;
  createFormerStudent?: Maybe<StrapiGqlCreateFormerStudentPayload>;
  createGallery?: Maybe<StrapiGqlCreateGalleryPayload>;
  createMediaCenter?: Maybe<StrapiGqlCreateMediaCenterPayload>;
  createNavigationLink?: Maybe<StrapiGqlCreateNavigationLinkPayload>;
  createPage?: Maybe<StrapiGqlCreatePagePayload>;
  createPodcastEpisode?: Maybe<StrapiGqlCreatePodcastEpisodePayload>;
  createPodcaster?: Maybe<StrapiGqlCreatePodcasterPayload>;
  /** Create a new role */
  createRole?: Maybe<StrapiGqlCreateRolePayload>;
  createSectionSlideshow?: Maybe<StrapiGqlCreateSectionSlideshowPayload>;
  createSubject?: Maybe<StrapiGqlCreateSubjectPayload>;
  createTeacher?: Maybe<StrapiGqlCreateTeacherPayload>;
  /** Create a new user */
  createUser?: Maybe<StrapiGqlCreateUserPayload>;
  createWorkingGroup?: Maybe<StrapiGqlCreateWorkingGroupPayload>;
  deleteBlogCategory?: Maybe<StrapiGqlDeleteBlogCategoryPayload>;
  deleteBlogEntry?: Maybe<StrapiGqlDeleteBlogEntryPayload>;
  deleteBlogInfo?: Maybe<StrapiGqlDeleteBlogInfoPayload>;
  /** Delete one file */
  deleteFile?: Maybe<StrapiGqlDeleteFilePayload>;
  deleteFooter?: Maybe<StrapiGqlDeleteFooterPayload>;
  deleteFormerStudent?: Maybe<StrapiGqlDeleteFormerStudentPayload>;
  deleteGallery?: Maybe<StrapiGqlDeleteGalleryPayload>;
  deleteGeneralSetting?: Maybe<StrapiGqlDeleteGeneralSettingPayload>;
  deleteHome?: Maybe<StrapiGqlDeleteHomePayload>;
  deleteMediaCenter?: Maybe<StrapiGqlDeleteMediaCenterPayload>;
  deleteMenu?: Maybe<StrapiGqlDeleteMenuPayload>;
  deleteNavigationLink?: Maybe<StrapiGqlDeleteNavigationLinkPayload>;
  deletePage?: Maybe<StrapiGqlDeletePagePayload>;
  deletePageInfo?: Maybe<StrapiGqlDeletePageInfoPayload>;
  deletePodcastEpisode?: Maybe<StrapiGqlDeletePodcastEpisodePayload>;
  deletePodcastFeed?: Maybe<StrapiGqlDeletePodcastFeedPayload>;
  deletePodcaster?: Maybe<StrapiGqlDeletePodcasterPayload>;
  /** Delete an existing role */
  deleteRole?: Maybe<StrapiGqlDeleteRolePayload>;
  deleteSchoolSubjectInfo?: Maybe<StrapiGqlDeleteSchoolSubjectInfoPayload>;
  deleteSectionSlideshow?: Maybe<StrapiGqlDeleteSectionSlideshowPayload>;
  deleteSubject?: Maybe<StrapiGqlDeleteSubjectPayload>;
  deleteTeacher?: Maybe<StrapiGqlDeleteTeacherPayload>;
  deleteTeacherInfo?: Maybe<StrapiGqlDeleteTeacherInfoPayload>;
  deleteToolbar?: Maybe<StrapiGqlDeleteToolbarPayload>;
  /** Delete an existing user */
  deleteUser?: Maybe<StrapiGqlDeleteUserPayload>;
  deleteWorkingGroup?: Maybe<StrapiGqlDeleteWorkingGroupPayload>;
  deleteWorkingGroupInfo?: Maybe<StrapiGqlDeleteWorkingGroupInfoPayload>;
  emailConfirmation?: Maybe<StrapiGqlUsersPermissionsLoginPayload>;
  forgotPassword?: Maybe<StrapiGqlUserPermissionsPasswordPayload>;
  login: StrapiGqlUsersPermissionsLoginPayload;
  multipleUpload: Array<Maybe<StrapiGqlUploadFile>>;
  register: StrapiGqlUsersPermissionsLoginPayload;
  resetPassword?: Maybe<StrapiGqlUsersPermissionsLoginPayload>;
  updateBlogCategory?: Maybe<StrapiGqlUpdateBlogCategoryPayload>;
  updateBlogEntry?: Maybe<StrapiGqlUpdateBlogEntryPayload>;
  updateBlogInfo?: Maybe<StrapiGqlUpdateBlogInfoPayload>;
  updateFileInfo: StrapiGqlUploadFile;
  updateFooter?: Maybe<StrapiGqlUpdateFooterPayload>;
  updateFormerStudent?: Maybe<StrapiGqlUpdateFormerStudentPayload>;
  updateGallery?: Maybe<StrapiGqlUpdateGalleryPayload>;
  updateGeneralSetting?: Maybe<StrapiGqlUpdateGeneralSettingPayload>;
  updateHome?: Maybe<StrapiGqlUpdateHomePayload>;
  updateMediaCenter?: Maybe<StrapiGqlUpdateMediaCenterPayload>;
  updateMenu?: Maybe<StrapiGqlUpdateMenuPayload>;
  updateNavigationLink?: Maybe<StrapiGqlUpdateNavigationLinkPayload>;
  updatePage?: Maybe<StrapiGqlUpdatePagePayload>;
  updatePageInfo?: Maybe<StrapiGqlUpdatePageInfoPayload>;
  updatePodcastEpisode?: Maybe<StrapiGqlUpdatePodcastEpisodePayload>;
  updatePodcastFeed?: Maybe<StrapiGqlUpdatePodcastFeedPayload>;
  updatePodcaster?: Maybe<StrapiGqlUpdatePodcasterPayload>;
  /** Update an existing role */
  updateRole?: Maybe<StrapiGqlUpdateRolePayload>;
  updateSchoolSubjectInfo?: Maybe<StrapiGqlUpdateSchoolSubjectInfoPayload>;
  updateSectionSlideshow?: Maybe<StrapiGqlUpdateSectionSlideshowPayload>;
  updateSubject?: Maybe<StrapiGqlUpdateSubjectPayload>;
  updateTeacher?: Maybe<StrapiGqlUpdateTeacherPayload>;
  updateTeacherInfo?: Maybe<StrapiGqlUpdateTeacherInfoPayload>;
  updateToolbar?: Maybe<StrapiGqlUpdateToolbarPayload>;
  /** Update an existing user */
  updateUser?: Maybe<StrapiGqlUpdateUserPayload>;
  updateWorkingGroup?: Maybe<StrapiGqlUpdateWorkingGroupPayload>;
  updateWorkingGroupInfo?: Maybe<StrapiGqlUpdateWorkingGroupInfoPayload>;
  upload: StrapiGqlUploadFile;
};


export type StrapiGqlMutationCreateBlogCategoryArgs = {
  input?: Maybe<StrapiGqlCreateBlogCategoryInput>;
};


export type StrapiGqlMutationCreateBlogEntryArgs = {
  input?: Maybe<StrapiGqlCreateBlogEntryInput>;
};


export type StrapiGqlMutationCreateFormerStudentArgs = {
  input?: Maybe<StrapiGqlCreateFormerStudentInput>;
};


export type StrapiGqlMutationCreateGalleryArgs = {
  input?: Maybe<StrapiGqlCreateGalleryInput>;
};


export type StrapiGqlMutationCreateMediaCenterArgs = {
  input?: Maybe<StrapiGqlCreateMediaCenterInput>;
};


export type StrapiGqlMutationCreateNavigationLinkArgs = {
  input?: Maybe<StrapiGqlCreateNavigationLinkInput>;
};


export type StrapiGqlMutationCreatePageArgs = {
  input?: Maybe<StrapiGqlCreatePageInput>;
};


export type StrapiGqlMutationCreatePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlCreatePodcastEpisodeInput>;
};


export type StrapiGqlMutationCreatePodcasterArgs = {
  input?: Maybe<StrapiGqlCreatePodcasterInput>;
};


export type StrapiGqlMutationCreateRoleArgs = {
  input?: Maybe<StrapiGqlCreateRoleInput>;
};


export type StrapiGqlMutationCreateSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlCreateSectionSlideshowInput>;
};


export type StrapiGqlMutationCreateSubjectArgs = {
  input?: Maybe<StrapiGqlCreateSubjectInput>;
};


export type StrapiGqlMutationCreateTeacherArgs = {
  input?: Maybe<StrapiGqlCreateTeacherInput>;
};


export type StrapiGqlMutationCreateUserArgs = {
  input?: Maybe<StrapiGqlCreateUserInput>;
};


export type StrapiGqlMutationCreateWorkingGroupArgs = {
  input?: Maybe<StrapiGqlCreateWorkingGroupInput>;
};


export type StrapiGqlMutationDeleteBlogCategoryArgs = {
  input?: Maybe<StrapiGqlDeleteBlogCategoryInput>;
};


export type StrapiGqlMutationDeleteBlogEntryArgs = {
  input?: Maybe<StrapiGqlDeleteBlogEntryInput>;
};


export type StrapiGqlMutationDeleteFileArgs = {
  input?: Maybe<StrapiGqlDeleteFileInput>;
};


export type StrapiGqlMutationDeleteFormerStudentArgs = {
  input?: Maybe<StrapiGqlDeleteFormerStudentInput>;
};


export type StrapiGqlMutationDeleteGalleryArgs = {
  input?: Maybe<StrapiGqlDeleteGalleryInput>;
};


export type StrapiGqlMutationDeleteMediaCenterArgs = {
  input?: Maybe<StrapiGqlDeleteMediaCenterInput>;
};


export type StrapiGqlMutationDeleteNavigationLinkArgs = {
  input?: Maybe<StrapiGqlDeleteNavigationLinkInput>;
};


export type StrapiGqlMutationDeletePageArgs = {
  input?: Maybe<StrapiGqlDeletePageInput>;
};


export type StrapiGqlMutationDeletePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlDeletePodcastEpisodeInput>;
};


export type StrapiGqlMutationDeletePodcasterArgs = {
  input?: Maybe<StrapiGqlDeletePodcasterInput>;
};


export type StrapiGqlMutationDeleteRoleArgs = {
  input?: Maybe<StrapiGqlDeleteRoleInput>;
};


export type StrapiGqlMutationDeleteSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlDeleteSectionSlideshowInput>;
};


export type StrapiGqlMutationDeleteSubjectArgs = {
  input?: Maybe<StrapiGqlDeleteSubjectInput>;
};


export type StrapiGqlMutationDeleteTeacherArgs = {
  input?: Maybe<StrapiGqlDeleteTeacherInput>;
};


export type StrapiGqlMutationDeleteUserArgs = {
  input?: Maybe<StrapiGqlDeleteUserInput>;
};


export type StrapiGqlMutationDeleteWorkingGroupArgs = {
  input?: Maybe<StrapiGqlDeleteWorkingGroupInput>;
};


export type StrapiGqlMutationEmailConfirmationArgs = {
  confirmation: Scalars['String'];
};


export type StrapiGqlMutationForgotPasswordArgs = {
  email: Scalars['String'];
};


export type StrapiGqlMutationLoginArgs = {
  input: StrapiGqlUsersPermissionsLoginInput;
};


export type StrapiGqlMutationMultipleUploadArgs = {
  field?: Maybe<Scalars['String']>;
  files: Array<Maybe<Scalars['Upload']>>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};


export type StrapiGqlMutationRegisterArgs = {
  input: StrapiGqlUsersPermissionsRegisterInput;
};


export type StrapiGqlMutationResetPasswordArgs = {
  code: Scalars['String'];
  password: Scalars['String'];
  passwordConfirmation: Scalars['String'];
};


export type StrapiGqlMutationUpdateBlogCategoryArgs = {
  input?: Maybe<StrapiGqlUpdateBlogCategoryInput>;
};


export type StrapiGqlMutationUpdateBlogEntryArgs = {
  input?: Maybe<StrapiGqlUpdateBlogEntryInput>;
};


export type StrapiGqlMutationUpdateBlogInfoArgs = {
  input?: Maybe<StrapiGqlUpdateBlogInfoInput>;
};


export type StrapiGqlMutationUpdateFileInfoArgs = {
  id: Scalars['ID'];
  info: StrapiGqlFileInfoInput;
};


export type StrapiGqlMutationUpdateFooterArgs = {
  input?: Maybe<StrapiGqlUpdateFooterInput>;
};


export type StrapiGqlMutationUpdateFormerStudentArgs = {
  input?: Maybe<StrapiGqlUpdateFormerStudentInput>;
};


export type StrapiGqlMutationUpdateGalleryArgs = {
  input?: Maybe<StrapiGqlUpdateGalleryInput>;
};


export type StrapiGqlMutationUpdateGeneralSettingArgs = {
  input?: Maybe<StrapiGqlUpdateGeneralSettingInput>;
};


export type StrapiGqlMutationUpdateHomeArgs = {
  input?: Maybe<StrapiGqlUpdateHomeInput>;
};


export type StrapiGqlMutationUpdateMediaCenterArgs = {
  input?: Maybe<StrapiGqlUpdateMediaCenterInput>;
};


export type StrapiGqlMutationUpdateMenuArgs = {
  input?: Maybe<StrapiGqlUpdateMenuInput>;
};


export type StrapiGqlMutationUpdateNavigationLinkArgs = {
  input?: Maybe<StrapiGqlUpdateNavigationLinkInput>;
};


export type StrapiGqlMutationUpdatePageArgs = {
  input?: Maybe<StrapiGqlUpdatePageInput>;
};


export type StrapiGqlMutationUpdatePageInfoArgs = {
  input?: Maybe<StrapiGqlUpdatePageInfoInput>;
};


export type StrapiGqlMutationUpdatePodcastEpisodeArgs = {
  input?: Maybe<StrapiGqlUpdatePodcastEpisodeInput>;
};


export type StrapiGqlMutationUpdatePodcastFeedArgs = {
  input?: Maybe<StrapiGqlUpdatePodcastFeedInput>;
};


export type StrapiGqlMutationUpdatePodcasterArgs = {
  input?: Maybe<StrapiGqlUpdatePodcasterInput>;
};


export type StrapiGqlMutationUpdateRoleArgs = {
  input?: Maybe<StrapiGqlUpdateRoleInput>;
};


export type StrapiGqlMutationUpdateSchoolSubjectInfoArgs = {
  input?: Maybe<StrapiGqlUpdateSchoolSubjectInfoInput>;
};


export type StrapiGqlMutationUpdateSectionSlideshowArgs = {
  input?: Maybe<StrapiGqlUpdateSectionSlideshowInput>;
};


export type StrapiGqlMutationUpdateSubjectArgs = {
  input?: Maybe<StrapiGqlUpdateSubjectInput>;
};


export type StrapiGqlMutationUpdateTeacherArgs = {
  input?: Maybe<StrapiGqlUpdateTeacherInput>;
};


export type StrapiGqlMutationUpdateTeacherInfoArgs = {
  input?: Maybe<StrapiGqlUpdateTeacherInfoInput>;
};


export type StrapiGqlMutationUpdateToolbarArgs = {
  input?: Maybe<StrapiGqlUpdateToolbarInput>;
};


export type StrapiGqlMutationUpdateUserArgs = {
  input?: Maybe<StrapiGqlUpdateUserInput>;
};


export type StrapiGqlMutationUpdateWorkingGroupArgs = {
  input?: Maybe<StrapiGqlUpdateWorkingGroupInput>;
};


export type StrapiGqlMutationUpdateWorkingGroupInfoArgs = {
  input?: Maybe<StrapiGqlUpdateWorkingGroupInfoInput>;
};


export type StrapiGqlMutationUploadArgs = {
  field?: Maybe<Scalars['String']>;
  file: Scalars['Upload'];
  info?: Maybe<StrapiGqlFileInfoInput>;
  ref?: Maybe<Scalars['String']>;
  refId?: Maybe<Scalars['ID']>;
  source?: Maybe<Scalars['String']>;
};

export type StrapiGqlNavigationLink = {
  __typename?: 'NavigationLink';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Maybe<StrapiGqlNavigationLinkTypeDynamicZone>>>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlNavigationLinkAggregator = {
  __typename?: 'NavigationLinkAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlNavigationLinkConnection = {
  __typename?: 'NavigationLinkConnection';
  aggregate?: Maybe<StrapiGqlNavigationLinkAggregator>;
  groupBy?: Maybe<StrapiGqlNavigationLinkGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
};

export type StrapiGqlNavigationLinkConnectionCreated_At = {
  __typename?: 'NavigationLinkConnectionCreated_at';
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlNavigationLinkConnectionId = {
  __typename?: 'NavigationLinkConnectionId';
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlNavigationLinkConnectionTitle = {
  __typename?: 'NavigationLinkConnectionTitle';
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlNavigationLinkConnectionUpdated_At = {
  __typename?: 'NavigationLinkConnectionUpdated_at';
  connection?: Maybe<StrapiGqlNavigationLinkConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlNavigationLinkGroupBy = {
  __typename?: 'NavigationLinkGroupBy';
  created_at?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionId>>>;
  title?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlNavigationLinkConnectionUpdated_At>>>;
};

export type StrapiGqlNavigationLinkInput = {
  created_by?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Scalars['NavigationLinkTypeDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlNavigationLinkTypeDynamicZone = StrapiGqlComponentLinkTypeBlog | StrapiGqlComponentLinkTypeGallery | StrapiGqlComponentLinkTypeMediaCenter | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypePodcast | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeSchoolSubject | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypeTeacher | StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentLinkTypeWorkingGroup;

export type StrapiGqlPage = {
  __typename?: 'Page';
  assets?: Maybe<Array<Maybe<StrapiGqlPageAssetsDynamicZone>>>;
  blog_categories?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  calendar_key?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<StrapiGqlPageContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlPageBlog_CategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlPageAggregator>;
  groupBy?: Maybe<StrapiGqlPageGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlPage>>>;
};

export type StrapiGqlPageConnectionCalendar_Key = {
  __typename?: 'PageConnectionCalendar_key';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPageConnectionCreated_At = {
  __typename?: 'PageConnectionCreated_at';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPageConnectionId = {
  __typename?: 'PageConnectionId';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPageConnectionSlug = {
  __typename?: 'PageConnectionSlug';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPageConnectionTitle = {
  __typename?: 'PageConnectionTitle';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPageConnectionUpdated_At = {
  __typename?: 'PageConnectionUpdated_at';
  connection?: Maybe<StrapiGqlPageConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPageContentDynamicZone = StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionSubjectSelection | StrapiGqlComponentStudentSectionStudentQuote;

export type StrapiGqlPageGroupBy = {
  __typename?: 'PageGroupBy';
  calendar_key?: Maybe<Array<Maybe<StrapiGqlPageConnectionCalendar_Key>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlPageConnectionId>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPageConnectionSlug>>>;
  title?: Maybe<Array<Maybe<StrapiGqlPageConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionUpdated_At>>>;
};

export type StrapiGqlPageInfo = {
  __typename?: 'PageInfo';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlPageInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPageInput = {
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  calendar_key?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastEpisode = {
  __typename?: 'PodcastEpisode';
  block: Scalars['Boolean'];
  chapters?: Maybe<Array<Maybe<StrapiGqlComponentPodcastChapters>>>;
  content?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
  contributors?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  episode: Scalars['Int'];
  explicit: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  pubDate?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season: Scalars['Int'];
  slug: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  type: StrapiGqlEnum_Podcastepisode_Type;
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlPodcastEpisodeContentArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlPodcastEpisodeContributorsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlPodcastEpisodeAggregator = {
  __typename?: 'PodcastEpisodeAggregator';
  avg?: Maybe<StrapiGqlPodcastEpisodeAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StrapiGqlPodcastEpisodeAggregatorMax>;
  min?: Maybe<StrapiGqlPodcastEpisodeAggregatorMin>;
  sum?: Maybe<StrapiGqlPodcastEpisodeAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPodcastEpisodeAggregatorAvg = {
  __typename?: 'PodcastEpisodeAggregatorAvg';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorMax = {
  __typename?: 'PodcastEpisodeAggregatorMax';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorMin = {
  __typename?: 'PodcastEpisodeAggregatorMin';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeAggregatorSum = {
  __typename?: 'PodcastEpisodeAggregatorSum';
  episode?: Maybe<Scalars['Float']>;
  season?: Maybe<Scalars['Float']>;
};

export type StrapiGqlPodcastEpisodeConnection = {
  __typename?: 'PodcastEpisodeConnection';
  aggregate?: Maybe<StrapiGqlPodcastEpisodeAggregator>;
  groupBy?: Maybe<StrapiGqlPodcastEpisodeGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlPodcastEpisode>>>;
};

export type StrapiGqlPodcastEpisodeConnectionBlock = {
  __typename?: 'PodcastEpisodeConnectionBlock';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type StrapiGqlPodcastEpisodeConnectionCreated_At = {
  __typename?: 'PodcastEpisodeConnectionCreated_at';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcastEpisodeConnectionDescription = {
  __typename?: 'PodcastEpisodeConnectionDescription';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcastEpisodeConnectionEpisode = {
  __typename?: 'PodcastEpisodeConnectionEpisode';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPodcastEpisodeConnectionExplicit = {
  __typename?: 'PodcastEpisodeConnectionExplicit';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type StrapiGqlPodcastEpisodeConnectionId = {
  __typename?: 'PodcastEpisodeConnectionId';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastEpisodeConnectionImage = {
  __typename?: 'PodcastEpisodeConnectionImage';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastEpisodeConnectionPubDate = {
  __typename?: 'PodcastEpisodeConnectionPubDate';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcastEpisodeConnectionPublished_At = {
  __typename?: 'PodcastEpisodeConnectionPublished_at';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcastEpisodeConnectionSeason = {
  __typename?: 'PodcastEpisodeConnectionSeason';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPodcastEpisodeConnectionSlug = {
  __typename?: 'PodcastEpisodeConnectionSlug';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcastEpisodeConnectionSubtitle = {
  __typename?: 'PodcastEpisodeConnectionSubtitle';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcastEpisodeConnectionTitle = {
  __typename?: 'PodcastEpisodeConnectionTitle';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcastEpisodeConnectionType = {
  __typename?: 'PodcastEpisodeConnectionType';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcastEpisodeConnectionUpdated_At = {
  __typename?: 'PodcastEpisodeConnectionUpdated_at';
  connection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcastEpisodeGroupBy = {
  __typename?: 'PodcastEpisodeGroupBy';
  block?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionBlock>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionCreated_At>>>;
  description?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionDescription>>>;
  episode?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionEpisode>>>;
  explicit?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionExplicit>>>;
  id?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionId>>>;
  image?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionImage>>>;
  pubDate?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionPubDate>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionPublished_At>>>;
  season?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSeason>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSlug>>>;
  subtitle?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionSubtitle>>>;
  title?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionTitle>>>;
  type?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionType>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPodcastEpisodeConnectionUpdated_At>>>;
};

export type StrapiGqlPodcastEpisodeInput = {
  block?: Maybe<Scalars['Boolean']>;
  chapters?: Maybe<Array<Maybe<StrapiGqlComponentPodcastChapterInput>>>;
  content?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contributors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  episode: Scalars['Int'];
  explicit?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
  pubDate?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Scalars['Int']>;
  slug: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<StrapiGqlEnum_Podcastepisode_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcastFeed = {
  __typename?: 'PodcastFeed';
  author: Scalars['String'];
  block: Scalars['Boolean'];
  blogs?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  category?: Maybe<Array<Maybe<StrapiGqlComponentPodcastCategory>>>;
  complete: Scalars['Boolean'];
  copyright: Scalars['String'];
  created_at: Scalars['DateTime'];
  description: Scalars['String'];
  explicit: Scalars['Boolean'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  language: Scalars['String'];
  owner_email: Scalars['String'];
  owner_name: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  type: StrapiGqlEnum_Podcastfeed_Type;
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlPodcastFeedBlogsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlPodcastFeedInput = {
  author?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Boolean']>;
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category?: Maybe<Array<StrapiGqlComponentPodcastCategoryInput>>;
  complete?: Maybe<Scalars['Boolean']>;
  copyright?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  description: Scalars['String'];
  explicit?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  owner_email?: Maybe<Scalars['String']>;
  owner_name: Scalars['String'];
  subtitle: Scalars['String'];
  title: Scalars['String'];
  type?: Maybe<StrapiGqlEnum_Podcastfeed_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcaster = {
  __typename?: 'Podcaster';
  biography?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  name: Scalars['String'];
  podcast_episodes?: Maybe<StrapiGqlPodcastEpisode>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlPodcasterAggregator = {
  __typename?: 'PodcasterAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlPodcasterConnection = {
  __typename?: 'PodcasterConnection';
  aggregate?: Maybe<StrapiGqlPodcasterAggregator>;
  groupBy?: Maybe<StrapiGqlPodcasterGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
};

export type StrapiGqlPodcasterConnectionBiography = {
  __typename?: 'PodcasterConnectionBiography';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcasterConnectionCreated_At = {
  __typename?: 'PodcasterConnectionCreated_at';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcasterConnectionId = {
  __typename?: 'PodcasterConnectionId';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcasterConnectionImage = {
  __typename?: 'PodcasterConnectionImage';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcasterConnectionName = {
  __typename?: 'PodcasterConnectionName';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcasterConnectionPodcast_Episodes = {
  __typename?: 'PodcasterConnectionPodcast_episodes';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlPodcasterConnectionPublished_At = {
  __typename?: 'PodcasterConnectionPublished_at';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcasterConnectionSlug = {
  __typename?: 'PodcasterConnectionSlug';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlPodcasterConnectionUpdated_At = {
  __typename?: 'PodcasterConnectionUpdated_at';
  connection?: Maybe<StrapiGqlPodcasterConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlPodcasterGroupBy = {
  __typename?: 'PodcasterGroupBy';
  biography?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionBiography>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionId>>>;
  image?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionImage>>>;
  name?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionName>>>;
  podcast_episodes?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionPodcast_Episodes>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionPublished_At>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPodcasterConnectionUpdated_At>>>;
};

export type StrapiGqlPodcasterInput = {
  biography?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  podcast_episodes?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export enum StrapiGqlPublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type StrapiGqlQuery = {
  __typename?: 'Query';
  blogCategories?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  blogCategoriesConnection?: Maybe<StrapiGqlBlogCategoryConnection>;
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
  blogEntries?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
  blogEntriesConnection?: Maybe<StrapiGqlBlogEntryConnection>;
  blogEntry?: Maybe<StrapiGqlBlogEntry>;
  blogInfo?: Maybe<StrapiGqlBlogInfo>;
  files?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
  filesConnection?: Maybe<StrapiGqlUploadFileConnection>;
  footer?: Maybe<StrapiGqlFooter>;
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
  formerStudents?: Maybe<Array<Maybe<StrapiGqlFormerStudents>>>;
  formerStudentsConnection?: Maybe<StrapiGqlFormerStudentsConnection>;
  galleries?: Maybe<Array<Maybe<StrapiGqlGallery>>>;
  galleriesConnection?: Maybe<StrapiGqlGalleryConnection>;
  gallery?: Maybe<StrapiGqlGallery>;
  generalSetting?: Maybe<StrapiGqlGeneralSettings>;
  home?: Maybe<StrapiGqlHome>;
  me?: Maybe<StrapiGqlUsersPermissionsMe>;
  mediaCenter?: Maybe<StrapiGqlMediaCenter>;
  mediaCenters?: Maybe<Array<Maybe<StrapiGqlMediaCenter>>>;
  mediaCentersConnection?: Maybe<StrapiGqlMediaCenterConnection>;
  menu?: Maybe<StrapiGqlMenu>;
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
  navigationLinks?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
  navigationLinksConnection?: Maybe<StrapiGqlNavigationLinkConnection>;
  page?: Maybe<StrapiGqlPage>;
  pageInfo?: Maybe<StrapiGqlPageInfo>;
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
  pagesConnection?: Maybe<StrapiGqlPageConnection>;
  podcastEpisode?: Maybe<StrapiGqlPodcastEpisode>;
  podcastEpisodes?: Maybe<Array<Maybe<StrapiGqlPodcastEpisode>>>;
  podcastEpisodesConnection?: Maybe<StrapiGqlPodcastEpisodeConnection>;
  podcastFeed?: Maybe<StrapiGqlPodcastFeed>;
  podcaster?: Maybe<StrapiGqlPodcaster>;
  podcasters?: Maybe<Array<Maybe<StrapiGqlPodcaster>>>;
  podcastersConnection?: Maybe<StrapiGqlPodcasterConnection>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
  /** Retrieve all the existing roles. You can't apply filters on this query. */
  roles?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRole>>>;
  rolesConnection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  schoolSubjectInfo?: Maybe<StrapiGqlSchoolSubjectInfo>;
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
  sectionSlideshows?: Maybe<Array<Maybe<StrapiGqlSectionSlideshow>>>;
  sectionSlideshowsConnection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  subject?: Maybe<StrapiGqlSubject>;
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  subjectsConnection?: Maybe<StrapiGqlSubjectConnection>;
  teacher?: Maybe<StrapiGqlTeacher>;
  teacherInfo?: Maybe<StrapiGqlTeacherInfo>;
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  teachersConnection?: Maybe<StrapiGqlTeacherConnection>;
  toolbar?: Maybe<StrapiGqlToolbar>;
  user?: Maybe<StrapiGqlUsersPermissionsUser>;
  users?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
  usersConnection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
  workingGroupInfo?: Maybe<StrapiGqlWorkingGroupInfo>;
  workingGroups?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
  workingGroupsConnection?: Maybe<StrapiGqlWorkingGroupConnection>;
};


export type StrapiGqlQueryBlogCategoriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogCategoriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogCategoryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogEntriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogEntriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryBlogEntryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryBlogInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFilesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryFilesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryFooterArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFormerStudentArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryFormerStudentsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryFormerStudentsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryGalleriesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryGalleriesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryGalleryArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryGeneralSettingArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryHomeArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryMediaCenterArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryMediaCentersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryMediaCentersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryNavigationLinksConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPageArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPageInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPagesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPagesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPodcastEpisodeArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryPodcastEpisodesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPodcastEpisodesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryPodcastersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryRoleArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryRolesArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryRolesConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQuerySectionSlideshowsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQuerySubjectArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQuerySubjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQuerySubjectsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryTeacherArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryTeacherInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryTeachersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryTeachersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryToolbarArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryUserArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryUsersConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryWorkingGroupArgs = {
  id: Scalars['ID'];
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupInfoArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
};


export type StrapiGqlQueryWorkingGroupsArgs = {
  limit?: Maybe<Scalars['Int']>;
  publicationState?: Maybe<StrapiGqlPublicationState>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlQueryWorkingGroupsConnectionArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlSchoolSubjectInfo = {
  __typename?: 'SchoolSubjectInfo';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlSchoolSubjectInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSectionSlideshow = {
  __typename?: 'SectionSlideshow';
  created_at: Scalars['DateTime'];
  entries: Array<Maybe<StrapiGqlSectionSlideshowEntriesDynamicZone>>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlSectionSlideshowAggregator = {
  __typename?: 'SectionSlideshowAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlSectionSlideshowConnection = {
  __typename?: 'SectionSlideshowConnection';
  aggregate?: Maybe<StrapiGqlSectionSlideshowAggregator>;
  groupBy?: Maybe<StrapiGqlSectionSlideshowGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlSectionSlideshow>>>;
};

export type StrapiGqlSectionSlideshowConnectionCreated_At = {
  __typename?: 'SectionSlideshowConnectionCreated_at';
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlSectionSlideshowConnectionId = {
  __typename?: 'SectionSlideshowConnectionId';
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSectionSlideshowConnectionTitle = {
  __typename?: 'SectionSlideshowConnectionTitle';
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlSectionSlideshowConnectionUpdated_At = {
  __typename?: 'SectionSlideshowConnectionUpdated_at';
  connection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlSectionSlideshowEntriesDynamicZone = StrapiGqlComponentSlideshowSlideshowEntry | StrapiGqlComponentSlideshowSlideshowEntryBlog | StrapiGqlComponentSlideshowSlideshowEntryPage;

export type StrapiGqlSectionSlideshowGroupBy = {
  __typename?: 'SectionSlideshowGroupBy';
  created_at?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionId>>>;
  title?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowConnectionUpdated_At>>>;
};

export type StrapiGqlSectionSlideshowInput = {
  created_by?: Maybe<Scalars['ID']>;
  entries: Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSubject = {
  __typename?: 'Subject';
  blackboard_image?: Maybe<StrapiGqlUploadFile>;
  content?: Maybe<Array<Maybe<StrapiGqlSubjectContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlSubjectTeachersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlSubjectAggregator>;
  groupBy?: Maybe<StrapiGqlSubjectGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
};

export type StrapiGqlSubjectConnectionBlackboard_Image = {
  __typename?: 'SubjectConnectionBlackboard_image';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSubjectConnectionCreated_At = {
  __typename?: 'SubjectConnectionCreated_at';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlSubjectConnectionId = {
  __typename?: 'SubjectConnectionId';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSubjectConnectionSlug = {
  __typename?: 'SubjectConnectionSlug';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlSubjectConnectionTitle = {
  __typename?: 'SubjectConnectionTitle';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlSubjectConnectionUpdated_At = {
  __typename?: 'SubjectConnectionUpdated_at';
  connection?: Maybe<StrapiGqlSubjectConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlSubjectContentDynamicZone = StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentStudentSectionStudentQuote;

export type StrapiGqlSubjectGroupBy = {
  __typename?: 'SubjectGroupBy';
  blackboard_image?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionBlackboard_Image>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionId>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionSlug>>>;
  title?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionUpdated_At>>>;
};

export type StrapiGqlSubjectInput = {
  blackboard_image?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title: Scalars['String'];
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacher = {
  __typename?: 'Teacher';
  assets?: Maybe<Array<Maybe<StrapiGqlTeacherAssetsDynamicZone>>>;
  biography?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  name: Scalars['String'];
  slug: Scalars['String'];
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  updated_at: Scalars['DateTime'];
  working_groups?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
};


export type StrapiGqlTeacherSubjectsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlTeacherWorking_GroupsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlTeacherAggregator>;
  groupBy?: Maybe<StrapiGqlTeacherGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
};

export type StrapiGqlTeacherConnectionBiography = {
  __typename?: 'TeacherConnectionBiography';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlTeacherConnectionCreated_At = {
  __typename?: 'TeacherConnectionCreated_at';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlTeacherConnectionId = {
  __typename?: 'TeacherConnectionId';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacherConnectionImage = {
  __typename?: 'TeacherConnectionImage';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacherConnectionName = {
  __typename?: 'TeacherConnectionName';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlTeacherConnectionSlug = {
  __typename?: 'TeacherConnectionSlug';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlTeacherConnectionUpdated_At = {
  __typename?: 'TeacherConnectionUpdated_at';
  connection?: Maybe<StrapiGqlTeacherConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlTeacherGroupBy = {
  __typename?: 'TeacherGroupBy';
  biography?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionBiography>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionId>>>;
  image?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionImage>>>;
  name?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionName>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionSlug>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionUpdated_At>>>;
};

export type StrapiGqlTeacherInfo = {
  __typename?: 'TeacherInfo';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlTeacherInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacherInput = {
  assets?: Maybe<Array<Scalars['TeacherAssetsDynamicZoneInput']>>;
  biography?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  slug: Scalars['String'];
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  working_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlToolbar = {
  __typename?: 'Toolbar';
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  items?: Maybe<Array<Maybe<StrapiGqlToolbarItemsDynamicZone>>>;
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlToolbarInput = {
  created_by?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Scalars['ToolbarItemsDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlToolbarItemsDynamicZone = StrapiGqlComponentLinkItemText;

export type StrapiGqlUploadFile = {
  __typename?: 'UploadFile';
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_at: Scalars['DateTime'];
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash: Scalars['String'];
  height?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  mime: Scalars['String'];
  name: Scalars['String'];
  previewUrl?: Maybe<Scalars['String']>;
  provider: Scalars['String'];
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<StrapiGqlMorph>>>;
  size: Scalars['Float'];
  updated_at: Scalars['DateTime'];
  url: Scalars['String'];
  width?: Maybe<Scalars['Int']>;
};


export type StrapiGqlUploadFileRelatedArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlUploadFileAggregator = {
  __typename?: 'UploadFileAggregator';
  avg?: Maybe<StrapiGqlUploadFileAggregatorAvg>;
  count?: Maybe<Scalars['Int']>;
  max?: Maybe<StrapiGqlUploadFileAggregatorMax>;
  min?: Maybe<StrapiGqlUploadFileAggregatorMin>;
  sum?: Maybe<StrapiGqlUploadFileAggregatorSum>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUploadFileAggregatorAvg = {
  __typename?: 'UploadFileAggregatorAvg';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorMax = {
  __typename?: 'UploadFileAggregatorMax';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorMin = {
  __typename?: 'UploadFileAggregatorMin';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileAggregatorSum = {
  __typename?: 'UploadFileAggregatorSum';
  height?: Maybe<Scalars['Float']>;
  size?: Maybe<Scalars['Float']>;
  width?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileConnection = {
  __typename?: 'UploadFileConnection';
  aggregate?: Maybe<StrapiGqlUploadFileAggregator>;
  groupBy?: Maybe<StrapiGqlUploadFileGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlUploadFile>>>;
};

export type StrapiGqlUploadFileConnectionAlternativeText = {
  __typename?: 'UploadFileConnectionAlternativeText';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionCaption = {
  __typename?: 'UploadFileConnectionCaption';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionCreated_At = {
  __typename?: 'UploadFileConnectionCreated_at';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlUploadFileConnectionExt = {
  __typename?: 'UploadFileConnectionExt';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionFormats = {
  __typename?: 'UploadFileConnectionFormats';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlUploadFileConnectionHash = {
  __typename?: 'UploadFileConnectionHash';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionHeight = {
  __typename?: 'UploadFileConnectionHeight';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUploadFileConnectionId = {
  __typename?: 'UploadFileConnectionId';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUploadFileConnectionMime = {
  __typename?: 'UploadFileConnectionMime';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionName = {
  __typename?: 'UploadFileConnectionName';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionPreviewUrl = {
  __typename?: 'UploadFileConnectionPreviewUrl';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionProvider = {
  __typename?: 'UploadFileConnectionProvider';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionProvider_Metadata = {
  __typename?: 'UploadFileConnectionProvider_metadata';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['JSON']>;
};

export type StrapiGqlUploadFileConnectionSize = {
  __typename?: 'UploadFileConnectionSize';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['Float']>;
};

export type StrapiGqlUploadFileConnectionUpdated_At = {
  __typename?: 'UploadFileConnectionUpdated_at';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlUploadFileConnectionUrl = {
  __typename?: 'UploadFileConnectionUrl';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUploadFileConnectionWidth = {
  __typename?: 'UploadFileConnectionWidth';
  connection?: Maybe<StrapiGqlUploadFileConnection>;
  key?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUploadFileGroupBy = {
  __typename?: 'UploadFileGroupBy';
  alternativeText?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionAlternativeText>>>;
  caption?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionCaption>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionCreated_At>>>;
  ext?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionExt>>>;
  formats?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionFormats>>>;
  hash?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionHash>>>;
  height?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionHeight>>>;
  id?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionId>>>;
  mime?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionMime>>>;
  name?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionName>>>;
  previewUrl?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionPreviewUrl>>>;
  provider?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionProvider>>>;
  provider_metadata?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionProvider_Metadata>>>;
  size?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionSize>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionUpdated_At>>>;
  url?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionUrl>>>;
  width?: Maybe<Array<Maybe<StrapiGqlUploadFileConnectionWidth>>>;
};

export type StrapiGqlUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email: Scalars['String'];
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username: Scalars['String'];
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
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  email: Scalars['String'];
  id: Scalars['ID'];
  role?: Maybe<StrapiGqlUsersPermissionsMeRole>;
  username: Scalars['String'];
};

export type StrapiGqlUsersPermissionsMeRole = {
  __typename?: 'UsersPermissionsMeRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  type?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsPermission = {
  __typename?: 'UsersPermissionsPermission';
  action: Scalars['String'];
  controller: Scalars['String'];
  enabled: Scalars['Boolean'];
  id: Scalars['ID'];
  policy?: Maybe<Scalars['String']>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
  type: Scalars['String'];
};

export type StrapiGqlUsersPermissionsRegisterInput = {
  email: Scalars['String'];
  password: Scalars['String'];
  username: Scalars['String'];
};

export type StrapiGqlUsersPermissionsRole = {
  __typename?: 'UsersPermissionsRole';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  permissions?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsPermission>>>;
  type?: Maybe<Scalars['String']>;
  users?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
};


export type StrapiGqlUsersPermissionsRolePermissionsArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlUsersPermissionsRoleUsersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlUsersPermissionsRoleAggregator>;
  groupBy?: Maybe<StrapiGqlUsersPermissionsRoleGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRole>>>;
};

export type StrapiGqlUsersPermissionsRoleConnectionDescription = {
  __typename?: 'UsersPermissionsRoleConnectionDescription';
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsRoleConnectionId = {
  __typename?: 'UsersPermissionsRoleConnectionId';
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUsersPermissionsRoleConnectionName = {
  __typename?: 'UsersPermissionsRoleConnectionName';
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsRoleConnectionType = {
  __typename?: 'UsersPermissionsRoleConnectionType';
  connection?: Maybe<StrapiGqlUsersPermissionsRoleConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsRoleGroupBy = {
  __typename?: 'UsersPermissionsRoleGroupBy';
  description?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionDescription>>>;
  id?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionId>>>;
  name?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionName>>>;
  type?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsRoleConnectionType>>>;
};

export type StrapiGqlUsersPermissionsUser = {
  __typename?: 'UsersPermissionsUser';
  blocked?: Maybe<Scalars['Boolean']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_at: Scalars['DateTime'];
  email: Scalars['String'];
  id: Scalars['ID'];
  provider?: Maybe<Scalars['String']>;
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
  updated_at: Scalars['DateTime'];
  username: Scalars['String'];
};

export type StrapiGqlUsersPermissionsUserAggregator = {
  __typename?: 'UsersPermissionsUserAggregator';
  count?: Maybe<Scalars['Int']>;
  totalCount?: Maybe<Scalars['Int']>;
};

export type StrapiGqlUsersPermissionsUserConnection = {
  __typename?: 'UsersPermissionsUserConnection';
  aggregate?: Maybe<StrapiGqlUsersPermissionsUserAggregator>;
  groupBy?: Maybe<StrapiGqlUsersPermissionsUserGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUser>>>;
};

export type StrapiGqlUsersPermissionsUserConnectionBlocked = {
  __typename?: 'UsersPermissionsUserConnectionBlocked';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type StrapiGqlUsersPermissionsUserConnectionConfirmed = {
  __typename?: 'UsersPermissionsUserConnectionConfirmed';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['Boolean']>;
};

export type StrapiGqlUsersPermissionsUserConnectionCreated_At = {
  __typename?: 'UsersPermissionsUserConnectionCreated_at';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlUsersPermissionsUserConnectionEmail = {
  __typename?: 'UsersPermissionsUserConnectionEmail';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsUserConnectionId = {
  __typename?: 'UsersPermissionsUserConnectionId';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUsersPermissionsUserConnectionProvider = {
  __typename?: 'UsersPermissionsUserConnectionProvider';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsUserConnectionRole = {
  __typename?: 'UsersPermissionsUserConnectionRole';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUsersPermissionsUserConnectionUpdated_At = {
  __typename?: 'UsersPermissionsUserConnectionUpdated_at';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlUsersPermissionsUserConnectionUsername = {
  __typename?: 'UsersPermissionsUserConnectionUsername';
  connection?: Maybe<StrapiGqlUsersPermissionsUserConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlUsersPermissionsUserGroupBy = {
  __typename?: 'UsersPermissionsUserGroupBy';
  blocked?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionBlocked>>>;
  confirmed?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionConfirmed>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionCreated_At>>>;
  email?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionEmail>>>;
  id?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionId>>>;
  provider?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionProvider>>>;
  role?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionRole>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionUpdated_At>>>;
  username?: Maybe<Array<Maybe<StrapiGqlUsersPermissionsUserConnectionUsername>>>;
};

export type StrapiGqlWorkingGroup = {
  __typename?: 'WorkingGroup';
  content?: Maybe<Array<Maybe<StrapiGqlWorkingGroupContentDynamicZone>>>;
  created_at: Scalars['DateTime'];
  id: Scalars['ID'];
  slug: Scalars['String'];
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};


export type StrapiGqlWorkingGroupTeachersArgs = {
  limit?: Maybe<Scalars['Int']>;
  sort?: Maybe<Scalars['String']>;
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
  aggregate?: Maybe<StrapiGqlWorkingGroupAggregator>;
  groupBy?: Maybe<StrapiGqlWorkingGroupGroupBy>;
  values?: Maybe<Array<Maybe<StrapiGqlWorkingGroup>>>;
};

export type StrapiGqlWorkingGroupConnectionCreated_At = {
  __typename?: 'WorkingGroupConnectionCreated_at';
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlWorkingGroupConnectionId = {
  __typename?: 'WorkingGroupConnectionId';
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
  key?: Maybe<Scalars['ID']>;
};

export type StrapiGqlWorkingGroupConnectionSlug = {
  __typename?: 'WorkingGroupConnectionSlug';
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlWorkingGroupConnectionTitle = {
  __typename?: 'WorkingGroupConnectionTitle';
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
  key?: Maybe<Scalars['String']>;
};

export type StrapiGqlWorkingGroupConnectionUpdated_At = {
  __typename?: 'WorkingGroupConnectionUpdated_at';
  connection?: Maybe<StrapiGqlWorkingGroupConnection>;
  key?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlWorkingGroupContentDynamicZone = StrapiGqlComponentContentButton | StrapiGqlComponentContentDownloadButton | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeFact | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionBlackboardSlideshow | StrapiGqlComponentSectionBlogSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionFormerStudents | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionIFrame | StrapiGqlComponentSectionLatestPodcastEpisode | StrapiGqlComponentSectionMensaMax | StrapiGqlComponentSectionPodcastEpisode | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentStudentSectionStudentQuote;

export type StrapiGqlWorkingGroupGroupBy = {
  __typename?: 'WorkingGroupGroupBy';
  created_at?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionCreated_At>>>;
  id?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionId>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionSlug>>>;
  title?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionTitle>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlWorkingGroupConnectionUpdated_At>>>;
};

export type StrapiGqlWorkingGroupInfo = {
  __typename?: 'WorkingGroupInfo';
  created_at: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  title: Scalars['String'];
  updated_at: Scalars['DateTime'];
};

export type StrapiGqlWorkingGroupInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlWorkingGroupInput = {
  content?: Maybe<Array<Scalars['WorkingGroupContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug: Scalars['String'];
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title: Scalars['String'];
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

export type StrapiGqlDeleteGeneralSettingPayload = {
  __typename?: 'deleteGeneralSettingPayload';
  generalSetting?: Maybe<StrapiGqlGeneralSettings>;
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
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditBlogEntryInput = {
  author?: Maybe<Scalars['String']>;
  blog_category?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['BlogEntryContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditBlogInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentAttachmentAssetInput = {
  file?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentBlackboardSlideInput = {
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  school_subject?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentContentButtonInput = {
  alignment?: Maybe<StrapiGqlEditComponentTypesAlignmentInput>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentContentDownloadButtonInput = {
  alignment?: Maybe<StrapiGqlEditComponentTypesAlignmentInput>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  file?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentContentImageInput = {
  caption?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentContentTextInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  text?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentGalleryImageInput = {
  caption?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentHomeCalendarInput = {
  dates?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentHomeFactInput = {
  id?: Maybe<Scalars['ID']>;
  number?: Maybe<Scalars['Float']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentHomeNewInput = {
  amount?: Maybe<Scalars['Int']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditComponentLinkItemLinkInput = {
  id?: Maybe<Scalars['ID']>;
  navigation_link?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkItemTextInput = {
  icon_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  link?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentLinkTypeBlogInput = {
  blog?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeGalleryInput = {
  gallery?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
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

export type StrapiGqlEditComponentLinkTypeSchoolSubjectInput = {
  id?: Maybe<Scalars['ID']>;
  school_subject?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeStrapiInput = {
  URL?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeTeacherInput = {
  id?: Maybe<Scalars['ID']>;
  teacher?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeWebInput = {
  URL?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentLinkTypeWorkingGroupInput = {
  id?: Maybe<Scalars['ID']>;
  working_group?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentMediaCenterMovieInput = {
  caption?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  movie?: Maybe<Scalars['ID']>;
  poster?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentNavigationNavigationLevelEntryInput = {
  children?: Maybe<Array<Maybe<Scalars['ID']>>>;
  hideInSidebar?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  isRootElement?: Maybe<Scalars['Boolean']>;
  navigation_link?: Maybe<Scalars['ID']>;
  parent?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentPodcastCategoryInput = {
  id?: Maybe<Scalars['ID']>;
  name?: Maybe<StrapiGqlEnum_Componentpodcastcategory_Name>;
};

export type StrapiGqlEditComponentPodcastChapterInput = {
  href?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  start?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionBlackboardSlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditComponentSectionBlogSlideshowInput = {
  blog?: Maybe<Scalars['ID']>;
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  style?: Maybe<StrapiGqlEnum_Componentsectionblogslideshow_Style>;
};

export type StrapiGqlEditComponentSectionFactInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  facts?: Maybe<Array<Maybe<StrapiGqlEditComponentHomeFactInput>>>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSectionFormerStudentInput = {
  description?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionGallerySlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  gallery?: Maybe<Scalars['ID']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentSectionIFrameInput = {
  URL?: Maybe<Scalars['String']>;
  disabled?: Maybe<Scalars['Boolean']>;
  height?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  width?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionLatestPodcastEpisodeInput = {
  activeTab?: Maybe<StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionMensaMaxInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  e?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  p?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSectionPodcastEpisodeInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  podcast_episode?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSectionSlideshowInput = {
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSectionSubjectSelectionInput = {
  description?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  p1?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p2?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p3?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p4?: Maybe<Array<Maybe<Scalars['ID']>>>;
  p5?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryBlogInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  post?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentSlideshowSlideshowEntryPageInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  id?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentStudentSectionStudentQuoteInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  disabled?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditComponentTypesAlignmentInput = {
  alignment?: Maybe<StrapiGqlEnum_Componenttypesalignment_Alignment>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentTypesColorInput = {
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
  id?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditFileInput = {
  alternativeText?: Maybe<Scalars['String']>;
  caption?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  ext?: Maybe<Scalars['String']>;
  formats?: Maybe<Scalars['JSON']>;
  hash?: Maybe<Scalars['String']>;
  height?: Maybe<Scalars['Int']>;
  mime?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewUrl?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  provider_metadata?: Maybe<Scalars['JSON']>;
  related?: Maybe<Array<Maybe<Scalars['ID']>>>;
  size?: Maybe<Scalars['Float']>;
  updated_by?: Maybe<Scalars['ID']>;
  url?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditFooterInput = {
  contact_info?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  link?: Maybe<Array<Maybe<StrapiGqlEditComponentLinkItemLinkInput>>>;
  map_image?: Maybe<Scalars['ID']>;
  map_link?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditFormerStudentInput = {
  biography?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditGalleryInput = {
  color?: Maybe<StrapiGqlEditComponentTypesColorInput>;
  created_by?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<StrapiGqlEditComponentGalleryImageInput>>>;
  slug?: Maybe<Scalars['String']>;
  style?: Maybe<StrapiGqlEnum_Gallery_Style>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditGeneralSettingInput = {
  author_email?: Maybe<Scalars['String']>;
  author_name?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditHomeInput = {
  created_by?: Maybe<Scalars['ID']>;
  sections?: Maybe<Array<Scalars['HomeSectionsDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditLocaleInput = {
  code?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditMediaCenterInput = {
  created_by?: Maybe<Scalars['ID']>;
  movies?: Maybe<Array<Maybe<StrapiGqlEditComponentMediaCenterMovieInput>>>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditMenuInput = {
  created_by?: Maybe<Scalars['ID']>;
  navigation_level_entry?: Maybe<Array<Maybe<StrapiGqlEditComponentNavigationNavigationLevelEntryInput>>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditNavigationLinkInput = {
  created_by?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Array<Scalars['NavigationLinkTypeDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPageInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPageInput = {
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  calendar_key?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcastEpisodeInput = {
  block?: Maybe<Scalars['Boolean']>;
  chapters?: Maybe<Array<Maybe<StrapiGqlEditComponentPodcastChapterInput>>>;
  content?: Maybe<Array<Maybe<Scalars['ID']>>>;
  contributors?: Maybe<Array<Maybe<Scalars['ID']>>>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  episode?: Maybe<Scalars['Int']>;
  explicit?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
  pubDate?: Maybe<Scalars['DateTime']>;
  published_at?: Maybe<Scalars['DateTime']>;
  season?: Maybe<Scalars['Int']>;
  slug?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<StrapiGqlEnum_Podcastepisode_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcastFeedInput = {
  author?: Maybe<Scalars['String']>;
  block?: Maybe<Scalars['Boolean']>;
  blogs?: Maybe<Array<Maybe<Scalars['ID']>>>;
  category?: Maybe<Array<Maybe<StrapiGqlEditComponentPodcastCategoryInput>>>;
  complete?: Maybe<Scalars['Boolean']>;
  copyright?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  explicit?: Maybe<Scalars['Boolean']>;
  image?: Maybe<Scalars['ID']>;
  language?: Maybe<Scalars['String']>;
  owner_email?: Maybe<Scalars['String']>;
  owner_name?: Maybe<Scalars['String']>;
  subtitle?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<StrapiGqlEnum_Podcastfeed_Type>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditPodcasterInput = {
  biography?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  podcast_episodes?: Maybe<Scalars['ID']>;
  published_at?: Maybe<Scalars['DateTime']>;
  slug?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditRoleInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  permissions?: Maybe<Array<Maybe<Scalars['ID']>>>;
  type?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
  users?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditSchoolSubjectInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSectionSlideshowInput = {
  created_by?: Maybe<Scalars['ID']>;
  entries: Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSubjectInput = {
  blackboard_image?: Maybe<Scalars['ID']>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditTeacherInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditTeacherInput = {
  assets?: Maybe<Array<Scalars['TeacherAssetsDynamicZoneInput']>>;
  biography?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
  updated_by?: Maybe<Scalars['ID']>;
  working_groups?: Maybe<Array<Maybe<Scalars['ID']>>>;
};

export type StrapiGqlEditToolbarInput = {
  created_by?: Maybe<Scalars['ID']>;
  items?: Maybe<Array<Scalars['ToolbarItemsDynamicZoneInput']>>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditUserInput = {
  blocked?: Maybe<Scalars['Boolean']>;
  confirmationToken?: Maybe<Scalars['String']>;
  confirmed?: Maybe<Scalars['Boolean']>;
  created_by?: Maybe<Scalars['ID']>;
  email?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  provider?: Maybe<Scalars['String']>;
  resetPasswordToken?: Maybe<Scalars['String']>;
  role?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
  username?: Maybe<Scalars['String']>;
};

export type StrapiGqlEditWorkingGroupInfoInput = {
  created_by?: Maybe<Scalars['ID']>;
  description?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditWorkingGroupInput = {
  content?: Maybe<Array<Scalars['WorkingGroupContentDynamicZoneInput']>>;
  created_by?: Maybe<Scalars['ID']>;
  slug?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  title?: Maybe<Scalars['String']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlUpdateBlogCategoryInput = {
  data?: Maybe<StrapiGqlEditBlogCategoryInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdateBlogCategoryPayload = {
  __typename?: 'updateBlogCategoryPayload';
  blogCategory?: Maybe<StrapiGqlBlogCategory>;
};

export type StrapiGqlUpdateBlogEntryInput = {
  data?: Maybe<StrapiGqlEditBlogEntryInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditFormerStudentInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdateFormerStudentPayload = {
  __typename?: 'updateFormerStudentPayload';
  formerStudent?: Maybe<StrapiGqlFormerStudents>;
};

export type StrapiGqlUpdateGalleryInput = {
  data?: Maybe<StrapiGqlEditGalleryInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdateGalleryPayload = {
  __typename?: 'updateGalleryPayload';
  gallery?: Maybe<StrapiGqlGallery>;
};

export type StrapiGqlUpdateGeneralSettingInput = {
  data?: Maybe<StrapiGqlEditGeneralSettingInput>;
};

export type StrapiGqlUpdateGeneralSettingPayload = {
  __typename?: 'updateGeneralSettingPayload';
  generalSetting?: Maybe<StrapiGqlGeneralSettings>;
};

export type StrapiGqlUpdateHomeInput = {
  data?: Maybe<StrapiGqlEditHomeInput>;
};

export type StrapiGqlUpdateHomePayload = {
  __typename?: 'updateHomePayload';
  home?: Maybe<StrapiGqlHome>;
};

export type StrapiGqlUpdateMediaCenterInput = {
  data?: Maybe<StrapiGqlEditMediaCenterInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditNavigationLinkInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditPageInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlUpdatePodcastEpisodeInput = {
  data?: Maybe<StrapiGqlEditPodcastEpisodeInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditPodcasterInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdatePodcasterPayload = {
  __typename?: 'updatePodcasterPayload';
  podcaster?: Maybe<StrapiGqlPodcaster>;
};

export type StrapiGqlUpdateRoleInput = {
  data?: Maybe<StrapiGqlEditRoleInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditSectionSlideshowInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdateSectionSlideshowPayload = {
  __typename?: 'updateSectionSlideshowPayload';
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlUpdateSubjectInput = {
  data?: Maybe<StrapiGqlEditSubjectInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditTeacherInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditUserInput>;
  where?: Maybe<StrapiGqlInputId>;
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
  data?: Maybe<StrapiGqlEditWorkingGroupInput>;
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlUpdateWorkingGroupPayload = {
  __typename?: 'updateWorkingGroupPayload';
  workingGroup?: Maybe<StrapiGqlWorkingGroup>;
};

export type StrapiGqlAlignmentFragmentFragment = { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined };

export type StrapiGqlBlogCategoryBasicFragmentFragment = { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogCategoryDetailFragmentFragment = { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogEntryBasicFragmentFragment = { __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined };

export type StrapiGqlBlogEntryDetailFragmentFragment = { __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlColorFragmentFragment = { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined };

export type StrapiGqlComponentAttachmentAssetsFragmentFragment = { __typename?: 'ComponentAttachmentAssets', name: string, file?: { __typename?: 'UploadFile', url: string } | null | undefined };

export type StrapiGqlComponentContentButtonFragmentFragment = { __typename?: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlComponentContentDownloadButtonFragmentFragment = { __typename?: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined };

export type StrapiGqlComponentContentImageFragmentFragment = { __typename?: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlComponentContentTextFragmentFragment = { __typename?: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined };

export type StrapiGqlComponentGalleryImageFragmentFragment = { __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlComponentHomeCalendarFragmentFragment = { __typename?: 'ComponentHomeCalendar', dates?: number | null | undefined, disabled?: boolean | null | undefined };

export type StrapiGqlComponentHomeNewsFragmentFragment = { __typename?: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlComponentMediaCenterMovieFragmentFragment = { __typename?: 'ComponentMediaCenterMovie', id: string, title: string, caption?: string | null | undefined, movie?: { __typename?: 'UploadFile', url: string } | null | undefined, poster?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlComponentPodcastCategoryFragmentFragment = { __typename?: 'ComponentPodcastCategory', name: StrapiGqlEnum_Componentpodcastcategory_Name };

export type StrapiGqlComponentPodcastChaptersFragmentFragment = { __typename: 'ComponentPodcastChapters', id: string, start: string, title: string, href?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlComponentSectionBlackboardSlideshowFragmentFragment = { __typename?: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlComponentSectionBlogSlideshowFragmentFragment = { __typename?: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined };

export type StrapiGqlComponentSectionFactsFragmentFragment = { __typename?: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined };

export type StrapiGqlComponentSectionFormerStudentsFragmentFragment = { __typename?: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined };

export type StrapiGqlComponentSectionGallerySlideshowFragmentFragment = { __typename?: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined };

export type StrapiGqlComponentSectionIFrameFragmentFragment = { __typename?: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined };

export type StrapiGqlComponentSectionLatestPodcastEpisodeFragmentFragment = { __typename?: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined };

export type StrapiGqlComponentSectionMensaMaxFragmentFragment = { __typename?: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined };

export type StrapiGqlComponentSectionPodcastEpisodeFragmentFragment = { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined };

export type StrapiGqlComponentSectionSlideshowFragmentFragment = { __typename?: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined };

export type StrapiGqlComponentSlideshowEntryBlogFragmentFragment = { __typename?: 'ComponentSlideshowSlideshowEntryBlog', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, post?: { __typename: 'BlogEntry', slug: string } | null | undefined };

export type StrapiGqlComponentSlideshowEntryPageFragmentFragment = { __typename?: 'ComponentSlideshowSlideshowEntryPage', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, page?: { __typename: 'Page', slug: string } | null | undefined };

export type StrapiGqlComponentSlideshowEntryFragmentFragment = { __typename?: 'ComponentSlideshowSlideshowEntry', id: string, subtitle: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined };

export type StrapiGqlComponentStudentSectionStudentQuoteFragmentFragment = { __typename?: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined };

export type StrapiGqlFormerStudentDetailFragmentFragment = { __typename?: 'FormerStudents', id: string, slug: string, name: string, biography: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlGalleryFragmentFragment = { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined };

export type StrapiGqlHomeFragmentFragment = { __typename?: 'Home', sections?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar', dates?: number | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlImageFragmentFragment = { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string };

export type StrapiGqlMediaCenterFragmentFragment = { __typename?: 'MediaCenter', id: string, slug: string, title: string, movies?: Array<{ __typename?: 'ComponentMediaCenterMovie', id: string, title: string, caption?: string | null | undefined, movie?: { __typename?: 'UploadFile', url: string } | null | undefined, poster?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlMenuFragmentFragment = { __typename?: 'Menu', entries?: Array<{ __typename?: 'ComponentNavigationNavigationLevelEntry', id: string, title?: string | null | undefined, hideInSidebar?: boolean | null | undefined, parent?: { __typename?: 'NavigationLink', id: string } | null | undefined, navigation_link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlNavigationLinkFragmentFragment = { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPageBasicFragmentFragment = { __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined };

export type StrapiGqlPageDetailFragmentFragment = { __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, calendar_key?: string | null | undefined, assets?: Array<{ __typename?: 'ComponentAttachmentAssets', name: string, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPodcastEpisodeBasicFragmentFragment = { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlPodcastEpisodeDetailFragmentFragment = { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, explicit: boolean, episode: number, season: number, type: StrapiGqlEnum_Podcastepisode_Type, block: boolean, content?: Array<{ __typename?: 'UploadFile', mime: string, url: string, ext?: string | null | undefined, name: string, size: number } | null | undefined> | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, chapters?: Array<{ __typename: 'ComponentPodcastChapters', id: string, start: string, title: string, href?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, contributors?: Array<{ __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPodcastEpisodeUploadFileFragmentFragment = { __typename?: 'UploadFile', mime: string, url: string, ext?: string | null | undefined, name: string, size: number };

export type StrapiGqlPodcasterBasicFragmentFragment = { __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined };

export type StrapiGqlPodcasterDetailFragmentFragment = { __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, podcast_episodes?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined };

export type StrapiGqlSchoolSubjectBasicFragmentFragment = { __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined };

export type StrapiGqlSchoolSubjectDetailFragmentFragment = { __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlSectionSlideshowFragmentFragment = { __typename?: 'SectionSlideshow', title: string, id: string, entries: Array<{ __typename?: 'ComponentSlideshowSlideshowEntry', id: string, subtitle: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename?: 'ComponentSlideshowSlideshowEntryBlog', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, post?: { __typename: 'BlogEntry', slug: string } | null | undefined } | { __typename?: 'ComponentSlideshowSlideshowEntryPage', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, page?: { __typename: 'Page', slug: string } | null | undefined } | null | undefined> };

export type StrapiGqlTeacherBasicFragmentFragment = { __typename?: 'Teacher', id: string, slug: string, name: string };

export type StrapiGqlTeacherDetailFragmentFragment = { __typename?: 'Teacher', id: string, slug: string, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, subjects?: Array<{ __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, working_groups?: Array<{ __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, assets?: Array<{ __typename?: 'ComponentAttachmentAssets', name: string, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlWorkingGroupBasicFragmentFragment = { __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined };

export type StrapiGqlWorkingGroupDetailFragmentFragment = { __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlUnnamed_1_MutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type StrapiGqlUnnamed_1_Mutation = { __typename?: 'Mutation', login: { __typename?: 'UsersPermissionsLoginPayload', jwt?: string | null | undefined } };

export type StrapiGqlBlogCategoriesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogCategoriesBasicBySlugsQuery = { __typename?: 'Query', blogCategories?: Array<{ __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogCategoriesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogCategoriesDetailBySlugsQuery = { __typename?: 'Query', blogCategories?: Array<{ __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogEntriesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogEntriesBasicBySlugsQuery = { __typename?: 'Query', blogEntries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogEntriesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlBlogEntriesDetailBySlugsQuery = { __typename?: 'Query', blogEntries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlBlogInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlBlogInfoQuery = { __typename?: 'Query', blogInfo?: { __typename?: 'BlogInfo', title: string, description?: string | null | undefined } | null | undefined };

export type StrapiGqlFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlFooterQuery = { __typename?: 'Query', footer?: { __typename?: 'Footer', map_link?: string | null | undefined, contact_info?: string | null | undefined, map_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, link?: Array<{ __typename?: 'ComponentLinkItemLink', navigation_link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlFormerStudentDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlFormerStudentDetailBySlugsQuery = { __typename?: 'Query', formerStudents?: Array<{ __typename?: 'FormerStudents', id: string, slug: string, name: string, biography: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlGalleryBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlGalleryBySlugsQuery = { __typename?: 'Query', galleries?: Array<{ __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlGeneralSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlGeneralSettingsQuery = { __typename?: 'Query', generalSetting?: { __typename?: 'GeneralSettings', title: string, description: string, language?: string | null | undefined, copyright: string, author_name?: string | null | undefined, author_email?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined };

export type StrapiGqlHomeSectionsQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlHomeSectionsQuery = { __typename?: 'Query', home?: { __typename?: 'Home', sections?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar', dates?: number | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlMediaCenterBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlMediaCenterBySlugsQuery = { __typename?: 'Query', mediaCenters?: Array<{ __typename?: 'MediaCenter', id: string, slug: string, title: string, movies?: Array<{ __typename?: 'ComponentMediaCenterMovie', id: string, title: string, caption?: string | null | undefined, movie?: { __typename?: 'UploadFile', url: string } | null | undefined, poster?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlMenuQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlMenuQuery = { __typename?: 'Query', menu?: { __typename?: 'Menu', entries?: Array<{ __typename?: 'ComponentNavigationNavigationLevelEntry', id: string, title?: string | null | undefined, hideInSidebar?: boolean | null | undefined, parent?: { __typename?: 'NavigationLink', id: string } | null | undefined, navigation_link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlNavigationLinksByIdsQueryVariables = Exact<{
  ids: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlNavigationLinksByIdsQuery = { __typename?: 'Query', navigationLinks?: Array<{ __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPageBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPageBasicBySlugsQuery = { __typename?: 'Query', pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPageDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPageDetailBySlugsQuery = { __typename?: 'Query', pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, calendar_key?: string | null | undefined, assets?: Array<{ __typename?: 'ComponentAttachmentAssets', name: string, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPageInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlPageInfoQuery = { __typename?: 'Query', pageInfo?: { __typename?: 'PageInfo', title: string, description?: string | null | undefined } | null | undefined };

export type StrapiGqlPodcastConfigQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlPodcastConfigQuery = { __typename?: 'Query', podcastFeed?: { __typename?: 'PodcastFeed', id: string, title: string, subtitle: string, description: string, language: string, explicit: boolean, author: string, owner_name: string, owner_email: string, type: StrapiGqlEnum_Podcastfeed_Type, copyright: string, block: boolean, complete: boolean, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, category?: Array<{ __typename?: 'ComponentPodcastCategory', name: StrapiGqlEnum_Componentpodcastcategory_Name } | null | undefined> | null | undefined, blogs?: Array<{ __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlPodcastEpisodesBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcastEpisodesBasicBySlugsQuery = { __typename?: 'Query', podcastEpisodes?: Array<{ __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPodcastEpisodesDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcastEpisodesDetailBySlugsQuery = { __typename?: 'Query', podcastEpisodes?: Array<{ __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, explicit: boolean, episode: number, season: number, type: StrapiGqlEnum_Podcastepisode_Type, block: boolean, content?: Array<{ __typename?: 'UploadFile', mime: string, url: string, ext?: string | null | undefined, name: string, size: number } | null | undefined> | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, chapters?: Array<{ __typename: 'ComponentPodcastChapters', id: string, start: string, title: string, href?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, contributors?: Array<{ __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPodcasterBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcasterBasicBySlugsQuery = { __typename?: 'Query', podcasters?: Array<{ __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlPodcasterDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlPodcasterDetailBySlugsQuery = { __typename?: 'Query', podcasters?: Array<{ __typename?: 'Podcaster', id: string, slug?: string | null | undefined, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, podcast_episodes?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlSchoolSubjectBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlSchoolSubjectBasicBySlugsQuery = { __typename?: 'Query', subjects?: Array<{ __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlSchoolSubjectDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlSchoolSubjectDetailBySlugsQuery = { __typename?: 'Query', subjects?: Array<{ __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlSchoolSubjectInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlSchoolSubjectInfoQuery = { __typename?: 'Query', schoolSubjectInfo?: { __typename?: 'SchoolSubjectInfo', title: string, description?: string | null | undefined } | null | undefined };

export type StrapiGqlSearchResultQueryVariables = Exact<{
  pageSlugs?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  postSlugs?: Maybe<Array<Scalars['String']> | Scalars['String']>;
  navIds?: Maybe<Array<Scalars['String']> | Scalars['String']>;
}>;


export type StrapiGqlSearchResultQuery = { __typename?: 'Query', pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, blogEntries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, navigationLinks?: Array<{ __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlSectionSlideshowByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type StrapiGqlSectionSlideshowByIdQuery = { __typename?: 'Query', sectionSlideshow?: { __typename?: 'SectionSlideshow', title: string, id: string, entries: Array<{ __typename?: 'ComponentSlideshowSlideshowEntry', id: string, subtitle: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename?: 'ComponentSlideshowSlideshowEntryBlog', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, post?: { __typename: 'BlogEntry', slug: string } | null | undefined } | { __typename?: 'ComponentSlideshowSlideshowEntryPage', id: string, subtitle: string, label: string, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, page?: { __typename: 'Page', slug: string } | null | undefined } | null | undefined> } | null | undefined };

export type StrapiGqlTeacherBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlTeacherBasicBySlugsQuery = { __typename?: 'Query', teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string } | null | undefined> | null | undefined };

export type StrapiGqlTeacherDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlTeacherDetailBySlugsQuery = { __typename?: 'Query', teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string, biography?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined, subjects?: Array<{ __typename: 'Subject', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, working_groups?: Array<{ __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined, assets?: Array<{ __typename?: 'ComponentAttachmentAssets', name: string, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlTeacherInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlTeacherInfoQuery = { __typename?: 'Query', teacherInfo?: { __typename?: 'TeacherInfo', title: string, description?: string | null | undefined } | null | undefined };

export type StrapiGqlToolbarQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlToolbarQuery = { __typename?: 'Query', toolbar?: { __typename?: 'Toolbar', items?: Array<{ __typename: 'ComponentLinkItemText', name?: string | null | undefined, link?: string | null | undefined } | null | undefined> | null | undefined } | null | undefined };

export type StrapiGqlWorkingGroupBasicBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlWorkingGroupBasicBySlugsQuery = { __typename?: 'Query', workingGroups?: Array<{ __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlWorkingGroupDetailBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
  limit: Scalars['Int'];
  start: Scalars['Int'];
}>;


export type StrapiGqlWorkingGroupDetailBySlugsQuery = { __typename?: 'Query', workingGroups?: Array<{ __typename: 'WorkingGroup', id: string, slug: string, title: string, created_at: any, updated_at: any, teachers?: Array<{ __typename?: 'Teacher', id: string, slug: string, name: string } | null | undefined> | null | undefined, content?: Array<{ __typename: 'ComponentContentButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, link?: { __typename?: 'NavigationLink', id: string, title?: string | null | undefined, type?: Array<{ __typename: 'ComponentLinkTypeBlog', blog?: { __typename?: 'BlogCategory', name: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeGallery', gallery?: { __typename?: 'Gallery', title?: string | null | undefined, slug?: string | null | undefined } | null | undefined } | { __typename: 'ComponentLinkTypeMediaCenter', mediaCenter?: { __typename?: 'MediaCenter', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePage', page?: { __typename?: 'Page', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePodcast', podcastEpisode?: { __typename?: 'PodcastEpisode', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypePost', post?: { __typename?: 'BlogEntry', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeSchoolSubject', school_subject?: { __typename?: 'Subject', title: string, slug: string } | null | undefined } | { __typename: 'ComponentLinkTypeStrapi', URL: string } | { __typename: 'ComponentLinkTypeTeacher' } | { __typename: 'ComponentLinkTypeWeb', URL: string } | { __typename: 'ComponentLinkTypeWorkingGroup', working_group?: { __typename?: 'WorkingGroup', title: string, slug: string } | null | undefined } | null | undefined> | null | undefined } | null | undefined } | { __typename: 'ComponentContentDownloadButton', id: string, label: string, disabled?: boolean | null | undefined, alignment?: { __typename?: 'ComponentTypesAlignment', alignment?: StrapiGqlEnum_Componenttypesalignment_Alignment | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined, file?: { __typename?: 'UploadFile', url: string } | null | undefined } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeFact' } | { __typename: 'ComponentHomeNews', amount?: number | null | undefined, disabled?: boolean | null | undefined, pages?: Array<{ __typename: 'Page', id: string, created_at: any, updated_at: any, title: string, slug: string, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode' } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentSectionSubjectSelection' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlackboardSlideshow', id: string, disabled?: boolean | null | undefined, subjects?: Array<{ __typename?: 'Subject', title: string, slug: string, blackboard_image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined } | { __typename: 'ComponentSectionBlogSlideshow', id: string, limit: number, style: StrapiGqlEnum_Componentsectionblogslideshow_Style, disabled?: boolean | null | undefined, blog?: { __typename: 'BlogCategory', id: string, created_at: any, updated_at: any, name: string, slug: string, blog_entries?: Array<{ __typename: 'BlogEntry', id: string, title: string, slug: string, created_at: any, updated_at: any, published_at?: any | null | undefined, author: string, blog_category?: { __typename?: 'BlogCategory', slug: string, name: string } | null | undefined, content?: Array<{ __typename: 'ComponentContentButton' } | { __typename: 'ComponentContentDownloadButton' } | { __typename: 'ComponentContentImage', id: string, caption?: string | null | undefined, disabled?: boolean | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | { __typename: 'ComponentContentText', id: string, text?: string | null | undefined, disabled?: boolean | null | undefined } | { __typename: 'ComponentHomeCalendar' } | { __typename: 'ComponentHomeNews' } | { __typename: 'ComponentSectionBlackboardSlideshow' } | { __typename: 'ComponentSectionBlogSlideshow' } | { __typename: 'ComponentSectionFacts' } | { __typename: 'ComponentSectionFormerStudents' } | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionIFrame' } | { __typename: 'ComponentSectionLatestPodcastEpisode' } | { __typename: 'ComponentSectionMensaMax' } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow' } | { __typename: 'ComponentStudentSectionStudentQuote' } | null | undefined> | null | undefined } | null | undefined> | null | undefined } | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFacts', disabled?: boolean | null | undefined, facts?: Array<{ __typename?: 'ComponentHomeFact', number?: number | null | undefined, title?: string | null | undefined, subtitle?: string | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | { __typename: 'ComponentSectionFormerStudents', title: string, description?: string | null | undefined, limit: number, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionGallerySlideshow', id: string, limit: number, disabled?: boolean | null | undefined, gallery?: { __typename?: 'Gallery', id: string, slug?: string | null | undefined, title?: string | null | undefined, style: StrapiGqlEnum_Gallery_Style, images?: Array<{ __typename?: 'ComponentGalleryImage', id: string, title?: string | null | undefined, caption?: string | null | undefined, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined> | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionIFrame', id: string, URL: string, width: string, height: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionLatestPodcastEpisode', id: string, title: string, activeTab: StrapiGqlEnum_Componentsectionlatestpodcastepisode_Activetab, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionMensaMax', id: string, p: string, e: string, disabled?: boolean | null | undefined } | { __typename: 'ComponentSectionPodcastEpisode', disabled?: boolean | null | undefined, podcast_episode?: { __typename: 'PodcastEpisode', id: string, title: string, subtitle: string, slug: string, pubDate?: any | null | undefined, published_at?: any | null | undefined, description: string, episode: number, season: number, image?: { __typename?: 'UploadFile', formats?: any | null | undefined, alternativeText?: string | null | undefined, url: string } | null | undefined } | null | undefined } | { __typename: 'ComponentSectionSlideshow', disabled?: boolean | null | undefined, slideshow?: { __typename?: 'SectionSlideshow', id: string } | null | undefined } | { __typename: 'ComponentStudentSectionStudentQuote', id: string, title: string, limit: number, disabled?: boolean | null | undefined, color?: { __typename?: 'ComponentTypesColor', color?: StrapiGqlEnum_Componenttypescolor_Color | null | undefined } | null | undefined } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type StrapiGqlWorkingGroupInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlWorkingGroupInfoQuery = { __typename?: 'Query', workingGroupInfo?: { __typename?: 'WorkingGroupInfo', title: string, description?: string | null | undefined } | null | undefined };
