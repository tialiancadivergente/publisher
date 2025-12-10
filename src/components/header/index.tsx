"use client";

import Image from "next/image";
import { Navigation } from "../navigation";
import { useIsMobile } from "@/hooks/use-mobile";

export function Header() {
  const isMobile = useIsMobile(640);

  return (
    <header className="flex justify-between items-center bg-areia-claro px-4 sm:px-11 py-8 font-spectral sm:border-0 border-b border-dourado/30">
      <Image
        src={isMobile ? "/images/logo-alianca-divergente-mobile.png" : "/images/logo-alianca-divergente.svg"}
        alt="Logotipo da Aliança Divergente"
        width={isMobile ? 94 : 306}
        height={isMobile ? 27 : 40}
        priority
        sizes={`(max-width: ${isMobile ? 94 : 306}px) ${isMobile ? 94 : 306}px, ${isMobile ? 94 : 306}px`}
        style={{ height: "auto", width: isMobile ? 94 : 306 }}
        role="img"
      />
      <Navigation />
    </header>
  );
}
