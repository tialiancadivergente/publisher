import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Countdown } from "../countdown";
import { EasterEggs } from "../easter-eggs";
import { LeadCaptureForm, LeadCaptureSubmitData } from "@/app/components/form/lead-capture-form";

type HeroSectionProps = {
	vipGroupUrl: string;
	formName: string,
	onSubmit: (data: LeadCaptureSubmitData) => boolean | void | Promise<boolean | void>;
	submitError?: string | null;
};

export default function HeroSection({
	vipGroupUrl,
	formName,
	onSubmit,
	submitError
}: HeroSectionProps) {
	return (
		<main className="bg-[#06282e] font-spectral text-white">
			<section
				className="relative mx-auto min-h-[1562px] w-full max-w-[480px] overflow-hidden bg-[#06282e]"
				aria-label="A revelacao da Nova Alianca"
			>
				<div className="absolute inset-x-0 top-0 h-[1562px]">
					<Image
						src="/images/08-08/bg-v.webp"
						alt="Cachoeira em uma trilha cercada por mata"
						fill
						priority
						sizes="480px"
					/>
					<div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-b from-transparent via-[#06282e]/28 to-[#06282e]" />
				</div>

				<div className="relative z-10 flex min-h-[1140px] flex-col px-7 pb-10 pt-8">
					<header className="px-7 pb-8 pt-8 text-center">
						<Image
							src="/images/08-08/logo-nova-alianca.svg"
							alt="A revelacao da Nova Alianca"
							width={233}
							height={69}
							priority
							className="mx-auto mb-6 h-auto w-[233px]"
						/>
						<Countdown />
						<div className="max-w-lg mt-7">
							<LeadCaptureForm
								formName={formName}
								onSubmit={onSubmit}
								submitError={submitError}
								submitLabel="ENTRAR NO GRUPO VIP"
								emailInputClassName="w-full h-[58px] border border-[#6F6F6F] flex rounded-[8px] flex-1 px-4 py-4 bg-[#FFFFFF0A] text-[#F4F0E1]"
								ddiSelectClassName="h-[58px] py-4 pl-10 pr-2 bg-[#D9CFC31A] rounded-l-[8px] border border-[#6F6F6F] border-r-[0px] text-[#F4F0E1] focus:outline-none"
								phoneInputClassName="w-full !h-[58px] px-4 py-4 rounded-r-[8px] bg-[#FFFFFF0A] text-[#F4F0E1] focus:outline-none h-[53px] border border-[#6F6F6F] border-l-[0px] border-l-none"
								buttonClassName="mt-6 inline-flex h-14 w-full items-center justify-center gap-1 rounded-full bg-[#17f66c] px-5 font-mulish text-[14px] font-extrabold uppercase text-black shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_9px_18px_rgba(8,255,99,0.2)] transition-transform duration-200 hover:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3e3215]"
							/>
						</div>
					</header>

					<div className="relative z-20 mt-0 mx-auto w-[245px] px-3 py-3 text-center text-[#082a2b]">
						<p className="font-spectral mobile:text-[16px] text-[19px] font-bold italic leading-[1.28]">
							Consegue encontrar
							<br />
							8 ITENS ESCONDIDOS
							<br />
							nessa imagem?
						</p>
					</div>

					<EasterEggs />

					<div className="mt-[490px] pb-0">
						<aside
							id="grupo-vip"
							className="px-12 py-8 text-center"
						>
							<h2 className="font-spectral text-xl font-bold uppercase leading-none">
								Não conseguiu?
							</h2>
							<p className="mt-6 font-mulish text-[16px] leading-[1.45] text-white/90">
								Mas consegue{" "}
								<strong className="font-extrabold text-white">
									ENTRAR NO GRUPO AGORA
								</strong>{" "}
								para saber o que vai rolar 08.08
							</p>
							<Link
								href={vipGroupUrl}
								target="_blank"
								className="mt-6 inline-flex h-14 w-full items-center justify-center gap-1 rounded-full bg-[#17f66c] px-5 font-mulish text-[14px] font-extrabold uppercase text-black shadow-[inset_0_-4px_0_rgba(0,0,0,0.2),0_9px_18px_rgba(8,255,99,0.2)] transition-transform duration-200 hover:scale-[1.015] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#3e3215]"
							>
								ENTRAR NO GRUPO VIP
								<ArrowUpRight className="h-5 w-5" aria-hidden="true" />
							</Link>
						</aside>
					</div>

					<footer className="text-center">
						<Image
							src="/images/08-08/logo-alianca-divergente.png"
							alt="Alianca Divergente"
							width={250}
							height={32}
							className="mx-auto h-auto w-[250px] opacity-85"
						/>
						<nav className="mt-10 flex items-center justify-center gap-4 font-mulish text-[13px] text-white/85">
							<Link href="/termos-de-uso" className="underline underline-offset-2">
								Termos de Uso
							</Link>
							<span className="h-4 w-px bg-white/55" aria-hidden="true" />
							<Link
								href="/politicas-de-privacidade"
								className="underline underline-offset-2"
							>
								Politicas de Privacidade
							</Link>
						</nav>
						<p className="mt-9 font-mulish text-[14px] leading-tight text-white/85">
							Copyright © 08.08.
							<br />
							Todos os direitos reservados.
						</p>
					</footer>
				</div>
			</section>
		</main>
	);
}
