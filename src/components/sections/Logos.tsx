"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type LogoItem = {
  name: string;
  tag: string;
  logoPath: string;
  glowClass: string;
};

type LogoRow = {
  label: string;
  items: LogoItem[];
  inlineLabel?: boolean;
  floating?: boolean;
};

const cardWidth = 232;

const ecosystemRows: LogoRow[] = [
  {
    label: "UK portals + CRMs",
    inlineLabel: true,
    floating: true,
    items: [
      { name: "Zoopla", tag: "Portal", logoPath: "/brand-icons/zoopla.png", glowClass: "from-fuchsia-500/18 via-transparent to-transparent" },
      { name: "Rightmove", tag: "Portal", logoPath: "/brand-icons/rightmove.png", glowClass: "from-sky-500/18 via-transparent to-transparent" },
      { name: "PrimeLocation", tag: "Portal", logoPath: "/brand-icons/primelocation.png", glowClass: "from-violet-500/18 via-transparent to-transparent" },
      { name: "OnTheMarket", tag: "Portal", logoPath: "/brand-icons/onthemarket.png", glowClass: "from-cyan-500/18 via-transparent to-transparent" },
      { name: "Reapit", tag: "CRM", logoPath: "/brand-icons/reapit.png", glowClass: "from-indigo-500/18 via-transparent to-transparent" },
      { name: "Street.co.uk", tag: "CRM", logoPath: "/brand-icons/street.png", glowClass: "from-emerald-500/18 via-transparent to-transparent" },
      { name: "Jupix", tag: "CRM", logoPath: "/brand-icons/jupix.png", glowClass: "from-blue-500/18 via-transparent to-transparent" },
      { name: "Alto", tag: "Agency OS", logoPath: "/brand-icons/alto.png", glowClass: "from-purple-500/18 via-transparent to-transparent" },
      { name: "Expert Agent", tag: "CRM", logoPath: "/brand-icons/expert-agent.png", glowClass: "from-amber-500/18 via-transparent to-transparent" },
      { name: "Dezrez", tag: "CRM", logoPath: "/brand-icons/dezrez.png", glowClass: "from-rose-500/18 via-transparent to-transparent" },
      { name: "MRI Software", tag: "Property Ops", logoPath: "/brand-icons/mri-software.png", glowClass: "from-slate-500/18 via-transparent to-transparent" },
      { name: "Acquaint CRM", tag: "Agency CRM", logoPath: "/brand-icons/acquaint-crm.png", glowClass: "from-teal-500/18 via-transparent to-transparent" },
    ],
  },
  {
    label: "Lettings + ops stack",
    inlineLabel: true,
    floating: true,
    items: [
      { name: "Goodlord", tag: "Lettings", logoPath: "/brand-icons/goodlord.png", glowClass: "from-violet-500/18 via-transparent to-transparent" },
      { name: "Fixflo", tag: "Maintenance", logoPath: "/brand-icons/fixflo.png", glowClass: "from-emerald-500/18 via-transparent to-transparent" },
      { name: "OpenBrix", tag: "Open data", logoPath: "/brand-icons/openbrix.png", glowClass: "from-sky-500/18 via-transparent to-transparent" },
      { name: "Vouch", tag: "Referencing", logoPath: "/brand-icons/vouch.png", glowClass: "from-cyan-500/18 via-transparent to-transparent" },
      { name: "Canopy", tag: "Renting", logoPath: "/brand-icons/canopy.png", glowClass: "from-lime-500/18 via-transparent to-transparent" },
      { name: "HomeLet", tag: "Insurance", logoPath: "/brand-icons/homelet.png", glowClass: "from-blue-500/18 via-transparent to-transparent" },
      { name: "Signable", tag: "E-sign", logoPath: "/brand-icons/signable.png", glowClass: "from-rose-500/18 via-transparent to-transparent" },
      { name: "SmartSearch", tag: "Compliance", logoPath: "/brand-icons/smartsearch.png", glowClass: "from-amber-500/18 via-transparent to-transparent" },
      { name: "Inventory Hive", tag: "Inventory", logoPath: "/brand-icons/inventory-hive.png", glowClass: "from-indigo-500/18 via-transparent to-transparent" },
      { name: "Sprift", tag: "Property data", logoPath: "/brand-icons/sprift.png", glowClass: "from-fuchsia-500/18 via-transparent to-transparent" },
      { name: "Homeflow", tag: "Property websites", logoPath: "/brand-icons/homeflow.png", glowClass: "from-slate-500/18 via-transparent to-transparent" },
      { name: "Pattinson", tag: "Auction", logoPath: "/brand-icons/pattinson.png", glowClass: "from-orange-500/18 via-transparent to-transparent" },
    ],
  },
  {
    label: "Automation + comms",
    inlineLabel: true,
    floating: true,
    items: [
      { name: "Zapier", tag: "Automation", logoPath: "/brand-icons/zapier.png", glowClass: "from-orange-500/18 via-transparent to-transparent" },
      { name: "Make", tag: "Automation", logoPath: "/brand-icons/make.png", glowClass: "from-blue-500/18 via-transparent to-transparent" },
      { name: "Twilio", tag: "Messaging", logoPath: "/brand-icons/twilio.png", glowClass: "from-rose-500/18 via-transparent to-transparent" },
      { name: "WhatsApp", tag: "Messaging", logoPath: "/brand-icons/whatsapp.png", glowClass: "from-emerald-500/18 via-transparent to-transparent" },
      { name: "HubSpot", tag: "CRM", logoPath: "/brand-icons/hubspot.png", glowClass: "from-orange-500/18 via-transparent to-transparent" },
      { name: "Pipedrive", tag: "CRM", logoPath: "/brand-icons/pipedrive.png", glowClass: "from-teal-500/18 via-transparent to-transparent" },
      { name: "Salesforce", tag: "CRM", logoPath: "/brand-icons/salesforce.png", glowClass: "from-sky-500/18 via-transparent to-transparent" },
      { name: "Calendly", tag: "Scheduling", logoPath: "/brand-icons/calendly.png", glowClass: "from-indigo-500/18 via-transparent to-transparent" },
      { name: "Google Calendar", tag: "Calendar", logoPath: "/brand-icons/google-calendar.png", glowClass: "from-blue-500/18 via-transparent to-transparent" },
      { name: "Microsoft 365", tag: "Inbox + docs", logoPath: "/brand-icons/microsoft-365.png", glowClass: "from-cyan-500/18 via-transparent to-transparent" },
      { name: "Xero", tag: "Accounting", logoPath: "/brand-icons/xero.png", glowClass: "from-sky-500/18 via-transparent to-transparent" },
      { name: "Mailchimp", tag: "Email", logoPath: "/brand-icons/mailchimp.png", glowClass: "from-yellow-500/18 via-transparent to-transparent" },
      { name: "Slack", tag: "Team alerts", logoPath: "/brand-icons/slack.png", glowClass: "from-fuchsia-500/18 via-transparent to-transparent" },
      { name: "Stripe", tag: "Payments", logoPath: "/brand-icons/stripe.png", glowClass: "from-violet-500/18 via-transparent to-transparent" },
    ],
  },
];

