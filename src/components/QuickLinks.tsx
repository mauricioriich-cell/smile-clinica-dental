"use client";

import { useState } from "react";

export default function QuickLinks() {
  const [copiado, setCopiado] = useState(false);

  const clabe = "012180015586948233";

  const copiarClabe = async () => {
    try {
      await navigator.clipboard.writeText(clabe);

      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="mx-auto max-w-5xl px-6 pb-20">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">

        {/* Ubicación */}

        <a
          href="https://maps.app.goo.gl/yXoqspEzf65fYWBn8"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="text-5xl">📍</div>

          <p className="mt-4 font-semibold">
            Ubicación
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Cómo llegar
          </p>

        </a>

        {/* BBVA */}

        <button
          onClick={copiarClabe}
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="text-5xl">💳</div>

          <p className="mt-4 font-semibold">
            BBVA
          </p>

          <p className="mt-3 rounded-xl bg-gray-100 px-3 py-2 font-mono text-sm tracking-wider text-gray-700 break-all">
            {clabe}
          </p>

          <div className="mt-4 rounded-full bg-cyan-600 py-2 text-sm font-semibold text-white">
            Copiar CLABE
          </div>

        </button>

        {/* Instagram */}

        <a
          href="https://www.instagram.com/smile.cdental"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-3xl bg-white p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="text-5xl">📸</div>

          <p className="mt-4 font-semibold">
            Instagram
          </p>

          <p className="mt-2 text-xs text-gray-500">
            Síguenos
          </p>

        </a>

      </div>

      {copiado && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-green-600 px-6 py-3 text-sm font-semibold text-white shadow-2xl">
          ✅ CLABE copiada correctamente
        </div>
      )}

    </section>
  );
}