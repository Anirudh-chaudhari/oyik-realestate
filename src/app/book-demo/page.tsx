import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CalendarCheck2, MessageSquareMore, PhoneCall } from "lucide-react";

export const metadata: Metadata = {
  title: "Book Demo",
  description:
    "Book a live oyik.realestate.ai demo for your property team and see voice, chat, booking, and handoff flows in action.",
};

const demoPoints = [
  {
    icon: PhoneCall,
    title: "Voice and call flows",
    description: "Hear how inbound, outbound, viewing, and maintenance conversations are handled end to end.",
  },
  {
    icon: MessageSquareMore,
    title: "Chat and lead capture",
    description: "See live property responses, qualification logic, and smooth website handoff experiences.",
  },
  {
    icon: CalendarCheck2,
    title: "Booking and follow-up",
    description: "Walk through calendar sync, confirmations, reminders, and CRM-ready notes for your team.",
  },
];

export default function BookDemoPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#f6f8ff_0%,#eef3ff_100%)] pb-24 pt-32 text-slate-950">
      <div className="absolute left-[-10%] top-[-10%] h-[28rem] w-[28rem] rounded-full bg-indigo-200/40 blur-[120px]" />
      <div className="absolute bottom-[-12%] right-[-10%] h-[30rem] w-[30rem] rounded-full bg-sky-200/40 blur-[120px]" />

      <div className="container relative mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-5xl rounded-[2.6rem] border border-white/70 bg-white/82 p-8 shadow-[0_40px_100px_-50px_rgba(15,23,42,0.3)] backdrop-blur-2xl sm:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">
                Book demo
              </p>
              <h1 className="mt-5 max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.04em] text-slate-950 sm:text-5xl lg:text-[4.2rem]">
                See the full AI property desk experience in one focused session.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
                We will walk through the exact flows your team cares about most: website chat,
                voice agents, viewing coordination, follow-up automation, and the handoff back to staff.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-22px_rgba(79,70,229,0.65)] transition-all duration-300 hover:-translate-y-0.5"
                >
                  Open booking calendar
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </a>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-primary"
                >
                  Message us first
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-500">
                Demo booking currently opens the live calendar link in a new tab.
              </p>
            </div>

            <div className="rounded-[2.2rem] border border-slate-200 bg-slate-950 p-6 text-white shadow-[0_32px_80px_-48px_rgba(15,23,42,0.8)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-indigo-200">
                In the session
              </p>

              <div className="mt-6 space-y-4">
                {demoPoints.map((item, index) => (
                  <div
                    key={item.title}
                    className="rounded-[1.6rem] border border-white/10 bg-white/6 p-4"
                  >
                    <div className="flex items-start gap-4">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-indigo-100">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-3">
                          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/42">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h2 className="text-lg font-medium text-white">{item.title}</h2>
                        </div>
                        <p className="mt-2 text-sm leading-relaxed text-white/68">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-[1.6rem] border border-white/10 bg-[linear-gradient(135deg,rgba(99,102,241,0.18),rgba(255,255,255,0.08))] p-4">
                <p className="text-sm font-medium text-white">Best fit for:</p>
                <p className="mt-2 text-sm leading-relaxed text-white/68">
                  Agencies, brokerages, leasing teams, developers, and operators who want a premium
                  AI front desk without turning the experience into a cheap chatbot demo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
