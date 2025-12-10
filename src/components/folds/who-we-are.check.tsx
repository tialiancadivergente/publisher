"use client";

import * as React from "react";
import {
  handlePhoneInputChange,
  isValidPhoneNumber,
} from "@/lib/utils/phone-mask";
import { cn } from "@/lib/utils";

export function WhoWeAreCheckSection() {
  const [phoneValue, setPhoneValue] = React.useState("");
  const [error, setError] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const handlePhoneChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const formatted = handlePhoneInputChange(event);
      setPhoneValue(formatted);
      if (error) {
        setError("");
      }
    },
    [error]
  );

  const handleSubmit = React.useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (!phoneValue.trim()) {
        setError("Por favor, digite um número de telefone");
        return;
      }

      if (!isValidPhoneNumber(phoneValue)) {
        setError("Por favor, digite um número de telefone válido");
        return;
      }

      setIsSubmitting(true);
      setError("");

      setTimeout(() => {
        setIsSubmitting(false);
      }, 1000);
    },
    [phoneValue]
  );

  const handleKeyDown = React.useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter") {
        event.preventDefault();
        const form = event.currentTarget.closest("form");
        form?.requestSubmit();
      }
    },
    []
  );

  return (
    <div className="absolute left-1/2 xl:top-[260px] md:top-[320px] top-[260px] -translate-x-1/2 w-full container z-10">
      <div className="bg-[#F4ECE4] p-8 md:p-14 shadow-xl flex flex-col gap-2 items-center">
        <p className="text-base font-bold text-verde-eucalipto text-center font-mulish">
          Verificador de contatos oficiais – evite golpes.
        </p>
        <h3 className="text-xl md:text-2xl text-dourado font-semibold text-center">
          Alguém da Aliança Divergente entrou em contato com você?
        </h3>
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 mt-8"
          noValidate
          aria-label="Formulário de verificação de número de telefone"
        >
          <label
            htmlFor="phone-verification"
            className={cn(
              "text-base font-bold text-verde-eucalipto font-mulish",
              "sr-only md:not-sr-only md:block"
            )}
          >
            Verifique nossos números oficiais:
          </label>
          <div className="flex flex-col gap-2 flex-1 max-w-xs">
            <input
              id="phone-verification"
              type="tel"
              inputMode="tel"
              placeholder="(00) 00000-0000"
              value={phoneValue}
              onChange={handlePhoneChange}
              onKeyDown={handleKeyDown}
              maxLength={15}
              className={cn(
                "p-2 bg-transparent border-b border-dourado font-mulish",
                "placeholder:text-dourado-velho text-dourado-velho",
                "focus:outline-none focus:border-verde-folha",
                "transition-colors",
                error && "border-red-500"
              )}
              aria-label="Digite o número de telefone para verificação"
              aria-describedby={error ? "phone-error" : undefined}
              aria-invalid={!!error}
              aria-required="true"
              disabled={isSubmitting}
            />
            {error && (
              <span
                id="phone-error"
                className="text-sm text-red-600"
                role="alert"
                aria-live="polite"
              >
                {error}
              </span>
            )}
          </div>
          <button
            type="submit"
            disabled={isSubmitting || !phoneValue.trim()}
            className={cn(
              "border border-verde-folha text-verde-folha font-bold",
              "px-4 py-2 min-w-[120px]",
              "hover:bg-verde-folha hover:text-white",
              "focus-visible:outline-2 focus-visible:outline-verde-folha focus-visible:outline-offset-2",
              "transition-colors",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              "disabled:hover:bg-transparent disabled:hover:text-verde-folha"
            )}
            aria-label="Verificar número de telefone"
          >
            {isSubmitting ? "Verificando..." : "Verificar"}
          </button>
        </form>
      </div>
    </div>
  );
}
