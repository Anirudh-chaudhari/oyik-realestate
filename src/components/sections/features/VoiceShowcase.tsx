"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Database,
  House,
  Mail,
  PhoneCall,
} from "lucide-react";

const voiceSequence = [
  {
    eyebrow: "Call routing",
    title: "Dedicated flows for sales, lettings, and support",
    description:
      "Every call path feels specific to the enquiry instead of forcing sales, rentals, and maintenance into the same script.",
  },
  {
    eyebrow: "Live matching",
    title: "Property search happens during the conversation",
    description:
      "The agent can check area, budget, beds, timing, and parking while the caller is still engaged on the line.",
  },
  {
    eyebrow: "Booking + handoff",
    title: "Viewings, reminders, and CRM notes move instantly",
    description:
      "Qualified leads get booked, confirmed, and handed to the team with context already attached.",
  },
];

const voiceHighlights = [
  {
    icon: House,
    title: "Live property matching",
    copy: "Suggestions stay relevant to the caller's budget, area, and move-in timing.",
  },
  {
    icon: Mail,
    title: "Follow-up already triggered",
    copy: "Confirmation emails, reminder flows, and handoff notes can fire the moment the call ends.",
  },
];

const voiceScenarios = [
  "Sales and lettings enquiries",
  "Viewing coordination and callbacks",
  "Landlord updates and maintenance triage",
];

export default function VoiceShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0d2358] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%),linear-gradient(180deg,#0f2e72_0%,#0b2253_52%,#08193d_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200">
              Flagship model
            </p>
            <h2 className="max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.1rem]">
              Voice agents that handle the first conversation like a trained property desk.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-blue-100/82 sm:text-xl">
              Built for real estate sales, lettings, rentals, landlord updates, and
              maintenance triage, with live matching, booking logic, reminders, and
              CRM logging folded into one polished front-line voice layer.
            </p>

            <div className="mt-8 rounded-[2.2rem] border border-white/12 bg-white/[0.07] p-5 backdrop-blur-sm">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                Conversation orchestration
              </p>
              <div className="mt-6 space-y-4">
                {voiceSequence.map((item, index) => (
                  <div
                    key={item.title}
                    className="flex gap-4 rounded-[1.7rem] border border-white/10 bg-[#0a1b45]/46 p-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-white/12 bg-white/10 text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200/80">
                        {item.eyebrow}
                      </p>
                      <h3 className="mt-2 text-[1.35rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-blue-100/72">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative lg:pt-10 xl:pt-14"
          >
            <div className="absolute -left-6 top-10 h-44 w-44 rounded-full bg-indigo-400/18 blur-3xl" />
            <div className="absolute bottom-4 right-0 h-48 w-48 rounded-full bg-sky-400/14 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2.8rem] border border-white/12 bg-[linear-gradient(160deg,rgba(255,255,255,0.09),rgba(255,255,255,0.04))] p-5 shadow-[0_40px_120px_-56px_rgba(7,11,23,0.65)] backdrop-blur-xl sm:p-6">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.08),transparent_28%)]" />

              <div className="relative z-10 grid gap-4">
                <div className="rounded-[2.2rem] border border-white/12 bg-[#091735]/78 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                        Live call desk
                      </p>
                      <p className="mt-2 text-sm text-blue-100/72">
                        Premium front-line voice automation for property teams.
                      </p>
                    </div>
                    <div className="h-3 w-3 rounded-full bg-emerald-300 shadow-[0_0_18px_rgba(110,231,183,0.85)]" />
                  </div>

                  <h3 className="mt-7 max-w-lg text-[2rem] font-display font-medium leading-[0.98] tracking-[-0.03em] text-white">
                    Every property enquiry stays qualified, booked, and moving.
                  </h3>

                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {voiceHighlights.map((item) => (
                      <div
                        key={item.title}
                        className="rounded-[1.6rem] border border-white/10 bg-white/8 p-4"
                      >
                        <div className="flex items-start gap-3">
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div>
                            <p className="text-base font-medium text-white">{item.title}</p>
                            <p className="mt-1 text-sm leading-relaxed text-blue-100/70">
                              {item.copy}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
                  <div className="space-y-4">
                    <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">
                        Coverage
                      </p>
                      <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:gap-3">
                        <span className="font-display text-6xl leading-none tracking-[-0.05em] text-white">
                          24/7
                        </span>
                        <span className="max-w-[14rem] pb-1 text-sm leading-relaxed text-blue-100/72 sm:max-w-[10rem]">
                          Inbound and outbound property conversations without queue gaps.
                        </span>
                      </div>
                    </div>

                    <div className="rounded-[2rem] border border-white/12 bg-white/8 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">
                        Booking speed
                      </p>
                      <div className="mt-4 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:gap-3">
                        <span className="font-display text-6xl leading-none tracking-[-0.05em] text-white">
                          Live
                        </span>
                        <span className="max-w-[14rem] pb-1 text-sm leading-relaxed text-blue-100/72 sm:max-w-[10rem]">
                          Calendar checks and confirmations while the caller is still talking.
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-[2rem] border border-white/12 bg-[linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.06))] p-4">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-200">
                      Handled scenarios
                    </p>
                    <div className="mt-4 space-y-4">
                      {voiceScenarios.map((item) => (
                        <div key={item} className="flex items-start gap-3 text-sm text-white/78">
                          <span className="mt-1.5 h-2.5 w-2.5 rounded-full bg-indigo-200" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-5 rounded-[1.7rem] border border-white/10 bg-[#091735]/65 p-4">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-indigo-200">
                        Core actions
                      </p>
                      <div className="mt-3 flex flex-wrap gap-2">
                        {["Calendar sync", "CRM log", "Reminder flow", "Urgent handoff"].map(
                          (item) => (
                            <span
                              key={item}
                              className="rounded-full border border-white/12 bg-white/8 px-3 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-white/75"
                            >
                              {item}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid gap-3 sm:grid-cols-3">
                  {[
                    {
                      icon: PhoneCall,
                      label: "Front desk ready",
                    },
                    {
                      icon: CalendarCheck2,
                      label: "Viewing coordination",
                    },
                    {
                      icon: Database,
                      label: "CRM-ready handoff",
                    },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 rounded-[1.6rem] border border-white/10 bg-white/6 px-4 py-4"
                    >
                      <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                        <item.icon className="h-4 w-4" />
                      </div>
                      <p className="text-sm font-medium text-white/86">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
