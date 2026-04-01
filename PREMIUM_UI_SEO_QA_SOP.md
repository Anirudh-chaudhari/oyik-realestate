# SOP: Premium UI and SEO QA Review

**Version:** 1.0
**Last Updated:** 2026-03-28
**Owner:** Process Owner
**Audience:** Anyone reviewing the Oyik website before launch

---

## 1. Purpose
This SOP shows how to check the premium homepage design and the SEO basics before release.

## 2. Who Does This
This process is for a reviewer, founder, or developer.

## 3. Tools You Need
- Local browser
- Access to the `oyik-ai-site` project
- Terminal access
- Lighthouse in Chrome DevTools

## 4. Starting Requirements
Before you start, make sure:
- [ ] The latest code is saved
- [ ] The local site is running
- [ ] The browser cache is refreshed
- [ ] You can open the home page and services page

## 5. Step-by-Step Instructions

### Step 1: Open the home page
1. Open `http://localhost:3000`.

**What you should see:** The home page loads without layout breaks.

### Step 2: Check the floating island nav
1. Look at the top of the page.
2. Scroll down slowly.

**What you should see:** The navigation stays visible, centered, and smooth.

### Step 3: Check the hero heading
1. Look at the main headline.
2. Wait for the last word to rotate.

**What you should see:** The rotating word changes smoothly and the headline stays aligned.

### Step 4: Check the homepage service stack
1. Scroll into the service stack section.
2. Watch the right-side media cards while the left cards change.

**What you should see:** The right-side cards stack smoothly and match the active service.

### Step 5: Check the flagship sections
1. Scroll to the voice agent section.
2. Scroll to the website chatbot section.
3. Scroll to the AI operations section.

**What you should see:** Each section feels premium, readable, and visually different.

### Step 6: Check the fonts
1. Open the home page and one inner page.
2. Compare headings, body text, and buttons.

**What you should see:** The text feels lighter, cleaner, and more premium across the site.

### Step 7: Check SEO support files
1. Open `/robots.txt`.
2. Open `/sitemap.xml`.

**What you should see:** Both files load and show the correct site structure.

### Step 8: Run a quality check
1. Open Lighthouse in Chrome DevTools.
2. Run a desktop audit on the home page.

**What you should see:** The site passes basic SEO checks and loads cleanly.

## 6. Quality Check
After finishing, verify:
- [ ] The floating island nav stays visible while scrolling
- [ ] The hero word flip works smoothly
- [ ] The services media stack updates with the active card
- [ ] The flagship sections feel distinct and polished
- [ ] The site fonts feel lighter and more premium
- [ ] `robots.txt` and `sitemap.xml` both load

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| The nav feels too large | Spacing is too tall | Reduce island padding |
| The hero word jumps | The word width changes too much | Increase the reserved word width |
| The media stack looks messy | Card offsets are too strong | Reduce the translate and rotate values |
| Sitemap does not load | The file was not generated | Check `src/app/sitemap.ts` |

## 8. Notes
**Assumptions made:**
- The site is reviewed locally first
- The homepage is the main design priority
- The reviewer knows how to refresh the browser

**Who to ask for help:** Project owner or developer

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-28 | Process Owner | Initial version |
