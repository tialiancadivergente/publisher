"use client";

import * as React from "react";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

const TABLET_BREAKPOINT = 1024;
const DESKTOP_IMAGE_WIDTH = 407;
const TABLET_LEFT_IMAGE_WIDTH = 740;
const TABLET_LEFT_IMAGE_HEIGHT = 407;
const TABLET_RIGHT_IMAGE_WIDTH = 763;
const TABLET_RIGHT_IMAGE_HEIGHT = 376;
const DESKTOP_IMAGE_HEIGHT = 740;

export function AlliesStatsSection() {
  const isTablet = useIsMobile(TABLET_BREAKPOINT);

  const leftImageProps = React.useMemo(
    () => ({
      src: isTablet ? "/images/group-3-1.webp" : "/images/group-3.webp",
      alt: isTablet
        ? "Grupo de aliados da AlianÇõa Divergente em formato horizontal"
        : "Grupo de aliados da AlianÇõa Divergente",
      width: isTablet ? TABLET_LEFT_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH,
      height: isTablet ? TABLET_LEFT_IMAGE_HEIGHT : DESKTOP_IMAGE_HEIGHT,
      maxWidth: isTablet ? TABLET_LEFT_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH,
    }),
    [isTablet]
  );

  const rightImageProps = React.useMemo(
    () => ({
      src: isTablet ? "/images/group-4-1.webp" : "/images/group-4.webp",
      alt: isTablet
        ? "Grupo de aliados da AlianÇõa Divergente em formato horizontal"
        : "Grupo de aliados da AlianÇõa Divergente",
      width: isTablet ? TABLET_RIGHT_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH,
      height: isTablet ? TABLET_RIGHT_IMAGE_HEIGHT : DESKTOP_IMAGE_HEIGHT,
      maxWidth: isTablet ? TABLET_RIGHT_IMAGE_WIDTH : DESKTOP_IMAGE_WIDTH,
    }),
    [isTablet]
  );

  const imageSizes = React.useMemo(
    () =>
      `(max-width: 768px) 100vw, (max-width: ${TABLET_BREAKPOINT}px) ${Math.max(
        TABLET_LEFT_IMAGE_WIDTH,
        TABLET_RIGHT_IMAGE_WIDTH
      )}px, ${DESKTOP_IMAGE_WIDTH}px`,
    []
  );

  return (
    <section
      className="w-full py-24 bg-areia"
      aria-labelledby="allies-stats-heading"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,407px)_1fr_minmax(0,407px)] gap-8 px-8">
        <Reveal
          as="figure"
          className="flex justify-center"
          role="img"
          aria-label={leftImageProps.alt}
          delay={60}
        >
          <Image
            src={leftImageProps.src}
            alt={leftImageProps.alt}
            width={leftImageProps.width}
            height={leftImageProps.height}
            className={cn(
              "w-full h-auto object-cover transition-transform duration-700 ease-out hover:-translate-y-3 transform-gpu",
              isTablet
                ? "lg:max-w-[740px] max-w-[740px]"
                : "lg:max-w-[407px] max-w-[407px]"
            )}
            sizes={imageSizes}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </Reveal>
        <Reveal
          className="flex flex-col gap-4 items-center justify-center max-w-[419px] w-full mx-auto text-center lg:text-left"
          delay={140}
        >
          <h3
            id="allies-stats-heading"
            className="text-4xl md:text-6xl leading-snug text-ouro-velho uppercase"
          >
            +140mil <br /> Aliados
          </h3>
          <p className="text-ouro-velho text-xl md:text-2xl font-light">
            com mais Permissão
          </p>
          <p className="text-verde-eucalipto text-base md:text-[18px]/[32px] font-light font-mulish text-center">
            Milhares de Aliados já romperam padrões, aumentaram sua Permissão e
            sustentam novas posturas todos os dias.{" "}
            <strong className="font-bold">
              Conheça histórias reais de quem escolheu viver uma vida memorável.
            </strong>
          </p>
          <button
            type="button"
            className="border-2 border-ouro-velho text-ouro-velho bg-transparent hover:bg-ouro-velho hover:text-white transition-colors duration-300 px-8 py-3 font-bold sm:text-base text-xs mt-6 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ouro-velho shadow-lg shadow-ouro-velho/20"
            aria-label="Ver histÇürias dos aliados"
          >
            Veja As Histórias dos aliados
          </button>
        </Reveal>
        <Reveal
          as="figure"
          className="flex justify-center"
          role="img"
          aria-label={rightImageProps.alt}
          delay={220}
        >
          <Image
            src={rightImageProps.src}
            alt={rightImageProps.alt}
            width={rightImageProps.width}
            height={rightImageProps.height}
            className={cn(
              "w-full h-auto object-cover transition-transform duration-700 ease-out hover:-translate-y-3 transform-gpu",
              isTablet
                ? "lg:max-w-[763px] max-w-[763px]"
                : "lg:max-w-[407px] max-w-[407px]"
            )}
            sizes={imageSizes}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
          />
        </Reveal>
      </div>
    </section>
  );
}
