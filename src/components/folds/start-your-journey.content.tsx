"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

import { Reveal } from "@/components/ui/reveal";
import Link from "next/link";

function AnimatedNumber({
  value,
  duration = 2000,
}: {
  value: number;
  duration?: number;
}) {
  const [count, setCount] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (hasAnimated) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            const startTime = Date.now();
            const startValue = 0;

            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);

              // Easing function para suavizar a animaÇõÇœo
              const easeOutQuart = 1 - Math.pow(1 - progress, 4);
              const currentValue = Math.floor(
                startValue + (value - startValue) * easeOutQuart
              );

              setCount(currentValue);

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(value);
              }
            };

            requestAnimationFrame(animate);
          }
        });
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration, hasAnimated]);

  return <span ref={ref}>{count}</span>;
}

export function StartYourJourneyContentSection() {
  return (
    <>
      <Reveal as="h2" className="text-[56px] text-dourado uppercase">
        Comece sua jornada
      </Reveal>
      <Reveal
        as="p"
        className="text-verde-eucalipto text-[18px]/[32px] font-light text-center font-mulish"
        delay={120}
      >
        Na <span className="font-bold">Aliança Divergente</span>, você encontra
        grupos de apoio, encontros semanais, protocolos práticos, mentores
        experientes e uma plataforma completa dedicada ao seu avanço. Aqui, você
        será guiado, desafiado e sustentado todos os dias. Não é mágica. Não é
        coach. É{" "}
        <span className="font-bold">
          estrutura pedagógica, embasamento psicológico e uma comunidade forte
          de Aliados comprometidos
        </span>{" "}
        em romper padrões, aumentar sua Permissão e construir vidas memoráveis.
      </Reveal>
      <Reveal delay={220}>
        <button className="bg-dourado hover:bg-dourado/60 transition-colors duration-300 text-white px-8 py-3 uppercase font-bold sm:text-base text-xs mt-6 shadow-lg shadow-dourado/20">
          <Link href="https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado" target="_blank" rel="noopener noreferrer">
            Seja Aliado
          </Link>
        </button>
      </Reveal>

      <Reveal delay={300}>
        <div className="flex items-center gap-4 mt-6">
          <Image
            src="/images/avatares.png"
            alt="Avatares de Aliados"
            width={164}
            quality={100}
            height={56}
          />
          <div className="font-mulish">
            <p className="text-verde-folha text-[18px]/[32px] font-bold">
              +<AnimatedNumber value={140} duration={1500} />
              mil aliados{" "}
            </p>
            <p className="text-verde-eucalipto text-[12px]/[16px] font-light">
              que decidiram romper padrões e <br /> construir uma vida memorável.
            </p>
          </div>
        </div>
      </Reveal>
    </>
  );
}
