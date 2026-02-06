"use client";

import Image from "next/image";

import { cn } from "@/lib/utils";
import type { PressHighlight } from "@/data/press-highlights";

interface PressHighlightCardProps extends PressHighlight {
  readonly className?: string;
}

export function PressHighlightCard({
  title,
  excerpt,
  imageSrc,
  imageAlt,
  sourceLogo,
  sourceLogoAlt,
  author,
  publishedAt,
  accentClass,
  className,
  articleUrl,
}: PressHighlightCardProps) {
  const handleClick = () => {
    window.open(articleUrl, "_blank");
  };

  const dateParts = publishedAt.split("-").map((part) => Number(part));
  const publishedDate =
    dateParts.length === 3 &&
    Number.isFinite(dateParts[0]) &&
    Number.isFinite(dateParts[1]) &&
    Number.isFinite(dateParts[2])
      ? new Date(dateParts[0], dateParts[1] - 1, dateParts[2])
      : new Date(publishedAt);

  const formattedDate = new Intl.DateTimeFormat("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  }).format(publishedDate);

  return (
    <article
      className={cn(
        // ADD transition, simple scale+shadow and text accent in h3
        "flex h-full flex-col overflow-hidden bg-white shadow-lg cursor-pointer transition-transform duration-200 hover:scale-[1.03] hover:shadow-2xl group",
        accentClass,
        className
      )}
      aria-labelledby={`${title}-heading`}
      onClick={handleClick}
      role="link"
      tabIndex={0}
      aria-label={`${title} - ${excerpt} - ${articleUrl}`}
    >
      <div className="relative aspect-[352/180] w-full transition-all duration-200 group-hover:brightness-95">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 352px"
          loading="lazy"
          quality={100}
          decoding="async"
          fetchPriority="low"
        />
      </div>
      <div className="flex flex-1 flex-col gap-4 px-6 py-5 text-left text-verde-eucalipto">
        <h3
          id={`${title}-heading`}
          className="text-[26px] font-semibold text-verde-eucalipto truncate whitespace-nowrap transition-colors duration-200 group-hover:text-dourado"
          title={title}
        >
          {title}
        </h3>
        <p
          className="text-[18px] leading-8 text-verde-eucalipto font-light overflow-hidden text-ellipsis line-clamp-4 font-mulish"
          title={excerpt}
        >
          {excerpt}
        </p>
        <div className="mt-auto flex flex-col gap-3 text-xs text-verde-eucalipto/70 uppercase tracking-[0.2em]">
          <div className="flex items-center justify-between gap-4">
            <span className="flex items-center">
              <Image
                src={sourceLogo}
                alt={sourceLogoAlt}
                width={0}
                height={24}
                quality={100}
                className="object-contain object-left h-6 w-auto"
                sizes="(max-width: 640px) 80px, 120px"
                loading="lazy"
                decoding="async"
                fetchPriority="low"
                style={{ height: 24, width: "auto" }}
              />
            </span>
            <div className="text-[0.7rem] font-medium normal-case tracking-normal font-mulish text-right">
              {author} - <time dateTime={publishedAt}>{formattedDate}</time>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
