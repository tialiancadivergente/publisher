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

export const navigationItems: readonly NavigationItem[] = [
  {
    id: "home",
    type: "dropdown",
    label: "Home",
    content: {
      layout: "grid-featured",
      gridClassName: "grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]",
      featuredItem: {
        title: "shadcn/ui",
        href: "/",
        description: "Beautifully designed components built with Tailwind CSS.",
        className:
          "from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-4 no-underline outline-hidden transition-all duration-200 select-none focus:shadow-md md:p-6",
      },
      items: [
        {
          title: "Introduction",
          href: "/docs",
          description: "Re-usable components built using Radix UI and Tailwind CSS.",
        },
        {
          title: "Installation",
          href: "/docs/installation",
          description: "How to install dependencies and structure your app.",
        },
        {
          title: "Typography",
          href: "/docs/primitives/typography",
          description: "Styles for headings, paragraphs, lists...etc",
        },
      ],
    },
  },
  {
    id: "components",
    type: "dropdown",
    label: "Components",
    content: {
      layout: "grid-list",
      gridClassName: "grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]",
      items: [
        {
          title: "Alert Dialog",
          href: "/docs/primitives/alert-dialog",
          description:
            "A modal dialog that interrupts the user with important content and expects a response.",
        },
        {
          title: "Hover Card",
          href: "/docs/primitives/hover-card",
          description:
            "For sighted users to preview content available behind a link.",
        },
        {
          title: "Progress",
          href: "/docs/primitives/progress",
          description:
            "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
        },
        {
          title: "Scroll-area",
          href: "/docs/primitives/scroll-area",
          description: "Visually or semantically separates content.",
        },
        {
          title: "Tabs",
          href: "/docs/primitives/tabs",
          description:
            "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
        },
        {
          title: "Tooltip",
          href: "/docs/primitives/tooltip",
          description:
            "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
        },
      ],
    },
  },
  {
    id: "docs",
    type: "link",
    label: "Docs",
    href: "/docs",
    linkClassName: "navigationMenuTriggerStyle()",
  },
  {
    id: "list",
    type: "dropdown",
    label: "List",
    className: "hidden md:block",
    content: {
      layout: "list-detailed",
      gridClassName: "grid w-[300px] gap-4",
      items: [
        {
          title: "Components",
          href: "#",
          description: "Browse all components in the library.",
        },
        {
          title: "Documentation",
          href: "#",
          description: "Learn how to use the library.",
        },
        {
          title: "Blog",
          href: "#",
          description: "Read our latest blog posts.",
        },
      ],
    },
  },
  {
    id: "simple",
    type: "dropdown",
    label: "Simple",
    className: "hidden md:block",
    content: {
      layout: "list-simple",
      gridClassName: "grid w-[200px] gap-4",
      items: [
        {
          title: "Components",
          href: "#",
        },
        {
          title: "Documentation",
          href: "#",
        },
        {
          title: "Blocks",
          href: "#",
        },
      ],
    },
  },
  {
    id: "with-icon",
    type: "dropdown",
    label: "With Icon",
    className: "hidden md:block",
    content: {
      layout: "list-icon",
      gridClassName: "grid w-[200px] gap-4",
      items: [
        {
          title: "Backlog",
          href: "#",
          icon: "CircleHelpIcon",
        },
        {
          title: "To Do",
          href: "#",
          icon: "CircleIcon",
        },
        {
          title: "Done",
          href: "#",
          icon: "CircleCheckIcon",
        },
      ],
    },
  },
] as const;

