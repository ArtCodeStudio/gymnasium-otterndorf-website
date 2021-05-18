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
  /** A time string with format: HH:mm:ss.SSS */
  Time: any;
  /** Input type for dynamic zone items of Toolbar */
  ToolbarItemsDynamicZoneInput: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
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
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
};


export type StrapiGqlBlogEntryPagesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
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

export type StrapiGqlBlogEntryContentDynamicZone = StrapiGqlComponentContentText | StrapiGqlComponentContentImage | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionSlideshow;


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
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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
};

export type StrapiGqlComponentHomeNews = {
  __typename?: 'ComponentHomeNews';
  id: Scalars['ID'];
  amount?: Maybe<Scalars['Int']>;
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

export type StrapiGqlComponentLinkTypePage = {
  __typename?: 'ComponentLinkTypePage';
  id: Scalars['ID'];
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlComponentLinkTypePageInput = {
  page?: Maybe<Scalars['ID']>;
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

export type StrapiGqlComponentLinkTypeWeb = {
  __typename?: 'ComponentLinkTypeWeb';
  id: Scalars['ID'];
  URL: Scalars['String'];
};

export type StrapiGqlComponentLinkTypeWebInput = {
  URL?: Maybe<Scalars['String']>;
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
};

export type StrapiGqlComponentNavigationNavigationLevelEntryInput = {
  parent?: Maybe<Scalars['ID']>;
  navigation_link?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
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

export type StrapiGqlComponentSectionFactInput = {
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFactInput>>>;
  size?: Maybe<Scalars['Int']>;
};

export type StrapiGqlComponentSectionFacts = {
  __typename?: 'ComponentSectionFacts';
  id: Scalars['ID'];
  facts?: Maybe<Array<Maybe<StrapiGqlComponentHomeFact>>>;
  size: Scalars['Int'];
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

export type StrapiGqlComponentSectionSlideshow = {
  __typename?: 'ComponentSectionSlideshow';
  id: Scalars['ID'];
  slideshow?: Maybe<StrapiGqlSectionSlideshow>;
};

export type StrapiGqlComponentSectionSlideshowInput = {
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlComponentSidebarAssetInput = {
  file?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSidebarAssets = {
  __typename?: 'ComponentSidebarAssets';
  id: Scalars['ID'];
  file?: Maybe<StrapiGqlUploadFile>;
  name?: Maybe<Scalars['String']>;
};

export type StrapiGqlComponentSlideshowSlideshowEntry = {
  __typename?: 'ComponentSlideshowSlideshowEntry';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  subtitle?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlog = {
  __typename?: 'ComponentSlideshowSlideshowEntryBlog';
  id: Scalars['ID'];
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<StrapiGqlUploadFile>;
  post?: Maybe<StrapiGqlBlogEntry>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryBlogInput = {
  subtitle?: Maybe<Scalars['String']>;
  image?: Maybe<Scalars['ID']>;
  post?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryInput = {
  image?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryPage = {
  __typename?: 'ComponentSlideshowSlideshowEntryPage';
  id: Scalars['ID'];
  image?: Maybe<StrapiGqlUploadFile>;
  subtitle?: Maybe<Scalars['String']>;
  page?: Maybe<StrapiGqlPage>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColor>;
};

export type StrapiGqlComponentSlideshowSlideshowEntryPageInput = {
  image?: Maybe<Scalars['ID']>;
  subtitle?: Maybe<Scalars['String']>;
  page?: Maybe<Scalars['ID']>;
  label?: Maybe<Scalars['String']>;
  color?: Maybe<StrapiGqlComponentTypesColorInput>;
};

export type StrapiGqlComponentTypesColor = {
  __typename?: 'ComponentTypesColor';
  id: Scalars['ID'];
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
};

export type StrapiGqlComponentTypesColorInput = {
  color?: Maybe<StrapiGqlEnum_Componenttypescolor_Color>;
};



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
  published_at?: Maybe<Scalars['DateTime']>;
};

export type StrapiGqlFooterInput = {
  map_image?: Maybe<Scalars['ID']>;
  map_link?: Maybe<Scalars['String']>;
  contact_info?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlGallery = {
  __typename?: 'Gallery';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImage>>>;
  published_at?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlGalleryConnectionPublished_At = {
  __typename?: 'GalleryConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlGalleryConnection>;
};

export type StrapiGqlGalleryConnectionSlug = {
  __typename?: 'GalleryConnectionSlug';
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
  published_at?: Maybe<Array<Maybe<StrapiGqlGalleryConnectionPublished_At>>>;
};

export type StrapiGqlGalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlComponentGalleryImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlHomeSectionsDynamicZone = StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionFacts | StrapiGqlComponentContentText | StrapiGqlComponentContentImage | StrapiGqlComponentHomeNews | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentHomeCalendar;


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

export type StrapiGqlMorph = StrapiGqlUsersPermissionsMe | StrapiGqlUsersPermissionsMeRole | StrapiGqlUsersPermissionsLoginPayload | StrapiGqlUserPermissionsPasswordPayload | StrapiGqlBlogCategory | StrapiGqlBlogCategoryConnection | StrapiGqlBlogCategoryAggregator | StrapiGqlBlogCategoryGroupBy | StrapiGqlBlogCategoryConnectionId | StrapiGqlBlogCategoryConnectionCreated_At | StrapiGqlBlogCategoryConnectionUpdated_At | StrapiGqlBlogCategoryConnectionName | StrapiGqlBlogCategoryConnectionSlug | StrapiGqlCreateBlogCategoryPayload | StrapiGqlUpdateBlogCategoryPayload | StrapiGqlDeleteBlogCategoryPayload | StrapiGqlBlogEntry | StrapiGqlBlogEntryConnection | StrapiGqlBlogEntryAggregator | StrapiGqlBlogEntryGroupBy | StrapiGqlBlogEntryConnectionId | StrapiGqlBlogEntryConnectionCreated_At | StrapiGqlBlogEntryConnectionUpdated_At | StrapiGqlBlogEntryConnectionTitle | StrapiGqlBlogEntryConnectionBlog_Category | StrapiGqlBlogEntryConnectionSlug | StrapiGqlBlogEntryConnectionAuthor | StrapiGqlBlogEntryConnectionPublished_At | StrapiGqlCreateBlogEntryPayload | StrapiGqlUpdateBlogEntryPayload | StrapiGqlDeleteBlogEntryPayload | StrapiGqlFooter | StrapiGqlUpdateFooterPayload | StrapiGqlDeleteFooterPayload | StrapiGqlGallery | StrapiGqlGalleryConnection | StrapiGqlGalleryAggregator | StrapiGqlGalleryGroupBy | StrapiGqlGalleryConnectionId | StrapiGqlGalleryConnectionCreated_At | StrapiGqlGalleryConnectionUpdated_At | StrapiGqlGalleryConnectionTitle | StrapiGqlGalleryConnectionSlug | StrapiGqlGalleryConnectionPublished_At | StrapiGqlCreateGalleryPayload | StrapiGqlUpdateGalleryPayload | StrapiGqlDeleteGalleryPayload | StrapiGqlHome | StrapiGqlUpdateHomePayload | StrapiGqlDeleteHomePayload | StrapiGqlMenu | StrapiGqlUpdateMenuPayload | StrapiGqlDeleteMenuPayload | StrapiGqlNavigationLink | StrapiGqlNavigationLinkConnection | StrapiGqlNavigationLinkAggregator | StrapiGqlNavigationLinkGroupBy | StrapiGqlNavigationLinkConnectionId | StrapiGqlNavigationLinkConnectionCreated_At | StrapiGqlNavigationLinkConnectionUpdated_At | StrapiGqlNavigationLinkConnectionTitle | StrapiGqlCreateNavigationLinkPayload | StrapiGqlUpdateNavigationLinkPayload | StrapiGqlDeleteNavigationLinkPayload | StrapiGqlPage | StrapiGqlPageConnection | StrapiGqlPageAggregator | StrapiGqlPageGroupBy | StrapiGqlPageConnectionId | StrapiGqlPageConnectionCreated_At | StrapiGqlPageConnectionUpdated_At | StrapiGqlPageConnectionTitle | StrapiGqlPageConnectionSlug | StrapiGqlPageConnectionCalendar_Key | StrapiGqlPageConnectionPublished_At | StrapiGqlCreatePagePayload | StrapiGqlUpdatePagePayload | StrapiGqlDeletePagePayload | StrapiGqlSectionSlideshow | StrapiGqlSectionSlideshowConnection | StrapiGqlSectionSlideshowAggregator | StrapiGqlSectionSlideshowGroupBy | StrapiGqlSectionSlideshowConnectionId | StrapiGqlSectionSlideshowConnectionCreated_At | StrapiGqlSectionSlideshowConnectionUpdated_At | StrapiGqlSectionSlideshowConnectionTitle | StrapiGqlCreateSectionSlideshowPayload | StrapiGqlUpdateSectionSlideshowPayload | StrapiGqlDeleteSectionSlideshowPayload | StrapiGqlSubject | StrapiGqlSubjectConnection | StrapiGqlSubjectAggregator | StrapiGqlSubjectGroupBy | StrapiGqlSubjectConnectionId | StrapiGqlSubjectConnectionCreated_At | StrapiGqlSubjectConnectionUpdated_At | StrapiGqlSubjectConnectionTitle | StrapiGqlSubjectConnectionSlug | StrapiGqlSubjectConnectionPublished_At | StrapiGqlCreateSubjectPayload | StrapiGqlUpdateSubjectPayload | StrapiGqlDeleteSubjectPayload | StrapiGqlTeacher | StrapiGqlTeacherConnection | StrapiGqlTeacherAggregator | StrapiGqlTeacherGroupBy | StrapiGqlTeacherConnectionId | StrapiGqlTeacherConnectionCreated_At | StrapiGqlTeacherConnectionUpdated_At | StrapiGqlTeacherConnectionImage | StrapiGqlTeacherConnectionName | StrapiGqlTeacherConnectionFirst_Name | StrapiGqlCreateTeacherPayload | StrapiGqlUpdateTeacherPayload | StrapiGqlDeleteTeacherPayload | StrapiGqlToolbar | StrapiGqlUpdateToolbarPayload | StrapiGqlDeleteToolbarPayload | StrapiGqlI18NLocale | StrapiGqlUploadFile | StrapiGqlUploadFileConnection | StrapiGqlUploadFileAggregator | StrapiGqlUploadFileAggregatorSum | StrapiGqlUploadFileAggregatorAvg | StrapiGqlUploadFileAggregatorMin | StrapiGqlUploadFileAggregatorMax | StrapiGqlUploadFileGroupBy | StrapiGqlUploadFileConnectionId | StrapiGqlUploadFileConnectionCreated_At | StrapiGqlUploadFileConnectionUpdated_At | StrapiGqlUploadFileConnectionName | StrapiGqlUploadFileConnectionAlternativeText | StrapiGqlUploadFileConnectionCaption | StrapiGqlUploadFileConnectionWidth | StrapiGqlUploadFileConnectionHeight | StrapiGqlUploadFileConnectionFormats | StrapiGqlUploadFileConnectionHash | StrapiGqlUploadFileConnectionExt | StrapiGqlUploadFileConnectionMime | StrapiGqlUploadFileConnectionSize | StrapiGqlUploadFileConnectionUrl | StrapiGqlUploadFileConnectionPreviewUrl | StrapiGqlUploadFileConnectionProvider | StrapiGqlUploadFileConnectionProvider_Metadata | StrapiGqlDeleteFilePayload | StrapiGqlUsersPermissionsPermission | StrapiGqlUsersPermissionsRole | StrapiGqlUsersPermissionsRoleConnection | StrapiGqlUsersPermissionsRoleAggregator | StrapiGqlUsersPermissionsRoleGroupBy | StrapiGqlUsersPermissionsRoleConnectionId | StrapiGqlUsersPermissionsRoleConnectionName | StrapiGqlUsersPermissionsRoleConnectionDescription | StrapiGqlUsersPermissionsRoleConnectionType | StrapiGqlCreateRolePayload | StrapiGqlUpdateRolePayload | StrapiGqlDeleteRolePayload | StrapiGqlUsersPermissionsUser | StrapiGqlUsersPermissionsUserConnection | StrapiGqlUsersPermissionsUserAggregator | StrapiGqlUsersPermissionsUserGroupBy | StrapiGqlUsersPermissionsUserConnectionId | StrapiGqlUsersPermissionsUserConnectionCreated_At | StrapiGqlUsersPermissionsUserConnectionUpdated_At | StrapiGqlUsersPermissionsUserConnectionUsername | StrapiGqlUsersPermissionsUserConnectionEmail | StrapiGqlUsersPermissionsUserConnectionProvider | StrapiGqlUsersPermissionsUserConnectionConfirmed | StrapiGqlUsersPermissionsUserConnectionBlocked | StrapiGqlUsersPermissionsUserConnectionRole | StrapiGqlCreateUserPayload | StrapiGqlUpdateUserPayload | StrapiGqlDeleteUserPayload | StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentGalleryImage | StrapiGqlComponentHomeCalendar | StrapiGqlComponentHomeFact | StrapiGqlComponentHomeNews | StrapiGqlComponentLinkItemText | StrapiGqlComponentLinkTypeBlog | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeSchulfach | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentNavigationNavigationEntry | StrapiGqlComponentNavigationNavigationLevelEntry | StrapiGqlComponentNavigationNavigationSection | StrapiGqlComponentSectionFacts | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSidebarAssets | StrapiGqlComponentSlideshowSlideshowEntryBlog | StrapiGqlComponentSlideshowSlideshowEntryPage | StrapiGqlComponentSlideshowSlideshowEntry | StrapiGqlComponentTypesColor;

export type StrapiGqlMutation = {
  __typename?: 'Mutation';
  createBlogCategory?: Maybe<StrapiGqlCreateBlogCategoryPayload>;
  updateBlogCategory?: Maybe<StrapiGqlUpdateBlogCategoryPayload>;
  deleteBlogCategory?: Maybe<StrapiGqlDeleteBlogCategoryPayload>;
  createBlogEntry?: Maybe<StrapiGqlCreateBlogEntryPayload>;
  updateBlogEntry?: Maybe<StrapiGqlUpdateBlogEntryPayload>;
  deleteBlogEntry?: Maybe<StrapiGqlDeleteBlogEntryPayload>;
  updateFooter?: Maybe<StrapiGqlUpdateFooterPayload>;
  deleteFooter?: Maybe<StrapiGqlDeleteFooterPayload>;
  createGallery?: Maybe<StrapiGqlCreateGalleryPayload>;
  updateGallery?: Maybe<StrapiGqlUpdateGalleryPayload>;
  deleteGallery?: Maybe<StrapiGqlDeleteGalleryPayload>;
  updateHome?: Maybe<StrapiGqlUpdateHomePayload>;
  deleteHome?: Maybe<StrapiGqlDeleteHomePayload>;
  updateMenu?: Maybe<StrapiGqlUpdateMenuPayload>;
  deleteMenu?: Maybe<StrapiGqlDeleteMenuPayload>;
  createNavigationLink?: Maybe<StrapiGqlCreateNavigationLinkPayload>;
  updateNavigationLink?: Maybe<StrapiGqlUpdateNavigationLinkPayload>;
  deleteNavigationLink?: Maybe<StrapiGqlDeleteNavigationLinkPayload>;
  createPage?: Maybe<StrapiGqlCreatePagePayload>;
  updatePage?: Maybe<StrapiGqlUpdatePagePayload>;
  deletePage?: Maybe<StrapiGqlDeletePagePayload>;
  createSectionSlideshow?: Maybe<StrapiGqlCreateSectionSlideshowPayload>;
  updateSectionSlideshow?: Maybe<StrapiGqlUpdateSectionSlideshowPayload>;
  deleteSectionSlideshow?: Maybe<StrapiGqlDeleteSectionSlideshowPayload>;
  createSubject?: Maybe<StrapiGqlCreateSubjectPayload>;
  updateSubject?: Maybe<StrapiGqlUpdateSubjectPayload>;
  deleteSubject?: Maybe<StrapiGqlDeleteSubjectPayload>;
  createTeacher?: Maybe<StrapiGqlCreateTeacherPayload>;
  updateTeacher?: Maybe<StrapiGqlUpdateTeacherPayload>;
  deleteTeacher?: Maybe<StrapiGqlDeleteTeacherPayload>;
  updateToolbar?: Maybe<StrapiGqlUpdateToolbarPayload>;
  deleteToolbar?: Maybe<StrapiGqlDeleteToolbarPayload>;
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


export type StrapiGqlMutationUpdateFooterArgs = {
  input?: Maybe<StrapiGqlUpdateFooterInput>;
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


export type StrapiGqlMutationCreatePageArgs = {
  input?: Maybe<StrapiGqlCreatePageInput>;
};


export type StrapiGqlMutationUpdatePageArgs = {
  input?: Maybe<StrapiGqlUpdatePageInput>;
};


export type StrapiGqlMutationDeletePageArgs = {
  input?: Maybe<StrapiGqlDeletePageInput>;
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

export type StrapiGqlNavigationLinkTypeDynamicZone = StrapiGqlComponentLinkTypeWeb | StrapiGqlComponentLinkTypeSchulfach | StrapiGqlComponentLinkTypePage | StrapiGqlComponentLinkTypeStrapi | StrapiGqlComponentLinkTypePost | StrapiGqlComponentLinkTypeBlog;


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
  published_at?: Maybe<Scalars['DateTime']>;
  blog_categories?: Maybe<Array<Maybe<StrapiGqlBlogCategory>>>;
  blog_entries?: Maybe<Array<Maybe<StrapiGqlBlogEntry>>>;
};


export type StrapiGqlPageBlog_CategoriesArgs = {
  sort?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  start?: Maybe<Scalars['Int']>;
  where?: Maybe<Scalars['JSON']>;
};


export type StrapiGqlPageBlog_EntriesArgs = {
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

export type StrapiGqlPageAssetsDynamicZone = StrapiGqlComponentSidebarAssets;


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

export type StrapiGqlPageConnectionPublished_At = {
  __typename?: 'PageConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlPageContentDynamicZone = StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentSectionSlideshow | StrapiGqlComponentSectionGallerySlideshow;


export type StrapiGqlPageGroupBy = {
  __typename?: 'PageGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlPageConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlPageConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlPageConnectionSlug>>>;
  calendar_key?: Maybe<Array<Maybe<StrapiGqlPageConnectionCalendar_Key>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlPageConnectionPublished_At>>>;
};

export type StrapiGqlPageInput = {
  title: Scalars['String'];
  slug: Scalars['String'];
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  calendar_key?: Maybe<Scalars['String']>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
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
  footer?: Maybe<StrapiGqlFooter>;
  gallery?: Maybe<StrapiGqlGallery>;
  galleries?: Maybe<Array<Maybe<StrapiGqlGallery>>>;
  galleriesConnection?: Maybe<StrapiGqlGalleryConnection>;
  home?: Maybe<StrapiGqlHome>;
  menu?: Maybe<StrapiGqlMenu>;
  navigationLink?: Maybe<StrapiGqlNavigationLink>;
  navigationLinks?: Maybe<Array<Maybe<StrapiGqlNavigationLink>>>;
  navigationLinksConnection?: Maybe<StrapiGqlNavigationLinkConnection>;
  page?: Maybe<StrapiGqlPage>;
  pages?: Maybe<Array<Maybe<StrapiGqlPage>>>;
  pagesConnection?: Maybe<StrapiGqlPageConnection>;
  sectionSlideshow?: Maybe<StrapiGqlSectionSlideshow>;
  sectionSlideshows?: Maybe<Array<Maybe<StrapiGqlSectionSlideshow>>>;
  sectionSlideshowsConnection?: Maybe<StrapiGqlSectionSlideshowConnection>;
  subject?: Maybe<StrapiGqlSubject>;
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
  subjectsConnection?: Maybe<StrapiGqlSubjectConnection>;
  teacher?: Maybe<StrapiGqlTeacher>;
  teachers?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  teachersConnection?: Maybe<StrapiGqlTeacherConnection>;
  toolbar?: Maybe<StrapiGqlToolbar>;
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


export type StrapiGqlQueryFooterArgs = {
  publicationState?: Maybe<StrapiGqlPublicationState>;
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

export type StrapiGqlSectionSlideshow = {
  __typename?: 'SectionSlideshow';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  entries?: Maybe<Array<Maybe<StrapiGqlSectionSlideshowEntriesDynamicZone>>>;
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
  entries?: Maybe<Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>>;
  title: Scalars['String'];
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlSubject = {
  __typename?: 'Subject';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  title?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Maybe<StrapiGqlSubjectContentDynamicZone>>>;
  slug: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlSubjectConnectionPublished_At = {
  __typename?: 'SubjectConnectionPublished_at';
  key?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlSubjectContentDynamicZone = StrapiGqlComponentContentImage | StrapiGqlComponentContentText | StrapiGqlComponentSectionGallerySlideshow | StrapiGqlComponentSectionSlideshow;


export type StrapiGqlSubjectGroupBy = {
  __typename?: 'SubjectGroupBy';
  id?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionId>>>;
  created_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionCreated_At>>>;
  updated_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionUpdated_At>>>;
  title?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionTitle>>>;
  slug?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionSlug>>>;
  published_at?: Maybe<Array<Maybe<StrapiGqlSubjectConnectionPublished_At>>>;
};

export type StrapiGqlSubjectInput = {
  title?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  slug: Scalars['String'];
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlTeacher = {
  __typename?: 'Teacher';
  id: Scalars['ID'];
  created_at: Scalars['DateTime'];
  updated_at: Scalars['DateTime'];
  image?: Maybe<StrapiGqlUploadFile>;
  name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<StrapiGqlSubject>>>;
};


export type StrapiGqlTeacherSubjectsArgs = {
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

export type StrapiGqlTeacherConnection = {
  __typename?: 'TeacherConnection';
  values?: Maybe<Array<Maybe<StrapiGqlTeacher>>>;
  groupBy?: Maybe<StrapiGqlTeacherGroupBy>;
  aggregate?: Maybe<StrapiGqlTeacherAggregator>;
};

export type StrapiGqlTeacherConnectionCreated_At = {
  __typename?: 'TeacherConnectionCreated_at';
  key?: Maybe<Scalars['DateTime']>;
  connection?: Maybe<StrapiGqlTeacherConnection>;
};

export type StrapiGqlTeacherConnectionFirst_Name = {
  __typename?: 'TeacherConnectionFirst_name';
  key?: Maybe<Scalars['String']>;
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
  first_name?: Maybe<Array<Maybe<StrapiGqlTeacherConnectionFirst_Name>>>;
};

export type StrapiGqlTeacherInput = {
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type StrapiGqlCreateGalleryInput = {
  data?: Maybe<StrapiGqlGalleryInput>;
};

export type StrapiGqlCreateGalleryPayload = {
  __typename?: 'createGalleryPayload';
  gallery?: Maybe<StrapiGqlGallery>;
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

export type StrapiGqlDeletePageInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeletePagePayload = {
  __typename?: 'deletePagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlDeleteRoleInput = {
  where?: Maybe<StrapiGqlInputId>;
};

export type StrapiGqlDeleteRolePayload = {
  __typename?: 'deleteRolePayload';
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
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
  pages?: Maybe<Array<Maybe<Scalars['ID']>>>;
  author?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
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

export type StrapiGqlEditComponentLinkTypePageInput = {
  id?: Maybe<Scalars['ID']>;
  page?: Maybe<Scalars['ID']>;
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

export type StrapiGqlEditComponentLinkTypeWebInput = {
  id?: Maybe<Scalars['ID']>;
  URL?: Maybe<Scalars['String']>;
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
};

export type StrapiGqlEditComponentNavigationNavigationSectionInput = {
  id?: Maybe<Scalars['ID']>;
  title?: Maybe<Scalars['String']>;
  navigation_entry?: Maybe<Array<Maybe<StrapiGqlEditComponentNavigationNavigationEntryInput>>>;
};

export type StrapiGqlEditComponentSectionFactInput = {
  id?: Maybe<Scalars['ID']>;
  facts?: Maybe<Array<Maybe<StrapiGqlEditComponentHomeFactInput>>>;
  size?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentSectionGallerySlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  gallery?: Maybe<Scalars['ID']>;
  limit?: Maybe<Scalars['Int']>;
};

export type StrapiGqlEditComponentSectionSlideshowInput = {
  id?: Maybe<Scalars['ID']>;
  slideshow?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditComponentSidebarAssetInput = {
  id?: Maybe<Scalars['ID']>;
  file?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
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
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditGalleryInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<StrapiGqlEditComponentGalleryImageInput>>>;
  published_at?: Maybe<Scalars['DateTime']>;
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

export type StrapiGqlEditPageInput = {
  title?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  content?: Maybe<Array<Scalars['PageContentDynamicZoneInput']>>;
  calendar_key?: Maybe<Scalars['String']>;
  blog_categories?: Maybe<Array<Maybe<Scalars['ID']>>>;
  assets?: Maybe<Array<Scalars['PageAssetsDynamicZoneInput']>>;
  blog_entries?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type StrapiGqlEditSectionSlideshowInput = {
  entries?: Maybe<Array<Scalars['SectionSlideshowEntriesDynamicZoneInput']>>;
  title?: Maybe<Scalars['String']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditSubjectInput = {
  title?: Maybe<Scalars['String']>;
  teachers?: Maybe<Array<Maybe<Scalars['ID']>>>;
  content?: Maybe<Array<Scalars['SubjectContentDynamicZoneInput']>>;
  slug?: Maybe<Scalars['String']>;
  published_at?: Maybe<Scalars['DateTime']>;
  created_by?: Maybe<Scalars['ID']>;
  updated_by?: Maybe<Scalars['ID']>;
};

export type StrapiGqlEditTeacherInput = {
  image?: Maybe<Scalars['ID']>;
  name?: Maybe<Scalars['String']>;
  first_name?: Maybe<Scalars['String']>;
  subjects?: Maybe<Array<Maybe<Scalars['ID']>>>;
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

export type StrapiGqlUpdateFooterInput = {
  data?: Maybe<StrapiGqlEditFooterInput>;
};

export type StrapiGqlUpdateFooterPayload = {
  __typename?: 'updateFooterPayload';
  footer?: Maybe<StrapiGqlFooter>;
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

export type StrapiGqlUpdatePageInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditPageInput>;
};

export type StrapiGqlUpdatePagePayload = {
  __typename?: 'updatePagePayload';
  page?: Maybe<StrapiGqlPage>;
};

export type StrapiGqlUpdateRoleInput = {
  where?: Maybe<StrapiGqlInputId>;
  data?: Maybe<StrapiGqlEditRoleInput>;
};

export type StrapiGqlUpdateRolePayload = {
  __typename?: 'updateRolePayload';
  role?: Maybe<StrapiGqlUsersPermissionsRole>;
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

export type StrapiGqlBlogEntryFragmentFragment = (
  { __typename?: 'BlogEntry' }
  & Pick<StrapiGqlBlogEntry, 'id' | 'title' | 'slug' | 'created_at' | 'updated_at' | 'published_at'>
  & { blog_category?: Maybe<(
    { __typename?: 'BlogCategory' }
    & Pick<StrapiGqlBlogCategory, 'name'>
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
  )>>> }
);

export type StrapiGqlComponentContentImageFragmentFragment = (
  { __typename?: 'ComponentContentImage' }
  & Pick<StrapiGqlComponentContentImage, 'id' | 'caption'>
  & { image?: Maybe<(
    { __typename?: 'UploadFile' }
    & Pick<StrapiGqlUploadFile, 'formats'>
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
    & Pick<StrapiGqlUploadFile, 'formats'>
  )> }
);

export type StrapiGqlComponentHomeNewsFragmentFragment = (
  { __typename?: 'ComponentHomeNews' }
  & Pick<StrapiGqlComponentHomeNews, 'amount'>
);

export type StrapiGqlComponentSectionFactsFragmentFragment = (
  { __typename?: 'ComponentSectionFacts' }
  & Pick<StrapiGqlComponentSectionFacts, 'size'>
  & { facts?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentHomeFact' }
    & Pick<StrapiGqlComponentHomeFact, 'number' | 'title' | 'subtitle'>
  )>>> }
);

export type StrapiGqlComponentSectionGallerySlideshowFragmentFragment = (
  { __typename?: 'ComponentSectionGallerySlideshow' }
  & Pick<StrapiGqlComponentSectionGallerySlideshow, 'id' | 'limit'>
  & { gallery?: Maybe<(
    { __typename?: 'Gallery' }
    & StrapiGqlGalleryFragmentFragment
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
    & Pick<StrapiGqlUploadFile, 'formats'>
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & Pick<StrapiGqlComponentTypesColor, 'color'>
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
    & Pick<StrapiGqlUploadFile, 'formats'>
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & Pick<StrapiGqlComponentTypesColor, 'color'>
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
    & Pick<StrapiGqlUploadFile, 'formats'>
  )>, color?: Maybe<(
    { __typename?: 'ComponentTypesColor' }
    & Pick<StrapiGqlComponentTypesColor, 'color'>
  )> }
);

export type StrapiGqlGalleryFragmentFragment = (
  { __typename?: 'Gallery' }
  & Pick<StrapiGqlGallery, 'id' | 'slug' | 'title'>
  & { images?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentGalleryImage' }
    & StrapiGqlComponentGalleryImageFragmentFragment
  )>>> }
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
    & Pick<StrapiGqlComponentHomeNews, 'amount'>
  ) | (
    { __typename: 'ComponentSectionGallerySlideshow' }
    & StrapiGqlComponentSectionGallerySlideshowFragmentFragment
  ) | { __typename: 'ComponentHomeCalendar' }>>> }
);

export type StrapiGqlMenuFragmentFragment = (
  { __typename?: 'Menu' }
  & { entries?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentNavigationNavigationLevelEntry' }
    & Pick<StrapiGqlComponentNavigationNavigationLevelEntry, 'id' | 'title'>
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
  )>>> }
);

export type StrapiGqlPageFragmentFragment = (
  { __typename?: 'Page' }
  & Pick<StrapiGqlPage, 'id' | 'created_at' | 'updated_at' | 'title' | 'slug' | 'calendar_key'>
  & { assets?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentSidebarAssets' }
    & Pick<StrapiGqlComponentSidebarAssets, 'name'>
    & { file?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<StrapiGqlUploadFile, 'url'>
    )> }
  )>>>, blog_entries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryFragmentFragment
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
  )>>> }
);

export type StrapiGqlSchoolSubjectFragmentFragment = (
  { __typename?: 'Subject' }
  & Pick<StrapiGqlSubject, 'id' | 'created_at' | 'updated_at' | 'title' | 'slug'>
  & { content?: Maybe<Array<Maybe<(
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
  )>>> }
);

export type StrapiGqlSectionSlideshowFragmentFragment = (
  { __typename?: 'SectionSlideshow' }
  & Pick<StrapiGqlSectionSlideshow, 'title' | 'id'>
  & { entries?: Maybe<Array<Maybe<(
    { __typename?: 'ComponentSlideshowSlideshowEntry' }
    & StrapiGqlComponentSlideshowEntryFragmentFragment
  ) | (
    { __typename?: 'ComponentSlideshowSlideshowEntryBlog' }
    & StrapiGqlComponentSlideshowEntryBlogFragmentFragment
  ) | (
    { __typename?: 'ComponentSlideshowSlideshowEntryPage' }
    & StrapiGqlComponentSlideshowEntryPageFragmentFragment
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

export type StrapiGqlBlogEntriesBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlBlogEntriesBySlugsQuery = (
  { __typename?: 'Query' }
  & { blogEntries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryFragmentFragment
  )>>> }
);

export type StrapiGqlFooterQueryVariables = Exact<{ [key: string]: never; }>;


export type StrapiGqlFooterQuery = (
  { __typename?: 'Query' }
  & { footer?: Maybe<(
    { __typename?: 'Footer' }
    & Pick<StrapiGqlFooter, 'map_link' | 'contact_info'>
    & { map_image?: Maybe<(
      { __typename?: 'UploadFile' }
      & Pick<StrapiGqlUploadFile, 'url' | 'alternativeText'>
    )> }
  )> }
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

export type StrapiGqlNewsQueryVariables = Exact<{
  amount: Scalars['Int'];
}>;


export type StrapiGqlNewsQuery = (
  { __typename?: 'Query' }
  & { blogEntries?: Maybe<Array<Maybe<(
    { __typename: 'BlogEntry' }
    & Pick<StrapiGqlBlogEntry, 'created_at' | 'title' | 'slug' | 'author'>
    & { content?: Maybe<Array<Maybe<{ __typename: 'ComponentContentText' } | (
      { __typename: 'ComponentContentImage' }
      & { image?: Maybe<(
        { __typename?: 'UploadFile' }
        & Pick<StrapiGqlUploadFile, 'alternativeText' | 'url' | 'formats'>
      )> }
    ) | { __typename: 'ComponentSectionGallerySlideshow' } | { __typename: 'ComponentSectionSlideshow' }>>> }
  )>>> }
);

export type StrapiGqlPageBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlPageBySlugsQuery = (
  { __typename?: 'Query' }
  & { pages?: Maybe<Array<Maybe<(
    { __typename?: 'Page' }
    & StrapiGqlPageFragmentFragment
  )>>> }
);

export type StrapiGqlSchoolSubjectBySlugsQueryVariables = Exact<{
  slugs: Array<Maybe<Scalars['String']>> | Maybe<Scalars['String']>;
}>;


export type StrapiGqlSchoolSubjectBySlugsQuery = (
  { __typename?: 'Query' }
  & { subjects?: Maybe<Array<Maybe<(
    { __typename?: 'Subject' }
    & StrapiGqlSchoolSubjectFragmentFragment
  )>>> }
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
    & StrapiGqlPageFragmentFragment
  )>>>, blogEntries?: Maybe<Array<Maybe<(
    { __typename?: 'BlogEntry' }
    & StrapiGqlBlogEntryFragmentFragment
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
