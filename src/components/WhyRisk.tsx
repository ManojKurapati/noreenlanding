import { Shield, TrendingUp, Key, HelpCircle, CheckSquare, Zap } from "lucide-react";

export default function WhyRisk() {
  const benefits = [
    { text: "Make better strategic decisions", icon: Shield },
    { text: "Strengthen stakeholder trust", icon: Key },
    { text: "Improve operational resilience", icon: Zap },
    { text: "Navigate regulatory complexity", icon: HelpCircle },
    { text: "Protect reputation and brand value", icon: CheckSquare },
    { text: "Unlock sustainable growth opportunities", icon: TrendingUp }
  ];

  return (
    <section id="why-risk" className="py-24 bg-slate-950/20 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Text and context */}
          <div className="lg:col-span-6 space-y-6">
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
          </div>

          {/* Key Benefits Grid */}
          <div className="lg:col-span-6 bg-slate-900/30 border border-slate-900 rounded-3xl p-8 lg:p-10 relative">
            <div className="absolute top-0 right-0 p-6 opacity-[0.02]">
              <Shield className="w-48 h-48 text-slate-100" />
            </div>
            
            <h3 className="text-lg font-semibold text-slate-200 mb-6">
              Strategic Value of Modern Risk Governance
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => {
                const IconComp = benefit.icon;
                return (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="p-2 rounded-lg bg-slate-800 text-teal-400 mt-0.5 shrink-0">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <span className="text-slate-300 text-sm font-medium leading-tight">
                      {benefit.text}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
