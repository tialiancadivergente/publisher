"use client";

import React from "react";

export default function FifthSection() {
	const stats = [
		{
			icon: "/images/oro/Institucional/icone_01.png",
			value: "+190 mil",
			text: "pessoas já receberam apoio da Aliança Divergente",
		},
		{
			icon: "/images/oro/Institucional/icone_02.png",
			value: "+53 mil",
			text: "sonhos conquistados, ou em andamento, na nossa plataforma",
		},
		{
			icon: "/images/oro/Institucional/icone_03.png",
			value: "+8 mil",
			text: "pessoas já celebraram suas conquistas com a gente",
		},
		{
			icon: "/images/oro/Institucional/icone_04.png",
			value: "+80 países",
			text: "com membros espalhados pelo mundo",
		},
	];

	return (
		<section
			className={`min-h-[1728px] md:min-h-[1075px] flex flex-col items-center justify-start overflow-hidden bg-[url('/images/oro/Institucional/bg_quinta_dobra_mobile.webp')] md:bg-[url('/images/oro/Institucional/bg_quinta_dobra_desktop.webp')] bg-cover bg-top md:bg-center bg-no-repeat`}
		>
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="flex flex-col items-center pt-[650px] md:pt-[380px]">
					<h2 className="font-spectral font-normal text-[#917E5A] text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] text-center w-[318px] md:w-[483px]">
						O impacto da
					</h2>

					<img
						src="/images/oro/Institucional/logo_quinta_dobra_mobile.png"
						alt="Aliança Divergente"
						className="block md:hidden mt-[4px] w-[282px] h-auto"
					/>

					<img
						src="/images/oro/Institucional/logo_quinta_dobra_desktop.png"
						alt="Aliança Divergente"
						className="hidden md:block mt-[4px] w-[429px] h-auto"
					/>

					<h2 className="mt-[4px] font-spectral font-normal text-[#917E5A] text-[32px] leading-[40px] md:text-[48px] md:leading-[64px] text-center w-[318px] md:w-[483px]">
						em números reais
					</h2>

					<div className="mt-[40px] md:mt-[96px] flex w-[238px] md:w-[980px] flex-col md:flex-row items-center justify-center">
						{stats.map((item, index) => (
							<div
								key={item.value}
								className={`flex w-[238px] md:w-[245px] flex-col items-center text-center ${
									index !== stats.length - 1
										? "border-b md:border-b-0 md:border-r border-[#D8CFC4]"
										: ""
								} py-[32px] md:py-0 md:px-[34px] first:pt-0 last:pb-0`}
							>
								<img
									src={item.icon}
									alt=""
									className="w-[56px] h-[56px] min-w-[56px] min-h-[56px] object-contain"
								/>

								<h3 className="mt-[16px] font-spectral font-bold text-[#006D71] text-[32px] leading-[42px] md:text-[40px] md:leading-[56px] text-center w-[238px] md:w-[216.5px]">
									{item.value}
								</h3>

								<p className="mt-[2px] md:mt-[8px] font-mulish font-light text-[#07242C] text-[14px] leading-[24px] md:text-[18px] md:leading-[24px] text-center w-[238px] md:w-[216.5px]">
									{item.text}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}