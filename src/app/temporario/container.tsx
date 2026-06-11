"use client";

import React from "react";
import { LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

import HeroSection from "./hero-section";
import Biography from "./biography";
import BiographyElton from "./biography-elton";
import BiographyRamon from "./biography-ramon";
import FifthSection from "./fifth-section";
import SixthSection from "./sixth-section";
import SeventhSection from "./seventh-section";
import EighthSection from "./eighth-section";
import NinthSection from "./ninth-section";
import TenthSection from "./tenth-section";
import EleventhSection from "./eleventh-section";
import TwelfthSection from "./twelfth-section";
import Footer from "./footer";

interface ContainerProps {
	titleRedLine: React.ReactNode | null;
	redLine: React.ReactNode | null;
	formName: string;
	onSubmit: (data: LeadCaptureSubmitData) => void | Promise<void>;
	submitError?: string | null;
}

export default function ContainerTeste({
	titleRedLine,
	redLine,
	formName,
	onSubmit,
	submitError,
}: ContainerProps) {
	return (
		<>
			<HeroSection
				titleRedLine={titleRedLine}
				redLine={redLine}
				formName={formName}
				onSubmit={onSubmit}
				submitError={submitError}
			/>

			<Biography />

			<BiographyElton />

			<BiographyRamon />

			<FifthSection />

			<SixthSection />

			<SeventhSection />

			<EighthSection />

			<NinthSection />

			<TenthSection />

			<EleventhSection />

			<TwelfthSection />

			<Footer />
		</>
	);
}