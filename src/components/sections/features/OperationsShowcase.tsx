"use client";

import { motion } from "framer-motion";
import {
  CalendarCheck2,
  Database,
  MessageSquareMore,
  PhoneCall,
  Send,
  Wrench,
} from "lucide-react";

const operationsItems = [
  {
    icon: MessageSquareMore,
    title: "Smarter lead capture",
    description:
      "Answers listing questions, shares live property details, and keeps every website or social conversation moving toward a real next step.",
  },
  {
    icon: PhoneCall,
    title: "24/7 call coverage",
    description:
      "Handles inbound calls, qualifies prospects, and hands urgent or high-value leads to the right team member without delay.",
  },
  {
    icon: CalendarCheck2,
    title: "Viewing automation",
    description:
      "Books viewings, sends confirmations, checks calendars, and reduces no-shows before the appointment becomes a problem.",
  },
  {
    icon: Send,
    title: "Inbox acceleration",
    description:
      "Drafts fast, polished replies for enquiries, follow-ups, booking details, and document requests across busy shared inboxes.",
  },
  {
    icon: Wrench,
    title: "Maintenance triage built in",
    description:
      "Captures maintenance issues, logs the details, and routes urgent or non-urgent requests into the right workflow without messy back-and-forth.",
  },
  {
    icon: Database,
    title: "One unified AI desk",
    description:
      "Connects chat, voice, reminders, maintenance, booking, and handoff logic into one operating layer built for property teams.",
  },
];

export default function OperationsShowcase() {
  return (
    <section className="relative overflow-hidden bg-[#0d2358] py-24 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.28),transparent_32%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.16),transparent_24%),linear-gradient(180deg,#0f2e72_0%,#0b2253_52%,#08193d_100%)]" />
      <div className="absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)] [background-size:90px_90px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-5xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-200">
              Real estate AI operations
            </p>
            <h2 className="mx-auto max-w-4xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-white sm:text-5xl lg:text-[4.25rem]">
              Add an AI assistant layer to your agency workflow.
            </h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-blue-100/85 sm:text-xl">
              Cover enquiries, phone calls, email follow-up, reminders, and listing
              content with one unified AI setup built for property teams.
            </p>
          </motion.div>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-[2rem] border border-white/12 bg-white/10 md:grid-cols-3">
          {operationsItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.65,
                delay: index * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group bg-white/4 p-8 backdrop-blur-sm transition-colors duration-300 hover:bg-white/8"
            >
              <div className="mb-8 w-full border-t border-white/16 pt-6" />
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10 text-indigo-100 ring-1 ring-white/15">
                <item.icon className="h-5 w-5" />
              </div>
              <h3 className="text-[1.65rem] font-display font-medium leading-none tracking-[-0.02em] text-white">
                {item.title}
              </h3>
              <p className="mt-3 max-w-sm text-base leading-relaxed text-blue-100/80">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
