"use client";

import React from "react";

export default function BiographyRamon() {
	return (
		<section
			className={`min-h-[903px] md:min-h-[1070px] flex flex-col items-center p-4 md:p-0 justify-start overflow-hidden bg-[#000000] bg-[url('/images/oro/Institucional/bg_quarta_dobra_mobile.webp')] md:bg-[url('/images/oro/Institucional/bg_quarta_dobra_desktop.webp')] bg-cover bg-top md:bg-center bg-no-repeat z-0`}
		>
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="mx-auto flex w-full flex-col items-center pt-[340px] md:pt-[540px]">
					<h2 className="font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center w-[319px] md:w-[1060px]">
						Por que somos Divergentes?
					</h2>

					<div className="mt-[40px] md:mt-[48px] w-[319px] md:w-[1060px] font-mulish font-light text-[#07242C] text-[16px] leading-[24px] md:text-[18px] md:leading-[32px]">
						<p>
							Porque escolhemos olhar para a vida por outro ângulo.
						</p>

						<p className="mt-[24px] md:mt-[32px]">
							Enquanto muita gente trata problemas como fatos isolados, nós
							observamos os padrões por trás deles. Enquanto muitos buscam
							respostas rápidas, nós defendemos processo. Enquanto o mundo
							incentiva acúmulo de informação, nós insistimos em prática.
							Enquanto a maioria espera a vida mudar para então agir, nós
							acreditamos que{" "}
							<span className="font-bold">
								tudo muda quando alguma coisa muda.
							</span>
						</p>

						<p className="mt-[24px] md:mt-[32px]">
							<span className="font-bold">
								Ser divergente é não aceitar
							</span>{" "}
							que a própria história continue sendo conduzida por medo, culpa,
							confusão emocional ou repetição.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}