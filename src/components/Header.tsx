export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-gray-100">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <h1 className="text-xl font-bold text-cyan-600">
          🦷 Smile
        </h1>

        <button
          className="rounded-xl p-2 transition hover:bg-cyan-50"
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </div>
    </header>
  );
}