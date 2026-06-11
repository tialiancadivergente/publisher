"use client";

import React from "react";

export default function EighthSection() {
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
						<img
							src="/images/oro/institucional/cida.png"
							alt="Cida Torres"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/cida_mobile.png"
							alt="Cida Torres"
							className="block md:hidden w-[319px] h-[426px] rounded-[12px] object-cover"
						/>

						<img
							src="/images/oro/institucional/elton.png"
							alt="Elton"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/elton_mobile.png"
							alt="Elton"
							className="block md:hidden w-[319px] h-[444px] rounded-[12px] object-cover"
						/>

						<img
							src="/images/oro/institucional/jaque.png"
							alt="Jacque Boesso"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/jacque_mobile.png"
							alt="Jacque Boesso"
							className="block md:hidden w-[319px] h-[444px] rounded-[12px] object-cover"
						/>

						<img
							src="/images/oro/institucional/rafael.png"
							alt="Rafael Jordão"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/rafael_mobile.png"
							alt="Rafael Jordão"
							className="block md:hidden w-[319px] h-[426px] rounded-[12px] object-cover"
						/>

						<img
							src="/images/oro/institucional/ramon.png"
							alt="Ramon Galimberti"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/ramon_mobile.png"
							alt="Ramon Galimberti"
							className="block md:hidden w-[319px] h-[426px] rounded-[12px] object-cover"
						/>

						<img
							src="/images/oro/institucional/renato.png"
							alt="Renato Torres"
							className="hidden md:block w-[340px] h-[434px] rounded-[16px] object-cover"
						/>

						<img
							src="/images/oro/institucional/renato_mobile.png"
							alt="Renato Torres"
							className="block md:hidden w-[319px] h-[444px] rounded-[12px] object-cover"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}