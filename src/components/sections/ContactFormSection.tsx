"use client";

import { motion } from "framer-motion";
import { Mail, Phone, Send } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ContactFormSection() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    router.prefetch("/thank-you");
  }, [router]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const thankYouUrl = new URL("/thank-you", window.location.origin).toString();
    const newTab = window.open("", "_blank");

    if (newTab) {
      newTab.opener = null;
      newTab.location.replace(thankYouUrl);
    } else {
      window.location.assign(thankYouUrl);
    }

    setFormData({ name: "", email: "", phone: "", message: "" });
    window.setTimeout(() => setIsSubmitting(false), 150);
  };

  return (
    <section className="relative overflow-hidden bg-secondary py-24">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[60vw] w-[60vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
          backgroundAttachment: "fixed",
        }}
      />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="rounded-[2.5rem] border border-border/60 bg-background/95 p-8 shadow-2xl shadow-primary/10 backdrop-blur-sm sm:p-12">
            <div className="text-center mb-10">
              <h2 className="mb-3 text-3xl font-display font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-4xl">
                Get in touch
              </h2>
              <p className="text-muted-foreground text-lg">
                Have questions? We&apos;d love to hear from you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                    placeholder="you@example.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-foreground">
                  Phone (optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50"
                  placeholder="+44 20 1234 5678"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="w-full px-5 py-4 bg-secondary/50 border border-border rounded-2xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-foreground placeholder:text-muted-foreground/50 resize-none"
                  placeholder="Tell us about your project or inquiry..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-primary via-primary to-indigo-600 px-8 py-5 text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/40 disabled:opacity-70"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <>
                    Send Message
                    <Send className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </>
                )}
              </motion.button>
            </form>

            <div className="mt-10 pt-8 border-t border-border/60">
              <p className="text-center text-sm text-muted-foreground mb-6">Or reach out directly</p>
              <div className="flex flex-wrap justify-center gap-6">
                <a
                  href="tel:+447352328646"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">+44 7352 328646</span>
                </a>
                <a
                  href="mailto:hello@oyik.ai"
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium">Hello@oyik.ai</span>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
