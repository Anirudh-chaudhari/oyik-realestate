"use client";

import { motion } from "framer-motion";
import { Activity, ArrowRight, CheckCircle2, Phone, Play, Volume2 } from "lucide-react";
import Link from "next/link";

const sampleCalls = [
  {
    id: 1,
    title: "Inbound Property Inquiry",
    description: "AI answers questions about property availability and books a viewing",
    duration: "1:24",
    type: "inbound",
  },
  {
    id: 2,
    title: "Lead Qualification Call",
    description: "AI qualifies the caller and schedules a viewing appointment",
    duration: "2:15",
    type: "qualification",
  },
  {
    id: 3,
    title: "Follow-up Call",
    description: "AI follows up on a previous inquiry and confirms attendance",
    duration: "0:58",
    type: "followup",
  },
];

export default function VoiceServiceClient() {
  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden border-b border-border/50 bg-background pb-20 pt-32">
        <div className="pointer-events-none absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px]" />
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-semibold text-accent">
              Voice Agents - Inbound + Outbound
            </div>
            <h1 className="text-4xl font-display font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.6rem]">
              A human-sounding agent that <span className="text-gradient">never misses a call.</span>
            </h1>
            <p className="text-lg font-medium text-primary">
              Answer, qualify, and route serious prospects without phone bottlenecks.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for inbound call handling and speed-to-lead outbound follow-up when
              your team wants instant response without adding headcount.
            </p>
            <div className="mt-2 flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 font-semibold text-accent-foreground shadow-[0_16px_34px_-18px_rgba(67,56,202,0.45)] transition-all hover:bg-accent/90"
              >
                Request Voice Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative flex h-[400px] flex-col items-center justify-center overflow-hidden rounded-[2rem] border bg-card shadow-2xl glass-card">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-accent/5 to-transparent" />
            <div className="relative mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-accent/20 text-accent">
              <div className="absolute inset-0 rounded-full border border-accent opacity-50 animate-ping" />
              <Phone size={40} />
            </div>
            <h3 className="mb-2 text-2xl font-display font-semibold text-foreground">
              Oyik Assistant
            </h3>
            <p className="mb-8 flex items-center gap-2 font-mono text-accent animate-pulse">
              <Activity size={16} /> Listening...
            </p>
            <div className="w-full max-w-sm px-8">
              <p className="rounded-xl border border-border bg-background/50 p-4 text-center text-sm font-medium text-muted-foreground backdrop-blur-md">
                "Thanks for calling Apex Properties. I can see you&apos;re asking about
                the 3-bed in Chelsea. Would you like to book a viewing?"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-secondary py-24">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
            backgroundAttachment: "fixed",
          }}
        />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-display font-bold text-foreground sm:text-5xl">
              Hear the AI in Action
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Listen to real sample calls showing how naturally our AI handles
              property enquiries
            </p>
          </div>

          <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
            {sampleCalls.map((call) => (
              <div
                key={call.id}
                className="group relative rounded-3xl border border-border bg-white p-8 transition-all duration-500 hover:border-indigo-500/50 hover:shadow-xl"
              >
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative mb-6 flex h-20 w-20 cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-primary/30 bg-primary"
                >
                  <div className="absolute inset-0 animate-ping bg-indigo-400/20 opacity-0 group-hover:opacity-100" />
                  <Play className="ml-1 h-8 w-8 text-white" />
                </motion.button>

                <div className="mb-6 flex h-12 items-center gap-1">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="w-1 rounded-full bg-indigo-500/60"
                      animate={{
                        height: ["20%", "80%", "20%"],
                      }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        delay: i * 0.1,
                      }}
                    />
                  ))}
                </div>

                <h3 className="mb-2 text-xl font-bold text-foreground">{call.title}</h3>
                <p className="mb-4 text-sm text-muted-foreground">{call.description}</p>

                <div className="flex items-center gap-2 font-mono text-sm text-indigo-600">
                  <Volume2 className="h-4 w-4" />
                  {call.duration}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center gap-4 rounded-full bg-primary px-12 py-6 text-xl font-extrabold text-white shadow-lg transition-all duration-300 hover:scale-105 hover:bg-indigo-700 hover:shadow-xl"
            >
              <Phone className="h-6 w-6" />
              Book a Live Demo Call
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto grid max-w-6xl gap-16 px-4 md:grid-cols-2">
          <div>
            <h2 className="mb-8 text-3xl font-display font-bold text-foreground">
              Inbound call handling
            </h2>
            <div className="space-y-4">
              {[
                "Answers property and availability questions naturally",
                "Qualifies with your own scripted questions",
                "Suggests suitable listings based on preferences",
                "Captures contact details cleanly",
                "Books viewings into your calendar",
                "Transfers to sales when a human is needed",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="glass-card flex gap-4 rounded-xl border border-border/50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 text-3xl font-display font-bold text-foreground">
              Outbound speed-to-lead
            </h2>
            <div className="space-y-4">
              {[
                "Calls new leads right after form submission",
                "Qualifies quickly and politely",
                "Books viewings on the spot",
                "Updates your CRM and alerts the team",
                "Runs follow-up sequences to improve contact rates",
              ].map((feature, idx) => (
                <div
                  key={idx}
                  className="glass-card flex gap-4 rounded-xl border border-border/50 p-4"
                >
                  <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" />
                  <p className="text-sm text-foreground">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
