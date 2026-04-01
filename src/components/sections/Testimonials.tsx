"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    initials: "AP",
    name: "Amara Patel",
    company: "Meridian Quay Homes",
    quote:
      "Before Oyik, our negotiators were losing warm enquiries overnight. Now the AI handles property questions, qualifies applicants, and fills the diary with viewing slots before the team even logs in.",
  },
  {
    initials: "JR",
    name: "Jonah Reed",
    company: "Northvale Lettings",
    quote:
      "The reminder flows alone changed our week. Tenants confirm faster, fewer people miss appointments, and our team spends more time closing the right applicants instead of chasing no-shows.",
  },
  {
    initials: "LM",
    name: "Lila Morgan",
    company: "Park & Mason Estates",
    quote:
      "We wanted something polished enough for premium listings and practical enough for daily operations. The voice agent now picks up instantly, qualifies clearly, and hands over only the serious leads.",
  },
  {
    initials: "ET",
    name: "Ethan Torres",
    company: "Haven Crest Property",
    quote:
      "Our inbox was a bottleneck. Oyik now drafts the first response, sorts intent, and pushes prospects into the next step without the awkward lag that usually kills momentum in lettings.",
  },
  {
    initials: "SK",
    name: "Sana Kapoor",
    company: "Blue Arch Residential",
    quote:
      "The AI avatar content gave us a consistent listing presence without asking every agent to film. It feels like we finally have one modern system connecting marketing, enquiries, and viewings.",
  },
  {
    initials: "DM",
    name: "Dylan Mercer",
    company: "Oakline Urban Living",
    quote:
      "What impressed us most was the handoff quality. Leads arrive to the team already qualified, already briefed, and already warm, which makes every conversation feel more efficient from minute one.",
  },
];

export default function Testimonials() {
  const marqueeTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="relative overflow-hidden bg-background py-24">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-24 bg-gradient-to-r from-background via-background/85 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-24 bg-gradient-to-l from-background via-background/85 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-display font-semibold leading-[0.98] tracking-[-0.03em] text-foreground sm:text-5xl">
            Built for busy teams.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Operators, letting managers, and founders use Oyik to make response speed feel premium again.
          </p>
        </div>
      </div>

      <div className="relative z-10 md:hidden">
        <div className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 pb-2 sm:px-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="min-h-[320px] w-[84vw] max-w-[22rem] shrink-0 snap-center rounded-[2rem] border border-border/80 bg-white/88 p-6 shadow-[0_20px_50px_-28px_rgba(63,55,184,0.24)] backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 font-semibold text-primary">
                  {item.initials}
                </div>
                <Quote className="h-10 w-10 text-primary/20" />
              </div>

              <p className="text-base font-medium leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>

              <div className="mt-8 border-t border-border/70 pt-5">
                <p className="font-display text-lg font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-[11px] font-mono uppercase tracking-[0.22em] text-primary">{item.company}</p>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="relative z-10 hidden overflow-hidden md:block">
        <motion.div
          className="flex gap-6 px-6 lg:px-10"
          animate={{ x: [0, -1720] }}
          transition={{ repeat: Infinity, duration: 34, ease: "linear" }}
        >
          {marqueeTestimonials.map((item, index) => (
            <article
              key={`${item.name}-${index}`}
              className="group min-h-[360px] w-[360px] shrink-0 rounded-[2rem] border border-border/80 bg-white/88 p-8 shadow-[0_20px_50px_-28px_rgba(63,55,184,0.24)] backdrop-blur-xl"
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-primary/15 bg-primary/10 font-semibold text-primary">
                  {item.initials}
                </div>
                <Quote className="h-10 w-10 text-primary/20 transition-transform duration-300 group-hover:-translate-y-1" />
              </div>

              <p className="text-lg font-medium leading-relaxed text-foreground">&ldquo;{item.quote}&rdquo;</p>

              <div className="mt-8 border-t border-border/70 pt-5">
                <p className="font-display text-xl font-semibold text-foreground">{item.name}</p>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.26em] text-primary">{item.company}</p>
              </div>
            </article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
