"use client";

import React, { useState } from "react";

const questions = [
	{
		question: "O que é a Aliança Divergente?",
		answer: (
			<>
				Somos um programa de desenvolvimento pessoal contínuo que apoia pessoas
				na conquista de resultados na saúde, nos relacionamentos e na vida
				financeira, através de um método estruturado, com ferramentas práticas e
				mentores preparados.
			</>
		),
	},
	{
		question:
			"A Aliança Divergente é o mesmo que coaching, terapia ou religião?",
		answer: (
			<>
				Não. A Aliança Divergente é uma jornada de desenvolvimento pessoal
				contínuo. Não substituímos acompanhamento psicológico, psiquiátrico,
				médico ou orientação religiosa. Nosso trabalho é oferecer método,
				ferramentas, mentores, tecnologia e comunidade para apoiar pessoas na
				construção de uma vida mais leve, saudável e próspera.
			</>
		),
	},
	{
		question: "O que está incluso na Aliança Divergente?",
		answer: (
			<>
				Acesso ao aplicativo Marca Passos, com: videoaulas, áudios dos mentores,
				exercícios dirigidos, reflexões, comunidade e o mentor de bolso (IA
				desenvolvida por nós, com base nos fundamentos da Aliança, que fala em
				tempo real com você), além de eventos online e presenciais.
			</>
		),
	},
	{
		question: "Como faço para ter acesso ao Marca Passos?",
		answer: (
			<>
				Apenas membros da Aliança Divergente têm acesso ao Marca Passos. Para se
				tornar um membro,{" "}
				<a
					href="https://www.marca-passos.com/login"
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold italic underline"
				>
					clique aqui.
				</a>
			</>
		),
	},
	{
		question: "E se eu entrar e não gostar? Consigo meu dinheiro de volta?",
		answer: (
			<>
				Oferecemos garantia de 30 dias após a compra. Dentro deste período,
				caso não esteja satisfeito, você pode solicitar o reembolso total
				através do suporte ao aluno.
			</>
		),
	},
	{
		question: "Quais são as formas de pagamento?",
		answer: (
			<>
				Aceitamos diversas formas de pagamento, incluindo cartão de crédito,
				débito e boleto bancário. As opções de pagamento são apresentadas
				durante o processo de assinatura, na plataforma oficial.
			</>
		),
	},
	{
		question:
			"Ainda tenho dúvidas. Como faço para conversar com alguém da equipe?",
		answer: (
			<>
				A forma mais segura e rápida de falar com a nossa equipe, é{" "}
				<a
					href="https://wa.me/5512981606832"
					target="_blank"
					rel="noopener noreferrer"
					className="font-bold italic underline"
				>
					clicando aqui
				</a>{" "}
				para realizar um cadastro. É rápido e em alguns minutos alguém vai te
				chamar!
			</>
		),
	},
];

export default function TwelfthSection() {
	const [openedIndex, setOpenedIndex] = useState<number>(0);

	return (
		<section className="relative w-full overflow-hidden bg-[#006D71]">
			<div className="mx-auto flex min-h-[1292px] w-full max-w-[1920px] justify-center lg:min-h-[1232px]">
				<div className="relative z-10 flex w-full justify-center px-7 pt-[72px] lg:px-10 lg:pt-[92px]">
					<div className="flex w-full max-w-[880px] flex-col items-center">
						<h2 className="w-full max-w-[319px] text-center font-spectral text-[24px] font-bold leading-[36px] text-[#C0964B] lg:max-w-[880px] lg:text-[48px] lg:leading-[64px]">
							Perguntas frequentes
						</h2>

						<div className="mt-[44px] flex w-full max-w-[319px] flex-col gap-4 lg:mt-[64px] lg:max-w-[880px]">
							{questions.map((item, index) => {
								const isOpen = openedIndex === index;

								return (
									<div
										key={item.question}
										className={`
											w-full
											overflow-hidden
											rounded-[16px]
											bg-[#10444833]
											p-6
											transition-all
											duration-300
											ease-in-out
											${isOpen ? "min-h-[304px] lg:min-h-[208px]" : "min-h-[120px] lg:min-h-[96px]"}
										`}
									>
										<button
											type="button"
											onClick={() => setOpenedIndex(isOpen ? -1 : index)}
											className="flex w-full items-start justify-between gap-4 text-left"
										>
											<span className="max-w-[223px] font-mulish text-[18px] font-bold leading-[24px] text-[#F4F0E1] lg:max-w-[720px] lg:text-[20px] lg:leading-[32px]">
												{item.question}
											</span>

											<span
												className={`
													flex
													h-12
													w-12
													shrink-0
													items-center
													justify-center
													rounded-[40px]
													p-[3px]
													transition-transform
													duration-300
													${isOpen ? "rotate-180" : "rotate-0"}
												`}
											>
												<img
													src="/images/oro/Institucional/seta_perguntas.png"
													alt=""
													className="h-12 w-12"
												/>
											</span>
										</button>

										<div
											className={`
												grid
												transition-all
												duration-300
												ease-in-out
												${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
											`}
										>
											<div className="overflow-hidden">
												<p className="mt-4 w-full font-mulish text-[16px] font-normal leading-[24px] text-[#F4F0E1] lg:max-w-[832px] lg:text-[18px] lg:leading-[32px]">
													{item.answer}
												</p>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}