import type { ReactNode } from "react";

interface IHeadline {
	id: number | string;
	isPicture: boolean;
	isLogo: boolean;
	title: ReactNode;
	text: ReactNode;
}

export const Headline: IHeadline[] = [
	{
		id: "h0",
		isPicture: false,
		isLogo: false,
		title: (
			<p className="font-spectral font-bold text-[#006D71] text-[32px] leading-[40px] md:text-[64.31px] md:leading-[70.74px] text-center md:text-left">
				Uma nova lente para enxergar a vida
			</p>
		),

		text: (
			<p className="font-mulish font-light text-[#07242C] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px] text-center md:text-left">
				A Aliança Divergente é um programa de desenvolvimento pessoal contínuo
				que apoia pessoas na conquista de resultados na saúde, nos
				relacionamentos e na vida financeira, através de um método estruturado,
				com ferramentas práticas e mentores preparados.
			</p>
		),
	},
];