"use client";

export default function QuickLinks() {
  const copiarClabe = async () => {
    const clabe = "012180015586948233";

    try {
      await navigator.clipboard.writeText(clabe);
      alert("✅ CLABE copiada al portapapeles");
    } catch (error) {
      alert("No fue posible copiar la CLABE.");
    }
  };

  return (
    <section className="max-w-5xl mx-auto px-6 pb-20">
      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">

        <a
          href="https://wa.me/525585795780"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="text-4xl">💬</div>
          <p className="mt-3 font-semibold">WhatsApp</p>
        </a>

        <a
          href="https://maps.app.goo.gl/yXoqspEzf65fYWBn8"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="text-4xl">📍</div>
          <p className="mt-3 font-semibold">Ubicación</p>
        </a>

        <button
          onClick={copiarClabe}
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="text-4xl">💳</div>

          <p className="mt-3 font-semibold">
            BBVA
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Copiar CLABE
          </p>
        </button>

        <a
          href="https://www.instagram.com/smile.cdental"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl"
        >
          <div className="text-4xl">📸</div>
          <p className="mt-3 font-semibold">Instagram</p>
        </a>

      </div>
    </section>
  );
}