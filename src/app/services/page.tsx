import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Services for Real Estate | oyik.realestate.ai",
  description: "Choose one service or combine them for a complete AI front desk built for real estate teams.",
};

const services = [
  {
    id: "chat",
    title: "AI Chatbots",
    label: "Website + social",
    headline: "Turn every message into a booked next step.",
    subtitle: "Chat replies, lead qualification, listing discovery, and live viewing booking inside one continuous customer conversation.",
    bestFor: "Website chat, Instagram, Facebook, WhatsApp, and any high-intent enquiry channel where fast replies win trust.",
    bullets: [
      "Answers property questions instantly with listing-aware responses",
      "Shares live listing details and property photos directly inside the conversation",
      "Captures lead details, move timeline, budget, and preferred areas",
      "Qualifies with your custom profile, finance, and urgency questions",
      "Books viewings into your live calendar after checking availability",
      "Sends confirmation by email and SMS while updating the CRM automatically",
    ],
    benefit:
      "Your team spends less time repeating listing details and more time stepping into conversations that are already qualified and ready for action.",
    image: "/media/ai_chat_ui_light_1774519717225.png",
  },
  {
    id: "voice",
    title: "Voice Agents",
    label: "Inbound + outbound",
    headline: "Pick up instantly with a polished AI front desk.",
    subtitle: "Answer calls, match properties, qualify interest, and route serious prospects with a voice experience built for real estate.",
    bestFor: "Inbound call handling, outbound speed-to-lead follow-up, sales teams, lettings teams, and buyer support workflows.",
    bullets: [
      "Answers property, pricing, and availability questions in a natural voice flow",
      "Runs different scripts for inbound, outbound, sales, renting, buying, and maintenance-related calls",
      "Suggests matching listings from your live database based on the caller's preferences",
      "Captures lead details, checks availability, and books viewings directly",
      "Sends confirmation emails with booking details and reminder follow-up before meetings",
      "Updates the CRM automatically and transfers urgent calls to your team when needed",
    ],
    benefit:
      "You can cover more calls at once, respond while intent is highest, and keep every call outcome properly logged without relying on manual notes.",
    image: "/media/voice_agent_ui_light_1774519815031.png",
  },
  {
    id: "reminders",
    title: "Reminders",
    label: "Rent + viewings",
    headline: "Reduce no-shows with polite automated follow-up.",
    subtitle: "Reminders, confirmations, payment nudges, and reschedule flows delivered across every key customer channel.",
    bestFor: "Property managers, letting teams, collections workflows, and any viewing operation that loses time to chasing.",
    bullets: [
      "Sends rent due reminders automatically with timing rules that match your process",
      "Handles deposits and collection nudges without the team writing one-off messages",
      "Confirms viewings before the appointment and prompts for attendance status",
      "Launches reschedule flows if a prospect cannot attend the booked slot",
      "Adds voice reminders for urgent, high-value, or hard-to-reach appointments",
    ],
    benefit:
      "Your team cuts manual chase-ups, protects attendance rates, and sees which appointments are truly likely to happen before the day begins.",
    image: "/media/reminders_calendar_ui_light_1774519912843.png",
  },
  {
    id: "maintenance",
    title: "Maintenance Intake",
    label: "Tenant + support desk",
    headline: "Capture tenant issues properly before your team even gets involved.",
    subtitle: "Collect the problem in detail, save the case, and route urgent issues faster with one AI intake flow.",
    bestFor: "Lettings teams, property management teams, maintenance desks, and agencies handling a high volume of tenant requests.",
    bullets: [
      "Asks structured questions so the tenant explains the issue clearly and completely",
      "Captures contact details, property details, urgency level, and the problem summary in the CRM",
      "Sends confirmation emails so the tenant knows the case has been received",
      "Routes urgent cases straight to the maintenance team with the right context",
      "Sends a form link by SMS or email for non-urgent issues so tenants can upload photos and extra details",
      "Keeps the record updated so your team sees what was reported before they respond",
    ],
    benefit:
      "Instead of messy back-and-forth messages, your team gets cleaner maintenance cases, better urgency triage, and a documented intake trail from the first contact.",
    image: "/media/maintenance_intake_ui_generated.svg",
  },
  {
    id: "email",
    title: "Email Automation",
    label: "Inbox acceleration",
    headline: "Reply fast without turning your inbox into admin debt.",
    subtitle: "Intent detection, drafting, routing, and next-step automation for inboxes that carry real operational load.",
    bestFor: "High-volume sales, lettings, support, and information inboxes where slow replies lose momentum.",
    bullets: [
      "Detects intent such as viewing request, availability question, or policy enquiry",
      "Drafts replies in your brand tone with the right context already included",
      "Routes complex cases to the right team member with enough detail to act quickly",
      "Triggers booking links, follow-up workflows, and supporting documents automatically",
    ],
    benefit:
      "Hot leads keep moving even when the inbox gets busy, and your team avoids the hidden admin debt that slow replies create.",
    image: "/media/email_automation_ui_light_1774519948355.png",
  },
  {
    id: "ai-marketing",
    title: "AI Marketing",
    label: "Avatars + listing videos",
    headline: "Create listing content without the filming overhead.",
    subtitle: "AI avatars, short-form videos, listing explainers, and campaign assets made for modern property teams.",
    bestFor: "Busy agents, camera-shy teams, and agencies that want consistent content without constant filming days.",
    bullets: [
      "Creates an AI avatar presenter that can speak in your brand style",
      "Turns listing photos and property details into short marketing videos",
      "Builds explainers for renters, buyers, landlords, and new enquiries",
      "Exports in formats designed for reels, shorts, paid ads, and social posts",
    ],
    benefit:
      "You scale your video presence and listing content output without pulling the sales team into a full studio workflow every week.",
    image: "/media/ai_marketing_ui_light_1774519968668.png",
  },
];

