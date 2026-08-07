"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useParams, useSearchParams } from "next/navigation";
import { type LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import { LEAD_TRACK_CONFIG } from "@/lib/config/lead-track-config";
import {
  getTrackingCookies,
  getTrackingPageInfo,
  getTrackingUtmInfo,
} from "@/lib/tracking/lead-tracking-browser";
import { normalizeTemperature } from "@/lib/temperature-utils";
import { useCreateLeadCapture } from "@/app/modules/lead-capture/hook/use-create-lead-capture";
import type {
  LeadRegistrationPayload,
} from "@/app/modules/lead-capture/lead-capture.model";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import ContainerTeste from "./container";
import { Headline } from "./headline";

export default function Formv1() {
  const params = useParams<{ group: string }>();
  const searchParams = useSearchParams();
  const [titleRedLine, setTitleRedLine] = useState<React.ReactNode | null>(
    null
  );
  const [redLine, setRedLine] = useState<React.ReactNode | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [successModalOpen, setSuccessModalOpen] = useState(false);
  const [formFields, setFormFields] = useState<Record<string, string> | null>(
    null
  );

  const group = params.group ?? "";
  const temperatura = group.trim().toLowerCase().split("-").at(-1);
  const temperaturaNormalizada = normalizeTemperature(temperatura);

  const { launch, season, tag_id } = LEAD_TRACK_CONFIG;

  const mutationCreate = useCreateLeadCapture();

  const handleLeadCaptureSubmit = async (data: LeadCaptureSubmitData) => {
    setSubmitError(null);

    try {
      const resolvedTagId = tag_id(temperatura);
      const { currentUrl, currentPath, currentPage } = getTrackingPageInfo();
      const { utmObject, getUtmValue } = getTrackingUtmInfo();
      const cookies = getTrackingCookies();

      const payload: LeadRegistrationPayload = {
        email: data.email,
        telefone: data.normalizedPhone,
        launch,
        season,
        tag_id: resolvedTagId,
        page: currentPage,
        path: currentPath,
        utm_source: getUtmValue("utm_source"),
        utm_medium: getUtmValue("utm_medium"),
        utm_campaign: getUtmValue("utm_campaign"),
        utm_content: getUtmValue("utm_content"),
        utm_term: getUtmValue("utm_term"),
        utm_id: getUtmValue("utm_id"),
        utms: utmObject,
        metadados: {
          url: currentUrl,
          referer: document.referrer || "",
          ip: "",
          user_agent: navigator.userAgent || "",
          cookies,
          temperature: temperaturaNormalizada,
        },
      };

      await mutationCreate.mutateAsync(payload);
      setSuccessModalOpen(true);

      return true;
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error);
      setSubmitError("Nao foi possivel enviar seu cadastro agora.");
      return false;
    }
  };

  return (
    <>
      <ContainerTeste
        group={group}
        formName={launch}
        onSubmit={handleLeadCaptureSubmit}
        submitError={submitError}
      />

      <Dialog open={successModalOpen} onOpenChange={setSuccessModalOpen}>
        <DialogContent
          overlayClassName="bg-black/75 backdrop-blur-sm"
          className="w-[calc(100vw-32px)] max-w-[390px] rounded-[8px] border border-white/15 bg-[#061f24] p-7 text-center text-white shadow-2xl"
        >
          <DialogTitle className="font-spectral text-2xl font-bold text-[#17f66c]">
            Cadastro realizado com sucesso!
          </DialogTitle>
          <DialogDescription className="font-mulish text-base leading-relaxed text-white/85">
            Você já está cadastrado para receber as informações do grupo VIP.
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </>
  );
}
