import { ShieldAlert, BookOpen, Layers, HeartHandshake, CheckSquare } from "lucide-react";
import { motion } from "framer-motion";

export default function Compliance() {
  const steps = [
    { text: "Identifying precise regulatory obligations", icon: ShieldAlert },
    { text: "Aligning operations with ISO 37301 standards", icon: BookOpen },
    { text: "Improving compliance operating models", icon: Layers },
    { text: "Embedding positive compliance cultures", icon: HeartHandshake },
    { text: "Enhancing leadership & management oversight", icon: CheckSquare }
  ];

  const stepsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1
      }
    }
  };

  const stepItem = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section className="py-24 bg-slate-950/40 border-t border-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="bg-gradient-to-r from-slate-900 to-slate-950 border border-slate-900 rounded-3xl p-8 lg:p-12 relative overflow-hidden shadow-xl"
        >
          {/* Subtle Decorative Elements */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Title / Description */}
            <div className="lg:col-span-5 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block font-sans">
                Regulatory Compliance
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-100 font-display">
                Navigate Complexity with Confidence
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Modern business environments demand a proactive, compliance-first approach. We align compliance efforts to mitigate structural risks and enable sustainable growth.
              </p>
              <div className="pt-2 text-xs font-semibold text-slate-300 border-l-2 border-teal-500 pl-4 font-sans">
                Our solutions are custom-tailored to industry-specific local UAE regulations and global compliance standards.
              </div>
            </div>

            {/* Steps list */}
            <motion.div 
              variants={stepsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {steps.map((step, idx) => {
                const IconComp = step.icon;
                return (
                  <motion.div 
                    key={idx} 
                    variants={stepItem}
                    whileHover={{ y: -4, x: 2, transition: { duration: 0.2 } }}
                    className="flex gap-3 bg-slate-900/60 border border-slate-800/40 rounded-2xl p-4 hover:border-slate-800/80 transition-colors duration-300 shadow-sm cursor-default"
                  >
                    <div className="p-2.5 rounded-xl bg-slate-950 text-teal-400 shrink-0">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-slate-200 text-sm font-semibold leading-snug self-center">
                      {step.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
