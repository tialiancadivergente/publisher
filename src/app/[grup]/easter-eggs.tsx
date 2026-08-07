"use client";

import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { useState } from "react";

type EasterEgg = {
  id: number;
  title: string;
  className: string;
  photoSrc: string;
};

const easterEggs: EasterEgg[] = [
  {
    id: 1,
    title: "Easter egg 1",
    className:
      "left-[39%] top-[48.7%] h-8 w-5 rotate-[-7deg] rounded-full border border-[#7c5f4a]/70 bg-[#bd544d]/70 shadow-[0_0_8px_rgba(255,217,135,0.28)]",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 2,
    title: "Easter egg 2",
    className:
      "left-[26%] top-[58.5%] h-11 w-9 rotate-[8deg] rounded-[4px] border border-[#927654]/80 bg-[rgba(21,34,27,0.38)] shadow-inner",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 3,
    title: "Easter egg 3",
    className:
      "left-[51%] top-[56.7%] h-5 w-12 rotate-[-26deg] rounded-full border border-[#d8c898]/55 bg-white/10 blur-[0.2px]",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 4,
    title: "Easter egg 4",
    className:
      "left-[76%] top-[54.2%] h-8 w-8 rounded-full border-2 border-[#837a69]/70 bg-[radial-gradient(circle,#251f17_18%,#9f9071_22%,#2c2a24_32%,transparent_36%)] opacity-75",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 5,
    title: "Easter egg 5",
    className:
      "left-[68%] top-[62.8%] h-14 w-3 rotate-[4deg] rounded-full bg-[linear-gradient(90deg,transparent,#e2d6b4_45%,#2a2a2a_48%,#121212_56%,transparent)] opacity-80",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 6,
    title: "Easter egg 6",
    className:
      "left-[19%] top-[69.1%] h-7 w-16 rotate-[-7deg] rounded-[3px] bg-[linear-gradient(135deg,#cdbf94,#7e6d51_52%,#d1c199_53%,#8b7754)] opacity-80 shadow-md",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 7,
    title: "Easter egg 7",
    className:
      "left-[39%] top-[67.9%] h-14 w-10 rotate-[-12deg] rounded-[3px] bg-[#183935] shadow-[inset_-5px_0_0_rgba(255,255,255,0.08),0_5px_8px_rgba(0,0,0,0.28)]",
    photoSrc: "/images/08-08/bg.webp",
  },
  {
    id: 8,
    title: "Easter egg 8",
    className:
      "left-[74%] top-[75.3%] h-12 w-9 rotate-[18deg] rounded-[3px] bg-[#3a342b] shadow-[inset_-3px_0_0_rgba(255,255,255,0.1),0_5px_8px_rgba(0,0,0,0.3)]",
    photoSrc: "/images/08-08/bg.webp",
  },
];

export function EasterEggs() {
  const [selectedEgg, setSelectedEgg] = useState<EasterEgg | null>(null);

  return (
    <>
      <div className="absolute inset-x-0 top-0 h-[890px]">
        {easterEggs.map((egg) => (
          <button
            key={egg.id}
            type="button"
            aria-label={`Abrir foto do ${egg.title}`}
            onClick={() => setSelectedEgg(egg)}
            className={cn(
              "absolute block cursor-pointer transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06282e]",
              egg.className,
            )}
          />
        ))}
      </div>

      <Dialog open={Boolean(selectedEgg)} onOpenChange={(open) => !open && setSelectedEgg(null)}>
        <DialogContent
          overlayClassName="bg-black/75 backdrop-blur-sm"
          className="w-[calc(100vw-32px)] max-w-[390px] gap-0 overflow-hidden rounded-[8px] border border-white/15 bg-[#061f24] p-0 text-white shadow-2xl"
        >
          <DialogTitle className="sr-only">
            {selectedEgg?.title ?? "Easter egg"}
          </DialogTitle>
          <DialogDescription className="sr-only">
            Foto revelada ao encontrar um easter egg na imagem.
          </DialogDescription>

          <div className="relative aspect-[4/5] w-full bg-black">
            {selectedEgg ? (
              <Image
                src={selectedEgg.photoSrc}
                alt={`Foto do ${selectedEgg.title}`}
                fill
                sizes="390px"
                className="object-cover"
              />
            ) : null}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
