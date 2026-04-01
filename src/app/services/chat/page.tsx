import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, MessageSquare, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "AI Chatbots for Real Estate | oyik.realestate.ai",
  description: "Turn every property message into a qualified next step with chat automation built for real estate.",
};

export default function ChatServicePage() {
  return (
    <div className="flex flex-col w-full">
      <section className="pt-32 pb-20 bg-background relative overflow-hidden border-b border-border/50">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="flex flex-col gap-6">
            <div className="inline-flex w-fit px-4 py-1.5 rounded-full bg-secondary border border-border text-sm font-semibold text-primary">
              AI Chat • Website + Social
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[3.6rem] font-display font-semibold text-foreground leading-[1.04]">
              Turn every message into a <span className="text-gradient">qualified next step.</span>
            </h1>
            <p className="text-lg text-primary font-medium">
              Instant replies, lead qualification, and viewing booking in one chat flow.
            </p>
            <p className="text-lg text-muted-foreground">
              Best for website chat, Instagram, Facebook, and WhatsApp when your team wants faster replies without losing brand tone.
            </p>
            <div className="flex gap-4 mt-2">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-primary-foreground font-semibold shadow-[0_16px_34px_-18px_rgba(67,56,202,0.65)] hover:bg-primary/90 transition-all">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>

          <div className="relative h-[500px] rounded-[2rem] glass-card border flex flex-col p-4 shadow-2xl bg-card">
            <div className="flex items-center gap-3 p-4 border-b border-border/50">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <MessageSquare size={20} />
              </div>
              <div>
                <p className="font-semibold text-foreground">Oyik Assistant</p>
                <p className="text-xs text-primary animate-pulse">Online</p>
              </div>
            </div>
            <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
              <div className="self-end bg-secondary text-foreground p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm border border-border">
                Hi, is the 2-bed flat on Queen Street still available?
              </div>
              <div className="self-start bg-primary/10 text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[80%] text-sm border border-primary/20">
                Yes, it is. The rent is £1,800 pcm. Would you like photos first or should I offer viewing times?
              </div>
              <div className="self-end bg-secondary text-foreground p-3 rounded-2xl rounded-tr-sm max-w-[80%] text-sm border border-border">
                Please book a viewing for tomorrow afternoon.
              </div>
              <div className="self-start bg-primary/10 text-foreground p-3 rounded-2xl rounded-tl-sm max-w-[85%] text-sm border border-primary/20">
                I can offer 2:00 PM or 4:30 PM. Share your email and I’ll lock the slot in with a confirmation.
              </div>
            </div>
            <div className="p-4 border-t border-border/50">
              <div className="w-full bg-secondary border border-border rounded-full p-3 text-sm text-muted-foreground flex items-center justify-between">
                <span>Type a message...</span>
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
                  <ArrowRight size={14} className="text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-display font-bold text-center mb-12">What the chatbot handles</h2>
          <div className="space-y-6">
            {[
              "Answers property questions instantly",
              "Shows listing details and property photos in-chat",
              "Captures names, emails, numbers, and move timelines",
              "Qualifies with your custom budget and profile questions",
              "Books viewings into your calendar automatically",
              "Sends follow-up confirmations by email and SMS",
            ].map((feature, idx) => (
              <div key={idx} className="flex gap-4 p-6 glass-card rounded-2xl border border-border/50">
                <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                <p className="text-foreground text-lg">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
