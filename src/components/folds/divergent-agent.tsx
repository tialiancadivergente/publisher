"use client";

import Image from "next/image";
import { Reveal } from "../ui/reveal";
import Link from "next/link";

export function DivergentAgentSection() {
  return (
    <section className="w-full h-[1123px] flex items-center justify-center bg-[url('/images/divergent-agent/bg.webp')] bg-cover bg-center bg-no-repeat py-20">
      <div className="container flex flex-col items-center justify-center gap-12 font-mulish text-center">
        <Reveal>
          <h2 className="text-4xl md:text-6xl text-dourado uppercase font-spectral">
            Seja um Agente Divergente
          </h2>
        </Reveal>
        <Reveal delay={140}>
          <p
            className="text-verde-eucalipto text-[18px]/[32px] font-light font-mulish"
            aria-describedby="marca-passos-heading"
          >
            <span className="font-bold">
              Transforme sua história em uma nova fonte de renda, com liberdade e propósito. <br />
            </span>
            Os Agentes Divergentes são pessoas que utilizam a própria Jornada na Aliança Divergente para gerar impacto, apoiando outras pessoas a aumentarem sua Permissão e sendo reconhecidas financeiramente por isso. É para quem já vive ou viveu esse processo e entende que pode ir além, compartilhando a mensagem com verdade e construindo uma nova fonte de renda com propósito, sem precisar ser influencer ou vendedor.
          </p>
        </Reveal>
        <Reveal delay={220}>
          <Image
            src="/images/divergent-agent/agentes-divergentes.webp"
            alt="Agentes Divergentes"
            width={955}
            height={451}
            quality={100}
            loading="lazy"
            decoding="async"
            fetchPriority="low"
            sizes="(max-width: 768px) 955px, 955px"
            aria-hidden="true"
            className="w-full h-auto"
          />
        </Reveal>
        <Reveal delay={220}>
          <Link
            id="seja_aliado_3"
            href="https://indiquei.app/g9myzN"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              type="button"
              className="bg-verde-folha hover:bg-verde-folha/60 transition-colors duration-300 text-white px-8 py-3 font-bold sm:text-base text-xs mt-6 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white shadow-lg shadow-verde-folha/30"
              aria-label="Se tornar aliado da Aliança Divergente"
            >
              Torne-se um Agente Divergente
            </button>
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
