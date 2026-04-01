# oyik.realestate.ai - Project Summary

**Last Updated:** 2026-04-01 (Asia/Calcutta)

## Snapshot

- App: Next.js site in `oyik-ai-site`
- Brand: `Oyik` + `RealEstate.ai`
- Local status: `npm run build` passes
- Primary deploy target: Netlify
- Git remote: `origin` -> `git@github.com:neeshu144035/oyik-ai-site.git`

## Current Homepage State

- Premium hero, product stack, ecosystem logos, voice showcase, chatbot showcase, testimonials, CTA, and contact form are live.
- The site is mobile responsive and the thank-you page stays chromeless.
- Footer now includes the Oyik logo again in both the main brand block and bottom bar.

## Chatbot Status

- `@n8n/chat` is installed and wired in.
- Live chat uses `NEXT_PUBLIC_N8N_CHAT_URL`.
- Homepage chatbot preview is customer-facing, not builder-facing.
- Preview flow now starts with a user asking for a Leicester property, then the AI shows matching options, then booking continues in-chat.
- The live modal was reduced into a centered, compact real-chat layout with only the Oyik chat header and live conversation area.
- Live chat header and theme are styled to match the premium Oyik brand.

## Motion and Smoothness

- Smooth scrolling is handled through `ReactLenis`.
- Global route transitions were softened for a more premium feel.
- Navbar heavy border tracing was removed in favor of a lighter glow treatment.
- Background scrolling and chat sizing were tuned to feel smoother and less sticky.

## Key Files

- `src/components/sections/features/ChatbotShowcase.tsx`
- `src/components/shared/SmoothScroll.tsx`
- `src/components/shared/AppShell.tsx`
- `src/components/shared/Navbar.tsx`
- `src/components/shared/Footer.tsx`
- `src/app/globals.css`
- `src/app/layout.tsx`

## Local Docs

- `docs/chatbot-demo-ux-sop.md` contains the repeatable local process for maintaining the chatbot demo and smooth-scroll setup.

## Deployment Notes

- Netlify site is linked locally via `.netlify/state.json`
- Production site used in this workspace: `oyik-ai-site-v2`
