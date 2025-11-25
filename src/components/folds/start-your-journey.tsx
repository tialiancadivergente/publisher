import { StartYourJourneyContentSection } from "./start-your-journey.content";
import { StartYourJourneyNewsSection } from "./start-your-journey.news";

export function StartYourJourneySection() {
  return (
    <section className="w-full bg-areia-claro">
      <div className="container py-24 flex flex-col gap-6 items-center justify-center">
        <StartYourJourneyContentSection />
        <StartYourJourneyNewsSection />
      </div>
    </section>
  );
}
