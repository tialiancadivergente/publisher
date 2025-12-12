import { ReactNode } from "react";

export interface NewsCardProps {
    title: string;
    description: ReactNode;
    imageSrc: string;
    imageAlt: string;
    imageWidth: number;
    imageHeight: number;
    variant?: "text-first" | "image-first";
    className?: string;
    backgroundColor?: string;
    id?: string;
  }

export const newsCardsData: readonly NewsCardProps[] = [
  {
    id: "grupos-apoio",
    title: "Grupos de Apoio",
    description: (
      <>
        Ninguém avança sozinho. Os{" "}
        <span className="font-bold">
          Grupos Locais são núcleos com até 30 pessoas, separados por gênero e
          região, liderados por Anfitriões
        </span>{" "}
        (aliados que decidiram apoiar a Tribo). São espaços seguros para
        expressão sem medo, conexões reais e apoio prático entre aliados
        comprometidos em romper padrões.
      </>
    ),
    imageSrc: "/images/grupo-de-apoio-alianca-divergente.jpg",
    imageAlt: "Grupos de apoio da Aliança Divergente - duas mulheres interagindo",
    imageWidth: 529,
    imageHeight: 360,
    variant: "text-first",
    backgroundColor: "bg-areia-claro",
  },
  {
    id: "protocolos",
    title: "Protocolos",
    description: (
      <>
        <span className="font-bold">
          São ferramentas práticas e estruturadas
        </span>{" "}
        para romper padrões e combater danos da Dependência Emocional, como
        medo, culpa, insegurança e procrastinação. Cada preenchimento permite
        enxergar travas invisíveis, tomar decisões conscientes e sustentar
        posturas que aumentam sua Permissão de forma concreta e progressiva.
      </>
    ),
    imageSrc: "/images/protocolos-alianca-divergente.jpg",
    imageAlt: "Protocolos de proteção emocional - documentos em uma mesa",
    imageWidth: 529,
    imageHeight: 360,
    variant: "image-first",
    backgroundColor: "bg-areia-claro",
  },
  {
    id: "encontros-de-impulso",
    title: "Encontros de Impulso",
    description: (
      <>
        O Encontro de Impulso é um podcast provocativo e inspirador, projetado
        para impulsionar nossos Aliados, mostrando o caminho que eles podem seguir
        para ir mais longe.{" "}
        <span className="font-bold">
          Composto por conversas sobre negócios, carreira e finanças
        </span>
        , sempre trazendo o elemento real de pessoas que vivem o que estão
        falando, desmistificando a jornada e valorizando o progresso.
      </>
    ),
    imageSrc: "/images/encontros-de-impluso-alianca-divergente.jpg",
    imageAlt: "Encontros de Impulso da Aliança Divergente",
    imageWidth: 529,
    imageHeight: 360,
    variant: "text-first",
    backgroundColor: "bg-areia-claro",
  },
  {
    id: "encontros-de-reforco",
    title: "Encontros de Reforço",
    description: (
      <>
        O Encontro de Reforço é um pilar fundamental na jornada da Aliança
        Divergente, projetado para solidificar o conhecimento da tribo,
        aprofundar temas essenciais, nivelar conceitos para novos Aliados e
        inspirar avanços consistentes.{" "}
        <span className="font-bold">
          Mais do que apenas um momento de aprendizado, é um espaço de alinhamento
          e ajuste de rota.
        </span>
      </>
    ),
    imageSrc: "/images/encontros-de-reforcos-alianca-divergente.jpg",
    imageAlt: "Encontros de Reforço da Aliança Divergente",
    imageWidth: 529,
    imageHeight: 360,
    variant: "image-first",
    backgroundColor: "bg-areia-claro",
  },
];

