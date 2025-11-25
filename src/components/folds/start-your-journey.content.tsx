import Image from "next/image";

export function StartYourJourneyContentSection() {
  return (
    <>
      <h2 className="text-[56px] text-dourado uppercase">Comece sua jornada</h2>
      <p className="text-verde-eucalipto text-[18px]/[32px] font-light text-center">
        Na <span className="font-bold">Aliança Divergente</span>, você encontra
        grupos de apoio, encontros semanais, protocolos práticos, mentores
        experientes e uma plataforma completa dedicada ao seu avanço. Aqui, você
        será guiado, desafiado e sustentado todos os dias. Não é mágica. Não é
        coach. É{" "}
        <span className="font-bold">
          estrutura pedagógica, embasamento psicológico e uma comunidade forte
          de Aliados
        </span>{" "}
        comprometidos em romper padrões, aumentar sua Permissão e construir
        vidas memoráveis.
      </p>
      <button className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 uppercase font-bold sm:text-base text-xs mt-6">
        Seja Aliado
      </button>

      <div className="flex items-center gap-4 mt-6">
        <Image
          src="/images/avatares.webp"
          alt="Avatares de Aliados"
          width={164}
          height={56}
        />
        <div>
          <p className="text-verde-folha text-[18px]/[32px] font-bold">
            +140mil aliados{" "}
          </p>
          <p className="text-verde-eucalipto text-[12px]/[16px] font-light">
            que decidiram romper padrões e <br /> construir uma vida memorável.
          </p>
        </div>
      </div>
    </>
  );
}
