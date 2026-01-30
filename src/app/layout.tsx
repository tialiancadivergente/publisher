import type { Metadata } from "next";
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfairDisplay.variable} ${lora.variable} ${cormorant.variable} ${mulish.variable} ${spectral.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
