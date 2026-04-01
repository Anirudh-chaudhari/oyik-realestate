import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Camera, CheckCircle2, Mail, TriangleAlert, Wrench } from "lucide-react";

export const metadata: Metadata = {
  title: "Maintenance Intake Automation | oyik.realestate.ai",
  description: "AI maintenance intake for real estate teams that need clearer issue capture, faster triage, and better CRM logging.",
};

export default function MaintenanceServicePage() {
  return (
    <div className="flex w-full flex-col">
      <section className="relative overflow-hidden border-b border-border/50 bg-background pb-20 pt-32">
        <div className="absolute right-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
        <div className="container relative z-10 mx-auto grid items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-semibold text-emerald-700">
              Maintenance Intake - Tenant + Support
            </div>
            <h1 className="text-4xl font-display font-semibold leading-[1.04] text-foreground sm:text-5xl lg:text-[3.6rem]">
              Capture tenant issues clearly and <span className="text-gradient">route them with the right urgency.</span>
            </h1>
            <p className="text-lg font-medium text-primary">
              The AI agent collects the issue in detail, stores the case in your CRM, and decides whether the request needs urgent escalation or a guided self-service follow-up.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for property managers and letting teams that receive a steady flow of maintenance calls, chats, and messages and need cleaner triage before a human steps in.
            </p>
            <div className="mt-2 flex gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-8 py-4 font-semibold text-white shadow-[0_16px_34px_-18px_rgba(5,150,105,0.5)] transition-all hover:bg-emerald-700"
              >
                See Maintenance Demo
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div className="relative flex h-[470px] flex-col overflow-hidden rounded-[2rem] border bg-card p-6 shadow-2xl">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(16,185,129,0.14),transparent_35%),linear-gradient(180deg,rgba(255,255,255,0.96),rgba(248,250,252,0.96))]" />
            <div className="relative z-10 flex items-center justify-between border-b border-border/60 pb-4">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-700">
                  <Wrench className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-semibold text-foreground">Maintenance Intake Desk</p>
                  <p className="text-xs font-mono uppercase tracking-[0.28em] text-emerald-700">CRM synced</p>
                </div>
              </div>
              <div className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-emerald-700">
                Live triage
              </div>
            </div>

            <div className="relative z-10 mt-6 grid gap-4">
              <div className="rounded-2xl border border-border bg-background/70 p-4">
                <p className="mb-2 text-xs font-mono uppercase tracking-[0.28em] text-muted-foreground">Issue summary</p>
                <p className="text-sm text-foreground">
                  &ldquo;The tenant reports a water leak under the kitchen sink and says the floor is starting to get wet.&rdquo;
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-amber-200 bg-amber-50/80 p-4">
                  <div className="mb-3 flex items-center gap-2 text-amber-700">
                    <TriangleAlert className="h-4 w-4" />
                    <span className="text-xs font-mono uppercase tracking-[0.24em]">Priority check</span>
                  </div>
                  <p className="text-sm font-medium text-foreground">Potential leak damage detected. Escalate to maintenance team now.</p>
                </div>

                <div className="rounded-2xl border border-border bg-background/70 p-4">
                  <div className="mb-3 flex items-center gap-2 text-primary">
                    <Mail className="h-4 w-4" />
                    <span className="text-xs font-mono uppercase tracking-[0.24em]">Auto follow-up</span>
                  </div>
                  <p className="text-sm text-foreground">Confirmation email sent with case number, property address, and next-step note.</p>
                </div>
              </div>

              <div className="rounded-2xl border border-border bg-background/70 p-4">
                <div className="mb-3 flex items-center gap-2 text-primary">
                  <Camera className="h-4 w-4" />
                  <span className="text-xs font-mono uppercase tracking-[0.24em]">Non-urgent path</span>
                </div>
                <p className="text-sm text-foreground">
                  If the issue is not urgent, the agent sends a secure link by SMS or email so the tenant can add more detail and upload issue photos before a technician is assigned.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary py-24">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="mb-12 text-center text-3xl font-display font-bold text-foreground">What the maintenance agent handles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              "Asks follow-up questions so the tenant describes the problem clearly",
              "Captures tenant details, property details, urgency, and issue summary in the CRM",
              "Sends confirmation by email so the tenant knows the case was received",
              "Routes urgent cases straight to the maintenance team with the intake details attached",
              "Sends a form link by SMS or email for non-urgent cases so tenants can upload photos",
              "Keeps the case record updated so your team sees the full story before replying",
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 rounded-2xl border border-border/50 bg-card p-6 shadow-sm">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-700" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
