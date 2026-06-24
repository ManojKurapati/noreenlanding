import { Shield, Users, Zap, Scale, Award, HeartHandshake } from "lucide-react";
import { motion } from "framer-motion";

export default function Values() {
  const values = [
    {
      title: "Integrity",
      description: "We uphold the highest standards of ethics, professionalism, and confidentiality.",
      icon: Shield,
      accent: "border-amber-500/20 text-amber-500 hover:bg-amber-500/[0.02]"
    },
    {
      title: "Partnership",
      description: "We work as an extension of our clients' teams to create lasting relationships.",
      icon: HeartHandshake,
      accent: "border-teal-500/20 text-teal-400 hover:bg-teal-500/[0.02]"
    },
    {
      title: "Innovation",
      description: "We leverage AI, automation and emerging technologies to modernize governance.",
      icon: Zap,
      accent: "border-indigo-500/20 text-indigo-400 hover:bg-indigo-500/[0.02]"
    },
    {
      title: "Agility",
      description: "Flexible and scalable solutions for evolving business environments.",
      icon: Scale,
      accent: "border-rose-500/20 text-rose-400 hover:bg-rose-500/[0.02]"
    },
    {
      title: "Excellence",
      description: "Delivering measurable outcomes through deep expertise and continuous improvement.",
      icon: Award,
      accent: "border-sky-500/20 text-sky-400 hover:bg-sky-500/[0.02]"
    },
    {
      title: "Empowerment",
      description: "Building internal capabilities that enable sustainable growth.",
      icon: Users,
      accent: "border-emerald-500/20 text-emerald-400 hover:bg-emerald-500/[0.02]"
    }
  ];

  const gridContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const
      }
    }
  };

  return (
    <section id="values" className="py-24 bg-slate-950/20 border-t border-slate-900 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-amber-500 block mb-3 font-sans">
            Our Foundation
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mb-4">
            Our Core Values
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            These guiding principles form the foundation of our firm, driving the impact we deliver to our partners.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className={`bg-slate-900/10 backdrop-blur-md border ${val.accent} rounded-2xl p-6 lg:p-8 hover:border-amber-500/20 hover:bg-slate-900/25 transition-all duration-300 group cursor-default shadow-lg shadow-slate-950/15`}
              >
                <div className="flex gap-4 items-start">
                  <div className="p-3 bg-slate-950 rounded-xl group-hover:scale-105 transition-transform duration-300">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-200 mb-2 group-hover:text-slate-100 transition-colors font-display">
                      {val.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-400">
                      {val.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
