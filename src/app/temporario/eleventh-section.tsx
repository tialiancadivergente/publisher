"use client";

import React from "react";

export default function EleventhSection() {
	const journeyLink =
		"https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado";

	return (
		<section className="relative w-full overflow-hidden bg-[#E5DFD8]">
			<div
				className="
					mx-auto
					flex
					min-h-[885px]
					w-full
					max-w-[1920px]
					justify-center
					bg-[url('/images/oro/Institucional/bg_dobra_11_mobile.png')]
					bg-cover
					bg-center
					bg-no-repeat
					lg:min-h-[1045px]
					lg:bg-[url('/images/oro/Institucional/bg_dobra_11_desktop.png')]
				"
			>
				<div className="relative z-10 flex w-full justify-center px-7 pt-[52px] lg:px-10 lg:pt-[92px]">
					<div className="flex w-full max-w-[700px] flex-col items-center text-center">
						<h2 className="font-spectral w-full max-w-[319px] text-center text-[24px] font-bold leading-[36px] text-[#C0964B] lg:max-w-[700px] lg:text-[48px] lg:leading-[64px]">
							Quer se tornar um membro da Aliança Divergente?
						</h2>

						<p className="mt-[24px] w-full max-w-[319px] text-center font-mulish text-[16px] font-light leading-[24px] tracking-[0] text-[#07242C] lg:mt-[26px] lg:max-w-[700px] lg:text-[18px] lg:leading-[32px] lg:tracking-[0.04em]">
							Aqui você receberá orientação, apoio e estímulo, com estrutura
							pedagógica e uma comunidade forte de pessoas comprometidas a
							romper padrões e construir vidas memoráveis.
						</p>

						<a
							href={journeyLink}
							target="_blank"
							rel="noopener noreferrer"
							className="mt-[28px] flex h-[52px] w-[318px] items-center justify-center rounded-[50px] bg-[#006D71] px-10 py-[14px] text-center font-spectral text-[12px] font-extrabold uppercase leading-[24px] text-white lg:mt-[28px] lg:w-[382px] lg:text-[16px] lg:font-bold"
						>
							QUERO COMEÇAR MINHA JORNADA
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}