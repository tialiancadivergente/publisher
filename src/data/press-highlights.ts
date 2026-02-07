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
    id: "evento-alianca-divergente-movimenta-40-milhoes-sao-jose-dos-campos",
    title: "Evento da Aliança Divergente movimenta R$ 40 milhões em São José dos Campos",
    excerpt:
      "Um evento voltado ao desenvolvimento humano e às relações emocionais movimentou cerca de R$ 40 milhões na economia de São José dos Campos, de acordo com a organização do evento, entre os dias 30 de janeiro e 1º de fevereiro. Realizado pela Aliança Divergente, o encontro reuniu 4.500 participantes na Arena Farma Conde, atraindo público de várias regiões do Brasil e do exterior.",
    imageSrc: "/images/press/evento-alianca-divergente-movimenta-40-milhoes-sao-jose-dos-campos.jpg",
    imageAlt: "Evento da Aliança Divergente movimenta R$ 40 milhões em São José dos Campos",
    sourceName: "SBT",
    sourceLogo: "/images/press/SBT.png",
    sourceLogoAlt: "Logo do SBT",
    author: "Por Redação",
    publishedAt: "2026-02-04",
    articleUrl: "https://horadafama.com.br/evento-da-alianca-divergente-movimenta-r-40-milhoes-em-sao-jose-dos-campos/",
    accentClass: "border-b-4 border-[#f7b500]",
  },
  {
    id: "evento-alianca-divergente-reune-4500-pessoas-projeta-sao-jose-dos-campos",
    title: "Evento da Aliança Divergente reúne 4.500 pessoas e projeta São José dos Campos no cenário nacional",
    excerpt:
      "Entre os dias 30 de janeiro e 1º de fevereiro, São José dos Campos (SP) recebeu um dos maiores eventos presenciais do país voltados ao desenvolvimento humano. Realizado pela Aliança Divergente, o encontro aconteceu na Arena Farma Conde e reuniu cerca de 4.500 participantes, vindos de diferentes regiões do Brasil e do exterior.",
    imageSrc: "/images/press/evento-alianca-divergente-reune-4500-pessoas-projeta-sao-jose-dos-campos.jpg",
    imageAlt: "Evento da Aliança Divergente reúne 4.500 pessoas e projeta São José dos Campos no cenário nacional",
    sourceName: "R7",
    sourceLogo: "/images/press/R7.png",
    sourceLogoAlt: "Logo do R7",
    author: "Por Redação",
    publishedAt: "2026-02-04",
    articleUrl: "https://businessfeed.com.br/evento-da-alianca-divergente-reune-4-500-pessoas-e-projeta-sao-jose-dos-campos-no-cenario-nacional/",
    accentClass: "border-b-4 border-[#004d9b]",
  },
  {
    id: "evento-alianca-divergente-movimenta-40-milhoes-reforca-sao-jose-dos-campos",
    title: "Evento da Aliança Divergente movimenta R$ 40 milhões e reforça São José dos Campos como polo",
    excerpt:
      "A realização de um evento de grande porte pela Aliança Divergente movimentou cerca de R$ 40 milhões na economia de São José dos Campos (SP) entre os dias 30 de janeiro e 1º de fevereiro. O encontro reuniu 4.500 participantes na Arena Farma Conde, atraindo público de diversas regiões do Brasil e do exterior.",
    imageSrc: "/images/press/evento-alianca-divergente-movimenta-40-milhoes-reforca-sao-jose-dos-campos.jpg",
    imageAlt: "Evento da Aliança Divergente movimenta R$ 40 milhões e reforça São José dos Campos como polo",
    sourceName: "Terra",
    sourceLogo: "/images/press/Terra.svg",
    sourceLogoAlt: "Logo do Terra",
    author: "Por Redação",
    publishedAt: "2026-02-04",
    articleUrl: "https://terra.moneyflash.com.br/evento-da-alianca-divergente-movimenta-r-40-milhoes-e-reforca-sao-jose-dos-campos-como-polo/",
    accentClass: "border-b-4 border-[#d22c27]",
  },
  {
    id: "band-sao-jose-dos-campos-recebe-evento-sobre-saude-mental",
    title: "São José dos Campos recebe evento sobre saúde mental",
    excerpt:
      "O encontro aconteceu em um momento de crescente atenção à saúde emocional no país. Dados recentes mostram aumento de afastamentos do trabalho por causas como ansiedade, depressão e burnout, reflexo das mudanças nas relações pessoais e profissionais.",
    imageSrc: "/images/press/band-sao-jose-dos-campos-recebe-evento-sobre-saude-mental.jpg",
    imageAlt: "São José dos Campos recebe evento sobre saúde mental",
    sourceName: "Band",
    sourceLogo: "/images/press/band.png",
    sourceLogoAlt: "Logo do Band",
    author: "Por Redação",
    publishedAt: "2026-02-02",
    articleUrl: "https://youtu.be/MOqJ-i05D5s?si=FzzEI-z0jk1xOyQh&t=1219",    
    accentClass: "border-b-4 border-[#ff8200]",
  },  
  {
    id: "aliados-de-todo-o-brasil-em-sao-jose-dos-campos",
    title: "Aliados de todo o Brasil em São José dos Campos",
    excerpt:
      "Estamos em mais de 80 países e nós transformamos vidas. Então nós trabalhamos com desenvolvimento humano. Nosso objetivo é tirar a pessoa da estagnação e fazer com que ela avance na vida. Então ela vai trabalhar a sua permissão.",
    imageSrc: "/images/press/aliados-de-todo-o-brasil-em-sao-jose-dos-campos.jpg",
    imageAlt: "Aliados de todo o Brasil em São José dos Campos",
    sourceName: "Band",
    sourceLogo: "/images/press/band.png",
    sourceLogoAlt: "Logo do Band",
    author: "Por Redação",
    publishedAt: "2026-01-31",
    articleUrl: "https://www.youtube.com/live/zg2jFSoDlkk?si=6TicO1Auee8Ok-Gg&t=3618",
    accentClass: "border-b-4 border-[#0091d9]",
  },
  {
    id: "importancia-da-saude-emocional-na-atualidade",
    title: "Importância da Saúde Emocional na Atualidade",
    excerpt:
      "A saúde emocional vem ganhando destaque nas discussões contemporâneas, especialmente em um mundo que exige tanto das pessoas. Estudo do Ministério da Previdência Social revelou que, em 2025, transtornos emocionais, como ansiedade e depressão, se tornaram a segunda maior causa de afastamentos no trabalho no Estado de São Paulo.",
    imageSrc: "/images/press/importancia-da-saude-emocional-na-atualidade.jpg",
    imageAlt: "Importância da Saúde Emocional na Atualidade",
    sourceName: "Encontra São José dos Campos",
    sourceLogo: "",
    sourceLogoAlt: "Logo do Encontra São José dos Campos",
    author: "Por Redação",
    publishedAt: "2026-01-30",
    articleUrl: "https://www.encontrasaojosedoscampos.com/sao-jose-dos-campos-recebe-evento-o-chamado-divergente-com-foco-em-saude-emocional/?utm_source=chatgpt.com",
    accentClass: "border-b-4 border-[#f7b500]",
  },
  {
    id: "sao-jose-dos-campos-recebe-evento-sobre-saude-mental",
    title: "Saúde Emocional no Trabalho: Um Desafio Urgente",
    excerpt:
      "Tem um dado muito alarmante que nos últimos anos mais de 550.000 pessoas foram afastadas dos trabalhos por conta de problemas emocionais. Então a aliança Divergente, ela vem com essa proposta de resolver esse problema de uma maneira diferente.",
    imageSrc: "/images/press/sao-jose-dos-campos-recebe-evento-sobre-saude-mental.jpg",
    imageAlt: "São José dos Campos recebe evento sobre saúde mental",
    sourceName: "Band",
    sourceLogo: "/images/press/band.png",
    sourceLogoAlt: "Logo do Band",
    author: "Por Redação",
    publishedAt: "2026-01-30",
    articleUrl: "https://youtu.be/6IcvAwtN7Mo?si=RhKj0ptYMT82_kot&t=1421",
    accentClass: "border-b-4 border-[#004d9b]",
  },
  {
    id: "sao-jose-dos-campos-recebe-evento-o-chamado-divergente-com-foco-em-saude-emocional",
    title: "São José dos Campos recebe evento “O Chamado Divergente” com foco em saúde emocional",
    excerpt:
      "São José dos Campos se prepara para receber entre os dias 30 de janeiro e 1º de fevereiro o evento “O Chamado Divergente”, uma imersão voltada à reflexão, reconexão e fortalecimento emocional e relacional.",
    imageSrc: "/images/press/sao-jose-dos-campos-recebe-evento-o-chamado-divergente-com-foco-em-saude-emocional.jpg",
    imageAlt: "São José dos Campos recebe evento “O Chamado Divergente” com foco em saúde emocional",
    sourceName: "Meon",
    sourceLogo: "/images/press/meon.png",
    sourceLogoAlt: "Logo do Meon",
    author: "Por Redação",
    publishedAt: "2026-01-28",
    articleUrl: "https://www.meon.com.br/noticias/vale-do-paraiba-regiao/sao-jose-dos-campos/sao-jose-dos-campos-recebe-evento-o-chamado-divergente-com-foco-em-saude-emocional",
    accentClass: "border-b-4 border-[#d22c27]",
  },
  {
    id: "cbn-vale-2a-edicao-rafael-medeiros-diretor-brand-alianca-divergente",
    title: "CBN – Rapfael Medeiros, diretor de Brand da Aliança Divergente",
    excerpt:
      "Aliança divergente transformou a vida das pessoas é a própria postura delas. Então você tem um conhecido que é aliado.",
    imageSrc: "/images/press/cbn-vale-2a-edicao-rafael-medeiros-diretor-brand-alianca-divergente.jpg",
    imageAlt: "CBN Vale 2ª Edição – Rapfael Medeiros, diretor de Brand da Aliança Divergente",
    sourceName: "CBN",
    sourceLogo: "/images/press/CBN.svg",
    sourceLogoAlt: "Logo do CBN",
    author: "Por Redação",
    publishedAt: "2026-01-27",
    articleUrl: "https://www.youtube.com/live/vceBD_F4_b4",
    accentClass: "border-b-4 border-[#ff8200]",
  },   
  {
    id: "sao-jose-dos-campos-recebe-evento-de-imersao-emocional-e-reconexao-humana",
    title: "São José dos Campos recebe evento de imersão emocional e reconexão humana",
    excerpt:
      "Ansiedade, exaustão, burnout e conflitos familiares formam um cenário de colapso silencioso nos dias atuais, que se reflete nos dados de afastamento do trabalho e nos lares brasileiros.",
    imageSrc: "/images/press/sao-jose-dos-campos-recebe-evento-de-imersao-emocional-e-reconexao-humana.jpg",
    imageAlt: "São José dos Campos recebe evento de imersão emocional e reconexão humana",
    sourceName: "SBT",
    sourceLogo: "/images/press/SBT.png",
    sourceLogoAlt: "Logo do SBT",
    author: "Por Redação",
    publishedAt: "2026-01-26",
    articleUrl: "https://thmais.com.br/cidades/vale/cotidiano-vale/cidade-vale/sao-jose-dos-campos-recebe-evento-de-imersao-emocional-e-reconexao-humana/",
    accentClass: "border-b-4 border-[#0091d9]",
  }, 
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
    articleUrl: "https://blog.aliancadivergente.com.br/imprensa/uol-evento-que-reune-empresarios-foca-em-legado-e-identidade-das-empresas/",
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
    articleUrl: "https://blog.aliancadivergente.com.br/imprensa/o-globo-conheca-historia-do-empresario-visionario-que-antes-de-se-tornar-multimilionario-acreditou-que-sucesso-nao-era-para-ele/",
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
    articleUrl: "https://blog.aliancadivergente.com.br/imprensa/istoe-teoria-relaciona-padroes-invisiveis-a-bloqueios-profissionais-e-emocionais/",
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
    articleUrl: "https://blog.aliancadivergente.com.br/imprensa/terra-a-revolucao-emocional-silenciosa-como-a-alianca-divergente-reposiciona-o-brasil-no-mapa-global-do-desenvolvimento-humano/",
    accentClass: "border-b-4 border-[#ff8200]",
  },
  // {
  //   id: "cbn-entrevista",
  //   title: "Entrevista com Renato Torres Especialista em Estruturação de Times de Vendas bate papo com Fernando Carlos",
  //   excerpt:
  //     "Especialista em Estruturação de Times de Vendas bate papo com Fernando Carlos fala sobre o empreendedorismo no Brasil e os desafios dentro do ecossistema de uma empresa.",
  //   imageSrc: "/images/press/cbn-entrevista.jpg",
  //   imageAlt: "Entrevista em estúdio de rádio com dois apresentadores",
  //   sourceName: "CBN",
  //   sourceLogo: "/images/press/CBN.svg",
  //   sourceLogoAlt: "Logo da CBN",
  //   author: "Por CBN Vale",
  //   publishedAt: "2024-11-06",
  //   articleUrl: "https://cbn.globo.com/",
  //   accentClass: "border-b-4 border-[#0091d9]",
  // },
] as const;

