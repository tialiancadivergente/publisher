"use client";

import React, { useState } from "react";

export default function EighthSection() {
	const mentors = [
		{
			name: "Cida Torres",
			desktopImage: "/images/oro/Institucional/cida.png",
			mobileImage: "/images/oro/Institucional/cida_mobile.png",
			popupImage: "/images/card/cida.svg",
			mobileHeight: "h-[426px]",
		},
		{
			name: "Elton",
			desktopImage: "/images/oro/Institucional/elton.png",
			mobileImage: "/images/oro/Institucional/elton_mobile.png",
			popupImage: "/images/card/elton.svg",
			mobileHeight: "h-[444px]",
		},
		{
			name: "Jacque Boesso",
			desktopImage: "/images/oro/Institucional/jaque.png",
			mobileImage: "/images/oro/Institucional/jacque_mobile.png",
			popupImage: "/images/card/jaque.svg",
			mobileHeight: "h-[444px]",
		},
		{
			name: "Rafael Jordão",
			desktopImage: "/images/oro/Institucional/rafael.png",
			mobileImage: "/images/oro/Institucional/rafael_mobile.png",
			popupImage: "/images/card/rafael.svg",
			mobileHeight: "h-[426px]",
		},
		{
			name: "Ramon Galimberti",
			desktopImage: "/images/oro/Institucional/ramon.png",
			mobileImage: "/images/oro/Institucional/ramon_mobile.png",
			popupImage: "/images/card/ramon.svg",
			mobileHeight: "h-[426px]",
		},
		{
			name: "Renato Torres",
			desktopImage: "/images/oro/Institucional/renato.png",
			mobileImage: "/images/oro/Institucional/renato_mobile.png",
			popupImage: "/images/card/renato.svg",
			mobileHeight: "h-[444px]",
		},
	];

	const [activeMentorIndex, setActiveMentorIndex] = useState<number | null>(null);

	const closePopup = () => {
		setActiveMentorIndex(null);
	};

	const goToPreviousMentor = () => {
		setActiveMentorIndex((current) => {
			if (current === null) return current;
			return (current - 1 + mentors.length) % mentors.length;
		});
	};

	const goToNextMentor = () => {
		setActiveMentorIndex((current) => {
			if (current === null) return current;
			return (current + 1) % mentors.length;
		});
	};

	return (
		<section className="min-h-[3062px] md:min-h-[1252px] flex flex-col items-center justify-start overflow-hidden bg-[#F5F0EB]">
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="flex flex-col items-center pt-[64px] md:pt-[120px]">
					<h2 className="w-[319px] md:w-[1060px] font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center">
						Nossos mentores
					</h2>

					<p className="mt-[24px] md:mt-[16px] w-[319px] md:w-[1060px] font-mulish font-light text-[#07242C] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] text-center">
						Conheça as pessoas que conduzem reflexões, encontros e orientações,
						apoiando os aliados ao longo da jornada.
					</p>

					<div className="mt-[40px] md:mt-[64px] grid grid-cols-1 md:grid-cols-3 gap-[20px]">
						{mentors.map((mentor, index) => (
							<React.Fragment key={mentor.name}>
								<button
									type="button"
									onClick={() => setActiveMentorIndex(index)}
									className="hidden md:block w-[340px] h-[434px] rounded-[16px] overflow-hidden cursor-pointer"
								>
									<img
										src={mentor.desktopImage}
										alt={mentor.name}
										className="w-full h-full object-cover"
									/>
								</button>

								<img
									src={mentor.mobileImage}
									alt={mentor.name}
									className={`block md:hidden w-[319px] ${mentor.mobileHeight} rounded-[12px] object-cover`}
								/>
							</React.Fragment>
						))}
					</div>
				</div>
			</div>

			{activeMentorIndex !== null && (
				<div className="hidden md:flex fixed inset-0 z-50 flex-col items-center justify-center bg-[#07242C]/70">
					<img
						src={mentors[activeMentorIndex].popupImage}
						alt={mentors[activeMentorIndex].name}
						className="w-[1120px] max-w-[78vw] h-auto"
					/>

					<div className="mt-[24px] flex items-center justify-center gap-[28px]">
						<button
							type="button"
							onClick={goToPreviousMentor}
							aria-label="Mentor anterior"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							←
						</button>

						<button
							type="button"
							onClick={closePopup}
							aria-label="Fechar popup"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							×
						</button>

						<button
							type="button"
							onClick={goToNextMentor}
							aria-label="Próximo mentor"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							→
						</button>
					</div>
				</div>
			)}
		</section>
	);
}