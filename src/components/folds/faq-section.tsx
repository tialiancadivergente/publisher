"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqData, type FAQItem } from "@/data/faq";

export function FAQSection() {
  const leftColumnItems = React.useMemo(() => faqData.slice(0, 6), []);

  const rightColumnItems = React.useMemo(() => faqData.slice(6, 12), []);

  const renderAccordionItem = React.useCallback(
    (item: FAQItem) => (
      <AccordionItem key={item.id} value={item.id} className="border-dourado">
        <AccordionTrigger
          className="text-left text-creme hover:text-creme/80 py-4 font-bold"
          aria-label={`Expandir ou recolher: ${item.question}`}
        >
          <h3>
            {item.question}
          </h3>
        </AccordionTrigger>
        <AccordionContent className="text-creme/90 text-base leading-7 pt-2 pb-4">
          {item.answer}
        </AccordionContent>
      </AccordionItem>
    ),
    []
  );

  return (
    <section
      className="w-full py-24 bg-ouro-velho"
      aria-labelledby="faq-heading"
    >
      <div className="container">
        <h2
          id="faq-heading"
          className="text-4xl md:text-6xl text-creme text-center uppercase mb-12"
        >
          Perguntas frequentes
        </h2>
        <div
          className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-12 font-mulish"
          role="region"
          aria-label="Lista de perguntas frequentes"
        >
          <div className="flex flex-col">
            <Accordion
              type="single"
              collapsible
              defaultValue="o-que-e-alianca-divergente"
              className="w-full"
            >
              {leftColumnItems.map(renderAccordionItem)}
            </Accordion>
          </div>
          <div className="flex flex-col">
            <Accordion type="single" collapsible className="w-full">
              {rightColumnItems.map(renderAccordionItem)}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