export default function ServicesPage() {
  return (
    <div className="flex w-full flex-col pb-24">
      <section className="relative overflow-hidden border-b border-border/50 bg-background pb-24 pt-32">
        <div className="absolute inset-0 bg-[url('/media/ai_marketing_ui_light_1774519968668.png')] bg-cover bg-center opacity-10 mix-blend-screen" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background to-background" />

        <div className="container relative z-10 mx-auto max-w-4xl px-4 pt-10 text-center sm:px-6 lg:px-8">
          <h1 className="page-title mb-5">
            <span className="text-gradient">Services</span>
          </h1>
          <p className="page-subtitle mx-auto">
            Choose one service or combine them for a complete AI front desk built for real estate.
          </p>
        </div>
      </section>

      <section className="bg-background py-20">
        <div className="container mx-auto flex flex-col gap-24 px-4 sm:px-6 lg:gap-32 lg:px-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`grid items-center gap-12 lg:grid-cols-2 lg:gap-16 ${idx % 2 !== 0 ? "lg:[&>div:first-child]:order-last" : ""}`}
            >
              <div className="flex flex-col gap-6">
                <div className="mb-1 inline-flex w-fit items-center gap-4 rounded-full border border-border bg-secondary px-5 py-3 text-primary shadow-lg">
                  <span className="font-display text-lg font-semibold text-foreground sm:text-xl">{service.title}</span>
                  <span className="h-1.5 w-1.5 rounded-full bg-primary/40" />
                  <span className="text-[11px] font-semibold uppercase tracking-[0.24em] text-muted-foreground sm:text-xs">
                    {service.label}
                  </span>
                </div>

                <h2 className="text-4xl font-display font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.2rem]">
                  {service.headline}
                </h2>

                <p className="text-lg font-medium leading-relaxed text-primary sm:text-xl">{service.subtitle}</p>

                <p className="text-lg leading-relaxed text-muted-foreground">
                  <strong className="text-foreground">Best for:</strong> {service.bestFor}
                </p>

                <ul className="mt-2 space-y-4">
                  {service.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <CheckCircle2 className="mt-0.5 h-6 w-6 shrink-0 text-primary" />
                      <span className="text-lg text-muted-foreground">{bullet}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-4 rounded-2xl border border-primary/15 bg-secondary/80 p-6 shadow-[0_20px_50px_-34px_rgba(67,56,202,0.45)] backdrop-blur-md">
                  <p className="text-lg font-medium leading-relaxed text-primary">&ldquo;{service.benefit}&rdquo;</p>
                </div>

                <Link
                  href={`/services/${service.id}`}
                  className="group mt-2 inline-flex w-fit items-center gap-3 rounded-full bg-primary px-7 py-4 text-base font-semibold text-primary-foreground shadow-[0_16px_34px_-18px_rgba(67,56,202,0.65)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary/92 hover:shadow-[0_20px_40px_-18px_rgba(67,56,202,0.72)]"
                >
                  See full details
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/14 transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </Link>
              </div>

              <div className="group relative flex aspect-square items-center justify-center overflow-hidden rounded-3xl bg-card glass-card glow-border sm:aspect-[4/3]">
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-[0.8] transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: `url(${service.image})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 z-10 rounded-2xl border border-border bg-background/60 p-6 shadow-2xl backdrop-blur-xl">
                  <div className="mb-2 flex items-center gap-4">
                    <div className="h-3 w-3 rounded-full bg-primary animate-pulse" />
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-primary">Live Demo</div>
                  </div>
                  <p className="mb-3 text-lg font-display font-semibold text-foreground">{service.title}</p>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-secondary">
                    <div className="h-full w-2/3 animate-[pulse_2s_ease-in-out_infinite] bg-gradient-to-r from-primary to-accent" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container mx-auto mt-16 px-4">
        <div className="relative overflow-hidden rounded-3xl border border-primary/20 bg-secondary p-12 text-center shadow-[0_20px_80px_-40px_rgba(67,56,202,0.45)] lg:p-20">
          <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
          <h2 className="relative z-10 mb-6 text-4xl font-display font-bold text-foreground lg:text-5xl">
            Ready to automate your front desk?
          </h2>
          <p className="relative z-10 mx-auto mb-10 max-w-2xl text-xl text-muted-foreground">
            Book a demo and we&apos;ll map the exact workflows your team wants to automate first.
          </p>
          <Link
            href="/contact"
            className="relative z-10 inline-flex items-center gap-3 rounded-full bg-primary px-10 py-5 text-lg font-bold text-primary-foreground shadow-[0_18px_38px_-18px_rgba(67,56,202,0.62)] transition-all hover:scale-105 hover:bg-primary/90"
          >
            Book a personalized demo
          </Link>
        </div>
      </section>
    </div>
  );
}
