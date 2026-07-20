export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-cyan-50 to-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-16 text-center">

        {/* Logo */}

        <div className="mb-6 flex h-28 w-28 items-center justify-center rounded-full bg-cyan-600 text-5xl text-white shadow-xl">
          🦷
        </div>

        {/* Nombre */}

        <h1 className="text-4xl font-extrabold text-gray-900 md:text-6xl">
          Smile Clínica Dental
        </h1>

        {/* Doctor */}

        <p className="mt-4 text-2xl font-bold text-cyan-700">
          Esp. Mauricio Rico
        </p>

        {/* Especialidad */}

        <p className="mt-3 text-lg text-gray-600">
          Especialista en Estomatología Pediátrica
        </p>

        {/* Botón */}

        <a
          href="https://wa.me/525585795780?text=Hola,%20me%20gustaría%20agendar%20una%20cita."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-2xl bg-cyan-600 px-10 py-4 text-lg font-bold text-white shadow-xl transition-all duration-300 hover:scale-105 hover:bg-cyan-700"
        >
          📅 Agendar cita por WhatsApp
        </a>

      </div>
    </section>
  );
}