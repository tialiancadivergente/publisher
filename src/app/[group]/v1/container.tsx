import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";
import HeroSection from "./hero-section";

const trafficVipGroupUrl = "https://sendflow.click/i/0808traf";
const organicVipGroupUrl = "https://sendflow.click/i/0808org";

type ContainerProps = {
  group: string;
	formName: string,
	onSubmit: (data: LeadCaptureSubmitData) => boolean | void | Promise<boolean | void>;
	submitError?: string | null;
};

export function resolveVipGroupUrl(group: string) {
  const normalizedGroup = group.trim().toLowerCase();

  if (normalizedGroup.endsWith("t")) {
    return trafficVipGroupUrl;
  }

  return organicVipGroupUrl;
}

export default function Container({
  group,
  formName,
  onSubmit,
  submitError
}: ContainerProps) {
  const vipGroupUrl = resolveVipGroupUrl(group);

  return <HeroSection
    vipGroupUrl={vipGroupUrl}
    formName={formName}
    onSubmit={onSubmit}
    submitError={submitError}
  />;
}
