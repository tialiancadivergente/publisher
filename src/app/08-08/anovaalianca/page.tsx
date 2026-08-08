"use client";

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

function PlayIcon({ size }: { size: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
			<circle cx="12" cy="12" r="11" fill="white" />
			<path d="M10 8.5L16 12L10 15.5V8.5Z" fill="#C0964B" />
		</svg>
	);
}

function HeartIcon({ active }: { active: boolean }) {
	return (
		<svg
			viewBox="0 0 24 22"
			fill={active ? "#C0964B" : "none"}
			stroke={active ? "#C0964B" : "#FFFFFF"}
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className="h-full w-full"
			aria-hidden="true"
		>
			<path d="M20.84 3.61a5.5 5.5 0 0 0-7.78 0L12 4.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 20.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
		</svg>
	);
}

export default function Anovaalianca() {
	const [isPlaying, setIsPlaying] = useState(true);
	const [liked, setLiked] = useState(false);
	const episodeRef = useRef<HTMLDivElement>(null);

	const handleWatchNow = () => {
		setIsPlaying(true);
		requestAnimationFrame(() => {
			episodeRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
		});
	};

	return (
		<main className="w-full overflow-hidden bg-[#111111] md:bg-[#061D1F]">
			<section className="relative h-[1780px] w-full overflow-hidden bg-[#111111] md:h-[1350px] md:bg-[#061D1F]">
				<div
					aria-hidden="true"
					className="absolute inset-0 md:hidden"
					style={{
						backgroundImage: "url('/images/novaalianca/v1/bg_mobile.png')",
						backgroundPosition: "top center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "100% auto",
					}}
				/>

				<div
					aria-hidden="true"
					className="absolute inset-0 hidden md:block"
					style={{
						backgroundImage: "url('/images/novaalianca/v1/bg_desktop.png')",
						backgroundPosition: "top center",
						backgroundRepeat: "no-repeat",
						backgroundSize: "100% auto",
					}}
				/>

				<div className="relative z-10 mx-auto h-full w-full max-w-[480px] md:max-w-[1440px]">
					<Image
						src="/images/novaalianca/v1/logo_mobile.svg"
						alt="A revelação da Nova Aliança"
						width={225}
						height={66}
						priority
						className="absolute left-1/2 h-auto -translate-x-1/2 md:hidden"
						style={{ top: "30px", width: "225px" }}
					/>

					<Image
						src="/images/novaalianca/v1/logo_desktop.svg"
						alt="A revelação da Nova Aliança"
						width={233}
						height={68}
						priority
						className="absolute hidden h-auto md:block"
						style={{ top: "36.29px", left: "102px", width: "233px" }}
					/>

					<div className="absolute md:hidden" style={{ top: "104px", left: "64px", width: "351px" }}>
						<p
							className="text-sm font-normal text-white/60"
							style={{ fontFamily: "Mulish, sans-serif", lineHeight: "150%" }}
						>
							Duração 1h30
						</p>

						<div className="mt-[6px] flex h-[29px] items-center">
							<span
								className="text-xl font-medium text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								
							</span>

							<span
								className="ml-2 whitespace-nowrap text-base font-normal text-white/60"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								Episódio 1 | 08.08 às 08h08
							</span>
						</div>
					</div>

					<div className="absolute hidden md:block" style={{ top: "152px", left: "187px", width: "350px" }}>
						<p
							className="text-sm font-normal text-white/60"
							style={{ fontFamily: "Mulish, sans-serif", lineHeight: "150%" }}
						>
							Duração 1h30
						</p>

						<div className="mt-3.5 flex h-[29px] items-center">
							<span
								className="text-xl font-medium text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								
							</span>

							<span
								className="ml-2 whitespace-nowrap text-base font-normal text-white/60"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								Episódio 1 | 08.08 às 08h08
							</span>
						</div>
					</div>

					<h1
						className="absolute font-medium text-white md:hidden"
						style={{
							top: "172px",
							left: "64px",
							width: "351px",
							fontFamily: "Teramo, serif",
							fontSize: "43.12px",
							lineHeight: "110%",
						}}
					>
						A Nova Aliança
						<br />
						Divergente
					</h1>

					<h1
						className="absolute hidden font-medium text-white md:block"
						style={{
							top: "237px",
							left: "185px",
							width: "379px",
							fontFamily: "Teramo, serif",
							fontSize: "64px",
							lineHeight: "110%",
						}}
					>
						A Nova
						<br />
						Aliança
						<br />
						Divergente
					</h1>

					<p
						className="absolute font-bold text-white md:hidden"
						style={{
							top: "274px",
							left: "64px",
							width: "351px",
							fontFamily: "Mulish, sans-serif",
							fontSize: "20px",
							lineHeight: "140%",
						}}
					>
						A Travessia
					</p>

					<p
						className="absolute text-xs font-medium text-white md:hidden"
						style={{
							top: "307px",
							left: "64px",
							width: "351px",
							fontFamily: "Mulish, sans-serif",
							lineHeight: "180%",
						}}
					>
						Toda vez que alguém acessou algo e conseguiu
						<br />
						traduzir para o mundo, a humanidade deu um salto.
						<br />
						Nesse episódio, você vai iniciar a travessia para
						<br />
						um mundo novo.
					</p>

					<p
						className="absolute hidden font-bold text-white md:block"
						style={{
							top: "458px",
							left: "188px",
							width: "390px",
							fontFamily: "Mulish, sans-serif",
							fontSize: "22px",
							lineHeight: "140%",
						}}
					>
						A Travessia
					</p>

					<p
						className="absolute hidden text-xs font-medium text-white md:block"
						style={{
							top: "495px",
							left: "188px",
							width: "390px",
							fontFamily: "Mulish, sans-serif",
							lineHeight: "180%",
						}}
					>
						Toda vez que alguém acessou algo e conseguiu traduzir para o mundo, a humanidade deu um salto. Nesse episódio, você vai iniciar a travessia para um mundo novo.
					</p>

					<button
						type="button"
						aria-label="Ver Agora"
						onClick={handleWatchNow}
						className="absolute flex items-center justify-center text-white md:hidden"
						style={{
							top: "406px",
							left: "64px",
							width: "212px",
							height: "50.066px",
							gap: "7.82px",
							padding: "14.08px 25.03px",
							borderRadius: "31.29px",
							backgroundColor: "#C0964B",
							boxShadow: "3.13px 3.13px 19.56px 0 #C0964B",
						}}
					>
						<PlayIcon size={20.861} />
						<span
							className="font-medium"
							style={{ fontFamily: "Outfit, sans-serif", fontSize: "14.08px", lineHeight: "150%" }}
						>
							Ver Agora
						</span>
					</button>

					<button
						type="button"
						aria-label="Ver Agora"
						onClick={handleWatchNow}
						className="absolute hidden items-center justify-center text-white md:flex"
						style={{
							top: "572px",
							left: "185px",
							width: "212px",
							height: "50.066px",
							gap: "7.82px",
							padding: "14.08px 25.03px",
							borderRadius: "31.29px",
							backgroundColor: "#C0964B",
							boxShadow: "3.13px 3.13px 19.56px 0 #C0964B",
						}}
					>
						<PlayIcon size={25.033} />
						<span
							className="font-medium"
							style={{ fontFamily: "Outfit, sans-serif", fontSize: "14.08px", lineHeight: "150%" }}
						>
							Ver Agora
						</span>
					</button>

					<div className="absolute left-1/2 top-[650px] flex w-[317.531px] -translate-x-1/2 flex-col gap-[40px] md:hidden">
						<div ref={episodeRef} className="w-full">
							<div className="relative h-[178.466px] w-[317.531px] overflow-hidden rounded-[9.56px]">
								{isPlaying ? (
									<iframe
										src="https://www.youtube.com/embed/kUyQ53g17Mg?autoplay=1&mute=1&start=359&playsinline=1&rel=0"
										title="A travessia – A História por trás da Maior Mudança da Aliança"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
										referrerPolicy="strict-origin-when-cross-origin"
										className="absolute inset-0 h-full w-full border-0"
									/>
								) : (
									<button
										type="button"
										onClick={() => setIsPlaying(true)}
										aria-label="Assistir ao Episódio 1"
										className="relative block h-full w-full overflow-hidden rounded-[9.56px]"
									>
										<Image
											src="/images/novaalianca/v1/capa_episodio_1.png"
											alt="A travessia – A História por trás da Maior Mudança da Aliança"
											fill
											sizes="318px"
											className="object-cover"
										/>
									</button>
								)}
							</div>

							<h2
								className="mt-[10px] text-[18px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								A travessia – A História por trás da Maior Mudança da Aliança.
							</h2>

							<div className="mt-[7px] flex items-center justify-between">
								<div className="flex items-center gap-[12px]">
									<span
										className="text-[14px] font-normal text-[#B5B5B5]"
										style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
									>
										Episódio 1
									</span>

									<button
										type="button"
										aria-label={liked ? "Remover episódio dos favoritos" : "Marcar episódio como favorito"}
										aria-pressed={liked}
										onClick={() => setLiked((value) => !value)}
										className="flex h-[13.921px] w-[15.559px] items-center justify-center"
										style={{ filter: liked ? "drop-shadow(0px 3.27px 16px #FFCE77)" : "none" }}
									>
										<HeartIcon active={liked} />
									</button>
								</div>

								<span
									className="text-[14px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>

						<div className="w-full">
							<div className="relative h-[178.466px] w-[317.531px] overflow-hidden rounded-[9.56px]">
								<Image
									src="/images/novaalianca/v1/capa_episodio_2.png"
									alt="Disponível em breve – 10.08"
									fill
									sizes="318px"
									className="object-cover"
								/>
							</div>

							<h2
								className="mt-[10px] text-[18px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								Disponível em breve – 10.08
							</h2>

							<div className="mt-[7px] flex items-center justify-between">
								<span
									className="text-[14px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									Episódio 2
								</span>

								<span
									className="text-[14px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>

						<div className="w-full">
							<div className="relative h-[178.466px] w-[317.531px] overflow-hidden rounded-[9.56px]">
								<Image
									src="/images/novaalianca/v1/capa_episodio_3.png"
									alt="Disponível em breve – 12.08"
									fill
									sizes="318px"
									className="object-cover"
								/>
							</div>

							<h2
								className="mt-[10px] text-[18px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								Disponível em breve – 12.08
							</h2>

							<div className="mt-[7px] flex items-center justify-between">
								<span
									className="text-[14px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									Episódio 3
								</span>

								<span
									className="text-[14px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>
					</div>

					<div className="absolute left-1/2 top-[677px] hidden h-[550px] w-[1440px] -translate-x-1/2 md:block">
						<div ref={episodeRef} className="absolute left-[134.05px] top-0 w-[429.904px]">
							<div className="relative h-[241.625px] w-[429.904px] overflow-hidden rounded-[12.94px]">
								{isPlaying ? (
									<iframe
										src="https://www.youtube.com/embed/kUyQ53g17Mg?autoplay=1&mute=1&start=359&playsinline=1&rel=0"
										title="A travessia – A História por trás da Maior Mudança da Aliança"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
										allowFullScreen
										referrerPolicy="strict-origin-when-cross-origin"
										className="absolute inset-0 h-full w-full border-0"
									/>
								) : (
									<button
										type="button"
										onClick={() => setIsPlaying(true)}
										aria-label="Assistir ao Episódio 1"
										className="relative block h-full w-full overflow-hidden rounded-[12.94px]"
									>
										<Image
											src="/images/novaalianca/v1/capa_episodio_1.png"
											alt="A travessia – A História por trás da Maior Mudança da Aliança"
											fill
											sizes="430px"
											className="object-cover"
										/>
									</button>
								)}
							</div>

							<h2
								className="mt-[14px] text-[24px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								A travessia – A História por trás da Maior Mudança da Aliança.
							</h2>

							<div className="mt-[8px] flex items-center justify-between">
								<div className="flex items-center gap-[16px]">
									<span
										className="text-[18px] font-normal text-[#B5B5B5]"
										style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
									>
										Episódio 1
									</span>

									<button
										type="button"
										aria-label={liked ? "Remover episódio dos favoritos" : "Marcar episódio como favorito"}
										aria-pressed={liked}
										onClick={() => setLiked((value) => !value)}
										className="flex h-[18.848px] w-[21.065px] items-center justify-center"
										style={{ filter: liked ? "drop-shadow(0px 3.27px 16px #FFCE77)" : "none" }}
									>
										<HeartIcon active={liked} />
									</button>
								</div>

								<span
									className="text-[18px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>

						<div className="absolute left-[620px] top-0 w-[429.904px]">
							<div className="relative h-[241.625px] w-[429.904px] overflow-hidden rounded-[12.94px]">
								<Image
									src="/images/novaalianca/v1/capa_episodio_2.png"
									alt="Disponível em breve – 10.08"
									fill
									sizes="430px"
									className="object-cover"
								/>
							</div>

							<h2
								className="mt-[14px] text-[24px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								Disponível em breve – 10.08
							</h2>

							<div className="mt-[8px] flex items-center justify-between">
								<span
									className="text-[18px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									Episódio 2
								</span>

								<span
									className="text-[18px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>

						<div className="absolute left-[1105px] top-0 w-[429.904px]">
							<div className="relative h-[241.625px] w-[429.904px] overflow-hidden rounded-[12.94px]">
								<Image
									src="/images/novaalianca/v1/capa_episodio_3.png"
									alt="Disponível em breve – 12.08"
									fill
									sizes="430px"
									className="object-cover"
								/>
							</div>

							<h2
								className="mt-[14px] text-[24px] font-semibold text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "135%" }}
							>
								Disponível em breve – 12.08
							</h2>

							<div className="mt-[8px] flex items-center justify-between">
								<span
									className="text-[18px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									Episódio 3
								</span>

								<span
									className="text-[18px] font-normal text-[#B5B5B5]"
									style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
								>
									às 08h08
								</span>
							</div>
						</div>
					</div>

					<footer className="absolute inset-x-0 flex flex-col items-center md:hidden" style={{ bottom: "40px" }}>
						<Image
							src="/images/novaalianca/v1/logo.svg"
							alt="Aliança Divergente"
							width={260}
							height={49}
							className="h-auto w-[260px]"
						/>

						<div
							className="mt-5 flex items-center justify-center gap-3 text-white/70"
							style={{ fontFamily: "Mulish, sans-serif", fontSize: "14px", lineHeight: "145%" }}
						>
							<Link href="/termos-de-uso" className="underline underline-offset-2">
								Termos de Uso
							</Link>

							<span>|</span>

							<Link href="/politicas-de-privacidade" className="underline underline-offset-2">
								Politicas de Privacidade
							</Link>
						</div>

						<p
							className="mt-5 flex flex-col items-center text-center text-white/80"
							style={{ fontFamily: "Mulish, sans-serif", fontSize: "14px", lineHeight: "145%" }}
						>
							<span>Copyright © A Nova Aliança Divergente.</span>
							<span>Todos os direitos reservados.</span>
						</p>
					</footer>

					<footer
						className="absolute hidden items-center justify-between md:flex"
						style={{ left: "185px", right: "185px", bottom: "55px" }}
					>
						<p
							className="flex w-[260px] flex-col text-white/80"
							style={{ fontFamily: "Mulish, sans-serif", fontSize: "14px", lineHeight: "145%" }}
						>
							<span>Copyright © A Nova Aliança Divergente.</span>
							<span>Todos os direitos reservados.</span>
						</p>

						<Image
							src="/images/novaalianca/v1/logo.svg"
							alt="Aliança Divergente"
							width={245}
							height={46}
							className="h-auto w-[245px]"
						/>

						<div
							className="flex items-center justify-end gap-3 text-white/70"
							style={{ fontFamily: "Mulish, sans-serif", fontSize: "14px", lineHeight: "145%" }}
						>
							<Link href="/termos-de-uso" className="underline underline-offset-2">
								Termos de Uso
							</Link>

							<span>|</span>

							<Link href="/politicas-de-privacidade" className="underline underline-offset-2">
								Politicas de Privacidade
							</Link>
						</div>
					</footer>
				</div>
			</section>
		</main>
	);
}