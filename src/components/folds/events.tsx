"use client";
import Image from "next/image";

export function EventsSection() {
	const titleDescription = (
    title: string,
    description: React.ReactNode,
    imageSection?: React.ReactNode
  ) => {
    return (
      <div className="flex flex-col gap-6 items-center justify-center">
        <h2 className="text-[56px] text-ouro-velho text-center">{title}</h2>
        <div className="text-verde-eucalipto text-[18px]/[32px] font-light text-center">
          {description}
        </div>
        {imageSection && imageSection}
      </div>
    );
  };
	
  return (
    <section className="w-full bg-areia py-24">
      <div className="container">
        <div className="flex flex-col gap-16 items-center justify-center">
          {titleDescription(
            "Eventos Online",
            <p className="font-mulish">
              Os eventos online da Aliança Divergente são encontros abertos, ao
              vivo, conduzidos pelos Mentores e convidados especiais.
              <span className="font-bold">
                Reunimos milhares de pessoas para apresentar as construções da
                Teoria da Permissão, provocar percepções e oferecer direção
              </span>{" "}
              prática para quem busca romper padrões. Blindado e O Fim das
              Relações Ruins são alguns dos mais marcantes.
            </p>,
            <div className="flex flex-col md:flex-row items-center justify-center w-full">
              <Image
                src="/images/blindado.webp"
                alt="Blindado"
                width={384}
                height={460}
                className="w-full max-w-[300px] lg:max-w-[300px] xl:max-w-[384px] h-auto object-contain"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 300px, 384px"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
              <Image
                src="/images/o-resgate-dos-otimistas.webp"
                alt="O Resgate dos Otimistas"
                width={384}
                height={460}
                className="w-full max-w-[300px] lg:max-w-[300px] xl:max-w-[384px] h-auto object-contain"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 300px, 384px"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
              <Image
                src="/images/o-fim-das-relacoes-ruins.webp"
                alt="O Fim das Relações Ruins"
                width={384}
                height={460}
                className="w-full max-w-[300px] lg:max-w-[300px] xl:max-w-[384px] h-auto object-contain"
                sizes="(max-width: 640px) 150px, (max-width: 768px) 200px, (max-width: 1024px) 250px, (max-width: 1280px) 300px, 384px"
                loading="lazy"
                fetchPriority="low"
                decoding="async"
              />
            </div>
          )}
          {titleDescription(
            "Eventos Presenciais",
            <p className="font-mulish">
              <span className="font-bold">
                Os eventos presenciais da Aliança Divergente são exclusivos para
                Aliados e marcam etapas importantes da jornada.
              </span>{" "}
              Do Plano Perfeito ao Celebre Comigo, da Corrida e Caminhada Efeito
              Paralelo ao Ponto Cego, até O Chamado Divergente, maior evento da
              Aliança que reunirá milhares de Aliados,{" "}
              <span className="font-bold">
                cada encontro aprofunda as construções e fortalece o
                comprometimento com o rompimento de padrões e a construção do
                mundo novo.
              </span>
            </p>,
            <>
              <div className="flex-col md:flex-row items-center justify-center w-full hidden md:flex">
                <Image
                  src="/images/eventos-presenciais.webp"
                  alt="Eventos Presenciais"
                  width={1152}
                  height={606}
                  className="w-full max-w-[900px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
              <div className="flex md:hidden flex-col md:flex-row items-center justify-center w-full">
                <Image
                  src="/images/o-chamado-divergente.webp"
                  alt="O Chamado Divergente"
                  width={594}
                  height={303}
                  className="w-full max-w-[300px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
                <Image
                  src="/images/plano-perfeito.webp"
                  alt="Plano Perfeito"
                  width={558}
                  height={303}
                  className="w-full max-w-[300px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
                <Image
                  src="/images/o-ponto-cego.webp"
                  alt="O Ponto Cego"
                  width={371}
                  height={303}
                  className="w-full max-w-[300px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
                <Image
                  src="/images/efeito-paralelo.webp"
                  alt="Efeito Paralelo"
                  width={493}
                  height={303}
                  className="w-full max-w-[300px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
                <Image
                  src="/images/celebre-comigo.webp"
                  alt="Celebre Comigo"
                  width={288}
                  height={303}
                  className="w-full max-w-[300px] xl:max-w-[1152px] h-auto object-contain"
                  loading="lazy"
                  fetchPriority="low"
                  decoding="async"
                />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
