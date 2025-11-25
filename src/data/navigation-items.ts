export interface NavigationLinkItem {
  readonly id?: string;
  readonly title: string;
  readonly href: string;
  readonly description?: string;
  readonly icon?: string;
  readonly className?: string;
}

export interface NavigationFeaturedItem {
  readonly title: string;
  readonly href: string;
  readonly description: string;
  readonly className?: string;
}

export type NavigationContentLayout =
  | "grid-featured"
  | "grid-list"
  | "list-detailed"
  | "list-simple"
  | "list-icon";

export interface NavigationContent {
  readonly layout: NavigationContentLayout;
  readonly gridClassName?: string;
  readonly featuredItem?: NavigationFeaturedItem;
  readonly items: readonly NavigationLinkItem[];
}

export type NavigationItemType = "dropdown" | "link";

export interface BaseNavigationItem {
  readonly id: string;
  readonly type: NavigationItemType;
  readonly label: string;
  readonly className?: string;
}

export interface DropdownNavigationItem extends BaseNavigationItem {
  readonly type: "dropdown";
  readonly content: NavigationContent;
}

export interface LinkNavigationItem extends BaseNavigationItem {
  readonly type: "link";
  readonly href: string;
  readonly linkClassName?: string;
}

export type NavigationItem = DropdownNavigationItem | LinkNavigationItem;

const linkClassName = "py-2 px-2 xl:px-4 rounded-md";

export const navigationItems: readonly NavigationItem[] = [
  {
    id: "seja-aliado",
    type: "link",
    label: "Seja Aliado",
    href: "/",
    linkClassName: "font-bold " + linkClassName,
  },
	{
    id: "central-de-conteudo",
    type: "link",
    label: "Central de Conteúdo",
    href: "/",
    linkClassName,
  },
	{
    id: "historias-dos-aliados",
    type: "link",
    label: "Histórias dos Aliados",
    href: "/",
    linkClassName,
  },
	{
    id: "universidade-divergente",
    type: "link",
    label: "Universidade Divergente",
    href: "/",
    linkClassName,
  },
	{
    id: "quem-somos",
    type: "link",
    label: "Quem Somos",
    href: "/",
    linkClassName,
  },
] as const;
