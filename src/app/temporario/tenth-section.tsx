"use client";

import React, { useEffect, useState } from "react";

export default function TenthSection() {
	const blogItems = [
		{
			image: "/images/blog/imgem_1.jpeg",
			link: "https://revistaanamaria.com.br/coluna-renata-rode/exclusivo-especialista-em-desenvolvimento-humano-explica-como-superar-problemas-e-prosperar/",
		},
		{
			image: "/images/blog/imagem_2.jpeg",
			link: "https://horadafama.com.br/evento-da-alianca-divergente-movimenta-r-40-milhoes-em-sao-jose-dos-campos/",
		},
		{
			image: "/images/blog/imagem_3.webp",
			link: "https://www.terra.com.br/diversao/gente/crises-emocionais-financeiras-e-de-saude-tem-raiz-relacional-aponta-teoria-apresentada-em-imersao-gratuita%2C66f304e6a502ff169d0556e1a5a8a792lnzjjbrm.html?utm_source=chatgpt.com",
		},
		{
			image: "/images/blog/imagem_4.jpeg",
			link: "https://blog.aliancadivergente.com.br/imprensa/uol-evento-que-reune-empresarios-foca-em-legado-e-identidade-das-empresas/",
		},
	];

	const [activeIndex, setActiveIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setActiveIndex((current) => (current + 1) % blogItems.length);
		}, 3000);

		return () => clearInterval(interval);
	}, [blogItems.length]);

	const visibleItems = [
		blogItems[(activeIndex - 1 + blogItems.length) % blogItems.length],
		blogItems[activeIndex],
		blogItems[(activeIndex + 1) % blogItems.length],
	];

	return (
		<section className="min-h-[1280px] md:min-h-[1000px] flex flex-col items-center justify-start overflow-hidden bg-[#F5F0EB]">
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="flex flex-col items-center pt-[64px] md:pt-[120px]">
					<h2 className="w-[319px] md:w-[1060px] font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center">
						O que a imprensa diz
					</h2>

					<div className="mt-[40px] md:mt-[64px] flex flex-col md:flex-row items-center gap-[24px] md:gap-[24px]">
						<div className="w-[319px] h-[690px] md:w-[340px] md:h-[560px] flex flex-col gap-[12px] overflow-hidden">
							{visibleItems.map((item, index) => (
								<a
									key={`${item.image}-${index}`}
									href={item.link}
									target="_blank"
									rel="noopener noreferrer"
									className="block w-full h-[222px] md:h-[178.66px] rounded-[16px] overflow-hidden"
								>
									<img
										src={item.image}
										alt=""
										className={`w-full h-full object-cover transition-all duration-700 ${
											index === 1 ? "grayscale-0" : "grayscale"
										}`}
									/>
								</a>
							))}
						</div>

						<div className="flex md:flex-col flex-row items-center justify-center gap-[12px]">
							{blogItems.map((_, index) => (
								<button
									key={index}
									type="button"
									onClick={() => setActiveIndex(index)}
									aria-label={`Ir para notícia ${index + 1}`}
									className={`rounded-full transition-all duration-300 ${
										activeIndex === index
											? "w-[9px] h-[9px] bg-[#006D71]"
											: "w-[7px] h-[7px] bg-[#D8CFC3]"
									}`}
								/>
							))}
						</div>

						<div className="w-[319px] h-[690px] md:w-[700px] md:h-[560px] bg-[#FFFFFF] rounded-[16px] p-[24px] md:p-[40px] flex flex-col">
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
									para o comportamento humano e para a estruturação de sistemas...
									<a
										href="https://blog.aliancadivergente.com.br/imprensa/o-globo-conheca-historia-do-empresario-visionario-que-antes-de-se-tornar-multimilionario-acreditou-que-sucesso-nao-era-para-ele/#"
										target="_blank"
										rel="noopener noreferrer"
										className="font-bold text-[#006D71]"
									>
										Clique aqui
									</a>
								</p>
							</div>

							<div className="mt-auto w-[271px] md:w-[620px] flex items-end justify-between">
								<img
									src="/images/oro/Institucional/o_globo_logo.png"
									alt="O Globo"
									className="w-[96.876953125px] h-auto md:w-[148px]"
								/>

								<p className="w-[158.123046875px] md:w-[456px] font-mulish font-normal italic text-[#104448] text-[9px] leading-[100%] md:text-[12px] text-right">
									Por O GLOBO - 21/02/2025
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}