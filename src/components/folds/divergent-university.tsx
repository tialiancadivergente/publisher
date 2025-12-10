
import Image from "next/image";
import { MentorCarouselSection } from "./mentor-carousel";

export function DivergentUniversitySection() {
  return (
    <section
      className="w-full bg-[url('/images/bg-universidade-divergente.webp')] bg-cover bg-center bg-no-repeat py-20"
      aria-labelledby="universidade-divergente-heading"
      role="region"
    >
      <div className="container flex flex-col items-center justify-center gap-10 mb-20 font-mulish">
        <h2
          id="universidade-divergente-heading"
          className="sr-only"
        >
          Universidade Divergente
        </h2>
        <Image
          src="/images/logo-universidade-divergente.png"
          alt="Universidade Divergente"
          width={364}
          height={160}
          priority={false}
          className="w-auto h-auto"
          aria-hidden="true"
          fetchPriority="low"
          decoding="async"
        />
        <p className="text-[18px]/[32px] font-light text-white text-center" tabIndex={0}>
          <span className="font-bold">
            A Universidade Divergente é o ambiente de formação para quem
            escolheu destravar sua capacidade
          </span>{" "}
          e construir novas possibilidades com coragem e direção. Cultivamos
          competências que sustentam posturas, fortalecem a realização com
          excelência e alinham propósito com prática.{" "}
          <span className="font-bold">
            Para os Aliados o acesso à Universidade é um bônus exclusivo,
            integrado à jornada.
          </span>
        </p>
      </div>
      <MentorCarouselSection />
    </section>
  );
}
