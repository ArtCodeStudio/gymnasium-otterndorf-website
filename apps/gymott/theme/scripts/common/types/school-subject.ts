import {
  StrapiGqlSchoolSubjectDetailFragmentFragment,
  StrapiGqlSchoolSubjectBasicFragmentFragment,
} from "./strapi-gql";

export type SchoolSubject = StrapiGqlSchoolSubjectBasicFragmentFragment &
  Partial<StrapiGqlSchoolSubjectDetailFragmentFragment>;
