import { WhoWeAreCheckSection } from "./who-we-are.check";
import { WhoWeAreContentSection } from "./who-we-are.content";
import { WhoWeArePressSection } from "./who-we-are.press";

export function WhoWeAreSection() {
  return (
    <section
      id="quem-somos"
      className="w-full relative"
      aria-labelledby="destaque-imprensa-heading"
    >
      <WhoWeArePressSection />
      <WhoWeAreCheckSection />
      <WhoWeAreContentSection />
    </section>
  );
}