const allItems = ecosystemRows.flatMap((row) => row.items);

function EcosystemCard({ item }: { item: LogoItem }) {
  return (
    <article className="group relative w-[13.5rem] shrink-0 overflow-hidden rounded-[1.7rem] border border-slate-200/80 bg-white/82 p-3 shadow-[0_22px_54px_-36px_rgba(15,23,42,0.26)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_rgba(79,70,229,0.28)]">
      <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.glowClass}`} />
      <div className="relative flex items-center gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[1.15rem] border border-slate-200 bg-white shadow-sm">
          <Image
            src={item.logoPath}
            alt={`${item.name} logo`}
            width={34}
            height={34}
            className="h-8 w-8 object-contain"
            loading="lazy"
          />
        </div>
        <div className="min-w-0">
          <p className="truncate text-sm font-semibold text-slate-950">{item.name}</p>
          <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.tag}</p>
        </div>
      </div>
    </article>
  );
}

export default function Logos() {
  const reduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative overflow-hidden border-y border-slate-200/70 bg-[linear-gradient(180deg,#fbfcff_0%,#f3f6ff_54%,#edf3ff_100%)] py-20 sm:py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.1),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(56,189,248,0.08),transparent_22%)]" />
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 hidden w-24 bg-gradient-to-r from-[#f8faff] via-[#f8faff]/90 to-transparent md:block" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 bg-gradient-to-l from-[#edf3ff] via-[#edf3ff]/90 to-transparent md:block" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="mx-auto mb-10 max-w-4xl text-center sm:mb-12"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">
            UK real-estate ecosystem
          </p>
          <h2 className="mt-5 text-[2.3rem] font-display font-medium tracking-[-0.035em] text-slate-950 sm:text-4xl lg:text-[3.3rem]">
            The portals, CRMs, proptech tools, and automation stack modern property teams already rely on.
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg">
            Researched around UK agency workflows so the homepage shows a broader, more believable operating ecosystem instead of a tiny logo strip.
          </p>
        </motion.div>

        <div className="grid gap-3 sm:grid-cols-2 lg:hidden">
          {allItems.map((item, index) => (
            <motion.div
              key={`${item.name}-${item.tag}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.35, delay: index * 0.01 }}
            >
              <article className="relative overflow-hidden rounded-[1.45rem] border border-slate-200/80 bg-white/84 p-3.5 shadow-[0_18px_42px_-34px_rgba(15,23,42,0.22)] backdrop-blur-xl">
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${item.glowClass}`} />
                <div className="relative flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] border border-slate-200 bg-white shadow-sm">
                    <Image
                      src={item.logoPath}
                      alt={`${item.name} logo`}
                      width={30}
                      height={30}
                      className="h-7 w-7 object-contain"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0">
                    <p className="truncate text-sm font-semibold text-slate-950">{item.name}</p>
                    <p className="mt-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-slate-500">{item.tag}</p>
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>

        <div className="relative hidden flex-col gap-4 overflow-hidden md:flex">
          {ecosystemRows.map((row, rowIndex) => {
            const repeated = [...row.items, ...row.items];
            const travel = row.items.length * cardWidth;
            const animation = rowIndex % 2 === 0 ? [0, -travel] : [-travel, 0];
            const duration = rowIndex === 0 ? 34 : rowIndex === 1 ? 38 : 42;

            return (
              <div key={row.label} className="space-y-3">
                <div className="flex items-center gap-3">
                  {row.inlineLabel ? (
                    <p className="whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-600/80">
                      {row.label}
                    </p>
                  ) : (
                    <p className="px-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-indigo-600/80">
                      {row.label}
                    </p>
                  )}
                  {row.floating && (
                    <div className="h-px flex-1 bg-gradient-to-r from-indigo-200 to-transparent" />
                  )}
                </div>
                <div className="flex overflow-hidden">
                  <motion.div
                    className="flex min-w-max gap-4 py-1"
                    animate={(reduceMotion || !mounted) ? undefined : { x: animation }}
                    transition={(reduceMotion || !mounted) ? undefined : { duration, ease: "linear", repeat: Infinity }}
                  >
                    {repeated.map((item, index) => (
                      <EcosystemCard key={`${row.label}-${item.name}-${index}`} item={item} />
                    ))}
                  </motion.div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
