import { NavigationLink } from "./navigation-link";
import { Options, Instance } from "@popperjs/core";

export interface NavigationLinkDropdown extends NavigationLink {
  handle?: string;
  options?: Partial<Options>;
  popper?: Instance;
  isDropdown?: boolean;
  children: NavigationLinkDropdown[];
  parent?: NavigationLinkDropdown;
  level?: number;
  toggleEl?: HTMLElement;
  menuEl?: HTMLElement;
  show?: boolean;
}
