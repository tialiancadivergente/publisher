"use client";

import * as React from "react";
import Link from "next/link";
import {
  CircleCheckIcon,
  CircleHelpIcon,
  CircleIcon,
  Menu,
} from "lucide-react";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  navigationItems,
  type NavigationItem,
  type NavigationLinkItem,
} from "@/data/navigation-items";
import { cn } from "@/lib/utils";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { scrollToId } from "@/lib/utils/scroll-to-id";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  CircleHelpIcon,
  CircleIcon,
  CircleCheckIcon,
};

function NavigationLinkItem({
  item,
  layout,
}: {
  item: NavigationLinkItem;
  layout: string;
}) {
  const IconComponent = item.icon ? iconMap[item.icon] : null;
  const isHashHref = item.href.startsWith("#");

  if (layout === "list-detailed") {
    return (
      <NavigationMenuLink asChild>
        {isHashHref ? (
          <a
            href={item.href}
            className={item.className}
            onClick={(event) => {
              event.preventDefault();
              scrollToId(item.href.slice(1), { delayMs: 0 });
            }}
          >
            <div className="font-medium">{item.title}</div>
            {item.description && (
              <div className="text-muted-foreground">{item.description}</div>
            )}
          </a>
        ) : (
          <Link href={item.href} className={item.className}>
            <div className="font-medium">{item.title}</div>
            {item.description && (
              <div className="text-muted-foreground">{item.description}</div>
            )}
          </Link>
        )}
      </NavigationMenuLink>
    );
  }

  if (layout === "list-simple") {
    return (
      <NavigationMenuLink asChild>
        {isHashHref ? (
          <a
            href={item.href}
            className={item.className}
            onClick={(event) => {
              event.preventDefault();
              scrollToId(item.href.slice(1), { delayMs: 0 });
            }}
          >
            {item.title}
          </a>
        ) : (
          <Link href={item.href} className={item.className}>
            {item.title}
          </Link>
        )}
      </NavigationMenuLink>
    );
  }

  if (layout === "list-icon" && IconComponent) {
    return (
      <NavigationMenuLink asChild>
        {isHashHref ? (
          <a
            href={item.href}
            className={`flex items-center gap-2 ${item.className || ""}`}
            onClick={(event) => {
              event.preventDefault();
              scrollToId(item.href.slice(1), { delayMs: 0 });
            }}
          >
            <IconComponent />
            {item.title}
          </a>
        ) : (
          <Link
            href={item.href}
            className={`flex items-center gap-2 ${item.className || ""}`}
          >
            <IconComponent />
            {item.title}
          </Link>
        )}
      </NavigationMenuLink>
    );
  }

  return (
    <ListItem href={item.href} title={item.title}>
      {item.description}
    </ListItem>
  );
}

function NavigationContent({
  content,
}: {
  content: NavigationItem & { type: "dropdown" };
}) {
  const { layout, gridClassName, featuredItem, items } = content.content;

  if (layout === "grid-featured" && featuredItem) {
    return (
      <ul className={gridClassName}>
        <li className="row-span-3">
          <NavigationMenuLink asChild>
            <Link href={featuredItem.href} className={featuredItem.className}>
              <div className="mb-2 text-lg font-medium sm:mt-4">
                {featuredItem.title}
              </div>
              <p className="text-muted-foreground text-sm leading-tight">
                {featuredItem.description}
              </p>
            </Link>
          </NavigationMenuLink>
        </li>
        {items.map((item, index) => (
          <ListItem
            key={item.id || `${item.title}-${index}`}
            href={item.href}
            title={item.title}
          >
            {item.description}
          </ListItem>
        ))}
      </ul>
    );
  }

  return (
    <ul className={gridClassName}>
      {layout === "list-detailed" ||
      layout === "list-simple" ||
      layout === "list-icon" ? (
        <li>
          {items.map((item, index) => (
            <NavigationLinkItem
              key={item.id || `${item.title}-${index}`}
              item={item}
              layout={layout}
            />
          ))}
        </li>
      ) : (
        items.map((item, index) => (
          <NavigationLinkItem
            key={item.id || `${item.title}-${index}`}
            item={item}
            layout={layout}
          />
        ))
      )}
    </ul>
  );
}

