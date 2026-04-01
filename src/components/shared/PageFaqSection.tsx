"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";

type FaqItem = {
  question: string;
  answer: string;
};

type FaqContent = {
  eyebrow: string;
  title: string;
  items: FaqItem[];
};

const faqByRoute: Record<string, FaqContent> = {
  "/": {
    eyebrow: "Homepage FAQ",
    title: "Questions visitors usually have after seeing the full oyik offering.",
    items: [
      {
        question: "Can I start with one AI service first?",
        answer: "Yes. Most teams start with chat or voice first, then add booking, reminders, maintenance, or email once the first workflow is stable.",
      },
      {
        question: "Do the voice and chat tools work together?",
        answer: "That is the point of the platform direction. The same lead context, booking logic, and follow-up actions can carry across channels instead of living in silos.",
      },
      {
        question: "Is this designed for premium real estate brands?",
        answer: "Yes. The positioning, conversational tone, and front-end experience are all built to feel high-end rather than cheap or overly robotic.",
      },
      {
        question: "How do I see a live walkthrough?",
        answer: "Use the Book Demo route to open the booking page and schedule a focused walkthrough for your team.",
      },
    ],
  },
  "/about": {
    eyebrow: "About FAQ",
    title: "More context on who oyik is for and how the approach works.",
    items: [
      {
        question: "Who is oyik built for?",
        answer: "The platform is aimed at real estate teams that need premium lead handling, cleaner operations, and a more responsive client experience.",
      },
      {
        question: "Is oyik a software tool or a service layer?",
        answer: "It is presented as both a product layer and an implementation partner, helping teams deploy the workflows instead of only selling abstract software.",
      },
      {
        question: "What makes the approach different from generic AI tools?",
        answer: "The flows are tailored for property enquiries, viewings, landlord updates, reminders, maintenance intake, and real handoff requirements.",
      },
    ],
  },
  "/blog": {
    eyebrow: "Blog FAQ",
    title: "Common questions readers have after browsing the content.",
    items: [
      {
        question: "Will the blog focus on real estate workflows or general AI news?",
        answer: "The strongest fit is practical real estate automation guidance, rollout ideas, and examples that property teams can act on.",
      },
      {
        question: "Can blog readers book a demo directly?",
        answer: "Yes. The Book Demo page is the right destination when a reader wants to move from education into a live walkthrough.",
      },
      {
        question: "Will blog insights map to the actual product pages?",
        answer: "That should remain the goal so readers can move from an idea in the blog to the matching service page without a disconnect.",
      },
    ],
  },
  "/contact": {
    eyebrow: "Contact FAQ",
    title: "Short answers before someone sends a message or books time.",
    items: [
      {
        question: "Should I use the form or book a demo?",
        answer: "Book a demo when you want a quick walkthrough and clearer next steps. Use the form when you want to describe your setup first.",
      },
      {
        question: "What details help the team respond faster?",
        answer: "Current lead volume, tools already in use, key bottlenecks, and which workflows matter most will make the first response more useful.",
      },
      {
        question: "Can I ask about one service only?",
        answer: "Yes. You do not need to scope the entire platform at once.",
      },
    ],
  },
  "/book-demo": {
    eyebrow: "Book Demo FAQ",
    title: "What prospects usually want to know before scheduling a session.",
    items: [
      {
        question: "What will the demo cover?",
        answer: "The session focuses on live real estate workflows like chat, voice, booking, reminders, and CRM-style handoff depending on your priorities.",
      },
      {
        question: "Do I need technical preparation before booking?",
        answer: "No. It is helpful to know your current tools and pain points, but the walkthrough can start from your existing process.",
      },
      {
        question: "Can the demo be tailored for my agency?",
        answer: "Yes. The strongest version of the demo is shaped around your enquiry flow, lead response process, and service mix.",
      },
    ],
  },
  "/how-it-works": {
    eyebrow: "How It Works FAQ",
    title: "Clarifying how the automation layer is meant to operate.",
    items: [
      {
        question: "Does every enquiry go through the same flow?",
        answer: "No. The point is to route buyers, renters, landlords, maintenance requests, and follow-up conversations through different logic paths.",
      },
      {
        question: "Where does the lead data go?",
        answer: "The site messaging positions the system around CRM-ready handoff, confirmation flows, and internal follow-up actions after qualification.",
      },
      {
        question: "Can humans still step in quickly?",
        answer: "Yes. High-intent or urgent conversations should escalate cleanly instead of trapping a prospect inside automation.",
      },
    ],
  },
  "/faq": {
    eyebrow: "FAQ Page",
    title: "A second quick layer of answers for visitors already exploring the FAQ route.",
    items: [
      {
        question: "Is this different from the main FAQ content?",
        answer: "Yes. This footer section acts like a contextual quick-answer strip tied to the route you are on.",
      },
      {
        question: "Where should deeper pre-sales questions go?",
        answer: "Complex rollout or pricing conversations should move to the contact or book-demo flow instead of staying inside static FAQs.",
      },
      {
        question: "Will service pages have their own FAQs too?",
        answer: "Yes. Each service route can surface questions that match the specific workflow shown on that page.",
      },
    ],
  },
  "/services": {
    eyebrow: "Services FAQ",
    title: "Quick guidance for people comparing the available automation categories.",
    items: [
      {
        question: "Do I need all services at once?",
        answer: "No. The services can be approached as a phased rollout rather than a single large deployment.",
      },
      {
        question: "Which service usually delivers value first?",
        answer: "That depends on your bottleneck, but chat and voice usually stand out because they affect speed-to-lead immediately.",
      },
      {
        question: "Can services share one operating layer?",
        answer: "Yes. The strongest product story is that these services work as one connected AI desk instead of isolated tools.",
      },
    ],
  },
  "/services/voice": {
    eyebrow: "Voice FAQ",
    title: "Answers tied to the voice-agent experience on this page.",
    items: [
      {
        question: "Are the voice players on this page connected to a backend?",
        answer: "No. The samples are front-end demos that let visitors hear the tone and flow without wiring a full telephony backend.",
      },
      {
        question: "What kinds of calls can the voice model handle?",
        answer: "The voice positioning covers sales, lettings, viewing coordination, landlord updates, and maintenance triage.",
      },
      {
        question: "Can calls trigger booking and CRM actions?",
        answer: "That is part of the intended system story, with calendar checks, confirmations, reminders, and logged handoff after qualification.",
      },
    ],
  },
  "/services/chat": {
    eyebrow: "Chat FAQ",
    title: "Questions that match the website-chatbot service page.",
    items: [
      {
        question: "Can the chatbot show actual property options?",
        answer: "Yes. The product direction is to surface live-style listing cards, pricing, and next-step actions inside the chat experience.",
      },
      {
        question: "Does the chatbot only answer FAQs?",
        answer: "No. It is positioned as a lead qualification and booking layer, not just a static support widget.",
      },
      {
        question: "Can the chat hand over to staff when intent is high?",
        answer: "Yes. Clean handoff with context is one of the strongest parts of the overall experience.",
      },
    ],
  },
  "/services/reminders": {
    eyebrow: "Reminders FAQ",
    title: "Short answers for reminder automation prospects.",
    items: [
      {
        question: "What reminders can this cover?",
        answer: "The positioning includes viewings, rent, deposit, and follow-up reminders across the channels your team chooses to use.",
      },
      {
        question: "Will reminders feel robotic?",
        answer: "They should not. The brand tone should stay polished and consistent with the rest of the premium client journey.",
      },
      {
        question: "Can reminders reduce no-shows?",
        answer: "That is exactly the value story: fewer missed appointments and less manual chasing.",
      },
    ],
  },
  "/services/email": {
    eyebrow: "Email FAQ",
    title: "Contextual answers for the email automation page.",
    items: [
      {
        question: "Does email automation replace the team?",
        answer: "No. It is meant to accelerate replies, drafts, and follow-up so staff spend less time on repetitive inbox work.",
      },
      {
        question: "What kinds of messages can be handled?",
        answer: "Enquiries, booking details, document requests, and routine follow-ups are all part of the fit.",
      },
      {
        question: "Can email stay aligned with property context?",
        answer: "Yes. The strongest use case is when the email flow inherits the same lead and booking context collected elsewhere.",
      },
    ],
  },
  "/services/maintenance": {
    eyebrow: "Maintenance FAQ",
    title: "Questions tied to the maintenance intake workflow.",
    items: [
      {
        question: "Can maintenance requests be triaged automatically?",
        answer: "Yes. The product story is about capturing issue details, checking urgency, and routing the case into the right workflow fast.",
      },
      {
        question: "Does it help reduce back-and-forth?",
        answer: "That is one of the main reasons to use it, especially when teams lose time chasing missing details.",
      },
      {
        question: "Can urgent issues be escalated?",
        answer: "Yes. The system should distinguish urgency so teams can act quickly when a request needs immediate attention.",
      },
    ],
  },
  "/services/ai-marketing": {
    eyebrow: "AI Marketing FAQ",
    title: "Questions prospects usually have around content creation and listing media.",
    items: [
      {
        question: "What kind of content can AI marketing create?",
        answer: "The page positioning supports listing explainers, avatar-led videos, and social-ready property content.",
      },
      {
        question: "Is this meant for one-off campaigns only?",
        answer: "No. The bigger value is consistent property marketing output without relying on a heavy production cycle every time.",
      },
      {
        question: "Can this support premium-looking property brands?",
        answer: "Yes. The visual and messaging direction should stay polished and brand-safe rather than feeling mass-produced.",
      },
    ],
  },
  "/privacy": {
    eyebrow: "Privacy FAQ",
    title: "A simpler summary layer for the privacy route.",
    items: [
      {
        question: "Where should privacy concerns be directed?",
        answer: "The privacy page should remain the source of truth, while detailed questions should be escalated through the contact route.",
      },
      {
        question: "Does this replace the legal policy?",
        answer: "No. This section is only a readable summary and does not override the legal copy on the page.",
      },
      {
        question: "Can product-specific data questions be discussed in a demo?",
        answer: "Yes, but the formal legal wording still belongs in the policy pages and any signed agreements.",
      },
    ],
  },
  "/terms": {
    eyebrow: "Terms FAQ",
    title: "Short clarifications for visitors reading the terms page.",
    items: [
      {
        question: "Are these FAQ answers the legal terms?",
        answer: "No. They are plain-language support only. The full terms on the page remain the controlling text.",
      },
      {
        question: "Where do commercial questions belong?",
        answer: "Pre-sales and commercial details are better handled through contact or a live demo discussion.",
      },
      {
        question: "Will the terms change over time?",
        answer: "Potentially, which is why the full terms page is the correct reference point rather than a summary card.",
      },
    ],
  },
  "/cookies": {
    eyebrow: "Cookies FAQ",
    title: "A quick guide for visitors who want the plain version first.",
    items: [
      {
        question: "Does this section replace the cookie policy?",
        answer: "No. It is just a quick-reading companion to the full cookie page.",
      },
      {
        question: "Why include this on the page at all?",
        answer: "Because visitors often want a simpler explanation before they read the full legal wording.",
      },
      {
        question: "Where should technical consent questions go?",
        answer: "Those should be handled through the site owner or legal contact path if the policy itself does not answer them clearly.",
      },
    ],
  },
  "/thank-you": {
    eyebrow: "Next Step FAQ",
    title: "Helpful answers for visitors who have already completed an action.",
    items: [
      {
        question: "What happens after this page?",
        answer: "The next step depends on what was submitted, but usually it means the team will review the request and continue the conversation from there.",
      },
      {
        question: "Can I still book a demo after submitting a form?",
        answer: "Yes. If the thank-you page follows a message, booking a demo can still be the fastest way to keep momentum.",
      },
      {
        question: "Should I expect an instant reply?",
        answer: "Not always. A live booking is the fastest path when immediate discussion matters.",
      },
    ],
  },
};

