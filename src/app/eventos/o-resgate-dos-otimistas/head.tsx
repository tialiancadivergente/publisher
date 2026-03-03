const courseJsonLd = {
  "@context": "https://schema.org",
  "@type": "Course",
  name: "O Resgate dos Otimistas - Diagnóstico de Dependência Emocional",
  description:
    "Faça seu diagnóstico de dependência emocional gratuito com Elton Euler e descubra como aumentar seu nível de permissão.",
  provider: {
    "@type": "Organization",
    name: "Aliança Divergente",
    url: "https://www.aliancadivergente.com.br",
  },
  hasCourseInstance: {
    "@type": "CourseInstance",
    courseMode: "Online",
    courseWorkload: "PT2H",
  },
  offers: {
    "@type": "Offer",
    category: "Free",
    price: "0.00",
    priceCurrency: "BRL",
  },
} as const;

export default function Head() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(courseJsonLd) }}
      />
    </>
  );
}

