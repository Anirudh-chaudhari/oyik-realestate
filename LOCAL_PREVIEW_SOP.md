# SOP: Local Preview and Scroll QA

**Version:** 1.0
**Last Updated:** 2026-03-26
**Owner:** Process Owner
**Audience:** Anyone testing the Oyik.AI website locally

---

## 1. Purpose
This SOP shows how to run the site locally and check the home page scroll behavior before upload.

## 2. Who Does This
Anyone reviewing the website before deployment.

## 3. Tools You Need
- Node.js 18 or newer
- `npm`
- Local access to the `oyik-ai-site` folder

## 4. Starting Requirements
Before you start, make sure:
- [ ] Dependencies are installed
- [ ] Port `3000` is free
- [ ] The latest code changes are saved

## 5. Step-by-Step Instructions

### Step 1: Open the project
1. Open a terminal in the `oyik-ai-site` folder.

**What you should see:** The terminal path ends with `oyik-ai-site`.

### Step 2: Start the local server
1. Run `npm run dev`.

**What you should see:** A local URL like `http://localhost:3000`.

### Step 3: Open the home page
1. Open `http://localhost:3000` in your browser.

**What you should see:** The Oyik.AI home page loads without errors.

### Step 4: Check scroll smoothness
1. Scroll slowly from the hero into the services section.
2. Scroll quickly down and up through the stack.

**What you should see:** The page feels smooth and the card stack stays solid.

### Step 5: Check the services stack
1. Stop on each services card.
2. Watch the right-side 3D scene while each card becomes active.

**What you should see:** The active card is clear, and older cards do not show through.

### Step 6: Check mobile behavior
1. Open browser device mode.
2. Test one mobile width and one tablet width.

**What you should see:** Scrolling stays stable and content remains readable.

## 6. Quality Check
After finishing, verify:
- [ ] The home page loads on localhost
- [ ] Downward scrolling feels smooth
- [ ] Upward scrolling does not show transparent ghost cards
- [ ] The 3D panel changes cleanly with each active service

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Page does not open | Dev server is not running | Start `npm run dev` again |
| Port 3000 is busy | Another app uses the port | Stop the other app or use another port |
| Scroll feels rough | Old browser tab cache is active | Hard refresh the page |
| Cards still look wrong | Old build is showing | Restart the dev server |

## 8. Notes
**Assumptions made:**
- Node.js is already installed
- The tester has local file access
- The tester is reviewing the home page only

**Who to ask for help:** Project owner or developer

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-26 | Process Owner | Initial version |
