import { SectionType } from "./section-type";
import { Post } from "./post";
import { Page } from "./page";
import { SearchNamespace } from "./search-namespace";
import {
  StrapiGqlSchoolSubjectDetailFragmentFragment,
  StrapiGqlHome,
  StrapiGqlTeacherDetailFragmentFragment,
  StrapiGqlPodcastEpisodeDetailFragmentFragment,
  StrapiGqlPodcastFeed,
} from "./strapi-gql";

export type EntryType =
  | SearchNamespace
  | SectionType
  | Post["__typename"]
  | Page["__typename"]
  | StrapiGqlHome["__typename"]
  | StrapiGqlSchoolSubjectDetailFragmentFragment["__typename"]
  | StrapiGqlTeacherDetailFragmentFragment["__typename"]
  | StrapiGqlPodcastEpisodeDetailFragmentFragment["__typename"]
  | StrapiGqlPodcastFeed["__typename"];
