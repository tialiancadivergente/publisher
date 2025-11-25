"use client";

import "@/app/css/embla.css";

import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

type PropType = {
  slides: React.ReactNode[];
  options?: EmblaOptionsType;
};

export function EmblaCarouselScale({ slides, options }: PropType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    Autoplay({ delay: 3500, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  React.useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };
    onSelect();
    emblaApi.on("select", onSelect).on("reInit", onSelect);
    return () => {
      emblaApi.off("select", onSelect).off("reInit", onSelect);
    };
  }, [emblaApi]);

  return (
    <section className="embla embla--scale">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((slide, index) => (
            <div
              className={cn(
                "embla__slide embla__slide--scale",
                selectedIndex === index && "embla__slide--scale--active"
              )}
              key={index}
            >
              <div className="embla__slide__inner">{slide}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

