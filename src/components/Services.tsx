import ServiceCard from "./ServiceCard";
import { tratamientos } from "@/data/tratamientos";

export default function Services() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">

      <h2 className="mb-12 text-center text-4xl font-bold text-gray-800">
        Nuestros Servicios
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">

        {tratamientos.map((tratamiento) => (

          <ServiceCard
            key={tratamiento.id}
            emoji={tratamiento.emoji}
            title={tratamiento.nombre}
            description={tratamiento.descripcion}
            href={tratamiento.ruta}
          />

        ))}

      </div>

    </section>
  );
}