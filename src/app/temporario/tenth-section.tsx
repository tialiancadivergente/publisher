"use client";

import React from "react";

export default function TenthSection() {
	return (
		<section className="min-h-[1280px] md:min-h-[1000px] flex flex-col items-center justify-start overflow-hidden bg-[#F5F0EB]">
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="flex flex-col items-center pt-[64px] md:pt-[120px]">
					<h2 className="w-[319px] md:w-[1060px] font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center">
						O que a imprensa diz
					</h2>

					<div className="mt-[40px] md:mt-[64px] flex flex-col md:flex-row items-center gap-[24px] md:gap-[40px]">
						<img
							src="/images/oro/institucional/bloco_elton_desktop.png"
							alt=""
							className="hidden md:block w-[340px] h-[497px] object-contain"
						/>

						<img
							src="/images/oro/institucional/bloco_elton_mobile.png"
							alt=""
							className="block md:hidden w-screen h-auto object-cover"
						/>

						<div className="w-[319px] h-[800px] md:w-[700px] md:h-[620px] bg-[#FFFFFF] rounded-[16px] p-[24px] md:p-[40px] flex flex-col">
							<div>
								<h3 className="w-[271px] md:w-[620px] font-spectral font-bold text-[#006D71] text-[26px] leading-[38px]">
									Conheça história do empresário visionário que, antes de se
									tornar multimilionário, acreditou que sucesso não era para ele
								</h3>

								<p className="mt-[32px] w-[271px] md:w-[620px] font-mulish font-light text-[#07242C] text-[12px] leading-[24px] md:text-[18px] md:leading-[32px]">
									Em um cenário permeado por desafios e superações, a trajetória de
									Elton Euler desponta como uma transformação na forma de
									compreender e alcançar o sucesso. Nascido em Taguatinga, no
									Distrito Federal, em 1983, e tendo enfrentado uma infância
									marcada por dificuldades financeiras e familiares – com a mudança
									para Cuiabá e o trabalho precoce ao lado do pai em construções –
									o empresário visionário desenvolveu desde cedo um olhar aguçado
									para o comportamento humano e para a estruturação de sistemas. Em
									suas próprias palavras, "eu sempre enxerguei padrões onde outros
									viam apenas o caos", expressão que sintetiza a capacidade de
									transformar adversidades em oportunidades.
								</p>
							</div>

							{/* espaço extra entre o texto e a assinatura */}
							<div className="mt-[40px] md:mt-[64px]" />

							<div className="mt-auto w-[271px] md:w-[620px] flex items-end justify-between">
								<img
									src="/images/oro/institucional/o_globo_logo.png"
									alt="O Globo"
									className="w-[96.876953125px] h-auto md:w-[148px]"
								/>

								<p className="w-[158.123046875px] md:w-[456px] font-mulish font-normal italic text-[#104448] text-[9px] leading-[100%] md:text-[12px] text-right">
									Por O GLOBO - 21/02/2025
								</p>
							</div>

							{/* respiro inferior */}
							<div className="h-[8px] md:h-[28px]" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}