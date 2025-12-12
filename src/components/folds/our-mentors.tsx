import { MentorProfileCard } from "../cards/mentor-profile-card";
import { Reveal } from "@/components/ui/reveal";
import { mentorProfiles } from "@/data/mentor-profiles";

export function OurMentorsSection() {
  return (
    <section
      className="w-full py-24 bg-verde-escuro"
      aria-labelledby="mentor-profiles-heading"
    >
      <div className="container flex flex-col gap-10">
        <Reveal className="text-center">
          <h2
            id="mentor-profiles-heading"
            className="text-4xl md:text-6xl text-dourado"
          >
            Nossos Mentores
          </h2>
        </Reveal>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {mentorProfiles.map((mentor, index) => (
            <Reveal key={mentor.id} delay={index * 120}>
              <MentorProfileCard {...mentor} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