function NavigationItemRenderer({ item }: { item: NavigationItem }) {
  if (item.type === "link") {
    const isHashHref = item.href.startsWith("#");
    return (
      <NavigationMenuItem>
        <NavigationMenuLink
          asChild
          target={item.target}
          className={cn(
            item.className,
            item.linkClassName === "navigationMenuTriggerStyle()"
              ? navigationMenuTriggerStyle()
              : item.linkClassName,
            "bg-transparent font-spectral text-sm xl:text-base text-verde-folha hover:text-areia hover:bg-verde-folha active:text-areia active:bg-verde-folha"
          )}
        >
          {isHashHref ? (
            <a
              href={item.href}
              onClick={(event) => {
                event.preventDefault();
                scrollToId(item.href.slice(1), { delayMs: 0 });
              }}
            >
              {item.label}
            </a>
          ) : (
            <Link
              href={item.href}
              target={item.target}
              rel={
                item.target === "_blank" ? "noopener noreferrer" : undefined
              }
            >
              {item.label}
            </Link>
          )}
        </NavigationMenuLink>
      </NavigationMenuItem>
    );
  }

  return (
    <NavigationMenuItem className={item.className}>
      <NavigationMenuTrigger>{item.label}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationContent content={item} />
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

function MobileMenu() {
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const restoreScrollOnCloseRef = React.useRef(true);
  const pendingScrollIdRef = React.useRef<string | null>(null);
  const pendingScrollTimerRef = React.useRef<number | null>(null);

  const clearPendingScrollTimer = () => {
    if (pendingScrollTimerRef.current) {
      window.clearTimeout(pendingScrollTimerRef.current);
      pendingScrollTimerRef.current = null;
    }
  };

  React.useEffect(() => clearPendingScrollTimer, []);

  React.useEffect(() => {
    // Como o Drawer é controlado, chamadas diretas a setDrawerOpen(false)
    // NÃO disparam onOpenChange. Então, garantimos o scroll aqui quando fechar.
    if (drawerOpen) return;
    if (!pendingScrollIdRef.current) return;

    const id = pendingScrollIdRef.current;
    pendingScrollIdRef.current = null;
    scheduleScrollAfterDrawerClose(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [drawerOpen]);

  const scheduleScrollAfterDrawerClose = (id: string) => {
    clearPendingScrollTimer();

    const maxAttempts = 50; // ~2.5s
    const attemptEveryMs = 50;
    const startDelayMs = 200; // tempo para o Drawer terminar de fechar no mobile

    const attempt = (attemptNumber: number) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });

        // Confirma se realmente chegou (alguns lock/anim podem ignorar a 1ª tentativa)
        const rect = element.getBoundingClientRect();
        const withinViewport =
          rect.top >= 0 && rect.top <= window.innerHeight * 0.25;

        if (withinViewport) return;
      }

      if (attemptNumber >= maxAttempts) {
        // Última tentativa: tenta mesmo assim (ou loga se não existe)
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          console.error(`Elemento com id '${id}' não encontrado`);
        }
        return;
      }

      pendingScrollTimerRef.current = window.setTimeout(
        () => attempt(attemptNumber + 1),
        attemptEveryMs
      );
    };

    pendingScrollTimerRef.current = window.setTimeout(
      () => attempt(0),
      startDelayMs
    );
  };

  return (
    <div className="flex items-center justify-end gap-4">
      <button className="bg-verde-folha hover:bg-verde-folha/80 transition-colors duration-300 text-white px-3 py-1 text-[10px] uppercase font-bold">
        <Link
          href="https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado"
          target="_blank"
          rel="noopener noreferrer"
        >
          Seja Aliado
        </Link>
      </button>
      <Drawer
        direction="right"
        open={drawerOpen}
        onOpenChange={(nextOpen) => {
          if (!nextOpen && restoreScrollOnCloseRef.current) {
            const y = window.scrollY;
            // Evita "puxar" a página pro topo ao restaurar o foco no trigger
            // após o fechamento do Drawer.
            setTimeout(() => window.scrollTo({ top: y, behavior: "auto" }), 0);
            setTimeout(() => window.scrollTo({ top: y, behavior: "auto" }), 150);
          }

          // Reset para o próximo fechamento (exceto quando um clique de âncora desabilitar)
          restoreScrollOnCloseRef.current = true;
          setDrawerOpen(nextOpen);
        }}
      >
        <DrawerTrigger asChild>
          <button
            className="flex items-center justify-center p-2 text-verde-folha hover:text-dourado transition-colors"
            aria-label="Abrir menu"
          >
            <Menu className="h-6 w-6" />
          </button>
        </DrawerTrigger>
        <DrawerContent
          className={cn(
            "h-screen w-80 max-w-[85vw] bg-areia-claro",
            "top-0 right-0 left-auto bottom-0 rounded-none",
            "border-l border-verde-folha/20",
            "mt-0 [&>div:first-child]:hidden"
          )}
          onCloseAutoFocus={(event) => event.preventDefault()}
        >
          <DrawerHeader className="border-b border-verde-folha/20">
            <DrawerTitle className="text-lg font-spectral font-semibold text-verde-folha text-left">
              Menu
            </DrawerTitle>
          </DrawerHeader>
          <nav
            className="flex-1 overflow-y-auto p-4"
            aria-label="Menu de navegação mobile"
          >
            <ul className="space-y-2">
              {navigationItems.map((item) => (
                <li key={item.id}>
                  {item.type === "link" ? (
                    item.href.startsWith("#") ? (
                      <DrawerClose asChild>
                        <a
                          href={item.href}
                          className={cn(
                            "block w-full text-left px-4 py-3 rounded-md font-spectral text-base text-verde-folha",
                            "hover:bg-verde-folha hover:text-areia transition-colors",
                            "active:bg-verde-folha active:text-areia"
                          )}
                          aria-label={item.label}
                          onClick={(event) => {
                            event.preventDefault();
                            pendingScrollIdRef.current = item.href.slice(1);
                            restoreScrollOnCloseRef.current = false;
                            setDrawerOpen(false);
                          }}
                        >
                          {item.label}
                        </a>
                      </DrawerClose>
                    ) : (
                      <DrawerClose asChild>
                        <Link
                          href={item.href}
                          target={item.target}
                          rel={
                            item.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                          className={cn(
                            "block px-4 py-3 rounded-md font-spectral text-base text-verde-folha",
                            "hover:bg-verde-folha hover:text-areia transition-colors",
                            "active:bg-verde-folha active:text-areia"
                          )}
                        >
                          {item.label}
                        </Link>
                      </DrawerClose>
                    )
                  ) : (
                    <div className="space-y-2">
                      <div className="px-4 py-2 font-spectral font-semibold text-verde-folha text-sm uppercase tracking-wide">
                        {item.label}
                      </div>
                      {item.content.items.map((subItem, index) => (
                        subItem.href.startsWith("#") ? (
                          <DrawerClose
                            key={subItem.id || `${subItem.title}-${index}`}
                            asChild
                          >
                            <a
                              href={subItem.href}
                              className={cn(
                                "block w-full text-left px-6 py-2 rounded-md font-spectral text-sm text-verde-folha/80",
                                "hover:bg-verde-folha hover:text-areia transition-colors",
                                "active:bg-verde-folha active:text-areia"
                              )}
                              onClick={(event) => {
                                event.preventDefault();
                                pendingScrollIdRef.current = subItem.href.slice(1);
                                restoreScrollOnCloseRef.current = false;
                                setDrawerOpen(false);
                              }}
                            >
                              {subItem.title}
                            </a>
                          </DrawerClose>
                        ) : (
                          <DrawerClose
                            key={subItem.id || `${subItem.title}-${index}`}
                            asChild
                          >
                            <Link
                              href={subItem.href}
                              className={cn(
                                "block px-6 py-2 rounded-md font-spectral text-sm text-verde-folha/80",
                                "hover:bg-verde-folha hover:text-areia transition-colors",
                                "active:bg-verde-folha active:text-areia"
                              )}
                            >
                              {subItem.title}
                            </Link>
                          </DrawerClose>
                        )
                      ))}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export function Navigation() {
  const isMobile = useIsMobile(1110);

  if (isMobile) {
    return <MobileMenu />;
  }

  return (
    <NavigationMenu>
      <NavigationMenuList className="flex-wrap">
        {navigationItems.map((item) => (
          <NavigationItemRenderer key={item.id} item={item} />
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  const isHashHref = href.startsWith("#");
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        {isHashHref ? (
          <a
            href={href}
            className="w-full text-left"
            onClick={(event) => {
              event.preventDefault();
              scrollToId(href.slice(1), { delayMs: 0 });
            }}
          >
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </a>
        ) : (
          <Link href={href}>
            <div className="text-sm leading-none font-medium">{title}</div>
            <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
              {children}
            </p>
          </Link>
        )}
      </NavigationMenuLink>
    </li>
  );
}
