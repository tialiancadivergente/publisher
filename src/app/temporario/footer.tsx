import Image from "next/image";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="w-full bg-[#104448]">
			<div className="mx-auto flex min-h-[330px] w-full max-w-[1432px] flex-col items-center px-7 pt-[42px] lg:min-h-[287px] lg:px-10 lg:pt-[44px]">
				<p className="w-full max-w-[319px] text-center font-mulish text-[14px] font-bold leading-[100%] text-white lg:max-w-[1060px] lg:text-[18px] lg:leading-[27px]">
					Verificador de contatos oficiais – evite golpes.
				</p>

				<h2 className="mt-[10px] w-full max-w-[319px] text-center font-spectral text-[24px] font-bold leading-[36px] tracking-[-0.03em] text-[#C0964B] lg:mt-[4px] lg:max-w-[1060px] lg:text-[40px] lg:leading-[64px] lg:tracking-[-0.022em]">
					Alguém da Aliança Divergente entrou em contato com você?
				</h2>
			</div>

			<div className="h-px w-full bg-[#006D71]" />

			<div className="mx-auto flex min-h-[427px] w-full max-w-[1432px] flex-col items-center px-7 py-[28px] lg:min-h-[172px] lg:flex-row lg:items-center lg:justify-between lg:px-10 lg:py-0">
				<div className="flex flex-col items-center lg:items-start">
					<Image
						src="/images/oro/institucional/logo_desktop_rodape.png"
						alt="Aliança Divergente"
						width={284}
						height={37}
						className="h-auto w-[243px] object-contain lg:w-[284px]"
					/>

					<Image
						src="/images/oro/institucional/image2.png"
						alt="Verificado por Reclame Aqui"
						width={146}
						height={35}
						className="mt-[18px] h-auto w-[144.5px] rounded-[4px] object-contain lg:w-[146px]"
					/>
				</div>

				<div className="mt-[30px] grid grid-cols-2 gap-x-[52px] gap-y-[18px] font-spectral text-[14px] italic leading-[120%] text-white lg:mt-0 lg:flex lg:gap-[72px]">
					<nav className="flex flex-col gap-[14px]">
						<Link href="#" className="transition-opacity hover:opacity-80">
							Central de Conteúdo
						</Link>
						<Link href="#" className="transition-opacity hover:opacity-80">
							Histórias dos Aliados
						</Link>
						<Link href="#" className="transition-opacity hover:opacity-80">
							Eventos
						</Link>
					</nav>

					<nav className="flex flex-col gap-[14px]">
						<Link href="#" className="transition-opacity hover:opacity-80">
							Quem Somos
						</Link>
						<Link href="#" className="transition-opacity hover:opacity-80">
							App Marca Passos
						</Link>
						<Link href="#" className="transition-opacity hover:opacity-80">
							Mapa do site
						</Link>
					</nav>

					<div className="col-span-2 flex flex-col items-center gap-[14px] lg:col-span-1 lg:items-start">
						<p>Nossas Redes</p>

						<div className="flex items-center gap-4">
							<Link href="#" className="transition-opacity hover:opacity-80">
								<Image
									src="/images/oro/institucional/Instagram.png"
									alt="Instagram"
									width={24}
									height={24}
								/>
							</Link>

							<Link href="#" className="transition-opacity hover:opacity-80">
								<Image
									src="/images/oro/institucional/youtube.png"
									alt="YouTube"
									width={24}
									height={24}
								/>
							</Link>

							<Link href="#" className="transition-opacity hover:opacity-80">
								<Image
									src="/images/oro/institucional/tiktok.png"
									alt="TikTok"
									width={24}
									height={24}
								/>
							</Link>
						</div>
					</div>
				</div>

				<div className="mt-[28px] flex w-full max-w-[333px] flex-col items-center text-center font-spectral lg:mt-0 lg:max-w-[418px] lg:items-end lg:text-right">
					<p className="w-full text-[10px] font-bold uppercase leading-[120%] text-[#C0964B]">
						Termos e Condições e Políticas de Privacidade.
					</p>

					<p className="mt-[8px] hidden w-full max-w-[368px] text-[10px] font-normal leading-[120%] text-white lg:block">
						R. Salviano José da Silva, 400 - Eldorado, São José dos Campos/SP -
						CEP: 12238-573.
					</p>

					<p className="mt-[8px] w-full text-[8px] font-normal leading-[120%] tracking-[-0.02em] text-white lg:text-[10px] lg:tracking-[0]">
						Este site não é afiliado ao Facebook, Meta, Google ou qualquer rede
						social ou recursos doe marketing. A compra desse material não
						garante nenhum tipo de resultado. Fazemos todos os esforços para
						indicar claramente e mostrar todas as provas do produto e usamos
						resultados reais de alunos.
					</p>

					<p className="mt-[12px] w-full text-[8px] font-bold uppercase leading-[120%] text-white lg:text-[10px]">
						© 2025 . All rights reserved . Todos os direitos reservados.
					</p>
				</div>
			</div>
		</footer>
	);
}