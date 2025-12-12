import Image from "next/image";
import { MentorCardProps } from "@/data/mentors";
import { cn } from "@/lib/utils";

export function MentorCard({
  focus,
  imageSrc,
  imageAlt,
}: MentorCardProps) {
  return (
    <article
      className={cn(
        "flex flex-col items-center text-center",
        "bg-[#79242E] shadow-lg",
        "pb-8",
        "w-[264px] h-[385px]"
      )}
    >
      <div className="w-full relative mb-4 aspect-[264/256]">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          quality={100}
          className="object-cover"
          sizes="(max-width: 768px) 70vw, (max-width: 1024px) 30vw, 20vw"
          loading="lazy"
          fetchPriority="low"
          decoding="async"
        />
      </div>
      <div className="flex flex-col text-creme">
        <h3 className="text-base font-semibold mt-0 px-2">
          {focus}
        </h3>
      </div>
    </article>
  );
}

