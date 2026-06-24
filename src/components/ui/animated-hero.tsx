import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, TrendingUp, ShieldCheck, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["resilient", "compliant", "audit-secure", "risk-mitigated", "future-ready"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const stats = [
    { value: "99.8%", label: "Regulatory Trust Index", icon: ShieldCheck, color: "text-teal-400" },
    { value: "AED 50B+", label: "Risk Assets Advised", icon: TrendingUp, color: "text-amber-500" },
    { value: "25+ Yrs", label: "Executive Leadership", icon: Award, color: "text-indigo-400" }
  ];

  return (
    <div className="w-full relative overflow-hidden py-16 lg:py-24">
      {/* Background Radial Glow overlays */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-teal-500/10 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-[350px] h-[350px] bg-amber-500/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex gap-8 items-center justify-center flex-col">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="secondary" size="sm" className="gap-2 bg-amber-500/10 border border-amber-500/20 text-amber-500 hover:bg-amber-500/15 transition-all duration-300 rounded-full px-4 py-1">
              Corporate Risk & Capital Governance <MoveRight className="w-4 h-4" />
            </Button>
          </motion.div>

          {/* Titles */}
          <div className="flex gap-4 flex-col items-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-4xl sm:text-5xl md:text-7xl max-w-4xl tracking-tighter text-center font-regular text-slate-100 font-display leading-[1.1]"
            >
              <span>Building enterprises that are</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center pb-2 pt-1 min-h-[60px] sm:min-h-[80px] md:min-h-[100px]">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold bg-gradient-to-r from-amber-400 via-teal-400 to-amber-300 bg-clip-text text-transparent capitalize"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50, damping: 15 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-base sm:text-lg md:text-xl leading-relaxed tracking-tight text-slate-400 max-w-2xl text-center"
            >
              FourteenSeven helps financial institutions and corporate enterprises strengthen governance, minimize systemic risk, ensure regulatory compliance, and deploy responsible AI models.
            </motion.p>
          </div>

          {/* Action buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center mt-2"
          >
            <a href="#contact" className="w-full sm:w-auto">
              <Button size="lg" className="w-full gap-2 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold border-none shadow-lg shadow-amber-500/10 transition-transform active:scale-95 duration-200">
                Talk to an Expert <MoveRight className="w-4 h-4" />
              </Button>
            </a>
            <a href="#services" className="w-full sm:w-auto">
              <Button size="lg" variant="outline" className="w-full gap-2 border-slate-800 hover:bg-slate-900/60 bg-slate-950/40 text-slate-300">
                Explore Services <PhoneCall className="w-4 h-4" />
              </Button>
            </a>
          </motion.div>

          {/* Trust Metrics / Stats Grid */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: {
                  staggerChildren: 0.1,
                  delayChildren: 0.6
                }
              }
            }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mt-12 pt-12 border-t border-slate-900/60"
          >
            {stats.map((stat, idx) => {
              const StatIcon = stat.icon;
              return (
                <motion.div
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } }
                  }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-slate-900/25 border border-slate-900/80 backdrop-blur-md rounded-2xl p-5 flex items-center gap-4 hover:border-slate-800 transition-colors cursor-default"
                >
                  <div className={`p-3 bg-slate-950/80 rounded-xl ${stat.color}`}>
                    <StatIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-slate-100 font-display tracking-tight">{stat.value}</div>
                    <div className="text-xs text-slate-400 font-medium tracking-wide uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export { Hero };
