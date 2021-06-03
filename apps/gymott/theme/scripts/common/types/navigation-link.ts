export interface NavigationLink {
  type: string;
  id: string;
  label: string;
  href?: string;
  children: NavigationLink[];
  hideInSidebar: boolean;
}
