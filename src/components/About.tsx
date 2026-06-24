import { CheckCircle2, Award, Users, Cpu, Target, Globe } from "lucide-react";

export default function About() {
  const differentiators = [
    {
      title: "25+ Years Experience",
      description: "Deep-rooted industry expertise across leading professional services and financial institutions.",
      icon: Award,
      iconColor: "text-amber-500 bg-amber-500/10"
    },
    {
      title: "Deep Expertise",
      description: "Comprehensive coverage across modern risk management, compliance, and governance frameworks.",
      icon: Users,
      iconColor: "text-teal-400 bg-teal-400/10"
    },
    {
      title: "Hands-on Model",
      description: "We work as extensions of your team, delivering practical operational solutions, not just slide decks.",
      icon: CheckCircle2,
      iconColor: "text-emerald-400 bg-emerald-400/10"
    },
    {
      title: "AI & Tech Driven",
      description: "Pioneering responsible AI frameworks and leveraging modern automation to scale governance capabilities.",
      icon: Cpu,
      iconColor: "text-indigo-400 bg-indigo-400/10"
    },
    {
      title: "Tailored Frameworks",
      description: "Custom-built solutions meticulously aligned with your specific business goals and risk appetite.",
      icon: Target,
      iconColor: "text-rose-400 bg-rose-400/10"
    },
    {
      title: "Global Standards, Local Context",
      description: "Combining localized UAE regulatory compliance with international global best practices.",
      icon: Globe,
      iconColor: "text-sky-400 bg-sky-400/10"
    }
  ];

  return (
    <section id="about" className="py-24 bg-slate-950/40 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          <div className="lg:col-span-5">
            <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display">
              Trusted Advisors for Modern Risk and Governance
            </h2>
          </div>
          <div className="lg:col-span-7 space-y-6 text-slate-400 text-base sm:text-lg leading-relaxed">
            <p>
              <strong className="text-slate-200">FourteenSeven</strong> is a UAE-based advisory firm helping organizations build robust risk, compliance, governance, and assurance capabilities.
            </p>
            <p>
              We partner with leadership teams to design practical frameworks, strengthen controls, and implement sustainable operating models that support growth, resilience, and regulatory confidence.
            </p>
            <p>
              Unlike traditional consultants, we go beyond presentations. We work alongside our clients to deliver practical solutions that create lasting impact.
            </p>
          </div>
        </div>

        {/* What Sets Us Apart */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-slate-100 mb-2">
              What Sets Us Apart
            </h3>
            <p className="text-slate-400 max-w-xl mx-auto">
              Our unique approach combines decades of practical governance expertise with technology-enabled operating models.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {differentiators.map((diff, index) => {
              const IconComp = diff.icon;
              return (
                <div
                  key={index}
                  className="bg-slate-900/40 border border-slate-900 rounded-2xl p-6 hover:border-slate-800/80 hover:bg-slate-900/60 transition-all duration-300 group"
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${diff.iconColor} group-hover:scale-110 transition-transform duration-300`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h4 className="text-lg font-semibold text-slate-200 mb-2 group-hover:text-slate-100 transition-colors">
                    {diff.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {diff.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
