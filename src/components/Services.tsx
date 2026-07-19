import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <ServiceCard
          emoji="👶"
          title="Odontología Infantil"
          description="Atención especializada para bebés, niños y adolescentes."
          href="/odontologia-infantil"
        />

        <ServiceCard
          emoji="✨"
          title="Odontología Preventiva"
          description="Prevención de caries mediante revisiones, limpieza y aplicación de flúor."
          href="/prevencion"
        />

        <ServiceCard
          emoji="😁"
          title="Ortopedia Maxilar"
          description="Guiamos el crecimiento y desarrollo adecuado de los maxilares."
          href="/ortopedia"
        />

      </div>

    </section>
  );
}