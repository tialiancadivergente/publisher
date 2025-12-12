"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

type Direction = "up" | "down" | "left" | "right";

interface RevealProps extends React.HTMLAttributes<HTMLElement> {
  readonly as?: keyof JSX.IntrinsicElements;
  readonly delay?: number;
  readonly direction?: Direction;
  readonly once?: boolean;
}

/**
 * Reveals children when they enter the viewport.
 * Supports a small direction offset and respects the prefers-reduced-motion setting.
 */
export function Reveal({
  as: Component = "div",
  className,
  delay = 0,
  direction = "up",
  once = true,
  children,
  ...rest
}: RevealProps) {
  const [isVisible, setIsVisible] = React.useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = React.useState(false);
  const elementRef = React.useRef<HTMLElement>(null);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = (event: MediaQueryListEvent | MediaQueryList) => {
      setPrefersReducedMotion(event.matches);
    };

    updatePreference(mediaQuery);
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  React.useEffect(() => {
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const node = elementRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [once, prefersReducedMotion]);

  const initialOffset: Record<Direction, string> = {
    up: "translate-y-6",
    down: "-translate-y-6",
    left: "translate-x-6",
    right: "-translate-x-6",
  };

  return (
    <Component
      ref={elementRef}
      className={cn(
        "opacity-0 transition-all duration-700 ease-out will-change-transform",
        initialOffset[direction],
        isVisible && "opacity-100 translate-x-0 translate-y-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Component>
  );
}

