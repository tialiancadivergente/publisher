export function HeroSection() {
  return (
    <div className="container flex flex-col items-center justify-center font-spectral text-verde-eucalipto text-center gap-8 py-24">
      <h1 className="text-3xl sm:text-7xl font-bold" tabIndex={0}>
        Clareza, Coragem e Avanço
      </h1>
      <p id="descricao-missao" className="text-base sm:text-2xl">
        A Aliança Divergente é o ecossistema ideal para romper com ciclos de
        estagnação e ter a Permissão para avançar em direção à vida memorável
        que sempre sonhou.
      </p>
      <button
        className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 uppercase font-bold sm:text-base text-xs mt-6"
        aria-label="Torne-se membro da Aliança Divergente"
      >
        Torne-se membro
      </button>
    </div>
  );
}

