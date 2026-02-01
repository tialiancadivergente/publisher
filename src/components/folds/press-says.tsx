import * as React from "react";
import { EmblaOptionsType } from "embla-carousel";
import Link from "next/link";

import { PressHighlightCard } from "../cards/press-highlight-card";
import EmblaCarousel from "../embla-carousel/embla-carousel";
import { Reveal } from "@/components/ui/reveal";
import { pressHighlightsData } from "@/data/press-highlights";

const OPTIONS: EmblaOptionsType = {
  loop: true,
  align: "start",
  slidesToScroll: 1,
} as const;

export function PressSaysSection() {
  const carouselSlides = React.useMemo(
    () =>
      pressHighlightsData.map((highlight) => (
        <PressHighlightCard key={highlight.id} {...highlight} />
      )),
    []
  );

  return (
    <section
      className="w-full flex flex-col gap-12 py-24 bg-areia-claro"
      aria-labelledby="press-says-heading"
    >
      <Reveal className="container flex flex-col gap-12 items-center justify-center text-center">
        <h2
          id="press-says-heading"
          className="text-4xl md:text-6xl text-dourado text-center uppercase"
        >
          O Que a Imprensa Diz
        </h2>
        <p className="text-verde-eucalipto text-[18px]/[32px] font-light text-center font-mulish">
          <strong className="font-bold">
            A proposta da Aliança Divergente tem despertado a atenção de
            veículos nacionais,
          </strong>{" "}
          que destacam sua abordagem única sobre maturidade emocional,
          rompimento de padrões e construção de uma vida memorável. Confira
          algumas publicações que vêm ampliando essa conversa pelo Brasil.
        </p>
      </Reveal>
      <Reveal
        className="w-full"
        role="region"
        aria-label="Carrossel de destaques da imprensa"
        delay={140}
      >
        <EmblaCarousel slides={carouselSlides} options={OPTIONS} />
      </Reveal>
      {/* <Reveal
        className="container flex flex-col gap-12 items-center justify-center text-center"
        delay={220}
      >
        <Link
          href="https://blog.aliancadivergente.com.br/"
          className="border-2 border-dourado text-dourado bg-transparent hover:bg-dourado hover:text-white transition-colors duration-300 px-8 py-3 font-bold sm:text-base text-xs mt-6 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-dourado shadow-lg shadow-dourado/20"
          aria-label="Ver mais publicações na Central de Conteúdo"
        >
          Ver mais na Central de Conteúdo
        </Link>
      </Reveal> */}
    </section>
  );
}
