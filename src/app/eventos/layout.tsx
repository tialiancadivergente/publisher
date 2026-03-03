import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "O Resgate dos Otimistas - Diagnóstico de Dependência Emocional",
  description: "Faça seu diagnóstico de dependência emocional gratuito e descubra como aumentar seu nível de permissão.",
  alternates: {
    canonical:
      "https://www.aliancadivergente.com.br/eventos/o-resgate-dos-otimistas",
  },
  openGraph: {
    title: "O Resgate dos Otimistas - Diagnóstico de Dependência Emocional",
    description:
      "Faça seu diagnóstico de dependência emocional gratuito e descubra como aumentar seu nível de permissão.",
    url: "https://www.aliancadivergente.com.br/eventos/o-resgate-dos-otimistas",
    siteName: "Aliança Divergente",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://www.aliancadivergente.com.br/images/o-resgate-dos-otimistas.jpg",
        alt: "O Resgate dos Otimistas",
      },
      {
        url: "https://www.aliancadivergente.com.br/images/logo-oro-dark.webp",
        alt: "Logotipo O Resgate dos Otimistas",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return ( 
    <>
      {children}
    </>
  );
}
