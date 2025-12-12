import { EmblaOptionsType } from "embla-carousel";

import { TestimonialCard } from "@/components/testimonial-card";
import EmblaCarousel from "@/components/embla-carousel/embla-carousel";
import { Reveal } from "@/components/ui/reveal";
import { testimonialsData } from "@/data/testimonials";

export function StoriesOfTheAlliesSection() {
  const OPTIONS: EmblaOptionsType = {
    loop: true,
    align: "start",
    slidesToScroll: 1,
  };

  return (
    <section className="w-full bg-ouro-velho py-24 flex flex-col items-center justify-center gap-16">
      <div className="container">
        <Reveal>
          <h2 className="text-4xl md:text-6xl text-creme text-center">
            Histórias dos Aliados
          </h2>
        </Reveal>
      </div>
      <Reveal className="w-full" delay={140}>
        <EmblaCarousel
          slides={testimonialsData.map((testimonial) => (
            <TestimonialCard key={testimonial.id} {...testimonial} />
          ))}
          options={OPTIONS}
        />
      </Reveal>
      <div className="container flex justify-center">
        <Reveal delay={220}>
          <button className="text-base bg-verde-folha font-bold text-white px-8 py-3 uppercase hover:bg-verde-folha/80 transition-colors duration-300 self-start mt-2 shadow-lg shadow-verde-escuro/30">
            Veja mais de 30.000 histórias
          </button>
        </Reveal>
      </div>
    </section>
  );
}
