export interface SideNavItem {
  title: string;
  link: string;
  children?: Array<{ subtitle: string; sublink: string }>;
}
