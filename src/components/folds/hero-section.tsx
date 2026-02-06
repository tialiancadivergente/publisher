import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

export function HeroSection() {
  return (
    <div className="container flex flex-col items-center justify-center font-spectral text-verde-eucalipto text-center gap-8 py-24">
      <Reveal as="h2" className="text-3xl sm:text-7xl font-bold" tabIndex={0}>
        Clareza, Coragem e Avanço
      </Reveal>
      <Reveal
        as="p"
        id="descricao-missao"
        className="text-base sm:text-2xl"
        delay={120}
      >
        A Aliança Divergente é o ecossistema ideal para romper com ciclos de
        estagnação e ter a Permissão para avançar em direção à vida memorável
        que sempre sonhou.
      </Reveal>
      <Reveal delay={220}>
        <button
          className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 uppercase font-bold sm:text-base text-xs mt-6 shadow-lg shadow-dourado/20"
          aria-label="Seja aliado da Aliança Divergente"
        >
          <Link id="seja_aliado_1" href="https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado" target="_blank" rel="noopener noreferrer">
            Seja Aliados
          </Link>
        </button>
      </Reveal>
    </div>
  );
}
