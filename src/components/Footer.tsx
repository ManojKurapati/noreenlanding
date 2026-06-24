import { ShieldCheck } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-teal-500 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-slate-950" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-slate-200">FourteenSeven</span>
              <span className="text-[9px] tracking-wider text-slate-500 uppercase font-semibold">
                Risk & Governance Advisory
              </span>
            </div>
          </div>

          {/* Quick Links / UAE text */}
          <div className="text-center md:text-right space-y-2">
            <p className="text-xs text-slate-500">
              © {currentYear} FourteenSeven Advisory. All rights reserved.
            </p>
            <p className="text-[10px] text-slate-600">
              FourteenSeven is a registered advisory firm in the United Arab Emirates (UAE).
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
