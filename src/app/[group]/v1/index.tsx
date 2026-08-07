"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
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
import ContainerTeste, { resolveVipGroupUrl } from "./container";

export default function Formv1() {
  const params = useParams<{ group: string }>();
  const [submitError, setSubmitError] = useState<string | null>(null);

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

      window.location.href = resolveVipGroupUrl(group);
    } catch (error) {
      console.error("Erro ao enviar cadastro:", error);
      setSubmitError("Nao foi possivel enviar seu cadastro agora.");
      return false;
    }
  };

  return (
    <ContainerTeste
      group={group}
      formName={launch}
      onSubmit={handleLeadCaptureSubmit}
      submitError={submitError}
    />
  );
}
