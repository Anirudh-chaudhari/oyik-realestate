"use client";

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import {
  ArrowUpRight,
  BellRing,
  Mailbox,
  MessageSquare,
  PhoneCall,
  Video as VideoIcon,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const products = [
  {
    id: "chat",
    title: "AI Chat",
    badge: "Website + Social",
    subtitle: "Reply, qualify, show live listings, and move leads to a booked next step.",
    description:
      "Handles website and social enquiries, captures lead data, checks calendar availability, and confirms viewings without making prospects wait for a human.",
    icon: MessageSquare,
    href: "/services/chat",
    videoPath: "/media/videos/chat.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/ai_chat_ui_light_1774519717225.png",
  },
  {
    id: "voice",
    title: "Voice Agents",
    badge: "Inbound + Outbound",
    subtitle: "A trained AI front desk for every type of property call.",
    description:
      "Runs dedicated call flows, matches listings from your live database, books viewings, sends confirmations, and updates your CRM automatically.",
    icon: PhoneCall,
    href: "/services/voice",
    videoPath: "/media/videos/voice.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/voice_agent_ui_light_1774519815031.png",
  },
  {
    id: "reminders",
    title: "Reminders",
    badge: "Rent + Viewings",
    subtitle: "Reduce no-shows and missed payments across every channel.",
    description:
      "Automates rent, deposit, and viewing reminders across SMS, email, WhatsApp, and voice so your team spends less time chasing.",
    icon: BellRing,
    href: "/services/reminders",
    videoPath: "/media/videos/reminders.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/reminders_calendar_ui_light_1774519912843.png",
  },
  {
    id: "maintenance",
    title: "Maintenance Intake",
    badge: "Tenant + Support",
    subtitle: "Capture issues properly before they become admin backlogs.",
    description:
      "Collects tenant issues in detail, saves to CRM, sends follow-up links for photos, and routes urgent cases to the maintenance team.",
    icon: Wrench,
    href: "/services/maintenance",
    videoPath: "/media/videos/maintenance.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/maintenance_intake_ui_generated.svg",
  },
  {
    id: "email",
    title: "Email Automation",
    badge: "Intelligent Replies",
    subtitle: "Keep every enquiry moving with fast, accurate, useful replies.",
    description:
      "Drafts polished responses for enquiries, follow-ups, booking details and document requests while routing the right cases to the right people.",
    icon: Mailbox,
    href: "/services/email",
    videoPath: "/media/videos/email.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/email_automation_ui_light_1774519948355.png",
  },
  {
    id: "marketing",
    title: "AI Marketing",
    badge: "AI Avatars + Videos",
    subtitle: "Create premium listing content without blocking your agents.",
    description:
      "Builds AI avatar videos, listing explainers, and social-ready property content from your existing assets so you can market consistently without studio time.",
    icon: VideoIcon,
    href: "/services/ai-marketing",
    videoPath: "/media/videos/marketing.mp4",
    gradient: "from-indigo-600 via-indigo-500 to-indigo-600",
    accent: "text-indigo-600",
    logoImage: "/media/ai_marketing_ui_light_1774519968668.png",
  },
];

export default function Products() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({ target: containerRef });

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const index = Math.min(products.length - 1, Math.floor(value * products.length));
    setActiveIndex((current) => (current === index ? current : index));
  });

  useEffect(() => {
    videoRefs.current.forEach((video, index) => {
      if (!video) {
        return;
      }

      if (index === activeIndex) {
        video.currentTime = 0;
        void video.play().catch(() => undefined);
        return;
      }

      video.pause();
    });
  }, [activeIndex]);

  const active = products[activeIndex];

  return (
    <section className="relative bg-slate-50 py-16 sm:py-20 lg:py-0">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(63,55,184,0.03),transparent_30%)]" />

      <div className="relative z-10 px-4 text-center sm:px-6 lg:px-0 lg:py-16">
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto max-w-4xl text-[2.35rem] font-display font-medium leading-[0.96] tracking-[-0.04em] text-slate-900 sm:text-5xl lg:text-[4rem]"
        >
          Premium automation for every part of the modern real estate journey.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-500 sm:mt-6 sm:text-lg"
        >
          Six AI-powered services designed to feel high-end for your brand and simple for your team.
        </motion.p>
      </div>

      <div className="relative z-10 px-4 sm:px-6 lg:hidden">
        <div className="grid gap-5">
          {products.map((product, index) => (
            <motion.article
              key={product.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden rounded-[2rem] border border-slate-200/70 bg-white/88 shadow-[0_24px_64px_-40px_rgba(63,55,184,0.18)] backdrop-blur-xl"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <Image
                  src={product.logoImage}
                  alt={`${product.title} interface preview`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1023px) 100vw, 0px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/24 via-transparent to-transparent" />
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/70 bg-white/88 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-700 shadow-sm backdrop-blur-md">
                  <span className={`flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br ${product.gradient}`}>
                    <product.icon className="h-3.5 w-3.5 text-white" />
                  </span>
                  {product.badge}
                </div>
              </div>

              <div className="space-y-4 p-5 sm:p-6">
                <div>
                  <h3 className="text-[1.95rem] font-display font-semibold leading-[0.95] tracking-[-0.04em] text-slate-900">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-base font-medium leading-relaxed text-indigo-600">
                    {product.subtitle}
                  </p>
                </div>

                <p className="text-sm leading-relaxed text-slate-600 sm:text-[0.98rem]">
                  {product.description}
                </p>

                <Link
                  href={product.href}
                  className={`group inline-flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r ${product.gradient} px-6 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300`}
                >
                  Explore {product.title}
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/18 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowUpRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <div ref={containerRef} className="relative hidden lg:block" style={{ height: `${products.length * 58}vh` }}>
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <div className="container mx-auto grid h-full max-w-[1500px] grid-cols-1 items-center gap-10 px-6 pb-16 lg:grid-cols-[40fr_60fr] lg:px-12">
            <div className="flex flex-col justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 36, filter: "blur(6px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, y: -28, filter: "blur(6px)" }}
                  transition={{ duration: 0.52, ease: [0.22, 1, 0.36, 1] }}
                  className="relative rounded-[2rem] border border-slate-200/60 bg-white/72 p-10 shadow-[0_20px_60px_-20px_rgba(63,55,184,0.06)] backdrop-blur-xl"
                >
                  <div className="mb-6 flex items-center gap-3">
                    <span className="font-mono text-[11px] font-semibold tracking-[0.3em] text-primary/60">
                      {String(activeIndex + 1).padStart(2, "0")} / {String(products.length).padStart(2, "0")}
                    </span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>

                  <div
                    className={`mb-5 inline-flex items-center gap-2 rounded-full border ${active.gradient
                      .split(" ")[0]
                      .replace("from-", "border-")}/30 bg-white/80 px-4 py-1.5`}
                  >
                    <div className={`rounded-full bg-gradient-to-br p-1 ${active.gradient}`}>
                      <active.icon className="h-3 w-3 text-white" />
                    </div>
                    <span className={`text-[11px] font-bold uppercase tracking-[0.24em] ${active.accent}`}>
                      {active.badge}
                    </span>
                  </div>

                  <h3 className="mb-2 text-[2.6rem] font-display font-semibold leading-[0.93] tracking-[-0.04em] text-slate-900 sm:text-[3rem]">
                    {active.title}
                  </h3>

                  <p className="mb-5 text-[1.05rem] font-medium leading-relaxed text-indigo-500">
                    {active.subtitle}
                  </p>

                  <p className="mb-9 max-w-sm text-[1.05rem] leading-relaxed text-slate-500">
                    {active.description}
                  </p>

                  <Link
                    href={active.href}
                    className={`group inline-flex items-center gap-3 rounded-full bg-gradient-to-r ${active.gradient} px-7 py-3.5 text-sm font-bold uppercase tracking-[0.16em] text-white shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-xl`}
                  >
                    Explore {active.title}
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/20 transition-transform duration-300 group-hover:translate-x-1">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              </AnimatePresence>

              <div className="ml-6 mt-8 flex gap-2.5">
                {products.map((_, index) => (
                  <motion.div
                    key={index}
                    animate={{
                      width: activeIndex === index ? 28 : 6,
                      opacity: activeIndex === index ? 1 : 0.6,
                      backgroundColor: activeIndex === index ? "#4f46e5" : "#cbd5e1",
                    }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="h-1.5 rounded-full"
                  />
                ))}
              </div>
            </div>

            <div className="hidden w-full items-center justify-center lg:flex">
              <div className="relative flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-[1.2rem] bg-white shadow-[0_20px_50px_rgba(63,55,184,0.08)]">
                {products.map((product, index) => (
                  <motion.div
                    key={product.id}
                    className="absolute inset-0 flex items-center justify-center"
                    initial={false}
                    animate={{ opacity: activeIndex === index ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    style={{ zIndex: activeIndex === index ? 2 : 1 }}
                  >
                    <video
                      ref={(element) => {
                        videoRefs.current[index] = element;
                      }}
                      src={product.videoPath}
                      muted
                      playsInline
                      loop
                      className="absolute left-0 top-0 h-full w-full origin-top scale-y-[1.12] object-cover"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
