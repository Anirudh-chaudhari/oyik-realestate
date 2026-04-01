"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, PhoneCall, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

const rotatingWords = ["marketing.", "viewings.", "lettings.", "reminders.", "support."];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % rotatingWords.length);
    }, 2400);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      {/* ─── Layer 1 (BOTTOM): Full-screen auto-playing native video ─── */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="h-full w-full object-cover"
        >
          <source src="/media/videos/hero.mp4" type="video/mp4" />
        </video>
      </div>

      {/* ─── Layer 2: Dark overlay so the text stays readable ─── */}
      <div className="absolute inset-0 z-10 bg-[linear-gradient(180deg,rgba(5,5,25,0.55)_0%,rgba(5,5,25,0.35)_60%,rgba(5,5,25,0.65)_100%)]" />

      {/* ─── Layer 3 (TOP): Hero text content, centered above the video ─── */}
      <div className="relative z-20 flex min-h-[100svh] flex-col items-center justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:px-8">
        <div className="mx-auto max-w-[1120px] text-center">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mb-7 inline-flex max-w-full items-center gap-3 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-md sm:mb-8 sm:px-5 sm:py-2.5"
          >
            <Sparkles className="h-4 w-4 text-indigo-300" />
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-indigo-200 sm:text-[11px] sm:tracking-[0.28em]">
              Luxury AI operating layer for real estate
            </span>
          </motion.div>

          {/* Hero Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto max-w-5xl text-[2.5rem] font-display font-medium leading-[0.92] tracking-[-0.045em] text-white sm:text-[4.3rem] lg:text-[7rem]"
          >
            AI employees for{" "}
            <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-sky-300 bg-clip-text text-transparent">
              realestate{" "}
            </span>
            <span className="relative inline-flex min-w-[1ch] justify-start align-baseline text-white">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 18, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -18, filter: "blur(8px)" }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute left-0 top-0"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
              <span className="invisible">{rotatingWords[rotatingWords.length - 1]}</span>
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-7 max-w-[56rem] text-[0.98rem] leading-relaxed text-white/72 sm:mt-8 sm:text-[1.12rem] lg:text-[1.18rem]"
          >
            oyik.realestate.ai helps real estate agencies, brokerages, property managers, and letting businesses automate website chat, voice calls, lead qualification, live property matching, viewing bookings, reminders, maintenance intake, CRM updates, and AI marketing with a faster and more premium client experience.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex w-full items-center justify-center gap-3 rounded-full bg-[linear-gradient(135deg,#3f37b8,#5a54eb)] px-8 py-4 text-base font-semibold text-white shadow-[0_22px_44px_-24px_rgba(63,55,184,0.72)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_52px_-24px_rgba(63,55,184,0.75)] sm:w-auto"
            >
              Book a demo
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-0.5">
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>

            <Link
              href="/services"
              className="inline-flex w-full items-center justify-center gap-3 rounded-full border border-white/25 bg-white/10 px-8 py-4 text-base font-medium text-white backdrop-blur-md transition-all duration-300 hover:bg-white/20 sm:w-auto"
            >
              Explore services
            </Link>
          </motion.div>

          {/* 3 feature stat cards */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="mt-12 grid w-full gap-4 lg:mt-14 lg:grid-cols-3"
          >
            <div className="rounded-[1.9rem] border border-white/15 bg-white/8 p-5 text-left backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
                <PhoneCall className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-indigo-300">Voice + chat</p>
              <p className="mt-3 text-base leading-relaxed text-white/65">
                One premium AI layer for property enquiries, website leads, inbound calls, outbound follow-up, and fast qualification.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-white/15 bg-white/8 p-5 text-left backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
                <CalendarCheck2 className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-indigo-300">Booking automation</p>
              <p className="mt-3 text-base leading-relaxed text-white/65">
                Live calendar checks, viewing bookings, confirmations, reminders, and follow-up flows that keep intent moving.
              </p>
            </div>

            <div className="rounded-[1.9rem] border border-white/15 bg-white/8 p-5 text-left backdrop-blur-xl">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-300">
                <Sparkles className="h-5 w-5" />
              </div>
              <p className="text-sm font-medium uppercase tracking-[0.22em] text-indigo-300">Marketing + support</p>
              <p className="mt-3 text-base leading-relaxed text-white/65">
                AI marketing, email automation, reminders, and maintenance intake designed for high-end real estate operations.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
