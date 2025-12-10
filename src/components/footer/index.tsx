"use client";
import Link from "next/link";
import Image from "next/image";
import {
  footerContentLinks,
  footerAboutLinks,
  socialMediaLinks,
  footerAddress,
  footerDisclaimer,
} from "@/data/footer-links";
import { Instagram, Youtube } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

function SocialIcon({ icon }: { icon: "instagram" | "youtube" | "tiktok" }) {
  switch (icon) {
    case "instagram":
      return <Instagram className="w-6 h-6" aria-hidden="true" />;
    case "youtube":
      return <Youtube className="w-6 h-6" aria-hidden="true" />;
    case "tiktok":
      return (
        <svg
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
        </svg>
      );
  }
}

export function Footer() {
  const isMobile = useIsMobile(640);

  return (
    <footer
      className="w-full bg-verde-eucalipto text-creme px-4 sm:px-11 py-8 font-spectral"
      role="contentinfo"
      aria-label="Rodapé do site"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-[auto_auto_auto_auto_1fr] gap-8 lg:gap-12">
        {/* Logo e Badge */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <div className="flex items-center gap-2">
            <Image
              src={
                isMobile
                  ? "/images/logo-alianca-divergente-mobile.png"
                  : "/images/logo-alianca-divergente.svg"
              }
              alt="Logotipo da Aliança Divergente"
              width={isMobile ? 94 : 306}
              height={isMobile ? 27 : 40}
              priority
              sizes={`(max-width: ${isMobile ? 94 : 306}px) ${
                isMobile ? 94 : 306
              }px, ${isMobile ? 94 : 306}px`}
              style={{ height: "auto", width: isMobile ? 94 : 306 }}
              role="img"
            />
          </div>
          <div className="flex items-center">
            <Image
              src="/images/reclame-aqui.png"
              alt="Reclame Aqui"
              width={100}
              height={100}
              className="h-auto w-auto"
              priority={false}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>

        {/* Links de Conteúdo */}
        <nav
          className="flex flex-col gap-3 items-center md:items-start"
          aria-label="Links de conteúdo"
        >
          {footerContentLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-creme hover:text-dourado transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Links Sobre */}
        <nav
          className="flex flex-col gap-3 items-center md:items-start"
          aria-label="Links sobre o site"
        >
          {footerAboutLinks.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className="text-creme hover:text-dourado transition-colors"
              aria-label={link.label}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Redes Sociais */}
        <div className="flex flex-col gap-4 items-center md:items-start">
          <h3 className="text-creme font-semibold text-lg">Nossas Redes</h3>
          <div className="flex gap-4" role="list" aria-label="Redes sociais">
            {socialMediaLinks.map((social) => (
              <Link
                key={social.id}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-dourado transition-colors"
                aria-label={`Visitar nosso ${social.name}`}
              >
                <SocialIcon icon={social.icon} />
                <span className="sr-only">{social.name}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-1 pt-8 xl:pt-0 md:col-span-4 lg:col-span-5 xl:col-span-1 text-right border-t border-creme/20 xl:border-t-0 xl:border-0">
          <h4 className="text-dourado font-semibold text-[10px]/[16px] uppercase">
            TERMOS E CONDIÇÕES E POLÍTICAS DE PRIVACIDADE.
          </h4>
          <address className="text-white text-[10px]/[16px] not-italic">
            {footerAddress.street} - {footerAddress.neighborhood},{" "}
            {footerAddress.city} - {footerAddress.zipCode}
          </address>
          <p className="text-white text-[10px]/[16px] leading-relaxed">
            {footerDisclaimer}
          </p>
          <p className="text-white text-[10px]/[16px] text-right font-bold">
            © 2025. ALL RIGHTS RESERVED. TODOS OS DIREITOS RESERVADOS.
          </p>
        </div>
      </div>
    </footer>
  );
}
