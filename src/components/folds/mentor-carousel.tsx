import { EmblaOptionsType } from "embla-carousel";
import { EmblaCarouselScale } from "@/components/embla-carousel/embla-carousel-scale";
import { mentorData } from "@/data/mentors";
import { MentorCard } from "@/components/cards/mentor-card";

export function MentorCarouselSection() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "center",
  };

  return (
    <section className="w-full" aria-labelledby="mentor-carousel-heading">
      <EmblaCarouselScale
        slides={mentorData.map((mentor) => (
          <MentorCard key={mentor.id} {...mentor} />
        ))}
        options={OPTIONS}
      />
    </section>
  );
}
