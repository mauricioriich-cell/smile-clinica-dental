import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-12 text-center">

        {/* Logo */}

        <Image
          src="/images/logo.png"
          alt="Smile Clínica Dental"
          width={320}
          height={320}
          priority
          className="mb-6 h-auto w-64 md:w-80 lg:w-96"
        />

        {/* Nombre */}

        <h2 className="text-3xl font-bold text-cyan-700 md:text-4xl">
          Esp. Mauricio Rico
        </h2>

        {/* Especialidad */}

        <p className="mt-3 text-lg text-gray-600">
          Especialista en Estomatología Pediátrica
        </p>

        {/* Botón principal */}

        <a
          href="https://wa.me/525585795780?text=Hola,%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-2xl bg-cyan-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
        >
          📅 Agendar cita por WhatsApp
        </a>

      </div>
    </section>
  );
}