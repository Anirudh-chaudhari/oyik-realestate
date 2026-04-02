"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  CalendarCheck2,
  Database,
  House,
  LoaderCircle,
  MessageSquareMore,
  Send,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

type WidgetState = "idle" | "loading" | "ready" | "error";
type WidgetApp = { unmount?: () => void };

const features = [
  {
    icon: House,
    title: "Live property answers",
    description: "Show listings, prices, and availability without sending visitors into a long form.",
  },
  {
    icon: CalendarCheck2,
    title: "Viewing slots inside chat",
    description: "Let prospects ask for tomorrow at a specific time and get booked in the same thread.",
  },
  {
    icon: Database,
    title: "Lead capture without friction",
    description: "Collect the right details while the conversation still feels premium and human.",
  },
  {
    icon: Send,
    title: "Fast follow-up",
    description: "Send confirmations and handoffs the second a viewing is locked in.",
  },
];

const listings = [
  {
    title: "Clarendon Residences",
    location: "Leicester Centre",
    price: "GBP 1,980 pcm",
    image: "/media/listings/dockside-tower.jpg",
    slot: "Tomorrow | 5:30 PM",
  },
  {
    title: "Stoneygate House",
    location: "Stoneygate",
    price: "GBP 2,240 pcm",
    image: "/media/listings/night-penthouse.jpg",
    slot: "Tomorrow | 3:15 PM",
  },
  {
    title: "Abbey Park Suite",
    location: "Leicester North",
    price: "GBP 1,760 pcm",
    image: "/media/listings/toronto-bedroom.jpg",
    slot: "Tomorrow | 11:00 AM",
  },
];

