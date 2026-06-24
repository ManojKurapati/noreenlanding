import React, { useState } from "react";
import { Mail, ShieldCheck, MapPin, Send, AlertCircle, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    service: "",
    message: ""
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const servicesList = [
    "Risk Management",
    "Technology Risk",
    "Quality Assurance",
    "Responsible AI & AI Governance",
    "Compliance & Ethics",
    "Policy & Procedure Development",
    "Risk & Compliance Transformation",
    "Internal Audit",
    "Training & Culture",
    "General Advisory / Other Inquiry"
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear validation error when user types
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    
    if (!formData.service) newErrors.service = "Please select a service of interest";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", company: "", service: "", message: "" });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-950/40 border-t border-slate-900 relative">
      <div className="absolute bottom-10 left-1/4 w-[300px] h-[300px] bg-teal-500/5 rounded-full blur-[125px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Info Column */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 space-y-8"
          >
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-teal-400 block mb-3 font-sans">
                Get In Touch
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-100 font-display mb-4">
                Let's Build Trust and Resilience, Together
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Connect with our expert advisors to strengthen your risk profiles, configure responsible AI parameters, and establish regulatory compliance models.
              </p>
            </div>

            <div className="space-y-6 pt-4">
              <motion.div 
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-4 group/contact cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover/contact:text-slate-950 group-hover/contact:bg-teal-450 transition-colors duration-305">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Office Location</h4>
                  <p className="text-sm text-slate-400">Dubai, United Arab Emirates (UAE)</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-4 group/contact cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-amber-500 group-hover/contact:text-slate-950 group-hover/contact:bg-amber-500 transition-colors duration-305">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Email Address</h4>
                  <p className="text-sm text-slate-400">contact@fourteenseven.ae</p>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ x: 4, transition: { duration: 0.2 } }}
                className="flex gap-4 group/contact cursor-default"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-teal-400 group-hover/contact:text-slate-950 group-hover/contact:bg-teal-500 transition-colors duration-305">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-300">Coverage</h4>
                  <p className="text-sm text-slate-400">Professional Services & Financial Institutions</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Form Column */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <div className="bg-slate-900/40 border border-slate-900 rounded-3xl p-8 relative overflow-hidden shadow-xl min-h-[500px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success-message"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="text-center py-8 space-y-4"
                  >
                    <div className="w-16 h-16 bg-teal-500/10 text-teal-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-slate-100 font-display">Consultation Scheduled!</h3>
                    <p className="text-slate-400 text-sm max-w-sm mx-auto leading-relaxed">
                      Thank you. We have received your request. A FourteenSeven senior advisory expert will reach out to you within one business day.
                    </p>
                    <div className="pt-6">
                      <Button 
                        onClick={() => setIsSuccess(false)}
                        className="bg-teal-600 hover:bg-teal-700 text-slate-950 font-semibold"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.form 
                    key="contact-form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <h3 className="text-xl font-bold text-slate-200 mb-2 font-display">Schedule a Consultation</h3>
                    
                    {/* Name and Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
                          Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border ${errors.name ? "border-rose-500" : "border-slate-800 focus:border-teal-500"} rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-teal-500/30`}
                          placeholder="John Doe"
                        />
                        <AnimatePresence>
                          {errors.name && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-rose-500 flex items-center gap-1.5 pt-1 overflow-hidden"
                            >
                              <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border ${errors.email ? "border-rose-500" : "border-slate-800 focus:border-teal-500"} rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-teal-500/30`}
                          placeholder="john@company.com"
                        />
                        <AnimatePresence>
                          {errors.email && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-rose-500 flex items-center gap-1.5 pt-1 overflow-hidden"
                            >
                              <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Company and Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="company" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
                          Company Name
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full bg-slate-950 border border-slate-800 focus:border-teal-500 rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-teal-500/30"
                          placeholder="Enterprise Inc."
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
                          Service of Interest <span className="text-rose-500">*</span>
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleInputChange}
                          className={`w-full bg-slate-950 border ${errors.service ? "border-rose-500" : "border-slate-800 focus:border-teal-500"} rounded-xl px-4 py-3 text-slate-300 text-sm focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-teal-500/30`}
                        >
                          <option value="">-- Select Service --</option>
                          {servicesList.map((svc, i) => (
                            <option key={i} value={svc}>{svc}</option>
                          ))}
                        </select>
                        <AnimatePresence>
                          {errors.service && (
                            <motion.p 
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              className="text-xs text-rose-500 flex items-center gap-1.5 pt-1 overflow-hidden"
                            >
                              <AlertCircle className="w-3.5 h-3.5" /> {errors.service}
                            </motion.p>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-xs font-semibold text-slate-400 uppercase tracking-wider block font-sans">
                        Describe your objectives or challenges <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className={`w-full bg-slate-950 border ${errors.message ? "border-rose-500" : "border-slate-800 focus:border-teal-500"} rounded-xl px-4 py-3 text-slate-100 text-sm focus:outline-none transition-all duration-300 focus:ring-1 focus:ring-teal-500/30 resize-none`}
                        placeholder="We need to build a Responsible AI governance framework and evaluate our vendor risks..."
                      />
                      <AnimatePresence>
                        {errors.message && (
                          <motion.p 
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-xs text-rose-500 flex items-center gap-1.5 pt-1 overflow-hidden"
                          >
                            <AlertCircle className="w-3.5 h-3.5" /> {errors.message}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Submit */}
                    <div className="pt-2">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-bold py-3.5 rounded-xl shadow-lg border-none flex items-center justify-center gap-2 transition-all duration-300 hover:translate-y-[-1px] active:translate-y-[0px] disabled:opacity-50"
                      >
                        {isSubmitting ? "Submitting Request..." : "Submit Consultation Request"} <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
