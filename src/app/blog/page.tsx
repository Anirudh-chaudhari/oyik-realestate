import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | oyik.realestate.ai",
  description: "Updates, launch notes, and real estate AI insights from oyik.realestate.ai.",
};

const posts = [
  {
    title: "Why real estate teams are replacing slow follow-up with AI",
    description:
      "A quick look at how agencies are using AI to respond faster, qualify leads better, and keep viewings moving without losing the premium feel.",
  },
  {
    title: "The luxury real estate client journey needs instant response",
    description:
      "High-intent buyers and tenants expect immediate, polished communication. This post breaks down where speed matters most.",
  },
  {
    title: "What an AI operating layer actually does for an agency",
    description:
      "From calls and chat to reminders and maintenance intake, here is the practical side of a modern AI setup for property businesses.",
  },
];

export default function BlogPage() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-36 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(63,55,184,0.12),transparent_32%),linear-gradient(180deg,rgba(248,245,239,0.9),rgba(244,246,251,0.96))]" />
      <div className="relative mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-primary/80">
            Oyik Journal
          </p>
          <h1 className="page-title">
            Notes, launches, and ideas for modern real estate AI.
          </h1>
          <p className="page-subtitle mt-6">
            This local blog page is in place so the new header navigation works cleanly on localhost. We can turn it
            into a full content hub whenever you want.
          </p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="glass-card rounded-[2rem] p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-primary/75">
                Coming soon
              </p>
              <h2 className="mt-4 text-2xl font-display font-medium text-foreground">
                {post.title}
              </h2>
              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {post.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-4 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5"
          >
            Back to home
          </Link>
          <a
            href="tel:+447352328646"
            className="inline-flex items-center justify-center rounded-full border border-border bg-white/80 px-7 py-3 text-sm font-semibold text-foreground transition-colors duration-300 hover:border-primary hover:text-primary"
          >
            Contact Us: +44 7352 328646
          </a>
        </div>
      </div>
    </section>
  );
}
