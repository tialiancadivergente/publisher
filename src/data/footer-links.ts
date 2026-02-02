export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
}

export interface SocialMediaLink {
  readonly id: string;
  readonly name: string;
  readonly href: string;
  readonly icon: "instagram" | "youtube" | "tiktok";
}

export const footerContentLinks: readonly FooterLink[] = [
  {
    id: "central-conteudo",
    label: "Central de Conteúdo",
    href: "https://blog.aliancadivergente.com.br/",
  },
  {
    id: "historias-aliados",
    label: "Histórias dos Aliados",
    href: "#stories-of-the-allies",
  },
  {
    id: "universidade-divergente",
    label: "Universidade Divergente",
    href: "#divergent-university",
  },
] as const;

export const footerAboutLinks: readonly FooterLink[] = [
  {
    id: "quem-somos",
    label: "Quem Somos",
    href: "#who-we-are",
  },
] as const;

export const socialMediaLinks: readonly SocialMediaLink[] = [
  {
    id: "instagram",
    name: "Instagram",
    href: "https://www.instagram.com/aliancadivergente",
    icon: "instagram",
  },
  {
    id: "youtube",
    name: "YouTube",
    href: "https://www.youtube.com/@aliancadivergente",
    icon: "youtube",
  },
  {
    id: "tiktok",
    name: "TikTok",
    href: "https://www.tiktok.com/@aliancadivergente",
    icon: "tiktok",
  },
] as const;

export const footerAddress = {
  street: "R. Salviano José da Silva, 400",
  neighborhood: "Eldorado",
  city: "São José dos Campos/SP",
  zipCode: "CEP: 12238-573",
} as const;

export const footerDisclaimer =
  "Este site não é afiliado ao Facebook, Meta, Google ou qualquer rede social ou recursos doe marketing. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos.";

