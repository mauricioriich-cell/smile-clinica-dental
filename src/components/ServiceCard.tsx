import Link from "next/link";

type Props = {
  emoji: string;
  title: string;
  description: string;
  href: string;
};

export default function ServiceCard({
  emoji,
  title,
  description,
  href,
}: Props) {
  return (
    <Link href={href}>
      <div className="rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer">

        <div className="text-5xl">
          {emoji}
        </div>

        <h3 className="mt-5 text-2xl font-bold text-cyan-600">
          {title}
        </h3>

        <p className="mt-4 text-gray-600">
          {description}
        </p>

        <p className="mt-6 font-semibold text-cyan-600">
          Ver más →
        </p>

      </div>
    </Link>
  );
}