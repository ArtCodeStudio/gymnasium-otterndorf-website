import { ENTRY_TYPE } from "../constants";
export interface Breadcrumb {
  url?: string;
  active?: boolean;
  label?: string;
  type: ENTRY_TYPE;
}
