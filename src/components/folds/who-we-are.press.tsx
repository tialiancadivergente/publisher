import Image from "next/image";
import { pressLogos } from "@/data/press-logo-list";
import { cn } from "@/lib/utils";

export function WhoWeArePressSection() {
  return (
    <section
      className="bg-verde-escuro pb-32"
      aria-labelledby="destaque-imprensa-heading"
    >
      <div className="container flex flex-col items-center justify-center py-20 gap-10">
        <h2
          id="destaque-imprensa-heading"
          className="text-2xl font-bold text-dourado text-center"
        >
          Destaque na Imprensa
        </h2>
        <ul
          className="flex flex-wrap items-center justify-center md:gap-11 gap-6"
          role="list"
          aria-label="Logos de veículos de imprensa que destacaram a Aliança Divergente"
        >
          {pressLogos.map((logo) => (
            <li
              key={logo.src}
              role="listitem"
              className="flex items-center justify-center"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className={cn(logo.className, "object-contain")}
                loading="lazy"
                fetchPriority="low"
                quality={100}
                sizes={`(max-width: 768px) ${logo.mobileWidth}px, ${logo.width}px`}
                decoding="async"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
