"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Pause, Play, Volume2 } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const voiceSamples = [
  {
    id: "voice-london-inquiry",
    title: "Prime buyer enquiry",
    label: "Sales qualification",
    duration: "0:13",
    description: "A polished first-touch conversation for a high-intent London buyer.",
    audioPath: "/media/audio/voice-london-inquiry.wav",
  },
  {
    id: "voice-viewing-booked",
    title: "Viewing booking",
    label: "Calendar coordination",
    duration: "0:10",
    description: "Availability checked, slot offered, and viewing details confirmed in one flow.",
    audioPath: "/media/audio/voice-viewing-booked.wav",
  },
  {
    id: "voice-landlord-update",
    title: "Landlord update",
    label: "Owner communication",
    duration: "0:10",
    description: "A calm update for landlords who want quick clarity without call-back delays.",
    audioPath: "/media/audio/voice-landlord-update.wav",
  },
  {
    id: "voice-maintenance-triage",
    title: "Maintenance triage",
    label: "Urgency checks",
    duration: "0:10",
    description: "Front-line intake that captures the issue clearly before it reaches your team.",
    audioPath: "/media/audio/voice-maintenance-triage.wav",
  },
];

export default function VoiceSamples() {
  const [activeVoiceId, setActiveVoiceId] = useState<string | null>(null);
  const audioRefs = useRef<Record<string, HTMLAudioElement | null>>({});

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio?.pause();
      });
    };
  }, []);

  const handleVoiceToggle = async (voiceId: string) => {
    const selectedAudio = audioRefs.current[voiceId];
    if (!selectedAudio) {
      return;
    }

    if (activeVoiceId === voiceId && !selectedAudio.paused) {
      selectedAudio.pause();
      selectedAudio.currentTime = 0;
      setActiveVoiceId(null);
      return;
    }

    Object.entries(audioRefs.current).forEach(([id, audio]) => {
      if (!audio || id === voiceId) {
        return;
      }

      audio.pause();
      audio.currentTime = 0;
    });

    selectedAudio.currentTime = 0;

    try {
      await selectedAudio.play();
      setActiveVoiceId(voiceId);
    } catch {
      setActiveVoiceId(null);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#f7f9ff_0%,#eef3ff_100%)] py-24 text-slate-950">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.12),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(56,189,248,0.1),transparent_22%)]" />

      <div className="container relative z-10 mx-auto px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <p className="mb-5 text-sm font-semibold uppercase tracking-[0.28em] text-indigo-700">
              Voice samples
            </p>
            <h2 className="text-4xl font-display font-medium leading-[1.02] tracking-[-0.035em] text-slate-950 sm:text-5xl lg:text-[4rem]">
              Four playable voice flows so prospects can hear the model quality immediately.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl">
              These are front-end demo samples only, but each one is fully playable on the page
              so the experience feels tangible instead of decorative.
            </p>
          </div>

          <Link
            href="/book-demo"
            className="group inline-flex items-center gap-3 self-start rounded-full bg-primary px-6 py-3.5 text-sm font-semibold uppercase tracking-[0.18em] text-white shadow-[0_18px_40px_-22px_rgba(79,70,229,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_24px_46px_-20px_rgba(79,70,229,0.7)]"
          >
            Book demo
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/16 transition-transform duration-300 group-hover:translate-x-1">
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </Link>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {voiceSamples.map((sample, index) => {
            const isActive = activeVoiceId === sample.id;

            return (
              <motion.div
                key={sample.id}
                suppressHydrationWarning
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: index * 0.07, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -6 }}
                className="rounded-[2rem] border border-white/80 bg-white/88 p-6 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.28)] backdrop-blur-xl"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-600">
                      {sample.label}
                    </p>
                    <h3 className="mt-3 text-[1.45rem] font-display font-medium leading-[1.02] tracking-[-0.02em] text-slate-950">
                      {sample.title}
                    </h3>
                  </div>

                  <motion.button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => {
                      void handleVoiceToggle(sample.id);
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.96 }}
                    className={`flex h-14 w-14 items-center justify-center rounded-full border transition-colors duration-300 ${
                      isActive
                        ? "border-primary bg-primary text-white shadow-[0_18px_36px_-18px_rgba(79,70,229,0.7)]"
                        : "border-indigo-100 bg-indigo-50 text-primary"
                    }`}
                    aria-label={isActive ? `Pause ${sample.title}` : `Play ${sample.title}`}
                  >
                    {isActive ? <Pause className="h-5 w-5" /> : <Play className="ml-0.5 h-5 w-5" />}
                  </motion.button>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-600">{sample.description}</p>

                <div className="mt-6 rounded-[1.6rem] border border-slate-200 bg-slate-950 px-4 py-4 text-white">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/58">
                    <span className="inline-flex items-center gap-2">
                      <Volume2 className="h-3.5 w-3.5" />
                      Wave monitor
                    </span>
                    <span>{sample.duration}</span>
                  </div>

                  <div className="mt-4 flex h-14 items-end gap-1">
                    {[14, 24, 18, 30, 20, 26, 16].map((height, barIndex) => (
                      <motion.span
                        key={`${sample.id}-${barIndex}`}
                        animate={
                          isActive
                            ? {
                                height: [10, height, Math.max(12, height - 8), height],
                                opacity: [0.45, 1, 0.75, 1],
                              }
                            : {
                                height: 12 + (barIndex % 3) * 6,
                                opacity: 0.38,
                              }
                        }
                        transition={{
                          duration: 1.1,
                          repeat: isActive ? Infinity : 0,
                          ease: "easeInOut",
                          delay: barIndex * 0.07,
                        }}
                        className="block w-full rounded-full bg-gradient-to-t from-indigo-500 via-indigo-300 to-white"
                      />
                    ))}
                  </div>
                </div>

                <div className="mt-5 flex items-center justify-between text-sm text-slate-500">
                  <span>{isActive ? "Playing now" : "Ready to play"}</span>
                  <span className="rounded-full bg-indigo-50 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-indigo-700">
                    Demo audio
                  </span>
                </div>

                <audio
                  suppressHydrationWarning
                  ref={(element) => {
                    audioRefs.current[sample.id] = element;
                  }}
                  src={sample.audioPath}
                  onEnded={() => setActiveVoiceId(null)}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
