import { SectionType } from "./section-type";
import { Post } from "./post";
import { Page } from "./page";
import { SearchNamespace } from "./search-namespace";
import {
  StrapiGqlSchoolSubjectFragmentFragment,
  StrapiGqlHome,
  StrapiGqlTeacherDetailFragmentFragment,
} from "./strapi-gql";

export type EntryType =
  | SearchNamespace
  | SectionType
  | Post["__typename"]
  | Page["__typename"]
  | StrapiGqlHome["__typename"]
  | StrapiGqlSchoolSubjectFragmentFragment["__typename"]
  | StrapiGqlTeacherDetailFragmentFragment["__typename"];
