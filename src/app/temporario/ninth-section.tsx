"use client";

import React, { useState } from "react";

const testimonials = [
	{
		name: "Júlia Lidiane",
		image: "julia_desktop.png",
		popupImage: "/images/aliados/julia.svg",
		short:
			"Professora, endividada e emocionalmente exausta, Júlia encontrou na Aliança Divergente um caminho para sair do vitimismo e construir seu próprio negócio. Hoje, seu cursinho tem mais de 200 alunos e fatura acima de R$30 mil.",
		mobileShort:
			"Professora, endividada e emocionalmente exausta, Júlia encontrou na Aliança Divergente um caminho para sair do vitimismo e construir seu próprio negócio. Hoje, seu cursinho tem mais de 200 alu...",
		full: `Professora, endividada e emocionalmente exausta, Júlia encontrou na Aliança Divergente um caminho para sair do vitimismo e construir seu próprio negócio. Hoje, seu cursinho tem mais de 200 alunos e fatura acima de R$30 mil.

Desde cedo, ela vivia presa a padrões de culpa, vitimismo e dependência emocional que afetavam diretamente sua relação com o dinheiro, com a família e com ela mesma.

Ao aplicar o nosso método, Júlia começou a reorganizar sua postura, enfrentar conversas difíceis e parar de esperar que outras pessoas resolvessem a vida por ela. O resultado foi uma virada prática: ela estruturou seu próprio cursinho preparatório, passou a ter mais de 200 alunos e hoje relata um faturamento superior a R$30 mil apenas com esse projeto. Mais do que um crescimento financeiro, Júlia descreve sua jornada como o nascimento de uma nova mulher: alguém que finalmente passou a se permitir viver, realizar e desfrutar.`,
	},
	{
		name: "Cauê Bampi",
		image: "caue_desktop.png",
		popupImage: "/images/aliados/caue.svg",
		short:
			"Cauê chegou com baixo faturamento, estresse e dificuldades nas relações. Ao mudar sua postura como homem, marido e pai, viu o financeiro responder: saiu de R$6 mil para R$22 mil e passou a viver com mais presença dentro de casa.",
		mobileShort:
			"Cauê chegou com baixo faturamento, estresse e dificuldades nas relações. Ao mudar sua postura como homem, marido e pai, viu o financeiro responder: saiu de R$6 mil para R$22 mil e passou a viver co...",
		full: `Cauê chegou com baixo faturamento, estresse e dificuldades nas relações. Ao mudar sua postura como homem, marido e pai, viu o financeiro responder: saiu de R$6 mil para R$22 mil e passou a viver com mais presença dentro de casa.

Como gestor de tráfego, ele já tinha disposição para trabalhar e capacidade de realizar, mas percebia que algo sempre o fazia perder força, se intimidar ou voltar para o mesmo lugar.

A virada veio quando ele deixou de olhar apenas para o dinheiro e passou a encarar a postura que sustentava sua vida, seu casamento e seu papel como pai. Com a aplicação das nossas ferramentas, Cauê relata ter saído de R$6 mil para R$22 mil de faturamento, por meses consecutivos. Mas o principal ganho, segundo ele, foi outro: tornar-se um homem mais funcional, mais maduro e mais presente na relação com a esposa e os filhos.`,
	},
	{
		name: "Yasmin Fernandes",
		image: "yasmin_desktop.png",
		popupImage: "/images/aliados/yasmin.svg",
		short:
			"Yasmin estava em um casamento desgastado e vivia no controle, na urgência e no esforço. Com a AD, reconstruiu o diálogo com o marido, comprou sua casa, iniciou uma transição de carreira e passou a viver com mais calma e direção.",
		mobileShort:
			"Yasmin estava em um casamento desgastado e vivia no controle, na urgência e no esforço. Com a AD, reconstruiu o diálogo com o marido, comprou sua casa, iniciou uma transição...",
		full: `Yasmin estava em um casamento desgastado e vivia no controle, na urgência e no esforço. Com a AD, reconstruiu o diálogo com o marido, comprou sua casa, iniciou uma transição de carreira e passou a viver com mais calma e direção.

Ao longo da jornada, ela passou a identificar seus padrões de controle, dependência emocional e reatividade.

Com as nossas ferramentas e apoio da comunidade, reconstruiu o diálogo com o marido, fortaleceu a relação e abriu espaço para novos projetos. Depois disso, vieram outras conquistas: a compra da casa própria, a transição de carreira para criação de conteúdo, o início de uma nova fase profissional e um aumento de faturamento nos primeiros dias de mentoria. Para Yasmin, a maior mudança foi deixar de viver na correria e passar a construir a vida com mais presença, calma e direção.`,
	},
	{
		name: "Veridiana Cordeiro",
		image: "veridiana_desktop.png",
		popupImage: "/images/aliados/veridiana.svg",
		short:
			"Veridiana carregava anos de dor, luto e controle. Aqui, encontrou clareza para reorganizar suas relações, restaurar o casamento e fortalecer a vida financeira da família, saindo de um déficit empresarial para a expansão dos negócios.",
		mobileShort:
			"Veridiana carregava anos de dor, luto e controle. Aqui, encontrou clareza para reorganizar suas relações, restaurar o casamento e fortalecer a vida financeira da família, saindo de um déficit empresar...",
		full: `Veridiana carregava anos de dor, luto e controle. Aqui, encontrou clareza para reorganizar suas relações, restaurar o casamento e fortalecer a vida financeira da família, saindo de um déficit empresarial para a expansão dos negócios.

Ela relata ter passado anos tentando entender sua relação com a mãe, seu casamento e o peso emocional que carregava.

Na Aliança, Veridiana encontrou ferramentas para olhar para si com responsabilidade, ter conversas difíceis, reconstruir sua postura como mulher e esposa e restaurar o casamento. Essa reorganização também refletiu no financeiro: depois de sair de um déficit empresarial de R$100 mil, ela e o marido conseguiram realinhar a casa, fortalecer os negócios e expandir para três operações, com uma quarta em abertura. Para ela, o relacionamento nunca é terceirizado: começa dentro, naquilo que cada pessoa precisa assumir, ajustar e resolver.`,
	},
];

