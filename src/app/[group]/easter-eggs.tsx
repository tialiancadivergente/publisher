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
      "left-[37.5%] top-[69.5%] h-8 w-5 rotate-[-7deg]",
    photoSrc: "/images/08-08/001.webp",
  },
  {
    id: 2,
    title: "Easter egg 2",
    className:
      "left-[23.5%] top-[84.5%] h-8 w-6 rotate-[8deg]",
    photoSrc: "/images/08-08/002.webp",
  },
  {
    id: 3,
    title: "Easter egg 3",
    className:
      "left-[47.5%] top-[81.2%] h-4 w-8 rotate-[-26deg]",
    photoSrc: "/images/08-08/003.webp",
  },
  {
    id: 4,
    title: "Easter egg 4",
    className:
      "left-[75%] top-[77.3%] h-6 w-6",
    photoSrc: "/images/08-08/004.webp",
  },
  {
    id: 5,
    title: "Easter egg 5",
    className:
      "left-[63%] top-[86.8%] h-14 w-3 rotate-[4deg]",
    photoSrc: "/images/08-08/005.webp",
  },
  {
    id: 6,
    title: "Easter egg 6",
    className:
      "left-[16%] top-[94.8%] h-7 w-10 rotate-[-7deg]",
    photoSrc: "/images/08-08/006.webp",
  },
  {
    id: 7,
    title: "Easter egg 7",
    className:
      "left-[36%] top-[92.9%] h-10 w-7 rotate-[-12deg]",
    photoSrc: "/images/08-08/006.webp",
  },
  {
    id: 8,
    title: "Easter egg 8",
    className:
      "left-[74.5%] top-[99.9%] h-8 w-6 rotate-[18deg]",
    photoSrc: "/images/08-08/006.webp",
  },
];

export function EasterEggs() {
  const [selectedEgg, setSelectedEgg] = useState<EasterEgg | null>(null);

  return (
    <>
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[890px]">
        {easterEggs.map((egg) => (
          <button
            key={egg.id}
            type="button"
            aria-label={`Abrir foto do ${egg.title}`}
            onClick={() => setSelectedEgg(egg)}
            className={cn(
              "pointer-events-auto absolute block cursor-pointer transition-transform duration-200 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#06282e]",
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
