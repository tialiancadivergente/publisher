"use client";

import { useEffect, useMemo, useState } from "react";

const TARGET_DATE = new Date("2026-08-08T20:00:00-03:00").getTime();

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

function getTimeLeft(): TimeLeft {
  const totalSeconds = Math.max(0, Math.floor((TARGET_DATE - Date.now()) / 1000));

  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function formatUnit(value: number) {
  return String(value).padStart(2, "0");
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    setTimeLeft(getTimeLeft());

    const intervalId = window.setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => window.clearInterval(intervalId);
  }, []);

  const items = useMemo(
    () => [
      { label: "dias", value: timeLeft?.days },
      { label: "horas", value: timeLeft?.hours },
      { label: "minutos", value: timeLeft?.minutes },
      { label: "segundos", value: timeLeft?.seconds },
    ],
    [timeLeft],
  );

  return (
    <div className="w-full" aria-label="Contagem regressiva para 08.08">
      <div className="mb-3 flex items-center gap-3 px-8 text-white/90">
        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-white/65 to-white/65" />
        <span className="font-lora text-[17px] font-bold italic leading-none">
          Faltam
        </span>
        <span className="h-px flex-1 bg-gradient-to-l from-transparent via-white/65 to-white/65" />
      </div>

      <dl className="grid grid-cols-4 gap-2 text-center text-white font-spectral">
        {items.map((item) => (
          <div key={item.label} className="min-w-0">
            <dt className="sr-only">{item.label}</dt>
            <dd className="font-bold text-[50px] leading-[0.9] tracking-normal font-spectral">
              {typeof item.value === "number" ? formatUnit(item.value) : "--"}
            </dd>
            <span className="mt-2 block font-spectral text-[8px] font-bold uppercase tracking-[0.28em] text-white/70">
              {item.label}
            </span>
          </div>
        ))}
      </dl>
    </div>
  );
}
