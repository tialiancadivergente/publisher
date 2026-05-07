import Image from "next/image";

const privacyPolicyTitle = "TERMO DE USO\nAEON LTDA";

const privacyPolicyContent = `
Estes Termos de Uso regem o acesso e utilização da página de inscrição disponibilizada pela AEON LTDA, pessoa jurídica de direito privado, inscrita no CNPJ n. 48.424.807/0001-88. 

Ao realizar seu cadastro na página de inscrição, fornecendo nome e endereço de e-mail, o usuário declara estar ciente e de acordo com as condições estabelecidas neste Termo de Uso. 


QUEM SOMOS

A AEON LTDA é uma empresa educacional que desenvolve conteúdos, treinamentos e eventos online voltados ao desenvolvimento pessoal e profissional, guiando pessoas em direção a uma vida mais autêntica e significativa. 

DO EVENTO ONLINE

A página de captura tem como finalidade realizar a inscrição de interessados em participar de evento online gratuito promovido pela AEON LTDA, transmitido por meio da plataforma YouTube. 

Ao se cadastrar, o usuário poderá receber: 

a) Link de acesso ao evento online; 

b) Informações sobre datas, horários e conteúdos relacionados ao evento; 

c) Comunicados, lembretes e materiais complementares enviados por e-mail ou outros canais informados pela AEON LTDA. 

DOS DADOS CADASTRAIS  

Para participar do evento, será solicitado o preenchimento de informações básicas, incluindo: 

a) Nome; 

b) Endereço de e-mail. 

O usuário declara que os dados fornecidos são verdadeiros, completos e atualizados, sendo de sua exclusiva responsabilidade qualquer informação incorreta ou desatualizada. 

DOS DADOS SOCIOECONÔMICOS 

Para participação no evento online, o usuário deverá fornecer informações cadastrais e socioeconômicas solicitadas na página de inscrição. 

O usuário declara que todas as informações fornecidas são verdadeiras, completas e atualizadas, sendo de sua exclusiva responsabilidade qualquer dado incorreto, falso ou desatualizado. 

As informações coletadas poderão ser utilizadas para fins estatísticos, personalização da experiência do usuário, segmentação de comunicação, desenvolvimento de conteúdos, ações comerciais e melhoria dos serviços e eventos oferecidos pela AEON LTDA, sempre em conformidade com a legislação vigente aplicável, especialmente a Lei Geral de Proteção de Dados Pessoais (LGPD – Lei nº 13.709/2018). 

DA RESPONSABILIDADE DO USUÁRIO  

O usuário compromete-se a utilizar a página de inscrição e os conteúdos disponibilizados de forma ética, responsável e em conformidade com a legislação aplicável. 

É vedado qualquer uso indevido da plataforma, tentativa de fraude, envio de informações falsas ou prática de atos que possam comprometer o funcionamento da página ou do evento. 

DA DISPONIBILIDADE DO EVENTO  

A AEON LTDA poderá alterar datas, horários, formatos ou condições do evento online, bem como cancelar ou interromper sua disponibilização, sem necessidade de aviso prévio, em casos de necessidade operacional, técnica ou estratégica. 

DA PROPRIEDADE INTELECTUAL  

Todos os conteúdos disponibilizados durante o evento, incluindo vídeos, apresentações, materiais escritos, marcas, logotipos e demais elementos relacionados, são protegidos pela legislação de propriedade intelectual, sendo vedada sua reprodução, distribuição ou utilização sem autorização prévia da AEON LTDA. 

ACEITE DOS TERMOS  

O aceite destes Termos de Uso ocorrerá no momento do preenchimento do cadastro na página de captura, oportunidade em que o usuário declara ter lido, compreendido e concordado integralmente com as disposições aqui previstas. 

AEON LTDA

Av Paulista, 1471 – Edifício Barão de Cristina – CJ 1110

Bela Vista – São Paulo/SP

CEP: 01311-927 – Brasil
`;

export default function PoliticasDePrivacidadePage() {
  const paragraphs = privacyPolicyContent
    .trim()
    .split("\n\n")
    .map((paragraph) => paragraph.trim());
  const isSectionTitle = (text: string) =>
    /^[A-ZÀ-ÖØ-Ý0-9\s-]+$/.test(text) && text.length > 4;

  return (
    <main className="min-h-screen bg-white px-6 py-12 text-black md:px-8">
      <article className="mx-auto w-full max-w-4xl">
        <Image
          src="/images/logo-doc.png"
          alt="Logo Aliança Divergente"
          width={250}
          height={32}
          className="mb-12"
        />
        <h1 className="font-spectral text-base font-bold leading-8 text-black/90 md:text-lg mb-6 whitespace-pre-line">
          {privacyPolicyTitle}
        </h1>

        <div className="font-spectral text-base leading-8 text-black/90 md:text-lg">
          {paragraphs.map((paragraph) =>
            isSectionTitle(paragraph) ? (
              <h2
                key={paragraph}
                className="pb-0 pt-8 font-semibold leading-4 first:pt-0"
              >
                {paragraph}
              </h2>
            ) : (
              <p className="mb-0" key={paragraph}>
                {paragraph}
              </p>
            )
          )}
        </div>
      </article>
    </main>
  );
}
