"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Plug, Settings, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

const cycleDuration = 5;

const steps = [
  {
    step: "Step 1",
    title: "Connect",
    description:
      "We connect your listings, calendar, website, social channels, phone, and inboxes into one coordinated operating layer.",
    icon: Plug,
  },
  {
    step: "Step 2",
    title: "Train",
    description:
      "We shape the tone, qualification logic, escalation rules, reminders, and handoff flows around how your real estate business already works.",
    icon: Settings,
  },
  {
    step: "Step 3",
    title: "Launch and refine",
    description:
      "Go live fast, then improve with real data on response speed, booked viewings, conversion quality, and operational bottlenecks.",
    icon: TrendingUp,
  },
];

export default function HowItWorks() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const flowPath = "M 90 102 C 240 38, 366 38, 500 102 S 754 166, 910 102";

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden bg-secondary py-32">
      <div
        className="absolute inset-0 z-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#000000 1px, transparent 1px), linear-gradient(90deg, #000000 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <div className="absolute inset-x-0 top-0 z-0 h-52 bg-[radial-gradient(circle_at_top,rgba(90,84,235,0.16),transparent_68%)]" />

      {(!reduceMotion && mounted) && (
        <>
          <motion.div
            aria-hidden="true"
            className="absolute -left-28 top-28 z-0 h-80 w-80 rounded-full bg-[radial-gradient(circle,rgba(90,84,235,0.12),transparent_68%)] blur-3xl"
            animate={{
              x: [0, 42, 0],
              y: [0, -26, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{ duration: 7.2, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute right-[-5rem] top-44 z-0 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.2),transparent_68%)] blur-3xl"
            animate={{
              x: [0, -34, 0],
              y: [0, 28, 0],
              scale: [1, 1.08, 1],
            }}
            transition={{ duration: 8.4, repeat: Infinity, ease: "easeInOut" }}
          />
        </>
      )}

      <div className="container relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-4xl font-display font-semibold leading-[0.98] tracking-[-0.03em] text-foreground sm:text-5xl lg:text-[3.9rem]">
            How it works
          </h2>
          <div className="mx-auto h-1 w-24 rounded-full bg-primary opacity-50 shadow-[0_0_20px_rgba(63,55,184,0.55)]" />
        </div>

        <div className="relative grid gap-14 md:grid-cols-3 lg:gap-10">
          <div className="pointer-events-none absolute left-[5%] right-[5%] top-[18px] -z-10 hidden h-[190px] md:block">
            <svg
              className="absolute inset-0 h-full w-full overflow-visible"
              viewBox="0 0 1000 200"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >
              <defs>
                <linearGradient id="how-flow-base" x1="90" y1="102" x2="910" y2="102" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(90,84,235,0.08)" />
                  <stop offset="0.5" stopColor="rgba(90,84,235,0.42)" />
                  <stop offset="1" stopColor="rgba(90,84,235,0.08)" />
                </linearGradient>
                <linearGradient id="how-flow-hot" x1="90" y1="102" x2="910" y2="102" gradientUnits="userSpaceOnUse">
                  <stop stopColor="rgba(255,255,255,0)" />
                  <stop offset="0.32" stopColor="rgba(154,160,255,0.95)" />
                  <stop offset="0.52" stopColor="rgba(255,255,255,1)" />
                  <stop offset="0.72" stopColor="rgba(90,84,235,0.95)" />
                  <stop offset="1" stopColor="rgba(255,255,255,0)" />
                </linearGradient>
                <filter id="how-flow-glow" x="-40%" y="-80%" width="180%" height="260%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <path
                d={flowPath}
                stroke="url(#how-flow-base)"
                strokeWidth="4"
                strokeLinecap="round"
              />

              <path
                d={flowPath}
                stroke="rgba(255,255,255,0.18)"
                strokeWidth="1.5"
                strokeDasharray="8 20"
                strokeLinecap="round"
              />

              {!reduceMotion && mounted && (
                <>
                  <path
                    d={flowPath}
                    stroke="url(#how-flow-hot)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeDasharray="210 1180"
                    strokeDashoffset="1180"
                    filter="url(#how-flow-glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="1180;0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0;1;1;0.35;1;0"
                      keyTimes="0;0.08;0.36;0.54;0.84;1"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  <path
                    d={flowPath}
                    stroke="rgba(255,255,255,0.95)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="34 1356"
                    strokeDashoffset="1356"
                    filter="url(#how-flow-glow)"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      values="1356;0"
                      dur="5s"
                      repeatCount="indefinite"
                    />
                  </path>

                  <g filter="url(#how-flow-glow)">
                    <circle r="12" fill="white">
                      <animateMotion dur="5s" repeatCount="indefinite">
                        <mpath href="#how-flow-orbit" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;1;1;0"
                        keyTimes="0;0.06;0.88;1"
                        dur="5s"
                        repeatCount="indefinite"
                      />
                    </circle>

                    <circle r="6.5" fill="#5A54EB">
                      <animateMotion dur="5s" begin="0.22s" repeatCount="indefinite">
                        <mpath href="#how-flow-orbit" />
                      </animateMotion>
                      <animate
                        attributeName="opacity"
                        values="0;0.9;0.9;0"
                        keyTimes="0;0.08;0.84;1"
                        dur="5s"
                        begin="0.22s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  <path id="how-flow-orbit" d={flowPath} stroke="transparent" />
                </>
              )}
            </svg>

            {!reduceMotion && mounted && (
              <>
                <motion.div
                  aria-hidden="true"
                  className="absolute left-[34%] top-[84px] h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(90,84,235,0.56),transparent_70%)]"
                  animate={{
                    opacity: [0, 0.1, 0.3, 0.92, 0.24, 0],
                    scale: [0.7, 0.84, 1, 1.28, 1.06, 0.78],
                  }}
                  transition={{
                    duration: cycleDuration,
                    times: [0, 0.14, 0.3, 0.46, 0.64, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute left-[66%] top-[84px] h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.58),transparent_72%)]"
                  animate={{
                    opacity: [0, 0, 0.08, 0.2, 0.92, 0],
                    scale: [0.72, 0.72, 0.8, 0.94, 1.34, 0.82],
                  }}
                  transition={{
                    duration: cycleDuration,
                    times: [0, 0.56, 0.72, 0.84, 0.96, 1],
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.div
                  aria-hidden="true"
                  className="absolute left-[66%] top-[84px] h-24 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[linear-gradient(90deg,rgba(90,84,235,0),rgba(90,84,235,0.98),rgba(255,255,255,1),rgba(90,84,235,0.34),rgba(90,84,235,0))] blur-[4px]"
                  animate={{
                    opacity: [0, 0, 0, 0.2, 1, 0],
                    scaleX: [0.34, 0.34, 0.34, 0.78, 1.24, 0.7],
                  }}
                  transition={{
                    duration: cycleDuration,
                    times: [0, 0.62, 0.76, 0.88, 0.96, 1],
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              </>
            )}
          </div>

          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: idx * 0.12 }}
              className="group relative flex flex-col items-center text-center"
            >
              <div className="relative mb-8 flex h-40 w-40 items-center justify-center rounded-[2.35rem] border border-border/70 bg-white/95 shadow-[0_28px_60px_-28px_rgba(63,55,184,0.34)] transition-transform duration-500 group-hover:-translate-y-3">
                <div className="absolute inset-0 rounded-[2.2rem] bg-[radial-gradient(circle_at_top,rgba(90,84,235,0.12),transparent_68%)] opacity-80" />

                {!reduceMotion && mounted && idx === 0 && (
                  <>
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-[-10px] rounded-[2.7rem] border border-primary/20"
                      animate={{
                        opacity: [0.14, 0.72, 0.26, 0.12],
                        scale: [1, 1.08, 1.03, 1],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.14, 0.28, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute -left-4 top-5 h-2 w-14 rounded-full bg-[linear-gradient(90deg,rgba(129,140,248,0),rgba(129,140,248,0.98),rgba(255,255,255,0.98),rgba(129,140,248,0))] blur-[2px]"
                      animate={{
                        x: [0, 26, 12, 0],
                        opacity: [0, 1, 0.52, 0],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.14, 0.22, 1],
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute right-3 top-4 h-2.5 w-2.5 rounded-full bg-white shadow-[0_0_0_6px_rgba(129,140,248,0.16),0_0_18px_rgba(129,140,248,0.9)]"
                      animate={{
                        opacity: [0, 0.12, 0.92, 0.18, 0],
                        scale: [0.4, 0.4, 1.2, 0.74, 0.4],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.12, 0.18, 0.28, 1],
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </>
                )}

                {!reduceMotion && mounted && idx === 1 && (
                  <>
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-[-14px] rounded-[3rem] border border-dashed border-primary/32"
                      animate={{
                        rotate: [0, 0, 180, 360],
                        opacity: [0.12, 0.16, 0.72, 0.16],
                        scale: [1, 1, 1.1, 1],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.22, 0.5, 1],
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-[-24px] rounded-[3.3rem] bg-[radial-gradient(circle,rgba(90,84,235,0.3),transparent_70%)]"
                      animate={{
                        opacity: [0, 0.06, 0.16, 0.56, 0.2, 0],
                        scale: [0.82, 0.92, 1, 1.2, 1.04, 0.9],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.2, 0.34, 0.5, 0.68, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-[-18px]"
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2.1, ease: "linear", repeat: Infinity }}
                    >
                      <span className="absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-white shadow-[0_0_12px_rgba(129,140,248,0.9)]" />
                      <span className="absolute bottom-5 right-3 h-2 w-2 rounded-full bg-primary shadow-[0_0_10px_rgba(90,84,235,0.95)]" />
                    </motion.div>
                    <motion.div
                      aria-hidden="true"
                      className="absolute -bottom-11 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-primary/18 bg-primary/8 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] text-primary"
                      animate={{
                        opacity: [0, 0.1, 0.86, 0.86, 0.16, 0],
                        y: [8, 6, 0, 0, 4, 8],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.18, 0.32, 0.54, 0.72, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <motion.span
                        className="h-1.5 w-1.5 rounded-full bg-primary"
                        animate={{ opacity: [0.4, 1, 0.4], scale: [0.8, 1.25, 0.8] }}
                        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      AI Processing
                    </motion.div>
                  </>
                )}

                {!reduceMotion && mounted && idx === 2 && (
                  <>
                    <motion.div
                      aria-hidden="true"
                      className="absolute inset-[-10px] rounded-[2.6rem] border border-primary/14"
                      animate={{
                        opacity: [0.08, 0.08, 0.08, 0.28, 0.64, 0.08],
                        scale: [1, 1, 1, 1.06, 1.14, 1],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.56, 0.72, 0.84, 0.96, 1],
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute -right-4 top-7 h-2 w-16 rounded-full bg-[linear-gradient(90deg,rgba(255,255,255,0),rgba(90,84,235,0.98),rgba(255,255,255,0.98),rgba(90,84,235,0))] blur-[2px]"
                      animate={{
                        x: [0, 16, 28, 0],
                        opacity: [0, 0, 0.96, 0],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.68, 0.88, 1],
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                    <motion.div
                      aria-hidden="true"
                      className="absolute -top-3 left-1/2 h-20 w-20 -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.26),transparent_70%)]"
                      animate={{
                        opacity: [0, 0, 0.08, 0.22, 0.86, 0],
                        y: [20, 20, 12, 0, -24, -36],
                        scale: [0.5, 0.5, 0.72, 0.9, 1.2, 0.6],
                      }}
                      transition={{
                        duration: cycleDuration,
                        times: [0, 0.64, 0.76, 0.86, 0.96, 1],
                        repeat: Infinity,
                        ease: "easeOut",
                      }}
                    />
                  </>
                )}

                <motion.div
                  animate={
                    reduceMotion || !mounted
                      ? undefined
                      : idx === 0
                        ? {
                            scale: [1, 1.16, 1],
                            rotate: [0, -6, 0],
                          }
                        : idx === 1
                          ? {
                              rotate: [0, 0, 180, 360],
                              scale: [1, 1, 1.06, 1],
                            }
                          : {
                              y: [0, 0, 0, -3, -8, 0],
                              scale: [1, 1, 1, 1.04, 1.12, 1],
                            }
                  }
                  transition={
                    reduceMotion || !mounted
                      ? undefined
                      : idx === 0
                        ? { duration: cycleDuration, times: [0, 0.14, 0.28], repeat: Infinity, ease: "easeInOut" }
                        : idx === 1
                          ? { duration: cycleDuration, times: [0, 0.24, 0.5, 1], repeat: Infinity, ease: "linear" }
                          : { duration: cycleDuration, times: [0, 0.62, 0.76, 0.92, 1, 1], repeat: Infinity, ease: "easeInOut" }
                  }
                >
                  <step.icon className="h-12 w-12 text-primary" />
                </motion.div>

                <div className="absolute -right-4 -top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary font-semibold text-primary-foreground shadow-lg">
                  {idx + 1}
                </div>
              </div>

              <span className="mb-3 text-sm font-mono uppercase tracking-[0.2em] text-primary">{step.step}</span>
              <h3 className="mb-4 text-2xl font-display font-semibold tracking-[-0.02em] text-foreground">{step.title}</h3>
              <p className="text-lg font-light leading-relaxed text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
