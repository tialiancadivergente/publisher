"use client";

import * as React from "react";
import { PlayIcon } from "lucide-react";

import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/ui/reveal";

export function VideoSection() {
  const [open, setOpen] = React.useState(false);
  const youtubeEmbedUrl =
    "https://www.youtube.com/embed/QcWzIEOoSi4?autoplay=1&rel=0&modestbranding=1";

  return (
    <section className="w-full sm:h-[811px] h-[469px] bg-cover bg-center bg-[url('/images/bg-video.webp')]">
      <div className="container text-center sm:text-[40px]/[60px] text-base/8 font-semibold text-dourado sm:mt-24 mt-10 flex flex-col sm:gap-28 gap-20">
        <Reveal>
          <p>TODA DEMORA NOS RESULTADOS ESCONDE UMA ESPERA NAS RELAÇÕES</p>
        </Reveal>
        <Reveal delay={140}>
          <Dialog open={open} onOpenChange={setOpen}>
            <button
              type="button"
              aria-label="Abrir vídeo"
              onClick={() => setOpen(true)}
              className="flex items-center justify-center bg-verde-folha/30 hover:bg-verde-folha/60 transition-colors duration-300 cursor-pointer rounded-full sm:p-8 p-4 w-[112px] h-[112px] mx-auto shadow-xl shadow-verde-escuro/30 hover:scale-105 transform-gpu focus:outline-none focus:ring-2 focus:ring-white/60"
            >
              <PlayIcon className="text-white font-extralight" size={40} />
            </button>

            <DialogContent
              overlayClassName="bg-black/20 backdrop-blur-[2px]"
              className="w-[98vw] max-w-[98vw] h-[92vh] max-h-[92vh] p-0 border-0 bg-transparent shadow-none overflow-hidden"
            >
              <DialogTitle className="sr-only">
                Vídeo: Manifesto Aliança Divergente
              </DialogTitle>
              {open ? (
                <iframe
                  className="h-full w-full rounded-lg"
                  src={youtubeEmbedUrl}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                />
              ) : null}
            </DialogContent>
          </Dialog>
        </Reveal>
      </div>
    </section>
  );
}

