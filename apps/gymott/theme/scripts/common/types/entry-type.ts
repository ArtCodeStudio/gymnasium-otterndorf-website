import { SectionType } from "./section-type";
import { Post } from "./post";
import { SearchNamespace } from "./search-namespace";
import {
  StrapiGqlPage,
  StrapiGqlSchoolSubjectFragmentFragment,
  StrapiGqlHome,
  StrapiGqlTeacherDetailFragmentFragment,
} from "./strapi-gql";

export type EntryType =
  | SearchNamespace
  | SectionType
  | Post["__typename"]
  | StrapiGqlPage["__typename"]
  | StrapiGqlHome["__typename"]
  | StrapiGqlSchoolSubjectFragmentFragment["__typename"]
  | StrapiGqlTeacherDetailFragmentFragment["__typename"];
