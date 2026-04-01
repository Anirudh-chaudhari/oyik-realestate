"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, CheckCircle, Mail, MessageSquare, Phone } from "lucide-react";

export default function ThankYou() {
  return (
    <div className="flex min-h-[100svh] items-center justify-center bg-[#02050f] px-4 py-8 sm:p-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
        className="w-full max-w-lg text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.12, type: "spring", stiffness: 240, damping: 18 }}
          className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-sky-400 shadow-2xl sm:h-24 sm:w-24"
        >
          <CheckCircle className="h-10 w-10 text-white sm:h-12 sm:w-12" />
        </motion.div>

        <h1 className="mb-4 text-[2.4rem] font-display font-bold text-white sm:text-4xl">
          Thank You!
        </h1>

        <p className="mb-8 text-base text-slate-300 sm:text-lg">
          Your message has been received. Our team will get back to you within 24 hours.
        </p>

        <div className="mb-8 rounded-3xl border border-white/10 bg-white/5 p-5 sm:p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-300">
            What happens next?
          </h3>
          <div className="space-y-3 text-left">
            {[
              "We'll review your requirements",
              "Schedule a personalized demo call",
              "Create a custom automation plan for your business"
            ].map((step, idx) => (
              <div key={idx} className="flex items-center gap-3 text-slate-300">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-bold">
                  {idx + 1}
                </span>
                <span>{step}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-indigo-300">
            Connect with us
          </h3>
          <div className="flex justify-center gap-4">
            <Link href="https://wa.me/447352328646" target="_blank" className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500/20 text-green-400 transition-colors hover:bg-green-500/30">
              <MessageSquare className="h-5 w-5" />
            </Link>
            <Link href="mailto:hello@oyik.ai" className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-500/20 text-blue-400 transition-colors hover:bg-blue-500/30">
              <Mail className="h-5 w-5" />
            </Link>
            <Link href="tel:+447352328646" className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-500/20 text-violet-300 transition-colors hover:bg-violet-500/30">
              <Phone className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-white transition-colors hover:bg-white/20"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Website
        </Link>
      </motion.div>
    </div>
  );
}
