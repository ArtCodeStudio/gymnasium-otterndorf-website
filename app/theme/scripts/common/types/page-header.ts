import { Breadcrumb } from "./breadcrumb";
import { TeacherBasic } from "./teacher-basic";
import { SchoolSubject } from "./school-subject";

export interface PageHeader {
  title: string;
  breadcrumbs: Breadcrumb[];
  teachers?: TeacherBasic[];
  schoolSubjects?: SchoolSubject[];
  updatedAt?: string;
  author?: string;
}
