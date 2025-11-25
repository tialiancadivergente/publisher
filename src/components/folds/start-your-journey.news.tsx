import { newsCardsData } from "@/data/news-cards";
import { NewsCard } from "@/components/news-card";

export function StartYourJourneyNewsSection() {
  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
      {newsCardsData.map((card) => (
        <NewsCard key={card.id} {...card} />
      ))}
    </div>
  );
}
