import Image from "next/image";

export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-14">
      <div className="flex flex-col items-center text-center">

        <Image
          src="/images/logo.png"
          alt="Smile Clínica Dental"
          width={220}
          height={220}
          priority
          className="drop-shadow-xl"
        />

        <h1 className="mt-6 text-5xl md:text-6xl font-extrabold text-gray-800">
          Smile Clínica Dental
        </h1>

        <p className="mt-4 text-2xl font-semibold text-cyan-600">
          Esp. Mauricio Rico
        </p>

        <p className="mt-3 text-lg text-gray-500">
          Especialista en Estomatología Pediátrica
        </p>

        <a
          href="https://wa.me/525585795780"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 rounded-full bg-cyan-600 px-10 py-4 text-lg font-semibold text-white shadow-xl transition duration-300 hover:scale-105 hover:bg-cyan-700 hover:shadow-2xl"
        >
          📅 Agendar cita por WhatsApp
        </a>

      </div>
    </section>
  );
}