"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { NewsCardProps } from "@/data/news-cards";
import { useIsMobile } from "@/hooks/use-mobile";

export const NewsCard = React.memo(function NewsCard({
  title,
  description,
  imageSrc,
  imageAlt,
  imageWidth,
  imageHeight,
  variant = "text-first",
  className,
  backgroundColor = "bg-areia-claro",
  id,
}: NewsCardProps) {
  const isMobile = useIsMobile();
  
  const effectiveVariant = React.useMemo(
    () => (isMobile ? "text-first" : variant),
    [isMobile, variant]
  );
  
  const isImageFirst = React.useMemo(
    () => effectiveVariant === "image-first",
    [effectiveVariant]
  );
  
  const headingId = React.useMemo(
    () => (id ? `${id}-heading` : undefined),
    [id]
  );

  const imageSizes = React.useMemo(
    () =>
      `(max-width: 640px) 100vw, (max-width: 768px) ${imageWidth}px, (max-width: 1024px) ${Math.min(imageWidth, 600)}px, ${imageWidth}px`,
    [imageWidth]
  );

  const contentSection = (
    <div className="flex flex-col gap-6">
      <h3
        id={headingId}
        className="text-2xl md:text-3xl lg:text-4xl text-dourado font-bold"
      >
        {title}
      </h3>
      <div className="text-verde-eucalipto text-base md:text-lg leading-7 md:leading-8 font-light font-mulish">
        {description}
      </div>
    </div>
  );

  const imageSection = (
    <figure className="w-full flex items-center justify-center">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={imageWidth}
        height={imageHeight}
        className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03] transform-gpu"
        loading="lazy"
        fetchPriority="low"
        quality={100}
        sizes={imageSizes}
        decoding="async"
      />
    </figure>
  );

  return (
    <article
      id={id}
      className={cn(
        "group overflow-hidden transition-transform duration-500 hover:-translate-y-2 hover:shadow-lg",
        backgroundColor,
        className
      )}
      aria-labelledby={headingId}
    >
      <div className="container mt-16">
        <div className="flex flex-col gap-8">
          {isImageFirst ? (
            <>
              {imageSection}
              {contentSection}
            </>
          ) : (
            <>
              {contentSection}
              {imageSection}
            </>
          )}
        </div>
      </div>
    </article>
  );
});
