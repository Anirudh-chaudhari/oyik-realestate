"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

const serviceLinks = [
  { name: "AI Chatbots", href: "/services/chat" },
  { name: "Voice Agents", href: "/services/voice" },
  { name: "Automated Reminders", href: "/services/reminders" },
  { name: "Maintenance Intake", href: "/services/maintenance" },
  { name: "Email Automation", href: "/services/email" },
  { name: "AI Marketing", href: "/services/ai-marketing" },
];

const companyLinks = [
  { name: "About Us", href: "/about" },
  { name: "How it works", href: "/how-it-works" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
  { name: "Book Demo", href: "/book-demo" },
];

const legalLinks = [
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
  { name: "Cookie Policy", href: "/cookies" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-secondary pb-8 pt-16">
      <div className="absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-50" />
      <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-[1.2fr_0.8fr_0.8fr_0.8fr_1.15fr] xl:gap-8">
          <div className="flex flex-col gap-6">
            <Link href="/" className="group flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_18px_35px_-18px_rgba(67,56,202,0.55)]">
                <Image
                  src="/oyik-logo-indigo-tech.png"
                  alt="Oyik logo"
                  width={44}
                  height={44}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className="brand-signature text-[1.75rem] transition-colors group-hover:text-primary">
                  oyik<span className="text-primary">.</span>
                </span>
                <span className="brand-meta">realestate.ai</span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              The intelligence layer for modern real estate teams. Reply instantly, qualify leads,
              and book viewings across chat, voice, email, and social.
            </p>

            <div className="rounded-[1.7rem] border border-border bg-background/80 p-5 shadow-[0_20px_40px_-32px_rgba(15,23,42,0.18)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-primary">
                Premium rollout
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Start with one workflow or design the full AI front desk for your property brand.
              </p>
              <Link
                href="/book-demo"
                className="mt-4 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/92"
              >
                Book a demo
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Services</h4>
            {serviceLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Company</h4>
            {companyLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Legal</h4>
            {legalLinks.map((link) => (
              <Link key={link.name} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-primary">
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            <h4 className="mb-2 text-lg font-display font-semibold text-foreground">Contact Us</h4>

            <a
              href="mailto:hello@oyik.ai"
              className="rounded-[1.5rem] border border-border bg-background/80 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Mail className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Email</p>
                  <p className="mt-2 text-sm font-medium text-foreground">Hello@oyik.ai</p>
                </div>
              </div>
            </a>

            <a
              href="tel:+447352328646"
              className="rounded-[1.5rem] border border-border bg-background/80 p-4 transition-colors hover:border-primary/30"
            >
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Phone className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Phone</p>
                  <p className="mt-2 text-sm font-medium text-foreground">+44 7352 328646</p>
                </div>
              </div>
            </a>

            <div className="rounded-[1.5rem] border border-border bg-background/80 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <MapPin className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/70">Location</p>
                  <p className="mt-2 text-sm font-medium leading-relaxed text-foreground">
                    OYIK LTD, 124 CITY ROAD LONDON, EC1V 2NX.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-2xl border border-primary/20 bg-white shadow-[0_16px_30px_-20px_rgba(67,56,202,0.45)]">
              <Image
                src="/oyik-logo-indigo-tech.png"
                alt="Oyik logo"
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="text-sm text-muted-foreground">
              (c) {new Date().getFullYear()} oyik.realestate.ai. All Rights Reserved.
            </p>
          </div>
          <p className="flex items-center gap-1 text-sm text-muted-foreground">
            Built with <span className="font-medium text-primary">AI</span>. Powered by <span className="font-medium text-primary">Intelligence</span>.
          </p>
        </div>
      </div>
    </footer>
  );
}
