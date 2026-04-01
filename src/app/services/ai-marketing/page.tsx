import { Metadata } from "next";
import Link from "next/link";
import { Video, CheckCircle2, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Marketing and Avatars | oyik.realestate.ai",
  description: "AI avatar videos and listing content built for real estate teams that want premium output without studio overhead.",
};

export default function MarketingServicePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-accent">
              AI Marketing • Avatars + Videos
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-display font-semibold text-foreground leading-[1.04]">
              Property videos <span className="text-gradient">without filming.</span>
            </h1>
            <p className="text-lg text-primary font-medium">
              Build premium listing content and AI presenters without a studio workflow.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for busy agents and content-led teams that want consistent reels, explainers, and branded listing videos.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-4 text-accent-foreground font-semibold shadow-[0_16px_34px_-18px_rgba(67,56,202,0.45)] hover:bg-accent/90 transition-all">
                See Avatar Demo
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative aspect-[9/16] max-w-sm mx-auto rounded-[2rem] glass-card border p-2 shadow-2xl bg-card">
            <div className="w-full h-full rounded-[1.5rem] bg-secondary overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('/media/ai_marketing_ui_light_1774519968668.png')] bg-cover bg-center opacity-40 mix-blend-overlay" />
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] aspect-[3/4] bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
              <div className="absolute bottom-4 left-4 right-4 z-20">
                <div className="bg-background/80 backdrop-blur-md border border-border/50 rounded-xl p-3 text-center">
                  <p className="text-xs font-semibold text-accent mb-1 animate-pulse flex items-center justify-center gap-1">
                    <Video size={10} /> Live AI Avatar Generation
                  </p>
                  <p className="text-sm font-medium">"Welcome to this 4-bedroom home in the heart of the city..."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">What AI marketing does</h2>
          <div className="grid sm:grid-cols-2 gap-6">
            {[
              "Creates an AI avatar that presents your brand",
              "Turns photos and listing details into short videos",
              "Builds explainers for renters, buyers, and landlords",
              "Generates neighbourhood and listing highlight content",
              "Exports formats for Reels, TikTok, Shorts, and ads",
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 glass-card rounded-2xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-accent shrink-0" />
                <p className="text-foreground">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
