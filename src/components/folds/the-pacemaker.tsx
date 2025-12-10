import Image from "next/image";

export function ThePacemakerSection() {
  return (
    <section
      className="w-full bg-verde-eucalipto"
      aria-labelledby="marca-passos-heading"
    >
      <div className="container py-24 flex flex-col gap-10 items-center justify-center text-center">
        <h2
          id="marca-passos-heading"
          className="text-4xl md:text-6xl text-dourado uppercase"
        >
          O Marca Passos
        </h2>
        <p
          className="text-areia-claro text-[18px]/[32px] font-light font-mulish"
          aria-describedby="marca-passos-heading"
        >
          <span className="font-bold">
            O Marca Passos é o aplicativo da Aliança Divergente, a principal
            ferramenta do Aliado
          </span>{" "}
          para definir metas, detalhar seu Sonho Grande e registrar diariamente
          seus PDAs (Percepção, Decisão e Ação). Ali, é possível acessar
          Protocolos, vídeos, áudios e ferramentas exclusivas para combater o
          medo, a Dependência Emocional e sustentar o avanço com clareza e
          constância ao longo da jornada.
        </p>
        <button
          type="button"
          className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 font-bold sm:text-base text-xs mt-6 uppercase focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          aria-label="Se tornar aliado da Aliança Divergente"
        >
          Seja Aliado
        </button>
      </div>
      <div
        className="w-full flex items-center justify-center bg-[url('/images/bg-marca-passos.webp')] bg-center bg-no-repeat px-4"
        role="presentation"
        aria-hidden="true"
      >
        <Image
          src="/images/celular-marca-passos.webp"
          alt=""
          width={352}
          height={713}
          loading="lazy"
          decoding="async"
          fetchPriority="low"
          sizes="(max-width: 768px) 260px, 352px"
          aria-hidden="true"
        />
      </div>
      <div className="container py-24 flex lg:flex-row flex-col gap-20 items-start justify-center">
        <article
          className="lg:max-w-[466px] h-[444px] w-full bg-[#0D3D41] p-6 flex flex-col items-center justify-center"
          aria-labelledby="audio-preview-heading"
        >
          <div className="flex items-start gap-6 w-full">
            <Image
              src="/images/elton-euler.webp"
              alt="Retrato de Elton Euler"
              width={186}
              height={260}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="max-w-[186px] min-w-[120px] w-auto h-auto object-cover"
            />
            <div className="flex flex-col gap-2 text-dourado max-w-[163px] w-full">
              <p className="text-[10px]/[16px] font-mulish">Elton Euler</p>
              <p
                id="audio-preview-heading"
                className="text-[26px]/[38px] font-bold"
              >
                Porque <br /> você não foi mais longe?
              </p>
              <p className="text-white text-[10px]/[16px] font-light font-mulish">
                Ouça e experimente esta prévia do áudio diário.
              </p>
            </div>
          </div>
          <div
            className="w-full flex items-center justify-center gap-2"
            role="group"
            aria-label="Controles do áudio diário"
          >
            <Image
              src="/images/track.png"
              alt=""
              width={302}
              height={50}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="max-w-[302px] min-w-[120px] w-auto h-auto"
              aria-hidden="true"
            />
            <Image
              src="/images/play-button.png"
              alt="Botão para iniciar o áudio"
              width={52}
              height={52}
              loading="lazy"
              decoding="async"
              fetchPriority="low"
              className="max-w-[52px] min-w-[42px] w-auto h-auto cursor-pointer"
            />
          </div>
        </article>
        <div className="w-full flex-1 flex flex-col gap-4">
          <h3 className="text-4xl md:text-6xl/[80px] text-dourado uppercase">
            Dê play na <br /> sua Permissão
          </h3>
          <p className="text-areia-claro text-[18px]/[32px] font-light font-mulish">
            Dentro do Marca Passos, o Aliado tem acesso ao Áudio Diário.{" "}
            <span className="font-bold">
              Ele provoca percepção, corrige rota, sustenta postura e mantém o
              comprometimento vivo todos os dias.
            </span>{" "}
            Curto, direto e profundo, é o lembrete diário do caminho e o desafio
            constante de não parar. Para experimentar na prática, ouça agora uma
            prévia do que espera por você dentro da Aliança.
          </p>
          <button
            type="button"
            className="hover:bg-verde-folha/60 transition-colors duration-300 text-dourado px-2 py-3 font-bold sm:text-base text-xs mt-6 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            aria-label="Reproduzir prévia do áudio diário"
          >
            Clique no play e experimente um ÁUDIO DIÁRIO.
          </button>
        </div>
      </div>
    </section>
  );
}
