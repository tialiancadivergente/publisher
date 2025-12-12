import { NewsCard } from "@/components/news-card";
import { Reveal } from "@/components/ui/reveal";
import { newsCardsData } from "@/data/news-cards";

export function StartYourJourneyNewsSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
      {newsCardsData.map((card, index) => (
        <Reveal key={card.id} delay={index * 140} className="h-full">
          <NewsCard {...card} />
        </Reveal>
      ))}
    </div>
  );
}

