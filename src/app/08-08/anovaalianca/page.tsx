import Image from "next/image";
import Link from "next/link";

function PlayIcon({ size }: { size: number }) {
	return (
		<svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
			<circle cx="12" cy="12" r="12" fill="#FFFFFF" />
			<path d="M9.6 7.8 16 12l-6.4 4.2V7.8Z" fill="#C0964B" />
		</svg>
	);
}

export default function Anovaalianca() {
	return (
		<main className="min-h-[1352px] w-full bg-[#000C14]">
			<section className="relative h-[1352px] w-full overflow-hidden bg-[#000C14]">
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

					<div
						className="absolute md:hidden"
						style={{ top: "118px", left: "64px", width: "351px" }}
					>
						<p
							className="text-sm font-normal text-white/60"
							style={{ fontFamily: "Mulish, sans-serif", lineHeight: "150%" }}
						>
							Duração XXhXXm
						</p>

						<div className="mt-2.5 flex h-[29px] items-center">
							<span className="flex h-[18px] w-[19px] shrink-0 items-center justify-center text-xl leading-none text-[#FFCE31]">
								★
							</span>

							<span
								className="ml-[5px] text-xl font-medium text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								10
							</span>

							<span
								className="ml-2 whitespace-nowrap text-base font-normal text-white/60"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								XXXX | XXXX | XXXX
							</span>
						</div>
					</div>

					<div
						className="absolute hidden md:block"
						style={{ top: "152px", left: "187px", width: "350px" }}
					>
						<p
							className="text-sm font-normal text-white/60"
							style={{ fontFamily: "Mulish, sans-serif", lineHeight: "150%" }}
						>
							Duração XXhXXm
						</p>

						<div className="mt-3.5 flex h-[29px] items-center">
							<span className="flex h-[18px] w-[19px] shrink-0 items-center justify-center text-xl leading-none text-[#FFCE31]">
								★
							</span>

							<span
								className="ml-[5px] text-xl font-medium text-white"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								10
							</span>

							<span
								className="ml-2 whitespace-nowrap text-base font-normal text-white/60"
								style={{ fontFamily: "Outfit, sans-serif", lineHeight: "150%" }}
							>
								XXXX | XXXX | XXXX
							</span>
						</div>
					</div>

					<h1
						className="absolute font-medium text-white md:hidden"
						style={{
							top: "205px",
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
						className="absolute text-xs font-medium text-white md:hidden"
						style={{
							top: "320px",
							left: "64px",
							width: "351px",
							fontFamily: "Mulish, sans-serif",
							lineHeight: "190%",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						<br />
						Nam nunc leo, sollicitudin ut convallis at, iaculis id eros.
						<br />
						Quisque gravida, risus sed viverra maximus, ipsum justo
						<br />
						auctor massa, in elementum nisl dolor nec nisi.
					</p>

					<p
						className="absolute hidden text-xs font-medium text-white md:block"
						style={{
							top: "461px",
							left: "188px",
							width: "331px",
							fontFamily: "Mulish, sans-serif",
							lineHeight: "190%",
						}}
					>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam nunc leo, sollicitudin ut convallis at, iaculis id eros. Quisque gravida, risus sed viverra maximus, ipsum justo auctor massa, in elementum nisl dolor nec nisi.
					</p>

					<button
						type="button"
						aria-label="Ver Agora"
						className="absolute flex items-center justify-center text-white md:hidden"
						style={{
							top: "422px",
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
							style={{
								fontFamily: "Outfit, sans-serif",
								fontSize: "14.08px",
								lineHeight: "150%",
							}}
						>
							Ver Agora
						</span>
					</button>

					<button
						type="button"
						aria-label="Ver Agora"
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
							style={{
								fontFamily: "Outfit, sans-serif",
								fontSize: "14.08px",
								lineHeight: "150%",
							}}
						>
							Ver Agora
						</span>
					</button>

					<footer
						className="absolute inset-x-0 flex flex-col items-center md:hidden"
						style={{ bottom: "40px" }}
					>
						<Image
							src="/images/novaalianca/v1/logo.svg"
							alt="Aliança Divergente"
							width={260}
							height={49}
							className="h-auto w-[260px]"
						/>

						<div
							className="mt-5 flex items-center justify-center gap-3 text-white/70"
							style={{
								fontFamily: "Mulish, sans-serif",
								fontSize: "14px",
								lineHeight: "145%",
							}}
						>
              <Link href="/termos-de-uso" className="underline underline-offset-2">
                Termos de Uso
              </Link>


							<span>|</span>

              <Link
                href="/politicas-de-privacidade"
                className="underline underline-offset-2"
              >
                Politicas de Privacidade
              </Link>
						</div>

						<p
							className="mt-5 flex flex-col items-center text-center text-white/80"
							style={{
								fontFamily: "Mulish, sans-serif",
								fontSize: "14px",
								lineHeight: "145%",
							}}
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
							style={{
								fontFamily: "Mulish, sans-serif",
								fontSize: "14px",
								lineHeight: "145%",
							}}
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
							style={{
								fontFamily: "Mulish, sans-serif",
								fontSize: "14px",
								lineHeight: "145%",
							}}
						>
              <Link href="/termos-de-uso" className="underline underline-offset-2">
                Termos de Uso
              </Link>

							<span>|</span>

              <Link
                href="/politicas-de-privacidade"
                className="underline underline-offset-2"
              >
                Politicas de Privacidade
              </Link>
						</div>
					</footer>
				</div>
			</section>
		</main>
	);
}
