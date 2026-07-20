"use client";

import { useState } from "react";
import Link from "next/link";
import { tratamientos } from "@/data/tratamientos";

export default function SearchBar() {
  const [busqueda, setBusqueda] = useState("");

  const resultados = tratamientos.filter((tratamiento) =>
    tratamiento.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="mx-auto mb-12 max-w-3xl">
      <input
        type="text"
        placeholder="🔍 Buscar tratamiento..."
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
        className="w-full rounded-2xl border border-gray-300 p-4 text-lg shadow-sm focus:border-cyan-500 focus:outline-none"
      />

      {busqueda && (
        <div className="mt-4 overflow-hidden rounded-2xl bg-white shadow-lg">
          {resultados.length > 0 ? (
            resultados.map((tratamiento) => (
              <Link
                key={tratamiento.id}
                href={tratamiento.ruta}
                className="block border-b p-4 transition hover:bg-cyan-50"
              >
                <h3 className="font-bold text-cyan-700">
                  {tratamiento.nombre}
                </h3>

                <p className="text-gray-500">
                  {tratamiento.descripcion}
                </p>
              </Link>
            ))
          ) : (
            <p className="p-4 text-gray-500">
              No se encontraron tratamientos.
            </p>
          )}
        </div>
      )}
    </div>
  );
}