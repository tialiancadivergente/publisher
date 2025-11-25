"use client";

import Link from "next/link";
import Image from "next/image";

import { cn } from "@/lib/utils";
import type { MentorProfile } from "@/data/mentor-profiles";

interface MentorProfileCardProps extends MentorProfile {
  readonly className?: string;
}

export function MentorProfileCard({
  name,
  description,
  imageSrc,
  imageAlt,
  ctaHref,
  ctaLabel,
  className,
}: MentorProfileCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col text-areia-claro shadow-lg",
        "transition-transform duration-300 hover:-translate-y-1",
        className
      )}
      aria-labelledby={`${name}-heading`}
    >
      <div className="relative aspect-[304/300] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 304px"
          priority={false}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
        />
      </div>
      <div className="flex flex-col gap-4 p-6">
        <header>
          <h3
            id={`${name}-heading`}
            className="text-2xl font-semibold text-dourado mt-2"
          >
            {name}
          </h3>
        </header>
        <p
          className="text-base leading-7 text-areia-claro/90 overflow-hidden text-ellipsis line-clamp-5 max-h-[8.5rem]"
          title={description}
        >
          {description}
        </p>
        <Link
          href={ctaHref}
          className="inline-flex items-center justify-center border border-verde-folha text-verde-folha px-4 py-3 text-sm font-semibold uppercase tracking-wide hover:bg-areia hover:text-[#06242C] transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-areia"
          aria-label={ctaLabel}
        >
          {ctaLabel}
        </Link>
      </div>
    </article>
  );
}

