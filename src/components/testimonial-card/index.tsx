import Image from "next/image";
import { TestimonialCardProps } from "@/data/testimonials";
import { cn } from "@/lib/utils";

export function TestimonialCard({
  name,
  title,
  description,
  imageSrc,
  imageAlt,
  location,
  joinDate,
}: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col h-full w-full max-w-[368px] mx-auto",
        "bg-areia-claro border-r border-verde-folha/20",
        "last:border-r-0"
      )}
      aria-labelledby={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}-title`}
    >
      {/* Image Section */}
      <div className="w-full aspect-[368/207] relative overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 368px"
          quality={100}
          loading="lazy"
          fetchPriority="high"
          decoding="async"
        />
      </div>

      {/* Content Section */}
      <div className="flex flex-col flex-1 p-6 gap-4">
        <h3
          id={`testimonial-${name.toLowerCase().replace(/\s+/g, "-")}-title`}
          className="text-2xl font-bold text-verde-eucalipto leading-tight"
        >
          {title}
        </h3>

        <p className="text-base text-verde-eucalipto font-light leading-relaxed flex-1 font-mulish">
          {description}
        </p>

        {/* Footer */}
        <div className="flex flex-col gap-1 pt-4 border-t border-verde-folha/10 font-mulish">
          <p className="text-sm font-semibold text-verde-folha">{name}</p>
          <p className="text-xs text-verde-eucalipto">
            Aliado desde {joinDate} • {location}
          </p>
          <button
            className="text-xs text-verde-folha font-medium hover:underline self-start mt-2"
            aria-label={`Ler mais sobre ${name}`}
          >
            Ler mais...
          </button>
        </div>
      </div>
    </article>
  );
}

