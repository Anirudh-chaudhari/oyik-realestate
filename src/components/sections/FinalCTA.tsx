"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-secondary py-24 sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vw] w-[80vw] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/5 blur-[120px]" />
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
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-border bg-background p-6 text-center shadow-2xl shadow-primary/10 sm:rounded-[40px] sm:p-12 lg:p-20"
        >
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />

          <h2 className="relative z-10 mb-6 text-[2.5rem] font-display font-semibold leading-[0.96] tracking-[-0.035em] text-foreground sm:mb-8 sm:text-5xl md:text-[4.5rem]">
            Want viewings booked while you&apos;re showing properties?
          </h2>

          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-lg font-light leading-snug text-muted-foreground sm:mb-12 sm:text-2xl">
            Book a demo and we&apos;ll map your exact flow from enquiry to confirmed viewing in one call.
          </p>

          <div className="relative z-10 flex flex-col items-center gap-6">
            <Link
              href="/contact"
              className="group flex w-full items-center justify-center gap-4 rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground shadow-xl shadow-primary/30 transition-all duration-300 hover:scale-[1.01] hover:bg-primary/90 hover:shadow-2xl hover:shadow-primary/40 sm:w-auto sm:px-12 sm:py-6 sm:text-xl"
            >
              Book a demo
              <ArrowRight className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>

            <div className="flex items-center gap-3 text-muted-foreground">
              <Calendar className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium tracking-wide">
                Typical setup: 7-14 days <span className="opacity-80">(depending on integrations)</span>.
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
