"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, CalendarCheck2, Database, House, MessageSquareMore, Send, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const chatbotFeatures = [
  {
    icon: House,
    title: "Live listing display",
    description:
      "Show real property cards, pricing, and imagery inside the chat instead of plain text replies.",
  },
  {
    icon: CalendarCheck2,
    title: "Viewings booked in-chat",
    description:
      "Offer time slots, confirm appointments, and move qualified visitors to a booked next step.",
  },
  {
    icon: Database,
    title: "CRM-ready lead context",
    description:
      "Store property interest, contact details, and qualification answers before the team steps in.",
  },
  {
    icon: Send,
    title: "Follow-up already moving",
    description:
      "Trigger email confirmations, reminders, and internal handoff actions the moment intent is clear.",
  },
];

const chatListings = [
  {
    title: "Dockside Tower",
    location: "Canary Wharf",
    price: "GBP 2,780 pcm",
    image: "/media/listings/dockside-tower.jpg",
    meta: "3 bed | 2 bath | parking",
  },
  {
    title: "Skyline Penthouse",
    location: "Nine Elms",
    price: "GBP 4,950 pcm",
    image: "/media/listings/night-penthouse.jpg",
    meta: "2 bed | terrace | concierge",
  },
  {
    title: "Harbour Lounge",
    location: "Toronto Waterfront",
    price: "CAD 3,650 pcm",
    image: "/media/listings/canary-wharf-lounge.jpg",
    meta: "2 bed | furnished | gym",
  },
  {
    title: "Glass Facade Residence",
    location: "Downtown Core",
    price: "CAD 4,200 pcm",
    image: "/media/listings/glass-facade-residence.jpg",
    meta: "3 bed | skyline views | valet",
  },
  {
    title: "Lakeview Suite",
    location: "Midtown Toronto",
    price: "CAD 2,980 pcm",
    image: "/media/listings/toronto-bedroom.jpg",
    meta: "1 bed | designer finish | parking",
  },
];

