# SOP: Premium Website QA Pass

**Version:** 1.0
**Last Updated:** 2026-03-26
**Owner:** Process Owner
**Audience:** Anyone reviewing the oyik.realestate.ai website before upload

---

## 1. Purpose
This SOP checks the premium design pass before upload.

## 2. Who Does This
Anyone reviewing design, motion, and page behavior.

## 3. Tools You Need
- Browser
- Localhost access
- `npm run dev`

## 4. Starting Requirements
Before you start, make sure:
- [ ] The dev server is running
- [ ] You can open `http://localhost:3000`
- [ ] The latest code changes are saved

## 5. Step-by-Step Instructions

### Step 1: Check the new brand signature
1. Open the home page.
2. Look at the navbar and footer.

**What you should see:** `oyik.` with `realestate.ai` as the signature line.

### Step 2: Check the services stack
1. Scroll to the stacked services section.
2. Scroll down and back up through every card.

**What you should see:** No transparent ghost cards on reverse scroll.

### Step 3: Check the dark feature section
1. Scroll below `How it works`.
2. Find the dark indigo AI operations section.

**What you should see:** A premium dark block with six real-estate AI capability cards.

### Step 4: Check the provider marquee
1. Stay below `How it works`.
2. Find the logo-only strip.

**What you should see:** Real brand logos moving horizontally to the left.

### Step 5: Check testimonials
1. Scroll to `Built for busy teams`.
2. Watch the cards move horizontally.

**What you should see:** At least six named review cards with longer copy.

### Step 6: Check the services overview page
1. Open `/services`.
2. Review the `See full details` buttons.

**What you should see:** Clear indigo pill buttons that are easy to notice.

### Step 7: Check the contact page
1. Open `/contact`.
2. Test the demo tab button.
3. Test the message form submit button.

**What you should see:** The demo tab opens a live booking link and the message form shows a success state.

### Step 8: Check the FAQ page
1. Open `/faq`.
2. Click any question.

**What you should see:** The answer opens as a dropdown accordion.

## 6. Quality Check
After finishing, verify:
- [ ] Brand signature is updated
- [ ] Background feels softly blended, not flat white
- [ ] Homepage sections feel premium and consistent
- [ ] Services stack is clean on downward and upward scroll
- [ ] Service page headings are smaller and tighter
- [ ] FAQ dropdowns open correctly
- [ ] Contact page interactions feel working

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Localhost page looks old | Browser cache is stale | Hard refresh the page |
| Marquee looks frozen | JavaScript did not refresh | Restart `npm run dev` |
| Buttons look unchanged | Old CSS bundle is loaded | Stop and restart the dev server |
| FAQ does not open | Browser state is stale | Reload the page |

## 8. Notes
**Assumptions made:**
- Localhost is the final review source before upload
- The reviewer is checking desktop first
- The final upload will happen only after visual approval

**Who to ask for help:** Project owner or developer

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-26 | Process Owner | Initial version |
