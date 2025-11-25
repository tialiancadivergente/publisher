export interface MentorProfile {
  readonly id: string;
  readonly name: string;
  readonly specialty: string;
  readonly description: string;
  readonly imageSrc: string;
  readonly imageAlt: string;
  readonly ctaLabel: string;
  readonly ctaHref: string;
}

export const mentorProfiles: readonly MentorProfile[] = [
  {
    id: "cida-torres",
    name: "Cida Torres",
    specialty: "Mentora da Aliança Divergente",
    description:
      "Mentora da Aliança Divergente, Cida alia excelência técnica ao cuidado relacional em cada encontro. Lidera diretamente os Encontros de Impulso, a Academia dos Anfitriões e Anfitriões na Estrada, promovendo avanços consistentes para os Aliados.",
    imageSrc: "/images/cida-torres.webp",
    imageAlt: "Retrato da mentora Cida Torres",
    ctaLabel: "Conheça Cida Torres",
    ctaHref: "/mentores/cida-torres",
  },
  {
    id: "elton-euler",
    name: "Elton Euler",
    specialty: "Fundador e mentor da Aliança",
    description:
      "Fundador da Aliança Divergente e mentor de mais de 130 mil Aliados em 60 países. Criador do método O Corpo Explica, direciona líderes a sustentarem novas posturas com clareza e consistência.",
    imageSrc: "/images/elton-neuler.webp",
    imageAlt: "Retrato do mentor Elton Euler",
    ctaLabel: "Conheça Elton Euler",
    ctaHref: "/mentores/elton-euler",
  },
  {
    id: "ramon-galimberti",
    name: "Ramon Galimberti",
    specialty: "Terapeuta e especialista em desenvolvimento humano",
    description:
      "Mentor focado em desenvolvimento humano. Ramon acompanha Aliados em jornadas que unem profundidade emocional e estratégia prática, com resultados transformadores ao redor do mundo.",
    imageSrc: "/images/ramon-galimberti.webp",
    imageAlt: "Retrato do mentor Ramon Galimberti",
    ctaLabel: "Conheça Ramon Galimberti",
    ctaHref: "/mentores/ramon-galimberti",
  },
] as const;

