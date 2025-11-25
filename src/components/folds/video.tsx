"use client";
import { PlayIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

export function VideoSection() {
  const isMobile = useIsMobile(640);
  return (
    <section className="w-full sm:h-[811px] h-[469px] bg-cover bg-center bg-[url('/images/bg-video.webp')]">
      <div className="container text-center sm:text-[40px]/[60px] text-base/8 font-semibold text-dourado sm:mt-24 mt-10 flex flex-col sm:gap-28 gap-20">
        <p>TODA DEMORA NOS RESULTADOS ESCONDE UMA ESPERA NAS RELAÇÕES</p>
        <div className="bg-verde-folha/30 hover:bg-verde-folha/60 transition-colors duration-300 cursor-pointer rounded-full sm:p-8 p-4 w-auto mx-auto">
          <PlayIcon className="text-white font-extralight" size={isMobile ? 40 : 70} />
        </div>
      </div>
    </section>
  );
}