const fallbackFaq: FaqContent = {
  eyebrow: "Quick FAQ",
  title: "A few route-aware answers to keep visitors moving.",
  items: [
    {
      question: "Can I book a live walkthrough?",
      answer: "Yes. The Book Demo route is the fastest way to turn page interest into a real conversation.",
    },
    {
      question: "Is this built specifically for real estate teams?",
      answer: "Yes. The site positions the product around property workflows rather than generic business automation.",
    },
    {
      question: "Can I start with one use case first?",
      answer: "Absolutely. Most teams begin with one high-friction workflow and expand once the first rollout proves value.",
    },
  ],
};

function resolveFaq(pathname: string): FaqContent {
  return faqByRoute[pathname] ?? fallbackFaq;
}

export default function PageFaqSection() {
  const pathname = usePathname() || "/";
  const content = useMemo(() => resolveFaq(pathname), [pathname]);
  const [openIndex, setOpenIndex] = useState(0);

  useEffect(() => {
    setOpenIndex(0);
  }, [pathname]);

  return (
    <section className="relative overflow-hidden border-t border-slate-200/70 bg-[linear-gradient(180deg,#f8faff_0%,#eef3ff_100%)] py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.08),transparent_28%)]" />

      <div className="container relative mx-auto px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-indigo-600">
              {content.eyebrow}
            </p>
            <h2 className="mt-4 text-4xl font-display font-medium tracking-[-0.04em] text-slate-950 sm:text-5xl">
              FAQ
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 sm:text-xl">
              {content.title}
            </p>
          </div>

          <div className="mx-auto mb-10 h-px w-full max-w-2xl bg-[linear-gradient(90deg,transparent,rgba(79,70,229,0.24),transparent)]" />

          <div className="space-y-4">
            {content.items.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div
                  key={item.question}
                  className="overflow-hidden rounded-[1.8rem] border border-white/80 bg-white/88 shadow-[0_24px_60px_-40px_rgba(15,23,42,0.22)] backdrop-blur-xl"
                >
                  <button
                    type="button"
                    suppressHydrationWarning
                    onClick={() => setOpenIndex(isOpen ? -1 : index)}
                    className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="text-lg font-medium text-slate-950">{item.question}</span>
                    <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.22 }}>
                      <ChevronDown className="h-5 w-5 text-slate-500" />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-base leading-relaxed text-slate-600">
                          {item.answer}
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
