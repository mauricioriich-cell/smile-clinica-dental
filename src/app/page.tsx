import Hero from "@/components/Hero";
import SearchBar from "@/components/SearchBar";
import QuickLinks from "@/components/QuickLinks";
import Services from "@/components/Services";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-cyan-50 via-white to-white">
      <Hero />

      <SearchBar />

      <QuickLinks />

      <Services />

      <Footer />
    </main>
  );
}