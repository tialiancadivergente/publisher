"use client";

import React from "react";

export default function BiographyElton() {
	return (
		<section className="min-h-[3143px] md:min-h-[2304px] md:h-[2304px] flex flex-col items-center overflow-hidden bg-[#104448] px-4 md:px-0">
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="mx-auto flex w-full flex-col items-center pt-[40px] md:pt-[160px]">
					<h2 className="font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center w-[319px] md:w-[1060px]">
						Existimos para tornar o desenvolvimento pessoal mais acessível e real
					</h2>

					<div className="mt-[40px] md:mt-[80px] w-[319px] md:w-[904px] font-mulish font-light text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
						<p>
							A Aliança Divergente nasceu para apoiar pessoas a enxergarem o que ainda
							as mantém no mesmo lugar. Apoiamos quem quer construir uma vida mais
							leve, saudável e próspera, mas já percebeu que motivação pontual não
							basta.
						</p>

						<p className="mt-[24px] md:mt-[32px]">
							Nosso trabalho é oferecer uma estrutura para que cada pessoa consiga
							olhar para seus padrões com mais clareza, tomar decisões com mais{" "}
							<strong className="font-bold">responsabilidade</strong> e transformar
							intenção em <strong className="font-bold">ação diária.</strong>
						</p>
					</div>

					<div className="mt-[40px] md:mt-[72px] flex flex-col gap-[8px] md:gap-[16px] w-[319px] md:w-[1060px]">
						<div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px]">
							<div className="bg-[#006D71] rounded-[6px] w-[319px] md:w-[382px] h-auto md:h-[328px] px-[24px] py-[24px] md:px-[32px] md:py-[24px]">
								<h3 className="font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[32px] md:leading-[36px]">
									Método para dar direção
								</h3>

								<p className="mt-[24px] md:mt-[24px] font-mulish font-light text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
									Estruturamos práticas aplicáveis à vida real, apoiando as pessoas
									na identificação de padrões, tomada de decisões e construção de uma
									nova postura, para agirem com mais clareza.
								</p>
							</div>

							<picture className="block w-[319px] md:w-[662px]">
								<source
									media="(min-width: 768px)"
									srcSet="/images/oro/Institucional/img_01_desktop.png"
								/>
								<img
									src="/images/oro/Institucional/img_01_terceira donbra_mobile.webp"
									alt=""
									className="w-[319px] md:w-[662px] h-auto md:h-[328px] rounded-[6px] object-cover"
								/>
							</picture>
						</div>

						<div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px]">
							<picture className="block w-[319px] md:w-[662px] order-2 md:order-1">
								<source
									media="(min-width: 768px)"
									srcSet="/images/oro/Institucional/img_02_desktop.png"
								/>
								<img
									src="/images/oro/Institucional/img_02_terceira donbra_mobile.webp"
									alt=""
									className="w-[319px] md:w-[662px] h-auto md:h-[328px] rounded-[6px] object-cover"
								/>
							</picture>

							<div className="bg-[#006D71] rounded-[6px] w-[319px] md:w-[382px] h-auto md:h-[328px] px-[24px] py-[24px] md:px-[32px] md:py-[24px] order-1 md:order-2">
								<h3 className="font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[32px] md:leading-[36px]">
									Ferramentas para transformar intenção em ação
								</h3>

								<p className="mt-[24px] md:mt-[24px] font-mulish font-light text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
									Criamos recursos que encorajam a explorar campos além da reflexão e
									avançar intencionalmente, com pequenos passos consistentes, dentro
									da sua rotina.
								</p>
							</div>
						</div>

						<div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px]">
							<div className="bg-[#006D71] rounded-[6px] w-[319px] md:w-[382px] h-auto md:h-[328px] px-[24px] py-[24px] md:px-[32px] md:py-[24px]">
								<h3 className="font-spectral font-bold text-[#C0964B] text-[22px] leading-[32px] md:text-[30px] md:leading-[36px]">
									<span className="block whitespace-nowrap">Comunidade para</span>
									<span className="block whitespace-nowrap">
										sustentar continuidade
									</span>
								</h3>

								<p className="mt-[24px] md:mt-[20px] font-mulish font-light text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
									Acreditamos que é mais fácil sustentar a mudança quando se tem
									apoio de um grupo com os mesmos objetivos. Por isso, a jornada
									acontece em um ambiente de troca e compromisso coletivo.
								</p>
							</div>

							<picture className="block w-[319px] md:w-[610px]">
								<source
									media="(min-width: 768px)"
									srcSet="/images/oro/Institucional/img_03_desktop.png"
								/>
								<img
									src="/images/oro/Institucional/img_03_terceira dobra_mobile.webp"
									alt=""
									className="w-[319px] md:w-[610px] h-auto md:h-[328px] rounded-[6px] object-cover"
								/>
							</picture>
						</div>

						<div className="flex flex-col md:flex-row gap-[8px] md:gap-[16px]">
							<picture className="block w-[319px] md:w-[610px] order-2 md:order-1">
								<source
									media="(min-width: 768px)"
									srcSet="/images/oro/Institucional/img_04_desktop.png"
								/>
								<img
									src="/images/oro/Institucional/img_04_terceira dobra_mobile.webp"
									alt=""
									className="w-[319px] md:w-[610px] h-auto md:h-[328px] rounded-[6px] object-cover"
								/>
							</picture>

							<div className="bg-[#006D71] rounded-[6px] w-[319px] md:w-[382px] h-auto md:h-[328px] px-[24px] py-[24px] md:px-[32px] md:py-[32px] order-1 md:order-2">
								<h3 className="font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[32px] md:leading-[36px]">
									Ampliação de visão e repertório
								</h3>

								<p className="mt-[24px] md:mt-[32px] font-mulish font-light text-white text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
									Reunimos mentores que compartilham conhecimento prático sobre
									saúde, relacionamento, carreira, finanças e desenvolvimento humano.
								</p>
							</div>
						</div>
					</div>

					<div className="mt-[32px] md:mt-[56px] w-full flex justify-center">
	<p className="w-[289px] md:w-[1060px] font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[38px] md:leading-[56px] tracking-[0] md:tracking-[-0.02em] text-center md:-translate-x-[24px]">
		Uma estrutura pensada para quem decidiu, de fato, mudar.
	</p>
</div>
				</div>
			</div>
		</section>
	);
}