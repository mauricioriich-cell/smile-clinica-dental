export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white py-8">
      <div className="mx-auto max-w-6xl px-6 text-center text-gray-500">
        <p className="font-semibold text-cyan-600">
          Smile Clínica Dental
        </p>

        <p className="mt-2">
          Esp. Mauricio Rico · Estomatología Pediátrica
        </p>

        <p className="mt-2 text-sm">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}