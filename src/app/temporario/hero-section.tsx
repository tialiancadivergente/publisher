"use client";

import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function HeroSection() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const journeyLink =
		"https://aliancadivergentead.pro.typeform.com/to/JrjAi1qB?utm_source=site&utm_medium=home&utm_campaign=seja-aliado";

	return (
		<>
			<header className="w-full h-[68px] md:h-[88px] bg-[#104448] border-b border-[#F4F0E1]/20 flex items-center justify-between px-5 md:px-[72px] py-0 md:py-[24px] z-30">
				<img
					src="/images/oro/Institucional/logo_alianca.png"
					alt="Aliança Divergente"
					className="hidden md:block w-auto h-[28px] object-contain select-none pointer-events-none"
				/>

				<img
					src="/images/oro/Institucional/logo_alianca_mobile.png"
					alt="Aliança Divergente"
					className="block md:hidden w-auto h-[29px] object-contain select-none pointer-events-none"
				/>

				<nav className="hidden md:flex items-center justify-end gap-6 h-[40px]">
					<a
						href="https://blog.aliancadivergente.com.br/"
						target="_blank"
						rel="noopener noreferrer"
						className="font-spectral font-normal text-[14px] leading-[24px] text-center text-[#F4F0E1] flex items-center gap-1"
					>
						Central de Conteúdo
						<ChevronDown size={14} />
					</a>

					<a
						href="#ninth-section"
						className="font-spectral font-normal text-[14px] leading-[24px] text-center text-[#F4F0E1]"
					>
						Histórias dos Aliados
					</a>

					<a href="#" className="font-spectral font-normal text-[14px] leading-[24px] text-center text-[#F4F0E1] flex items-center gap-1">
						Eventos
						<ChevronDown size={14} />
					</a>

					<a href="#" className="font-spectral font-normal text-[14px] leading-[24px] text-center text-[#F4F0E1] flex items-center gap-1">
						Quem Somos
						<ChevronDown size={14} />
					</a>

					<div className="w-px h-[24px] bg-[#F4F0E1]/40" />

					<a
						href="https://www.marca-passos.com/login"
						target="_blank"
						rel="noopener noreferrer"
						className="font-spectral font-normal text-[14px] leading-[24px] text-center text-[#F4F0E1]"
					>
						Acessar Marca Passos
					</a>

					<a
						href={journeyLink}
						target="_blank"
						rel="noopener noreferrer"
						className="h-[40px] rounded-[50px] px-6 flex items-center justify-center bg-[#F4F0E1] font-spectral font-bold text-[14px] leading-[24px] text-center text-[#006D71]"
					>
						Começar Jornada
					</a>
				</nav>

				<div className="flex md:hidden items-center gap-5">
					<a
						href={journeyLink}
						target="_blank"
						rel="noopener noreferrer"
						className="w-[105px] h-[32px] rounded-[72.2px] px-[12px] py-[4px] flex items-center justify-center bg-[#F4F0E1]"
					>
						<span className="w-[81px] h-[18px] font-spectral font-bold text-[10.11px] leading-[17.33px] text-center text-[#006D71] whitespace-nowrap">
							Começar Jornada
						</span>
					</a>

					<button
						type="button"
						onClick={() => setIsMenuOpen(true)}
						className="text-[#F4F0E1]"
						aria-label="Abrir menu"
					>
						<Menu size={28} />
					</button>
				</div>
			</header>

			{isMenuOpen && (
				<div className="fixed inset-0 z-50 md:hidden">
					<div className="w-[252px] h-full bg-[#104448] px-5 pt-6 pb-8 flex flex-col">
						<div className="flex items-start justify-between">
							<img
								src="/images/oro/Institucional/logo_alianca_mobile.png"
								alt="Aliança Divergente"
								className="w-auto h-[29px] object-contain select-none pointer-events-none"
							/>

							<button
								type="button"
								onClick={() => setIsMenuOpen(false)}
								className="text-[#F4F0E1]"
								aria-label="Fechar menu"
							>
								<X size={24} />
							</button>
						</div>

						<nav className="mt-10 flex flex-col items-start gap-5">
							<a
								href="https://blog.aliancadivergente.com.br/"
								target="_blank"
								rel="noopener noreferrer"
								className="font-spectral font-normal text-[16px] leading-[32px] text-[#F4F0E1] flex items-center gap-2"
							>
								Central de Conteúdo
								<ChevronDown size={18} />
							</a>

							<a
								href="#ninth-section"
								onClick={() => setIsMenuOpen(false)}
								className="font-spectral font-normal text-[16px] leading-[32px] text-[#F4F0E1]"
							>
								Histórias dos Aliados
							</a>

							<a href="#" className="font-spectral font-normal text-[16px] leading-[32px] text-[#F4F0E1] flex items-center gap-2">
								Eventos
								<ChevronDown size={18} />
							</a>

							<a href="#" className="font-spectral font-normal text-[16px] leading-[32px] text-[#F4F0E1] flex items-center gap-2">
								Quem Somos
								<ChevronDown size={18} />
							</a>
						</nav>

						<a
							href="https://www.marca-passos.com/login"
							target="_blank"
							rel="noopener noreferrer"
							className="mt-auto w-[172px] h-[40px] rounded-[50px] flex items-center justify-center bg-[#008A8F]"
						>
							<span className="w-[140px] h-[24px] font-spectral font-bold text-[14px] leading-[24px] text-center text-[#F4F0E1] whitespace-nowrap">
								Acessar Marca Passos
							</span>
						</a>
					</div>
				</div>
			)}

			<section
				id="hero"
				className="relative h-[735px] md:h-[860px] flex flex-col items-center p-4 md:p-0 justify-start md:justify-center overflow-hidden bg-[#071117] bg-[url('/images/oro/Institucional/bg_mobile_primeira_dobra.png')] md:bg-[url('/images/oro/Institucional/bg_desktop_primeira_dobra.webp')] bg-cover bg-center z-0"
			>
				<div className="mx-auto sm:px-4 2md:pt-6 pt-2 relative lg:w-[1080px] w-full flex justify-center md:justify-start">
					<div className="w-full max-w-[318px] md:max-w-[610px] -mt-[20px] md:-mt-[180px] md:ml-[-40px]">
						<div className="mt-[40px] md:mt-0">
							<div className="w-[318px] md:w-[610px] h-[80px] md:h-[142px]">
								<p className="font-spectral font-bold text-[#006D71] text-[32px] leading-[40px] md:text-[64.31px] md:leading-[70.74px] text-center md:text-left">
									Uma nova lente para enxergar a vida
								</p>
							</div>

							<div className="w-[318px] md:w-[610px] h-[168px] md:h-[128px] mt-6 md:mt-8">
								<p className="font-mulish font-light text-[#07242C] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] text-center md:text-left">
									A Aliança Divergente é um programa de desenvolvimento pessoal contínuo
									que apoia pessoas na conquista de resultados na saúde, nos
									relacionamentos e na vida financeira, através de um método estruturado,
									com ferramentas práticas e mentores preparados.
								</p>
							</div>

							<a
								href={journeyLink}
								target="_blank"
								rel="noopener noreferrer"
								className="w-[318px] md:w-[382px] h-[52px] mt-8 md:mt-10 rounded-[50px] pt-[14px] pr-[40px] pb-[14px] pl-[40px] flex items-center justify-center gap-[10px] bg-[#C0964B] font-spectral font-extrabold md:font-bold text-[12px] md:text-[16px] leading-[24px] text-center uppercase text-[#FFFFFF] transition-all hover:brightness-105"
							>
								QUERO COMEÇAR MINHA JORNADA
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}