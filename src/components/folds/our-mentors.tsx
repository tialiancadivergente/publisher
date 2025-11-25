import { mentorProfiles } from "@/data/mentor-profiles";
import { MentorProfileCard } from "../cards/mentor-profile-card";

export function OurMentorsSection() {
  return (
    <section
      className="w-full py-24 bg-verde-escuro"
      aria-labelledby="mentor-profiles-heading"
    >
      <div className="container flex flex-col gap-10">
        <div className="text-center">
          <h2
            id="mentor-profiles-heading"
            className="text-4xl md:text-6xl text-dourado"
          >
            Nossos Mentores
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-16">
          {mentorProfiles.map((mentor) => (
            <MentorProfileCard key={mentor.id} {...mentor} />
          ))}
        </div>
      </div>
    </section>
  );
}