function PropertyCard({
  title,
  location,
  price,
  image,
  slot,
}: {
  title: string;
  location: string;
  price: string;
  image: string;
  slot: string;
}) {
  return (
    <article className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/7 shadow-[0_18px_40px_-34px_rgba(15,23,42,0.55)]">
      <div className="relative h-36 overflow-hidden">
        <Image src={image} alt={title} fill className="object-cover" sizes="(max-width: 1023px) 100vw, 320px" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
      </div>
      <div className="space-y-2.5 p-4">
        <div>
          <p className="text-[1.05rem] font-semibold text-white">{title}</p>
          <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-white/55">{location}</p>
        </div>
        <div className="flex items-center justify-between gap-3">
          <p className="text-[1.05rem] text-white/90">{price}</p>
          <div className="rounded-full border border-white/10 bg-white/7 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
            {slot}
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ChatbotShowcase() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [widgetState, setWidgetState] = useState<WidgetState>("idle");
  const [widgetError, setWidgetError] = useState<string | null>(null);
  const chatTargetRef = useRef<HTMLDivElement | null>(null);
  const n8nChatUrl = process.env.NEXT_PUBLIC_N8N_CHAT_URL?.trim();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    const onEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onEscape);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onEscape);
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) {
      setWidgetState("idle");
      setWidgetError(null);
      return;
    }

    if (!n8nChatUrl) {
      setWidgetState("error");
      setWidgetError("NEXT_PUBLIC_N8N_CHAT_URL is not configured.");
      return;
    }

    const host = chatTargetRef.current;
    if (!host) {
      return;
    }

    let cancelled = false;
    let app: WidgetApp | null = null;

    const mount = async () => {
      try {
        setWidgetState("loading");
        setWidgetError(null);
        host.innerHTML = "";

        const { createChat } = await import("@n8n/chat");
        if (cancelled) {
          return;
        }

        app = createChat({
          webhookUrl: n8nChatUrl,
          target: host,
          mode: "fullscreen",
          showWindowCloseButton: false,
          showWelcomeScreen: false,
          loadPreviousSession: false,
          i18n: {
            en: {
              title: "Property concierge",
              subtitle: "",
              footer: "",
              getStarted: "Start chat",
              inputPlaceholder: "Ask about Leicester, your budget, or a viewing time...",
              closeButtonTooltip: "Close chat",
            },
          },
          metadata: {
            source: "oyik.realestate.ai",
            surface: "homepage-chatbot",
          },
        }) as WidgetApp;

        requestAnimationFrame(() => {
          if (!cancelled) {
            setWidgetState("ready");
          }
        });
      } catch (error) {
        if (cancelled) {
          return;
        }

        setWidgetState("error");
        setWidgetError(
          error instanceof Error ? error.message : "Unable to load the live n8n chat widget.",
        );
      }
    };

    mount();

    return () => {
      cancelled = true;
      app?.unmount?.();
      host.innerHTML = "";
    };
  }, [isOpen, n8nChatUrl]);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fbfcff_0%,#f7f8fd_46%,#f4f6fb_100%)] py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.14),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.12),transparent_22%)]" />
      <div className="absolute inset-0 opacity-[0.22] [background-image:linear-gradient(rgba(63,55,184,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(63,55,184,0.06)_1px,transparent_1px)] [background-size:88px_88px]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-[1fr_0.95fr] lg:items-center lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="rounded-[2.5rem] border border-white/80 bg-white/84 p-5 shadow-[0_34px_90px_-46px_rgba(15,23,42,0.28)] backdrop-blur-2xl sm:p-6">
              <div className="flex items-center justify-between gap-3">
                <div className="rounded-full border border-slate-200 bg-white/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-700">
                  Live property concierge
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50/90 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-emerald-700">
                  <span className="relative flex h-2.5 w-2.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                    <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </span>
                  instant booking flow
                </div>
              </div>

              <div className="mt-5 overflow-hidden rounded-[2.25rem] border border-slate-200 bg-[linear-gradient(180deg,#091225_0%,#111b34_60%,#14203b_100%)] p-5 text-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.8)] sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-white/12 bg-white shadow-[0_18px_35px_-20px_rgba(255,255,255,0.35)]">
                      <Image
                        src="/oyik-logo-indigo-tech.png"
                        alt="Oyik logo"
                        width={48}
                        height={48}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-8 w-px bg-white/14" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-white/55">
                        Oyik
                      </p>
                      <p className="mt-1 text-xl font-display font-medium text-white">
                        Property concierge
                      </p>
                    </div>
                  </div>

                  <div className="rounded-full border border-white/10 bg-white/8 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/70">
                    Viewings booked in chat
                  </div>
                </div>

                <div className="mt-6 space-y-3.5">
                  <div className="ml-auto max-w-[70%] rounded-[1.35rem] rounded-br-sm bg-[linear-gradient(135deg,#eef1ff,#ffffff)] px-4 py-3.5 text-sm leading-relaxed text-slate-700">
                    I want a two-bedroom property in Leicester with parking.
                  </div>
                  <div className="max-w-[70%] rounded-[1.35rem] rounded-bl-sm bg-white/10 px-4 py-3.5 text-sm leading-relaxed text-white/92">
                    I found three Leicester matches below. Tell me which one you want to view.
                  </div>
                  <div className="mt-2 grid gap-4 lg:grid-cols-3">
                    {listings.map((listing) => (
                      <PropertyCard key={listing.title} {...listing} />
                    ))}
                  </div>
                  <div className="ml-auto max-w-[72%] rounded-[1.35rem] rounded-br-sm bg-[linear-gradient(135deg,#eef1ff,#ffffff)] px-4 py-3.5 text-sm leading-relaxed text-slate-700">
                    I like Clarendon Residences. I want to view it tomorrow at 5:30 PM.
                  </div>
                  <div className="max-w-[66%] rounded-[1.35rem] rounded-bl-sm bg-white/10 px-4 py-3.5 text-sm leading-relaxed text-white/92">
                    Let me check the calendar.
                  </div>
                  <div className="max-w-[72%] rounded-[1.35rem] rounded-bl-sm bg-[linear-gradient(135deg,rgba(99,102,241,0.2),rgba(255,255,255,0.12))] px-4 py-3.5 text-sm leading-relaxed text-white">
                    All set. You are booked for tomorrow at 5:30 PM for Clarendon Residences.
                  </div>
                </div>

                <div className="mt-6 rounded-[1.45rem] border border-white/10 bg-white/7 p-3">
                  <div className="flex items-center gap-3 rounded-[1.2rem] border border-white/8 bg-white/90 px-4 py-4">
                    <MessageSquareMore className="h-5 w-5 shrink-0 text-violet-600" />
                    <span className="text-sm text-slate-500">
                      Ask for a Leicester area, budget, or viewing time...
                    </span>
                    <div className="ml-auto flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[linear-gradient(135deg,#8b5cf6,#7c3aed)] text-white shadow-[0_16px_32px_-18px_rgba(139,92,246,0.7)]">
                      <Send className="h-4 w-4" />
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
          >
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-violet-700">
              Website chat
            </p>
            <h2 className="max-w-3xl text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[4.15rem]">
              Turn property browsing into booked viewings.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              The chat should feel calm, premium, and useful. Prospects see real options, pick a
              property by name, ask for a time, and get a confirmed next step in the same
              conversation.
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
                suppressHydrationWarning
                onClick={() => setIsOpen((current) => !current)}
                className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-slate-900 transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-200 hover:text-primary"
              >
                {isOpen ? "Close live demo" : "Open live demo"}
                <MessageSquareMore className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {features.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.8rem] border border-white/80 bg-white/76 p-5 shadow-[0_20px_40px_-34px_rgba(15,23,42,0.2)]"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-50 text-primary">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[1.4rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-slate-600">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-9 flex justify-center">
              <motion.button
                type="button"
                suppressHydrationWarning
                onClick={() => setIsOpen(true)}
                whileHover={{ y: -3, scale: 1.02 }}
                whileTap={{ scale: 0.99 }}
                animate={{
                  boxShadow: [
                    "0 18px 38px -22px rgba(79,70,229,0.34)",
                    "0 24px 54px -24px rgba(79,70,229,0.54)",
                    "0 18px 38px -22px rgba(79,70,229,0.34)",
                  ],
                }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
                className="group relative inline-flex w-full justify-center overflow-hidden rounded-full border border-violet-300/40 bg-[linear-gradient(135deg,#8b5cf6,#7c3aed)] px-6 py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white sm:w-auto sm:min-w-[20rem]"
              >
                <span className="relative z-10 flex w-full items-center justify-center gap-3">
                  Launch live property chat
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16">
                    <Sparkles className="h-4 w-4" />
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
              {isOpen ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                  className="fixed inset-0 z-[120] flex items-center justify-center p-3 sm:p-5"
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setIsOpen(false)}
                    className="absolute inset-0 bg-[rgba(11,15,33,0.5)] backdrop-blur-xl"
                    aria-label="Close chatbot modal"
                  />

                  <motion.div
                    initial={{ opacity: 0, y: 28, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 24, scale: 0.98 }}
                    transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-10 flex h-[min(92svh,860px)] w-full max-w-[min(92vw,960px)] flex-col overflow-hidden rounded-[2rem] border border-white/55 bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(242,246,255,0.93))] shadow-[0_48px_140px_-42px_rgba(15,23,42,0.55)]"
                  >
                    <button
                      type="button"
                      suppressHydrationWarning
                      onClick={() => setIsOpen(false)}
                      className="absolute right-4 top-4 z-20 flex h-12 w-12 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-600 shadow-[0_20px_35px_-24px_rgba(15,23,42,0.4)] transition-colors hover:border-slate-300 hover:bg-slate-50"
                      aria-label="Close chatbot modal"
                    >
                      <X className="h-4 w-4" />
                    </button>

                    <div className="flex min-h-0 flex-1 items-center justify-center p-4 sm:p-6">
                      <div className="flex h-full w-full max-w-[46rem] flex-col overflow-hidden rounded-[1.8rem] border border-white/80 bg-[linear-gradient(180deg,rgba(247,250,255,0.94),rgba(235,241,255,0.96))] shadow-[0_28px_70px_-46px_rgba(15,23,42,0.38)]">
                        <div className="flex items-center justify-between gap-4 border-b border-slate-200/70 px-4 py-4 sm:px-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_16px_30px_-20px_rgba(63,55,184,0.4)]">
                              <Image
                                src="/oyik-logo-indigo-tech.png"
                                alt="Oyik logo"
                                width={44}
                                height={44}
                                className="h-full w-full object-cover"
                              />
                            </div>
                            <div>
                              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-violet-600">
                                Oyik
                              </p>
                              <p className="mt-1 text-lg font-display font-medium tracking-[-0.02em] text-slate-950">
                                Live property chat
                              </p>
                            </div>
                          </div>

                          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700">
                            <span className="relative flex h-2.5 w-2.5">
                              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70" />
                              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                            </span>
                            {n8nChatUrl ? "live" : "demo"}
                          </div>
                        </div>

                        <div className="relative min-h-0 flex-1">
                          {n8nChatUrl ? (
                            <>
                              <div ref={chatTargetRef} className="chatbot-live-shell n8n-chat-theme h-full w-full" />

                              {widgetState === "loading" ? (
                                <div className="absolute inset-0 z-20 flex items-center justify-center bg-[rgba(245,248,255,0.78)] backdrop-blur-sm">
                                  <div className="rounded-[1.5rem] border border-white/70 bg-white/92 px-6 py-5 text-center shadow-[0_20px_60px_-34px_rgba(15,23,42,0.26)]">
                                    <LoaderCircle className="mx-auto h-7 w-7 animate-spin text-violet-600" />
                                    <p className="mt-3 text-sm font-medium text-slate-900">
                                      Loading live chat
                                    </p>
                                  </div>
                                </div>
                              ) : null}

                              {widgetState === "error" ? (
                                <div className="absolute inset-0 z-30 flex items-center justify-center bg-[rgba(245,248,255,0.92)] p-5">
                                  <div className="w-full max-w-[30rem] rounded-[1.6rem] border border-rose-100 bg-white p-6 shadow-[0_22px_60px_-34px_rgba(15,23,42,0.22)]">
                                    <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-rose-600">
                                      Chat connection issue
                                    </p>
                                    <h4 className="mt-3 text-xl font-display font-medium tracking-[-0.025em] text-slate-950">
                                      The live chat could not start.
                                    </h4>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-600">
                                      {widgetError ?? "Please verify the configured n8n chat URL and CORS settings for localhost."}
                                    </p>
                                  </div>
                                </div>
                              ) : null}
                            </>
                          ) : (
                            <div className="flex h-full items-center justify-center p-6 text-center text-sm text-slate-500">
                              Add `NEXT_PUBLIC_N8N_CHAT_URL` to load the live n8n chatbot here.
                            </div>
                          )}
                        </div>
                      </div>
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