export default function NinthSection() {
	const [openCards, setOpenCards] = useState<number[]>([]);
	const [activePopupIndex, setActivePopupIndex] = useState<number | null>(null);

	const toggleCard = (index: number) => {
		setOpenCards((current) =>
			current.includes(index)
				? current.filter((item) => item !== index)
				: [...current, index]
		);
	};

	const openPopup = (index: number) => {
		setActivePopupIndex(index);
	};

	const closePopup = () => {
		setActivePopupIndex(null);
	};

	const goToPrevious = () => {
		setActivePopupIndex((current) => {
			if (current === null) return current;
			return (current - 1 + testimonials.length) % testimonials.length;
		});
	};

	const goToNext = () => {
		setActivePopupIndex((current) => {
			if (current === null) return current;
			return (current + 1) % testimonials.length;
		});
	};

	return (
		<section className="min-h-[2203px] md:min-h-[996px] flex flex-col items-center justify-start overflow-hidden bg-[#104448]">
			<div className="mx-auto w-full max-w-[1080px]">
				<div className="flex flex-col items-center pt-[64px] md:pt-[96px]">
					<h2 className="w-[319px] md:w-[1060px] font-spectral font-bold text-[#C0964B] text-[24px] leading-[36px] md:text-[48px] md:leading-[64px] text-center">
						Transformações que começaram aqui
					</h2>

					<div className="mt-[40px] md:mt-[88px] grid grid-cols-1 md:grid-cols-2 gap-[24px]">
						{testimonials.map((item, index) => {
							const isOpen = openCards.includes(index);

							return (
								<div
									key={item.name}
									onClick={() => openPopup(index)}
									className="w-[319px] min-h-[410px] md:min-h-0 md:w-[520px] md:h-[232px] rounded-[12px] md:rounded-[16px] bg-[#006D7133] border-b-[4px] border-[#006D7133] px-[24px] md:pl-[24px] md:pr-[32px] pt-[32px] md:pt-[24px] pb-[24px] flex flex-col items-center md:flex-row md:items-start gap-[24px] md:gap-[32px] md:cursor-pointer"
								>
									<img
										src={`/images/oro/Institucional/${item.image}`}
										alt={item.name}
										className="w-[121px] h-[121px] md:w-[110px] md:h-[110px] rounded-full object-cover shrink-0"
									/>

									<div className="flex flex-col items-center md:items-start w-[271px] md:w-[322px]">
										<h3 className="w-[271px] md:w-[322px] font-spectral font-bold text-[#CA9A63] text-[24px] leading-[100%] text-center md:text-left">
											{item.name}
										</h3>

										<p className="mt-[16px] w-[271px] md:hidden font-mulish font-light text-[#FFFFFF] text-[14px] leading-[20px] whitespace-pre-line">
											{isOpen ? item.full : item.mobileShort}
										</p>

										<p className="hidden md:block mt-[16px] w-[322px] min-h-[100px] font-mulish font-light text-[#FFFFFF] text-[14px] leading-[20px]">
											{item.short}
										</p>

										<button
											type="button"
											onClick={(event) => {
												event.stopPropagation();
												toggleCard(index);
											}}
											className="mt-[20px] md:hidden flex items-center justify-center"
											aria-label={isOpen ? "Recolher texto" : "Expandir texto"}
										>
											<img
												src="/images/oro/Institucional/seta.png"
												alt=""
												className={`w-[58px] h-auto object-contain transition-transform duration-300 ${
													isOpen ? "rotate-180" : ""
												}`}
											/>
										</button>

										<button
											type="button"
											onClick={(event) => {
												event.stopPropagation();
												openPopup(index);
											}}
											className="hidden md:block mt-[16px] w-[58px] font-mulish font-bold italic text-[#CA9A63] text-[12px] leading-[100%] text-right"
										>
											Ler mais...
										</button>
									</div>
								</div>
							);
						})}
					</div>

					<img
						src="/images/oro/Institucional/logo_aqui_voce_pode_mais.png"
						alt="Aqui você pode mais"
						className="hidden md:block mt-[152px] w-[560px] h-auto"
					/>

					<img
						src="/images/oro/Institucional/Aqui_voce_pode_Mais_mobile.png"
						alt="Aqui você pode mais"
						className="block md:hidden mt-[56px] w-[203px] h-[195px] object-contain"
					/>
				</div>
			</div>

			{activePopupIndex !== null && (
				<div className="hidden md:flex fixed inset-0 z-50 flex-col items-center justify-center bg-[#001B1B]/80">
					<img
						src={testimonials[activePopupIndex].popupImage}
						alt={testimonials[activePopupIndex].name}
						className="w-[900px] max-w-[58vw] h-auto"
					/>

					<div className="mt-[24px] flex items-center justify-center gap-[32px]">
						<button
							type="button"
							onClick={goToPrevious}
							aria-label="Depoimento anterior"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							←
						</button>

						<button
							type="button"
							onClick={closePopup}
							aria-label="Fechar popup"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							×
						</button>

						<button
							type="button"
							onClick={goToNext}
							aria-label="Próximo depoimento"
							className="font-mulish text-[#FFFFFF] text-[42px] leading-none"
						>
							→
						</button>
					</div>
				</div>
			)}
		</section>
	);
}