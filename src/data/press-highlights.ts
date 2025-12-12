export interface PressHighlight {
  readonly id: string;
  readonly title: string;
  readonly excerpt: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly sourceName: string;
  readonly sourceLogo: string;
  readonly sourceLogoAlt: string;
  readonly author: string;
  readonly publishedAt: string;
  readonly articleUrl: string;
  readonly accentClass?: string;
}

export const pressHighlightsData: readonly PressHighlight[] = [
  {
    id: "uol-evento",
    title: "Evento que reúne empresários foca em legado e identidade das empresas",
    excerpt:
      "Evento que reúne empresários, fundadores e tomadores de decisão para discutir os dilemas do crescimento acelerado e a importância de manter a identidade da empresa em momentos de escala. Comandado por nomes como Jacque Boesso",
    imageSrc: "/images/press/uol-evento.jpg",
    imageAlt: "Auditório cheio durante evento da Aliança Divergente",
    sourceName: "UOL",
    sourceLogo: "/images/press/Uol.svg",
    sourceLogoAlt: "Logo do UOL",
    author: "Por Redação",
    publishedAt: "2025-07-07",
    articleUrl: "https://www.uol.com.br/",
    accentClass: "border-b-4 border-[#f7b500]",
  },
  {
    id: "oglobo-historia",
    title: "Conheça história do empresário visionário que, antes de se tornar multimilionário, acreditou que sucesso não era para ele",
    excerpt:
      "Em um cenário permeado por desafios e superações, a trajetória de Elton Euler desponta como uma transformação na forma de compreender e alcançar o sucesso. Nascido em Taguatinga, no Distrito Federal, em 1983, e tendo",
    imageSrc: "/images/press/oglobo-elton.jpg",
    imageAlt: "Retrato de Elton Euler",
    sourceName: "O GLOBO",
    sourceLogo: "/images/press/o-globo.svg",
    sourceLogoAlt: "Logo do O Globo",
    author: "Por O Globo",
    publishedAt: "2025-02-21",
    articleUrl: "https://oglobo.globo.com/",
    accentClass: "border-b-4 border-[#004d9b]",
  },
  {
    id: "istoe-teoria",
    title: "Teoria relaciona padrões invisíveis a bloqueios profissionais e emocionais",
    excerpt:
      "No Brasil, apenas quatro em cada dez empresas sobrevivem aos cinco primeiros anos de existência, segundo dados do Sebrae. Paralelamente, o país figura entre os líderes mundiais em transtornos de ansiedade, e cerca de 70% das queixas registradas em clínicas médicas têm origem emocional, de acordo com o Ministério da Saúde.",
    imageSrc: "/images/press/istoe-teoria.jpg",
    imageAlt: "Palestra para empreendedores com plateia atenta",
    sourceName: "ISTOÉ",
    sourceLogo: "/images/press/IstoE.svg",
    sourceLogoAlt: "Logo da ISTOÉ",
    author: "Por Redação",
    publishedAt: "2025-03-27",
    articleUrl: "https://istoe.com.br/",
    accentClass: "border-b-4 border-[#d22c27]",
  },
  {
    id: "terra-revolucao",
    title: "A revolução emocional silenciosa: como a Aliança Divergente reposiciona o Brasil no mapa global do desenvolvimento humano",
    excerpt:
      "Em meio à crescente busca por soluções emocionais eficazes, a Aliança Divergente, fundada em 2022 por Elton Euler (mentor e pesquisador), Jacque Boesso (vice-presidente) e Renato Torres (CEO), tornou-se referência no desenvolvimento humano. Com atuação em mais de 60 países e 100 mil membros ativos, a organização movimentou R$ 350 milhões apenas em 2024",
    imageSrc: "/images/press/terra-revolucao.jpg",
    imageAlt: "Mentor da Aliança Divergente falando em evento",
    sourceName: "TERRA",
    sourceLogo: "/images/press/Terra.svg",
    sourceLogoAlt: "Logo do Terra",
    author: "Por Jorge Luiz Brasil",
    publishedAt: "2025-06-12",
    articleUrl: "https://www.terra.com.br/",
    accentClass: "border-b-4 border-[#ff8200]",
  },
  {
    id: "cbn-entrevista",
    title: "Entrevista com Renato Torres Especialista em Estruturação de Times de Vendas bate papo com Fernando Carlos",
    excerpt:
      "Especialista em Estruturação de Times de Vendas bate papo com Fernando Carlos fala sobre o empreendedorismo no Brasil e os desafios dentro do ecossistema de uma empresa.",
    imageSrc: "/images/press/cbn-entrevista.jpg",
    imageAlt: "Entrevista em estúdio de rádio com dois apresentadores",
    sourceName: "CBN",
    sourceLogo: "/images/press/CBN.svg",
    sourceLogoAlt: "Logo da CBN",
    author: "Por CBN Vale",
    publishedAt: "2024-11-06",
    articleUrl: "https://cbn.globo.com/",
    accentClass: "border-b-4 border-[#0091d9]",
  },
] as const;

