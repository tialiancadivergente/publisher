import { HeroSection } from "@/components/folds/hero-section";
import { VideoSection } from "@/components/folds/video";
import { WhoWeAreSection } from "@/components/folds/who-we-are";
import { StartYourJourneySection } from "@/components/folds/start-your-journey";
import { EventsSection } from "@/components/folds/events";
import { StoriesOfTheAlliesSection } from "@/components/folds/stories-of-the-allies";
import { DivergentUniversitySection } from "@/components/folds/divergent-university";
import { ThePacemakerSection } from "@/components/folds/the-pacemaker";
import { OurMentorsSection } from "@/components/folds/our-mentors";
import { PressSaysSection } from "@/components/folds/press-says";
import { AlliesStatsSection } from "@/components/folds/allies-stats";
import { FAQSection } from "@/components/folds/faq-section";

export default function Home() {
  return (
    <main
      className="flex flex-col items-center justify-center bg-areia-claro font-spectral"
      role="main"
      aria-label="Página inicial"
    >
      <HeroSection />
      <VideoSection />
      <WhoWeAreSection />
      <StartYourJourneySection />
      {/* <EventsSection /> */}
      <StoriesOfTheAlliesSection />
      <DivergentUniversitySection />
      <ThePacemakerSection />
      <OurMentorsSection />
      <PressSaysSection />
      <AlliesStatsSection />
      <FAQSection />
    </main>
  );
}
