import { Breadcrumb } from "./breadcrumb";
import { TeacherBasic } from "./teacher-basic";

export interface PageHeader {
  title: string;
  breadcrumbs: Breadcrumb[];
  teachers?: TeacherBasic[];
  updatedAt?: string;
}
