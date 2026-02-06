import type { Metadata } from "next";
import Script from "next/script";
import {
  Geist,
  Geist_Mono,
  Playfair_Display,
  Lora,
  Cormorant,
  Mulish,
  Spectral,
} from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.aliancadivergente.com.br/#organization",
      name: "Aliança Divergente",
      url: "https://www.aliancadivergente.com.br/",
      logo: "https://www.aliancadivergente.com.br/images/logo-alianca-divergente.svg",
      description:
        "A Aliança Divergente é o ecossistema ideal para romper com ciclos de estagnação e ter a Permissão para avançar em direção à vida memorável que sempre sonhou.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "R. Salviano José da Silva, 400",
        addressLocality: "São José dos Campos",
        addressRegion: "SP",
        postalCode: "12238-573",
        addressCountry: "BR",
      },
      sameAs: [
        "https://www.instagram.com/aliancadivergente",
        "https://www.youtube.com/@aliancadivergente",
        "https://www.tiktok.com/@aliancadivergente",
      ],
    },
  ],
} as const;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const cormorant = Cormorant({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const mulish = Mulish({
  variable: "--font-mulish",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const spectral = Spectral({
  variable: "--font-spectral",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Como Romper Padrões Emocionais e Transformar Sua Vida | Aliança Divergente",
  description: "Descubra métodos práticos para superar a dependência emocional, romper padrões que travam sua vida e evoluir com apoio real. Faça parte da Aliança Divergente.",
  icons: {
    icon: [
      {
        url: new URL(
          "./cropped-Alianca-Divergente-Logotipo-Favicon-32x32 copy.png",
          import.meta.url
        ),
        type: "image/png",
        sizes: "32x32",
      },
    ],
    shortcut: [
      {
        url: new URL(
          "./cropped-Alianca-Divergente-Logotipo-Favicon-32x32 copy.png",
          import.meta.url
        ),
        type: "image/png",
        sizes: "32x32",
      },
    ],
    apple: [
      {
        url: new URL(
          "./cropped-Alianca-Divergente-Logotipo-Favicon-32x32 copy.png",
          import.meta.url
        ),
        type: "image/png",
        sizes: "32x32",
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
    <html lang="pt-BR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
        <Script id="google-tag-manager" strategy="beforeInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WV56XBLQ');`}
        </Script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lora.variable} ${cormorant.variable} ${mulish.variable} ${spectral.variable} antialiased`}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV56XBLQ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
