import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/About";
import WhyRisk from "@/components/WhyRisk";
import Services from "@/components/Services";
import Compliance from "@/components/Compliance";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function App() {
  return (
    <div className="relative min-h-screen bg-[#050811] text-slate-100 flex flex-col font-sans select-none antialiased">
      {/* Background radial overlays */}
      <div className="absolute top-0 left-0 right-0 h-[600px] bg-gradient-to-b from-teal-500/[0.03] to-transparent pointer-events-none z-0" />
      
      {/* Floating navigation header */}
      <Navbar />

      {/* Main sections */}
      <main className="flex-grow z-10 pt-16">
        <Hero />
        <About />
        <WhyRisk />
        <Services />
        <Compliance />
        <Values />
        <Contact />
      </main>

      {/* Corporate footer */}
      <Footer />
    </div>
  );
}

export default App;
