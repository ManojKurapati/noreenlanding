import { useState } from "react";
import { 
  Briefcase, ShieldAlert, BadgeCheck, BrainCircuit, Scale, 
  FileText, RefreshCw, ClipboardList, GraduationCap, X, ChevronRight, Check
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  icon: any;
  accent: string;
}

export default function Services() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const servicesData: ServiceItem[] = [
    {
      id: "risk-management",
      title: "Risk Management",
      tagline: "Build a Culture of Risk Intelligence",
      description: "We help organizations design and implement integrated risk frameworks that align with strategic objectives and regulatory expectations.",
      capabilities: [
        "Enterprise Risk Management",
        "Risk Assessments",
        "Client & Vendor Due Diligence",
        "Third-Party Risk Management",
        "Risk Strategy & Operating Models",
        "Risk Oversight and Governance"
      ],
      icon: Briefcase,
      accent: "from-amber-500 to-orange-600"
    },
    {
      id: "tech-risk",
      title: "Technology Risk",
      tagline: "Secure Digital Transformation",
      description: "Technology innovation introduces new risks. We help organizations build robust technology risk capabilities that enable secure growth.",
      capabilities: [
        "Technology Risk Frameworks",
        "Digital Risk Assessments",
        "Control Design & Testing",
        "Product Risk Reviews",
        "Technology Governance"
      ],
      icon: ShieldAlert,
      accent: "from-teal-500 to-emerald-600"
    },
    {
      id: "quality-assurance",
      title: "Quality Assurance",
      tagline: "Strengthen Control Effectiveness",
      description: "We design quality management systems and provide independent assurance to improve processes and strengthen accountability.",
      capabilities: [
        "Quality Management Frameworks",
        "Control Testing",
        "Process Reviews",
        "Continuous Improvement Programs",
        "Independent Assurance"
      ],
      icon: BadgeCheck,
      accent: "from-sky-500 to-blue-600"
    },
    {
      id: "responsible-ai",
      title: "Responsible AI & AI Governance",
      tagline: "Build AI You Can Trust",
      description: "AI creates enormous opportunities—but it also introduces new ethical, regulatory and operational risks. We help organizations adopt AI responsibly through governance frameworks and practical controls.",
      capabilities: [
        "Responsible AI Strategy",
        "AI Governance Frameworks",
        "AI Risk Assessments",
        "Policy Development",
        "Vendor & Tool Evaluation",
        "Executive Advisory",
        "AI Workshops and Simulations"
      ],
      icon: BrainCircuit,
      accent: "from-purple-500 to-indigo-600"
    },
    {
      id: "compliance-ethics",
      title: "Compliance & Ethics",
      tagline: "Strengthening Integrity and Accountability",
      description: "Strong ethics and compliance programs build trust and protect organizations from regulatory and reputational risks.",
      capabilities: [
        "Ethics Frameworks",
        "Code of Conduct Development",
        "Compliance Programs",
        "Whistleblowing Mechanisms",
        "Investigation Support",
        "Remediation Tracking"
      ],
      icon: Scale,
      accent: "from-rose-500 to-red-600"
    },
    {
      id: "policy-development",
      title: "Policy & Procedure Development",
      tagline: "Turning Strategy into Action",
      description: "Clear policies and procedures provide the foundation for operational excellence and regulatory compliance. We help organizations create practical governance documents that support consistency and sound decision-making.",
      capabilities: [
        "Policy Framework Creation",
        "SOPs and Work Instructions",
        "Review and Refinement Cycles",
        "Regulatory Integration",
        "Operational Standard Mapping"
      ],
      icon: FileText,
      accent: "from-orange-500 to-amber-600"
    },
    {
      id: "transformation",
      title: "Risk & Compliance Transformation",
      tagline: "Modernize Risk and Compliance Functions",
      description: "We combine technology, processes and operating models to transform traditional risk functions into strategic business enablers.",
      capabilities: [
        "Digital Risk Transformation",
        "Compliance Transformation",
        "Process Automation",
        "GRC Technology Enablement",
        "Operating Model Design"
      ],
      icon: RefreshCw,
      accent: "from-emerald-500 to-teal-600"
    },
    {
      id: "internal-audit",
      title: "Internal Audit",
      tagline: "Independent Assurance with Strategic Insight",
      description: "We provide risk-based internal audit services that strengthen governance and support management oversight.",
      capabilities: [
        "Internal Audit Frameworks",
        "Independent Reviews",
        "Control Effectiveness Assessments",
        "Board and Management Reporting"
      ],
      icon: ClipboardList,
      accent: "from-blue-500 to-indigo-600"
    },
    {
      id: "training-culture",
      title: "Training & Culture",
      tagline: "Building Risk-Aware Organizations",
      description: "Sustainable governance begins with people. We help organizations foster strong risk cultures through targeted training and awareness programs.",
      capabilities: [
        "Risk Awareness Training",
        "Compliance Training",
        "Leadership Workshops",
        "Risk Culture Assessments",
        "Behavioural Programs"
      ],
      icon: GraduationCap,
      accent: "from-violet-500 to-purple-600"
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
    hidden: { opacity: 0, y: 35 },
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
    <section id="services" className="py-24 bg-slate-950/60 relative border-t border-slate-900">
      <div className="absolute top-1/4 left-10 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3 font-sans">
            Our Offerings
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mb-4">
            Custom Capabilities. Strategic Outcomes.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            We deliver actionable advisory and framework implementation across risk, compliance, assurance, and emerging technologies.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div 
          variants={gridContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {servicesData.map((service) => {
            const IconComp = service.icon;
            return (
              <motion.div
                key={service.id}
                onClick={() => setSelectedService(service)}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.2, ease: "easeOut" } }}
                className="bg-slate-900/30 border border-slate-900 rounded-2xl p-6 lg:p-8 hover:border-slate-800/80 hover:bg-slate-900/50 transition-colors duration-300 group cursor-pointer flex flex-col justify-between shadow-md hover:shadow-lg"
              >
                <div>
                  {/* Icon */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-tr ${service.accent} text-slate-950 mb-6 shadow-md group-hover:scale-105 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  
                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-200 mb-2 group-hover:text-slate-100 transition-colors font-display">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-teal-400 mb-4 tracking-wider uppercase">
                    {service.tagline}
                  </p>
                  
                  {/* Description */}
                  <p className="text-sm leading-relaxed text-slate-400 line-clamp-3">
                    {service.description}
                  </p>
                </div>
                
                {/* CTA Link */}
                <div className="mt-8 flex items-center gap-2 text-xs font-bold text-amber-500 uppercase tracking-wider group-hover:text-amber-400 transition-colors">
                  View Capabilities <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Slide-out capabilities drawer */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedService(null)}
              className="absolute inset-0 bg-slate-950/65 backdrop-blur-sm"
            />
            
            {/* Drawer content */}
            <motion.div 
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="relative w-full max-w-lg bg-slate-900 border-l border-slate-800 shadow-2xl h-full flex flex-col justify-between z-10"
            >
              <div>
                {/* Header */}
                <div className="p-6 border-b border-slate-800 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-tr ${selectedService.accent} text-slate-950`}>
                      <selectedService.icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100 font-display">{selectedService.title}</h3>
                      <p className="text-[10px] text-teal-400 font-semibold uppercase tracking-wider">{selectedService.tagline}</p>
                    </div>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-slate-400 hover:text-slate-100 p-2 rounded-lg hover:bg-slate-800 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                {/* Body */}
                <div className="p-6 overflow-y-auto space-y-6 max-h-[calc(100vh-200px)]">
                  <div className="space-y-2">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">Overview</h4>
                    <p className="text-slate-300 text-sm leading-relaxed">{selectedService.description}</p>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-xs font-semibold text-slate-400 uppercase tracking-widest font-sans">Specific Capabilities</h4>
                    <motion.ul 
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.05,
                            delayChildren: 0.1
                          }
                        }
                      }}
                      className="space-y-3"
                    >
                      {selectedService.capabilities.map((cap, i) => (
                        <motion.li 
                          key={i} 
                          variants={{
                            hidden: { opacity: 0, x: 20 },
                            visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
                          }}
                          className="flex items-start gap-3 bg-slate-950/40 border border-slate-800/40 rounded-xl p-3.5"
                        >
                          <div className="p-1 rounded bg-teal-500/10 text-teal-400 shrink-0">
                            <Check className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-slate-200 text-sm font-medium">{cap}</span>
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </div>
              
              {/* Action */}
              <div className="p-6 border-t border-slate-800 bg-slate-950/40 flex gap-3">
                <a href="#contact" onClick={() => setSelectedService(null)} className="w-full">
                  <Button className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold border-none py-3.5">
                    Discuss This Service
                  </Button>
                </a>
                <Button 
                  variant="outline" 
                  onClick={() => setSelectedService(null)}
                  className="border-slate-800 text-slate-300 hover:bg-slate-800"
                >
                  Close
                </Button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
