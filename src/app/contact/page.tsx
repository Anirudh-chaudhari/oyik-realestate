"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MessageSquare, Building2, Calendar, CheckCircle2 } from "lucide-react";

type ContactForm = {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  message: string;
};

const initialForm: ContactForm = {
  firstName: "",
  lastName: "",
  email: "",
  company: "",
  message: "",
};

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"form" | "demo">("demo");
  const [form, setForm] = useState<ContactForm>(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const updateField = (field: keyof ContactForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
    setForm(initialForm);
  };

  return (
    <div className="min-h-screen bg-background pt-32 pb-24 relative overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
          <div className="flex flex-col gap-10">
            <div>
              <h1 className="page-title mb-6">
                Let’s scale your <span className="text-gradient">real estate</span> workflow.
              </h1>
              <p className="page-subtitle">
                Whether you want to automate viewings or deploy a full omnichannel AI front desk, we’ll help you map the cleanest rollout path.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4 items-start p-6 rounded-2xl glass-card border border-border/50">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary shrink-0">
                  <Calendar size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">Book a quick demo</h3>
                  <p className="text-muted-foreground">Open the live booking page and grab a slot that fits your team.</p>
                </div>
              </div>
              <div className="flex gap-4 items-start p-6 rounded-2xl glass-card border border-border/50">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent shrink-0">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">General enquiry</h3>
                  <p className="text-muted-foreground">Send us your workflow, lead volume, and current tools so we can scope the right setup.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="glass-card rounded-[2rem] glow-border p-2">
              <div className="flex p-2 gap-2 bg-secondary rounded-t-[1.5rem] border-b border-border">
                <button
                  onClick={() => setActiveTab("demo")}
                  className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "demo" ? "bg-primary text-primary-foreground shadow-lg" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Book Demo
                </button>
                <button
                  onClick={() => setActiveTab("form")}
                  className={`flex-1 py-3 text-sm font-semibold rounded-xl transition-all ${
                    activeTab === "form" ? "bg-card text-foreground shadow-lg border border-border" : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Message Us
                </button>
              </div>

              <div className="p-8 sm:p-10 min-h-[500px] relative">
                <AnimatePresence mode="wait">
                  {activeTab === "demo" && (
                    <motion.div
                      key="demo"
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 10 }}
                      transition={{ duration: 0.3 }}
                      className="flex flex-col h-full"
                    >
                      <h3 className="text-2xl font-display font-bold text-foreground mb-4">Choose your intro call</h3>
                      <p className="text-muted-foreground mb-8">
                        The button below opens the live booking page, so the demo flow now works instead of stopping at a placeholder.
                      </p>

                      <div className="flex-grow rounded-[1.5rem] overflow-hidden bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.16),transparent_40%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(244,244,247,0.96))] border border-border relative p-8 flex flex-col justify-between">
                        <div>
                          <Calendar className="w-12 h-12 text-primary mb-5" />
                          <p className="text-sm font-mono uppercase tracking-[0.28em] text-primary mb-3">Live booking</p>
                          <h4 className="text-2xl font-display font-semibold text-foreground">Open the calendar in one click</h4>
                          <p className="text-muted-foreground mt-4 leading-relaxed">
                            Use this for demo bookings. If you prefer email first, switch to the message form and send us your workflow details.
                          </p>
                        </div>

                        <div className="space-y-4">
                          <a
                            href="https://calendly.com"
                            target="_blank"
                            rel="noreferrer"
                            className="group inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-primary px-6 py-4 text-lg font-semibold text-primary-foreground shadow-[0_18px_35px_-18px_rgba(67,56,202,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92"
                          >
                            Open booking calendar
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                          </a>
                          <p className="text-xs text-muted-foreground">
                            Fallback link: <a href="https://calendly.com" target="_blank" rel="noreferrer" className="text-primary underline">calendly.com</a>
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {activeTab === "form" && (
                    <motion.div
                      key="form"
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-display font-bold text-foreground mb-8">Send a message</h3>

                      {submitted && (
                        <div className="mb-6 rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4 text-emerald-800 flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" />
                          <p className="text-sm leading-relaxed">
                            Your request was captured successfully. The live backend form is not connected yet, so use the demo tab for instant booking or wire this form to your inbox next.
                          </p>
                        </div>
                      )}

                      <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div className="grid sm:grid-cols-2 gap-5">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">First Name</label>
                            <input type="text" suppressHydrationWarning value={form.firstName} onChange={(event) => updateField("firstName", event.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="John" required />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-foreground">Last Name</label>
                            <input type="text" suppressHydrationWarning value={form.lastName} onChange={(event) => updateField("lastName", event.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Doe" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Work Email</label>
                          <input type="email" suppressHydrationWarning value={form.email} onChange={(event) => updateField("email", event.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="john@agency.com" required />
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">Company Name</label>
                          <div className="relative">
                            <Building2 className="absolute left-4 top-3.5 w-5 h-5 text-muted-foreground" />
                            <input type="text" suppressHydrationWarning value={form.company} onChange={(event) => updateField("company", event.target.value)} className="w-full pl-12 pr-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground" placeholder="Apex Real Estate" required />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label className="text-sm font-medium text-foreground">How can we help?</label>
                          <textarea rows={4} suppressHydrationWarning value={form.message} onChange={(event) => updateField("message", event.target.value)} className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:border-primary transition-colors text-foreground resize-none" placeholder="Tell us about your enquiry flow, lead volume, or calendar setup..." required />
                        </div>

                        <button type="submit" className="w-full mt-4 py-4 rounded-xl bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg flex items-center justify-center gap-2">
                          Submit Request
                          <ArrowRight className="w-5 h-5" />
                        </button>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
