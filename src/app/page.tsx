import Hero from "@/components/Hero";
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white via-cyan-50 to-white">
      <Hero />
      <QuickLinks />
      <Services />
    </main>
  );
}