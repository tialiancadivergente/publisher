export interface FooterLink {
  readonly id: string;
  readonly label: string;
  readonly href: string;
  readonly openInNewTab?: boolean;
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
  {
    id: "politica-de-privacidade",
    label: "Política de privacidade",
    href: "/politicas-de-privacidade",
    openInNewTab: true,
  },
  {
    id: "termos-de-uso",
    label: "Termos de uso",
    href: "/termos-de-uso",
    openInNewTab: true,
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
  street: "Av. Paulista, 1471 Edif. Barão de Cristina, CJ 1110",
  neighborhood: "Bela Vista",
  city: "São Paulo-SP",
  zipCode: "CEP: 01311-927",
} as const;

export const footerDisclaimer =
  "Este site não é afiliado ao Facebook, Meta, Google ou qualquer rede social ou recursos doe marketing. A compra desse material não garante nenhum tipo de resultado. Fazemos todos os esforços para indicar claramente e mostrar todas as provas do produto e usamos resultados reais de alunos.";

