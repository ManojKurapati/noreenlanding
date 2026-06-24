import Navbar from "@/components/Navbar";
import { Hero } from "@/components/ui/animated-hero";
import About from "@/components/About";
import WhyRisk from "@/components/WhyRisk";
import Services from "@/components/Services";
import Compliance from "@/components/Compliance";
import Values from "@/components/Values";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import StarfieldBackground from "@/components/ui/StarfieldBackground";

function App() {
  return (
    <div className="relative min-h-screen bg-[#02040a] text-slate-100 flex flex-col font-sans select-none antialiased overflow-x-hidden">
      {/* Animated Starfield canvas background */}
      <StarfieldBackground />

      {/* Institutional radial glowing backdrops */}
      <div className="absolute top-0 left-0 right-0 h-[1000px] bg-gradient-to-b from-teal-500/[0.02] via-transparent to-transparent pointer-events-none z-0" />
      <div className="absolute top-[15%] left-[20%] w-[500px] h-[500px] bg-teal-500/[0.02] rounded-full blur-[130px] pointer-events-none z-0" />
      <div className="absolute top-[40%] right-[15%] w-[600px] h-[600px] bg-amber-500/[0.015] rounded-full blur-[140px] pointer-events-none z-0" />
      <div className="absolute bottom-[20%] left-[10%] w-[500px] h-[500px] bg-indigo-500/[0.015] rounded-full blur-[130px] pointer-events-none z-0" />
      
      {/* Floating navigation header */}
      <Navbar />

      {/* Main sections */}
      <main className="flex-grow z-10 pt-16 relative">
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
