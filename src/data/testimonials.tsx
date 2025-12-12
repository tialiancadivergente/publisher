import { ReactNode } from "react";

export interface TestimonialCardProps {
  id: string;
  name: string;
  title: string;
  description: ReactNode;
  imageSrc: string;
  imageAlt: string;
  location: string;
  joinDate: string;
}

export const testimonialsData: readonly TestimonialCardProps[] = [
  {
    id: "ana-flavia",
    name: "Ana Flávia Ferreira",
    title: "Tive uma recuperação impressionante",
    description: (
      <>
        Com o marido em fase terminal de uma doença renal e sendo a única
        provedora da casa, Ana Flávia conheceu a Aliança Divergente em janeiro
        de 2025.
      </>
    ),
    imageSrc: "/images/testimonials/ana-flavia-ferreira.jpg",
    imageAlt: "Sandra de Almeida - Aliada da Aliança Divergente",
    location: "Curitiba/PR",
    joinDate: "jan/2025",
  },
  {
    id: "sandra-almeida",
    name: "Sandra de Almeida",
    title: "Meu casamento melhorou radicalmente",
    description: (
      <>
        Quando entrei na Aliança Divergente, eu estava falida, endividada, à
        beira do divórcio e com a sensação de que ninguém me via. Me sentia
        injustiçada...
      </>
    ),
    imageSrc: "/images/testimonials/sandra-de-almeida.jpg",
    imageAlt: "Sandra de Almeida - Aliada da Aliança Divergente",
    location: "Belo Horizonte/MG",
    joinDate: "fev/2023",
  },
  {
    id: "alessandra-zimmermann",
    name: "Alessandra Zimmermann",
    title: "De endividada à capa da Vogue Europa",
    description: (
      <>
        Durante 15 anos, tratei trombofilia e pancreatite. Vivia um casamento
        sem afeto e sem provisão, endividada com agiotas, sobrecarregada pela
        dependência.
      </>
    ),
    imageSrc: "/images/testimonials/alessandra-zimmermann.jpg",
    imageAlt: "Alessandra Zimmermann - Aliada da Aliança Divergente",
    location: "Taubaté/SP",
    joinDate: "out/2024",
  },
  {
    id: "augusto-cesar",
    name: "Augusto Cesar",
    title: "Hoje vivo a vida que sempre sonhei!",
    description: (
      <>
        Antes de me tornar aliado, meu projeto do SPA Shiatsu estava parado
        desde 2012. Vivia sobrecarregado com outros projetos, longe dos meus
        filhos e desconectado da minha esposa.
      </>
    ),
    imageSrc: "/images/testimonials/augusto-cesar.jpg",
    imageAlt: "Augusto Cesar - Aliado da Aliança Divergente",
    location: "São Paulo/SP",
    joinDate: "nov/2023",
  },
];

