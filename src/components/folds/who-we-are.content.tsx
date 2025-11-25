export function WhoWeAreContentSection() {
  return (
    <section
      className="w-full bg-[url('/images/bg-quem-somos.webp')] bg-cover bg-center bg-no-repeat pt-32"
      aria-labelledby="quem-somos-heading"
    >
      <div className="container py-28 flex flex-col md:flex-row gap-8 md:gap-56">
        <div className="flex flex-col gap-6">
          <h2
            id="quem-somos-heading"
            className="text-4xl md:text-6xl text-dourado flex md:flex-col gap-6"
          >
            <span className="block">Quem</span>
            <span className="block">Somos</span>
          </h2>
        </div>
        <div className="flex-1 flex flex-col gap-6 text-white text-base md:text-[18px] leading-7 md:leading-[32px] font-light">
          <p>
            A{" "}
            <strong className="font-bold">
              Aliança Divergente é o ecossistema de transformação
            </strong>{" "}
            pessoal mais profundo e estruturado do Brasil, que impulsiona
            mudança real, não com promessas, mas com prática.
          </p>
          <p>
            Aplicamos{" "}
            <strong className="font-bold">
              conhecimento vivo e coragem em ação diária
            </strong>
            , com protocolos únicos e estruturados pela Teoria da Permissão,
            método pioneiro que desbloqueia a raiz da estagnação humana: a
            dependência emocional.
          </p>
          <p>
            <strong className="font-bold">
              Não somos motivação passageira nem discurso espiritualizado.
            </strong>
          </p>
          <p>
            Somos uma estrutura ativa e viva, que provoca com verdade, propósito
            e um ambiente que desafia, acolhe e sustenta. Para quem chega
            exausto ou repetindo ciclos,{" "}
            <strong className="font-bold">
              somos uma comunidade que entrega direção, ritmo e verdade.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
}
