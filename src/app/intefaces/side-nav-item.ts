export interface SideNavItem {
  title: string;
  link: string;
  children?: Array<{ title: string; link: string }>;
}
