import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import VigilSection from "@/components/VigilSection";
import MedInsightSection from "@/components/MedInsightSection";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <VigilSection />
        <MedInsightSection />
        <Skills />
      </main>
    </>
  );
}