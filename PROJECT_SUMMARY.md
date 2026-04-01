# oyik.realestate.ai - Project Summary

**Last Updated:** 2026-04-01 (Asia/Calcutta)

## Snapshot

- App: Next.js site in `oyik-ai-site`
- Brand: `Oyik` + `RealEstate.ai`
- Header: centered dynamic-island navbar with `Home`, `About`, `Service`, `Blog`, and `Call Us`
- `Blog` stays visible but non-clickable
- `Call Us` dials `+44 7352 328646`

## Homepage Status

- Local preview verified on `http://localhost:3000`
- `npm run build` passes
- Homepage now uses the newer Oyik logo, updated section spacing, and the revised feature stack

## Latest Approved Changes

- Voice flagship:
  - right-side desk card lowered slightly for better balance
  - left-side chips and `Book a live demo` CTA removed so the orchestration card sits higher
- Chat flagship:
  - left chatbot mockup re-centered and lifted slightly
  - mockup width/card sizing adjusted to feel more natural
  - lower chatbot CTA replaced with a centered animated trigger
  - chatbot now opens in a centered modal with blurred backdrop instead of inside the mockup
  - modal supports `NEXT_PUBLIC_N8N_CHAT_URL` for a live n8n chat embed
- Model stack:
  - scrolling logo viewport narrowed so horizontal motion reads earlier
- Footer FAQ strip:
  - small label replaced by a larger `FAQ` heading with route-aware eyebrow text

## Key Files

- `src/components/shared/Navbar.tsx`
- `src/components/sections/features/VoiceShowcase.tsx`
- `src/components/sections/features/ChatbotShowcase.tsx`
- `src/components/sections/Logos.tsx`
- `src/components/shared/PageFaqSection.tsx`
- `.env.example`

## Deployment Notes

- Production deploy: `https://oyik-ai-site-v2.netlify.app` on 2026-04-01
- Netlify site is linked locally via `.netlify/state.json`
- Git remote: `origin` -> `git@github.com:neeshu144035/oyik-ai-site.git`
