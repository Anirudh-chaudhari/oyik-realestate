# Oyik.AI Website

Premium, fully functional, production-ready website for Oyik.AI — the intelligence behind every real estate decision.
Built with Next.js 14 App Router, Tailwind CSS, Framer Motion, and shadcn/ui.

## Features
- **Premium Aesthetics**: Dark luxury theme featuring a deep space black background with electric cyan and deep violet accents.
- **Advanced Animations**: Contains complex Framer Motion transitions, GSAP-ready setups, infinite marquees, and dynamic hero particles.
- **Detailed Pages**: 
  - Home (Hero, Features, Bento Products Grid, How it Works, Social Proof Testimonials, Final CTA)
  - 5 Dedicated Service Subpages (Chat, Voice, Reminders, Email, AI Marketing)
  - About Us
  - Contact / Demo Booking form (with tabs for form and Calendly embed)
  - Legal Pages (Privacy, Terms, Cookies)
- **SEO Ready**: `sitemap.ts`, `robots.ts`, individual page `Metadata` exports.

## How to Run Locally

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This website is fully configured and ready to be deployed to **Vercel**. 

1. Ensure the code is pushed to a Git repository (GitHub/GitLab/BitBucket).
2. Log into Vercel and **Import Project**.
3. Select the `oyik-ai-site` folder (if inside a monorepo) or root.
4. Vercel will automatically detect `Next.js` and use default build settings. A `vercel.json` is also included for explicitness.
5. Click **Deploy**.
