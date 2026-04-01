"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

type LinkItem = {
  href: string;
  label: string;
  disabled?: boolean;
};

const links: LinkItem[] = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Service" },
  { href: "#", label: "Blog", disabled: true },
];

const phoneHref = "tel:+447352328646";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 28);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="pointer-events-none fixed inset-x-0 top-4 z-50 flex justify-center px-3 sm:top-6 sm:px-4 lg:top-10">
      <div className="pointer-events-auto relative flex w-full max-w-[min(100%,28rem)] flex-col items-center lg:w-auto lg:max-w-[calc(100vw-2.5rem)]">
        {!reduceMotion && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-[4px] hidden rounded-full bg-[radial-gradient(circle_at_center,rgba(129,140,248,0.18),transparent_62%)] opacity-80 blur-xl lg:block"
          />
        )}

        <motion.div
          initial={false}
          animate={{
            y: scrolled ? -2 : 0,
            scale: scrolled ? 0.992 : 1,
          }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex w-full items-center justify-between gap-2 overflow-hidden rounded-[1.75rem] border px-2.5 py-2 shadow-[0_16px_42px_-30px_rgba(15,23,42,0.22)] backdrop-blur-xl sm:gap-3 sm:px-3 lg:min-w-[860px] lg:rounded-full lg:px-4 ${
            scrolled ? "border-slate-900/10 bg-white/65" : "border-white/16 bg-slate-950/18"
          }`}
        >
          <div className="absolute inset-[1px] rounded-[1.65rem] border border-white/8 lg:rounded-full" />

          <Link href="/" className="relative z-10 flex min-w-0 shrink items-center gap-3 pr-2 sm:pr-4 lg:pr-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/22 bg-white shadow-[0_12px_30px_-18px_rgba(63,55,184,0.45)] sm:h-12 sm:w-12 lg:h-14 lg:w-14">
              <Image
                src="/oyik-logo-indigo-tech.png"
                alt="Oyik logo"
                width={56}
                height={56}
                className="h-full w-full object-cover"
                priority
              />
            </div>

            <div className="flex min-w-0 flex-col leading-none">
              <span
                className={`brand-signature truncate text-[1.2rem] font-bold sm:text-[1.45rem] lg:text-[1.75rem] ${
                  scrolled ? "text-slate-950" : "text-white drop-shadow-[0_2px_10px_rgba(15,23,42,0.32)]"
                }`}
              >
                Oyik
              </span>
              <span
                className={`truncate text-[0.64rem] font-extrabold tracking-[0.18em] sm:text-[0.72rem] sm:tracking-[0.24em] lg:text-[0.82rem] lg:tracking-[0.28em] ${
                  scrolled ? "text-primary" : "text-white/95 drop-shadow-[0_2px_12px_rgba(90,84,235,0.6)]"
                }`}
              >
                RealEstate.ai
              </span>
            </div>
          </Link>

          <div
            className={`relative z-10 hidden items-center gap-1.5 rounded-full px-2 py-1 lg:ml-6 lg:flex ${
              scrolled ? "bg-slate-900/6" : "bg-slate-950/26"
            }`}
          >
            {links.map((link) => {
              const isActive = !link.disabled && pathname === link.href;

              if (link.disabled) {
                return (
                  <span
                    key={link.label}
                    className={`rounded-full px-4 py-2 text-[0.84rem] font-semibold tracking-[0.08em] ${
                      scrolled ? "text-slate-700/88" : "text-white/88"
                    }`}
                  >
                    {link.label}
                  </span>
                );
              }

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`rounded-full px-5 py-2.5 text-[0.9rem] font-bold tracking-[0.08em] transition-all duration-300 ${
                    isActive
                      ? scrolled
                        ? "bg-indigo-600 text-white shadow-lg"
                        : "bg-white/20 text-white shadow-[0_4px_20px_rgba(255,255,255,0.25)]"
                      : scrolled
                        ? "text-indigo-700 hover:bg-indigo-50 hover:text-indigo-800"
                        : "text-white/95 hover:bg-white/15 hover:text-white drop-shadow-md"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}

            <a
              href={phoneHref}
              className="inline-flex items-center rounded-full bg-[linear-gradient(135deg,#3F37B8,#5A54EB)] px-4 py-2 text-[0.84rem] font-semibold tracking-[0.08em] text-white shadow-[0_14px_24px_-18px_rgba(63,55,184,0.7)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_28px_-18px_rgba(63,55,184,0.8)]"
            >
              Call Us
            </a>
          </div>

          <button
            className={`relative z-10 flex h-10 w-10 items-center justify-center rounded-full border shadow-[0_12px_22px_-18px_rgba(15,23,42,0.35)] lg:hidden ${
              scrolled ? "border-slate-900/10 bg-white/72 text-slate-950" : "border-white/18 bg-white/8 text-white"
            }`}
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </motion.div>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 10, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className={`mt-3 w-full overflow-hidden rounded-[1.8rem] border p-4 shadow-[0_30px_80px_-40px_rgba(15,23,42,0.4)] backdrop-blur-2xl ${
                scrolled ? "border-slate-900/10 bg-white/80" : "border-white/12 bg-slate-950/44"
              }`}
            >
              <div className="grid gap-2">
                {links.map((link) => {
                  const isActive = !link.disabled && pathname === link.href;

                  if (link.disabled) {
                    return (
                      <span
                        key={link.label}
                        className={`rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] ${
                          scrolled ? "text-slate-700/78" : "text-white/78"
                        }`}
                      >
                        {link.label}
                      </span>
                    );
                  }

                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`rounded-2xl px-4 py-3 text-sm font-medium uppercase tracking-[0.16em] transition-all ${
                        isActive
                          ? scrolled
                            ? "bg-slate-900/8 text-slate-950 shadow-sm"
                            : "bg-white/12 text-white shadow-sm"
                          : scrolled
                            ? "text-slate-700 hover:bg-slate-900/5 hover:text-slate-950"
                            : "text-white/78 hover:bg-white/8 hover:text-white"
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>

              <a
                href={phoneHref}
                onClick={() => setIsOpen(false)}
                className="mt-3 inline-flex w-full items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#3F37B8,#5A54EB)] px-4 py-3 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_14px_24px_-18px_rgba(63,55,184,0.7)]"
              >
                Call Us
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
