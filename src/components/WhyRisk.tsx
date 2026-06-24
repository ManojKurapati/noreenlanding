import { Shield, TrendingUp, Key, HelpCircle, CheckSquare, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function WhyRisk() {
  const benefits = [
    { text: "Make better strategic decisions", icon: Shield },
    { text: "Strengthen stakeholder trust", icon: Key },
    { text: "Improve operational resilience", icon: Zap },
    { text: "Navigate regulatory complexity", icon: HelpCircle },
    { text: "Protect reputation and brand value", icon: CheckSquare },
    { text: "Unlock sustainable growth opportunities", icon: TrendingUp }
  ];

  const benefitsContainer = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const benefitItem = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <section id="why-risk" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and context */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block">
              Confidence & Growth
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display">
              Growth Requires Confidence
            </h2>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              As businesses become increasingly interconnected and technology-driven, risk management can no longer be confined to a single department.
            </p>
            <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
              Effective risk management enables organizations to pivot quickly, capture new market opportunities with confidence, and establish lasting regulatory trust.
            </p>
            <p className="text-slate-300 font-medium">
              At FourteenSeven, we help organizations embed risk intelligence into the fabric of their business.
            </p>
          </motion.div>

          {/* Key Benefits Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 bg-slate-900/20 backdrop-blur-md border border-slate-900/80 rounded-3xl p-8 lg:p-10 relative overflow-hidden shadow-xl shadow-slate-950/20 hover:border-amber-500/20 transition-colors duration-500"
          >
            <div className="absolute top-0 right-0 p-6 opacity-[0.02] pointer-events-none">
              <Shield className="w-48 h-48 text-slate-100" />
            </div>
            
            <h3 className="text-lg font-semibold text-slate-200 mb-6 font-display">
              Strategic Value of Modern Risk Governance
            </h3>
            
            <motion.div 
              variants={benefitsContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {benefits.map((benefit, index) => {
                const IconComp = benefit.icon;
                return (
                  <motion.div 
                    key={index} 
                    variants={benefitItem}
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                    className="flex gap-3 items-start group/benefit cursor-default"
                  >
                    <div className="p-2 rounded-lg bg-slate-850 text-teal-400 mt-0.5 shrink-0 group-hover/benefit:bg-teal-500 group-hover/benefit:text-slate-950 transition-colors duration-300">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-tight group-hover/benefit:text-slate-200 transition-colors">
                      {benefit.text}
                    </span>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