export default function ChatbotShowcase() {
  const [isChatPreviewOpen, setIsChatPreviewOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const n8nChatUrl = process.env.NEXT_PUBLIC_N8N_CHAT_URL?.trim();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isChatPreviewOpen) {
      document.body.style.overflow = "";
      return;
    }

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsChatPreviewOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleEscape);
    };
  }, [isChatPreviewOpen]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfcff_0%,#f7f8fd_46%,#f4f6fb_100%)] py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(63,55,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(63,55,184,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex items-center justify-center lg:-translate-y-8 lg:self-center lg:py-10 xl:-translate-y-10 xl:py-14"
          >
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-indigo-300/18 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-sky-200/25 blur-3xl" />

            <div className="relative w-full max-w-[40rem] overflow-hidden rounded-[2.6rem] border border-white/80 bg-white/84 p-5 shadow-[0_34px_90px_-46px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-6 lg:mx-auto lg:max-w-[40rem] xl:max-w-[41rem]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(99,102,241,0.12),transparent_34%),linear-gradient(180deg,rgba(255,255,255,0.95),rgba(246,248,255,0.9))]" />

              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
                    Website chatbot showcase
                  </div>
                  <div className="rounded-full border border-indigo-100 bg-indigo-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary">
                    Live property sync
                  </div>
                </div>

                <div className="mt-5 rounded-[2rem] border border-slate-200 bg-slate-950 p-4 text-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.8)] sm:p-5">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-300" />
                    <span className="h-3 w-3 rounded-full bg-amber-300" />
                    <span className="h-3 w-3 rounded-full bg-emerald-300" />
                  </div>

                  <div className="space-y-4">
                    <div className="max-w-[88%] rounded-[1.35rem] rounded-bl-sm bg-white/10 px-4 py-3 text-sm leading-relaxed text-white/92">
                      I need a premium rental with parking, concierge, and viewings this week.
                    </div>
                    <div className="ml-auto max-w-[84%] rounded-[1.35rem] rounded-br-sm bg-[linear-gradient(135deg,#eef1ff,#ffffff)] px-4 py-3 text-sm leading-relaxed text-slate-700">
                      I found five matching options and I can hold a viewing slot while you compare them.
                    </div>
                  </div>

                  <div className="mt-4 overflow-hidden pb-1">
                    <div className="grid auto-cols-[188px] grid-flow-col gap-3 sm:auto-cols-[196px]">
                      {chatListings.map((listing) => (
                        <div
                          key={listing.title}
                          className="w-[188px] shrink-0 overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/6 sm:w-[196px]"
                        >
                          <div className="relative h-28 w-full overflow-hidden sm:h-32">
                            <Image
                              src={listing.image}
                              alt={listing.title}
                              fill
                              className="object-cover"
                              sizes="196px"
                            />
                          </div>
                          <div className="p-3.5">
                            <p className="text-sm font-medium text-white">{listing.title}</p>
                            <p className="mt-1 text-xs uppercase tracking-[0.18em] text-white/55">
                              {listing.location}
                            </p>
                            <p className="mt-2.5 text-sm text-indigo-100">{listing.price}</p>
                            <p className="mt-1 text-xs text-white/62">{listing.meta}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1.35rem] border border-white/10 bg-white/6 px-4 py-3.5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-sm font-medium text-white">Recommended next step</p>
                        <p className="mt-1 text-xs text-white/62">Thursday 11:30 AM held for 30 minutes</p>
                      </div>
                      <div className="rounded-full bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-900">
                        Ready
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="lg:py-6"
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
              Flagship model
            </p>
            <h2 className="max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[4.2rem]">
              A website chatbot that feels like a concierge, not a widget.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              Designed for premium real estate websites that need instant replies,
              live property previews, booking logic, CRM capture, and smooth follow-up
              without making the brand feel robotic or crowded.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/book-demo"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-22px_rgba(79,70,229,0.65)] transition-all duration-300 hover:-translate-y-0.5"
              >
                Book demo
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-1">
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </Link>
              <button
                type="button"
                onClick={() => setIsChatPreviewOpen((current) => !current)}
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-indigo-200 hover:text-primary"
              >
                {isChatPreviewOpen ? "Hide modern chatbot" : "Open modern chatbot"}
                <MessageSquareMore className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {chatbotFeatures.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-white/80 bg-white/76 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.2)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-50 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[1.45rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <motion.button
                type="button"
                onClick={() => setIsChatPreviewOpen(true)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                animate={{
                  boxShadow: [
                    "0 18px 38px -22px rgba(79,70,229,0.34)",
                    "0 24px 54px -24px rgba(79,70,229,0.54)",
                    "0 18px 38px -22px rgba(79,70,229,0.34)",
                  ],
                }}
                transition={{
                  duration: 2.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="group relative inline-flex w-full justify-center overflow-hidden rounded-full border border-indigo-300/40 bg-[linear-gradient(135deg,#4f46e5,#4338ca)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:w-auto sm:min-w-[20rem] sm:px-7 sm:tracking-[0.22em]"
              >
                <motion.span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-y-0 left-[-35%] w-[34%] skew-x-[-24deg] bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.6),transparent)]"
                  animate={{ x: ["0%", "340%"] }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut", repeatDelay: 0.45 }}
                />
                <span className="relative z-10 flex w-full items-center justify-center gap-3">
                  Open modern chatbot
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-1">
                    <MessageSquareMore className="h-4 w-4" />
                  </span>
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>

      {isMounted
        ? createPortal(
            <AnimatePresence>
              {isChatPreviewOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6"
                >
                  <motion.button
                    type="button"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsChatPreviewOpen(false)}
                    className="absolute inset-0 bg-[rgba(11,15,33,0.42)] backdrop-blur-xl"
                    aria-label="Close chatbot modal"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.98 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex h-[min(88svh,780px)] w-full max-w-[min(92vw,980px)] flex-col overflow-hidden rounded-[2rem] border border-white/70 bg-[linear-gradient(180deg,rgba(255,255,255,0.98),rgba(244,247,255,0.95))] shadow-[0_40px_120px_-38px_rgba(15,23,42,0.45)]"
                  >
                    <div className="flex items-center justify-between gap-4 border-b border-slate-200/80 px-5 py-4 sm:px-6">
                      <div className="min-w-0">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.26em] text-indigo-600">
                          Live chatbot
                        </p>
                        <p className="mt-1 truncate text-sm text-slate-500">
                          {n8nChatUrl ? "Connected with n8n chat URL" : "Centered demo modal preview"}
                        </p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setIsChatPreviewOpen(false)}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 transition-colors hover:border-slate-300 hover:bg-slate-50"
                        aria-label="Close chatbot modal"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="relative flex-1 overflow-hidden bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.12),transparent_30%),linear-gradient(180deg,#f8faff_0%,#eef3ff_100%)]">
                      {n8nChatUrl ? (
                        <iframe
                          src={n8nChatUrl}
                          title="n8n chatbot"
                          className="h-full w-full border-0 bg-white"
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                        />
                      ) : (
                        <div className="flex h-full items-center justify-center p-5 sm:p-8">
                          <div className="w-full max-w-[34rem] rounded-[1.8rem] border border-white/80 bg-white/92 p-5 shadow-[0_24px_60px_-34px_rgba(15,23,42,0.18)] sm:p-6">
                            <div className="flex items-center justify-between gap-3">
                              <div className="flex items-center gap-2">
                                <span className="h-3 w-3 rounded-full bg-rose-300" />
                                <span className="h-3 w-3 rounded-full bg-amber-300" />
                                <span className="h-3 w-3 rounded-full bg-emerald-300" />
                              </div>
                              <div className="rounded-full border border-indigo-100 bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-indigo-600">
                                Demo mode
                              </div>
                            </div>

                            <div className="mt-5 space-y-3 text-sm">
                              <div className="max-w-[82%] rounded-[1.2rem] rounded-bl-sm bg-slate-100 px-4 py-3 text-slate-700">
                                Show me a premium rental in Canary Wharf with concierge and parking.
                              </div>
                              <div className="ml-auto max-w-[85%] rounded-[1.2rem] rounded-br-sm bg-primary px-4 py-3 text-white">
                                I found three matching options and I can hold a viewing slot for Thursday at 11:30 AM.
                              </div>
                            </div>

                            <div className="mt-5 rounded-[1.4rem] border border-slate-200 bg-slate-50 px-4 py-4">
                              <div className="flex items-center gap-3">
                                <MessageSquareMore className="h-4 w-4 text-indigo-600" />
                                <span className="text-sm text-slate-500">
                                  Add `NEXT_PUBLIC_N8N_CHAT_URL` to load the live n8n chat here.
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </section>
  );
}
