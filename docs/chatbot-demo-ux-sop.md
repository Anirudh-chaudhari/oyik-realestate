# SOP: Update the Chatbot Demo and Scroll Feel

**Version:** 1.0
**Last Updated:** April 1, 2026
**Owner:** Process Owner
**Audience:** Designer or developer updating the oyik.realestate.ai website

---

## 1. Purpose
Keep the chatbot demo clean, customer-focused, and smooth on scroll.

## 2. Who Does This
Frontend designer or frontend developer.

## 3. Tools You Need
- Next.js project access
- n8n chat URL in `.env.local`
- Oyik logo asset in `public`
- Local build access

## 4. Starting Requirements
Before you start, make sure:
- [ ] The project runs locally
- [ ] The n8n chat URL is set
- [ ] The property images are ready
- [ ] The Oyik logo file exists

## 5. Step-by-Step Instructions

### Step 1: Open the chatbot section
1. Open `src/components/sections/features/ChatbotShowcase.tsx`.

**What you should see:** The file that controls the chatbot preview and live modal.

### Step 2: Check the property cards
1. Verify the card names match the conversation text.

**What you should see:** The same property names in the cards and in the chat messages.

### Step 3: Check the seeded chat
1. Verify the sample chat shows booking language.

**What you should see:** A user asks for a property and a time. The AI checks the calendar. The AI confirms the booking.

### Step 4: Check the logo areas
1. Verify the Oyik logo appears in the chatbot and footer.

**What you should see:** The logo in the chat header area and the footer bottom row.

### Step 5: Check scroll settings
1. Open `src/components/shared/SmoothScroll.tsx`.

**What you should see:** Light Lenis settings with no heavy delay.

### Step 6: Check motion-heavy chrome
1. Open `src/components/shared/Navbar.tsx`.

**What you should see:** No heavy always-on border animation.

### Step 7: Run the build
1. Run `npm run build`.

**What you should see:** A successful production build with no blocking errors.

## 6. Quality Check
After finishing, verify:
- [ ] The chatbot copy sounds customer-facing
- [ ] The property names match the booking message
- [ ] The footer shows the Oyik logo
- [ ] The site scroll feels lighter and smoother
- [ ] The local build passes

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Chat looks generic | Demo copy is builder-focused | Replace the copy with customer-facing booking language |
| Wrong property is mentioned | Card title and message text do not match | Update both places to the same property name |
| Footer logo is missing | Image file is not rendered in footer | Add the logo with `next/image` |
| Scroll feels sticky | Motion settings are too heavy | Reduce scroll damping and remove expensive effects |

## 8. Notes
**Assumptions made:**
- The audience wants a premium real estate look
- The site is edited locally only
- The n8n chat stays connected after the UI refresh

**Who to ask for help:** Process Owner

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | April 1, 2026 | Process Owner | Initial version |
