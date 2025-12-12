import { ReactNode } from "react";

export interface MentorCardProps {
  id: string;
  name: string;
  role: string;
  focus: string;
  titleHighlight?: ReactNode;
  imageSrc: string;
  imageAlt: string;
}

export const mentorData: readonly MentorCardProps[] = [
  {
    id: "denis-junqueira",
    name: "Denis Junqueira",
    role: "Construtor de riqueza",
    focus: "CONSTRUINDO SUA CAPACIDADE FINANCEIRA",
    imageSrc: "/images/mentors/denis-junqueira.png",
    imageAlt: "Denis Junqueira - mentor financeiro",
  },
  {
    id: "pedro-goiozo",
    name: "Pedro Goiozo",
    role: "Especialista em IA aplicada",
    focus: "INTELIGÊNCIA ARTIFICIAL NO SEU DIA A DIA",
    imageSrc: "/images/mentors/pedro-goiozo.png",
    imageAlt: "Pedro Goiozo - especialista em IA",
  },
  {
    id: "raphael-medeiros",
    name: "Raphael Medeiros",
    role: "Construção de marcas",
    focus: "MARCAS MEMORÁVEIS",
    imageSrc: "/images/mentors/raphael-medeiros.png",
    imageAlt: "Raphael Medeiros - especialista em marcas",
  },
  {
    id: "rafael-thomazelli-ia",
    name: "Rafael Thomazelli",
    role: "Tecnologia e IA",
    focus: "IA PARA RESOLVER, AUTOMATIZAR E AVANÇAR",
    imageSrc: "/images/mentors/rafael-thomazelli.png",
    imageAlt: "Rafael Thomazelli - IA e Automação",
  },
  {
    id: "rafael-thomazelli-logica",
    name: "Rafael Thomazelli",
    role: "Pensamento estratégico",
    focus: "LÓGICA: A CIÊNCIA DE PENSAR ANTES DE AGIR",
    imageSrc: "/images/mentors/rafael-thomazelli-logica.png",
    imageAlt: "Rafael Thomazelli - pensamento lógico",
  },
  {
    id: "michelle-jakobs",
    name: "Michelle Jakobs",
    role: "Especialista em dropshipping",
    focus: "O QUE É DROPSHIPPING?",
    imageSrc: "/images/mentors/michelle-jakobs.png",
    imageAlt: "Michelle Jakobs - especialista em dropshipping",
  },
  {
    id: "gabriel-sales",
    name: "Gabriel Sales",
    role: "Especialista em marketing digital",
    focus: "O PODER DO MARKETING DIGITAL IMPULSIONANDO SEUS RESULTADOS",
    imageSrc: "/images/mentors/gabriel-sales.png",
    imageAlt: "Gabriel Sales - especialista em marketing digital",
  },
  {
    id: "reinaldo-boesso",
    name: "Reinaldo Boesso",
    role: "Construtor de renda",
    focus: "RENDA EXTRA: TRANSFORME SEU TEMPO EM DINHEIRO",
    imageSrc: "/images/mentors/reinaldo-boesso.png",
    imageAlt: "Reinaldo Boesso - construtor de renda",
  },
  {
    id: "priscila-liske",
    name: "Priscila P. Liske",
    role: "Especialista em gestão de RH",
    focus: "GESTÃO DE RH 4.0: FERRAMENTAS E TENDÊNCIAS PARA A NOVA ERA DO TRABALHO",
    imageSrc: "/images/mentors/priscila-p-liske.png",
    imageAlt: "Priscila P. Liske - especialista em gestão de RH",
  },
  {
    id: "alberto-guerra",
    name: "Dr. Alberto Guerra",
    role: "Especialista em empreendedorismo",
    focus: "EMPREENDEDORISMO INOVADOR: CRIE VALOR RESOLVENDO PROBLEMAS",
    imageSrc: "/images/mentors/dr-alberto-guerra.png",
    imageAlt: "Dr. Alberto Guerra - especialista em empreendedorismo",
  },
  {
    id: "luane-cardoso",
    name: "Luane Cardoso",
    role: "Especialista em liderança",
    focus: "PRIMEIRA LIDERANÇA: INSPIRE E GERE RESULTADOS OUSADOS",
    imageSrc: "/images/mentors/luane-cardoso.png",
    imageAlt: "Luane Cardoso - especialista em liderança",
  },
] as const;

