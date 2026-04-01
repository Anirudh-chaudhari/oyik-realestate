import { Metadata } from "next";
import Link from "next/link";
import { BellRing, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Automated Reminders | oyik.realestate.ai",
  description: "Automated reminder flows for rent, deposits, and viewings across SMS, email, WhatsApp, and voice.",
};

export default function RemindersServicePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-primary">
              Reminders • Rent + Deposits + Viewings
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-display font-semibold text-foreground leading-[1.04]">
              Reduce no-shows with <span className="text-gradient-secondary">polite automation.</span>
            </h1>
            <p className="text-lg text-primary font-medium">
              Timely nudges, confirmations, and reschedules across every key channel.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for letting teams and property managers who want fewer missed appointments and less manual chasing.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold shadow-[0_16px_34px_-18px_rgba(67,56,202,0.65)] hover:bg-primary/90 transition-all">
                Setup Reminders
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative h-[450px] rounded-[2rem] glass-card border flex flex-col p-8 shadow-2xl bg-card">
            <h3 className="text-xl font-display font-semibold mb-6">Viewing Auto-Flow</h3>
            <div className="relative border-l-2 border-primary/30 ml-3 space-y-8">
              <div className="relative">
                <div className="absolute -left-6 bg-card border-2 border-primary w-4 h-4 rounded-full shadow-[0_0_10px_rgba(67,56,202,0.5)]" />
                <div className="pl-4">
                  <p className="text-xs font-bold font-mono text-muted-foreground mb-1">T-24 Hours</p>
                  <div className="bg-secondary p-3 rounded-xl border border-border text-sm max-w-xs">
                    "Reminder: your viewing at 123 Luxury Lane is tomorrow at 4 PM. Reply YES to confirm."
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-6 bg-card border-2 border-primary w-4 h-4 rounded-full shadow-[0_0_10px_rgba(67,56,202,0.5)]" />
                <div className="pl-4">
                  <p className="text-xs font-bold font-mono text-muted-foreground mb-1">T-2 Hours</p>
                  <div className="bg-secondary p-3 rounded-xl border border-border text-sm max-w-xs">
                    "Your viewing is in 2 hours. Tap here for directions and your agent contact."
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -left-6 bg-card border-2 border-muted w-4 h-4 rounded-full" />
                <div className="pl-4 opacity-50">
                  <p className="text-xs font-bold font-mono text-muted-foreground mb-1">T-15 Mins</p>
                  <div className="bg-secondary p-3 rounded-xl border border-border text-sm max-w-xs">
                    "Your agent has arrived at the property."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">Common use cases</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Rent due and late rent reminders",
              "Deposit collection notifications",
              "Upcoming viewing confirmations",
              "Reschedule flows when a prospect cannot attend",
              "Voice call reminders for urgent or high-value cases",
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 glass-card rounded-2xl border border-border/50">
                <BellRing className="w-6 h-6 text-primary shrink-0" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
