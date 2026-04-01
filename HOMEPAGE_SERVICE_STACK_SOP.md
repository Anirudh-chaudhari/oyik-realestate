# SOP: Homepage Service Sticky Stack

**Version:** 1.1
**Last Updated:** 2026-03-28
**Owner:** Process Owner
**Audience:** Frontend developer and design QA

---

## 1. Purpose
This process keeps the homepage service section using a left sticky card stack with a mirrored right image stack that builds downward during scroll.

## 2. Who Does This
Frontend developer or design QA person.

## 3. Tools You Need
- Next.js project access
- Code editor
- Local browser preview
- `src/components/sections/Products.tsx`
- `PROJECT_SUMMARY.md`
- `npm run build`

## 4. Starting Requirements
Before you start, make sure:
- [ ] The homepage runs on localhost
- [ ] The service images exist in `public/media`
- [ ] `PROJECT_SUMMARY.md` is available for reference
- [ ] You can edit the products section file

## 5. Step-by-Step Instructions

### Step 1: Read the reference note
1. Open `PROJECT_SUMMARY.md`.

**What you should see:** A note about the Apple-style stacked services scroll.

### Step 2: Keep the left stack only
1. Build the service cards as sticky cards in the left column.

**What you should see:** Each new card sits over the previous one while scrolling.

### Step 3: Build a mirrored sticky image stack
1. Render the right-side service images as their own sticky cards.
2. Give each later card a slightly lower sticky top offset than the one before it.

**What you should see:** The right side stacks downward naturally as the user scrolls.

### Step 4: Keep the image and service matched by order
1. Keep the right image cards in the same order as the left service cards.
2. Keep the section heights aligned so each scroll segment introduces the matching image.

**What you should see:** The corresponding image appears with the same service while scrolling.

### Step 5: Let later cards cover earlier cards
1. Increase the stack depth with z-index and sticky offsets.
2. Avoid a separate JS-swapped preview stage for this interaction.

**What you should see:** Older cards fall underneath while the next card takes over cleanly.

### Step 6: Keep motion smooth
1. Use fade, slide, and scale for the image stack.

**What you should see:** Image changes feel smooth and clean while scrolling.

### Step 7: Keep reduced motion safe
1. Simplify the transition when reduced motion is enabled.

**What you should see:** The section still works without heavy motion.

### Step 8: Verify the result
1. Run `npx eslint src/components/sections/Products.tsx`.
2. Run `npm run build`.
3. Refresh localhost.

**What you should see:** Build passes and the homepage loads.

## 6. Quality Check
After finishing, verify:
- [ ] Left service cards stack one over another
- [ ] Older left cards go under the next card
- [ ] The right image stage stays pinned
- [ ] The right images stack downward
- [ ] The right image stack changes with scroll
- [ ] Mobile still shows a clean list

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Right side looks flat | Only one preview is rendered | Use mirrored sticky image cards instead of one swapped preview |
| Cards feel like separate screens | Sections are spaced too far apart | Keep one continuous section with overlapping sticky cards |
| Old cards stay too visible | Stack order or sticky offsets are wrong | Raise later cards with stronger z-index and lower sticky offsets |
| Image does not match the service | Left and right orders or section heights drift | Keep the same service order and mirror wrapper heights |

## 8. Notes
**Assumptions made:**
- The desired behavior matches the original project summary
- The left stack is the main scroll effect
- The right side should mirror that behavior with real sticky image cards

**Who to ask for help:** Frontend lead or product designer

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-28 | Process Owner | Initial version |
| 1.1 | 2026-03-28 | Process Owner | Restored original sticky stack guidance |
| 1.2 | 2026-03-28 | Process Owner | Updated for downward mirrored image stack |
| 1.3 | 2026-03-28 | Process Owner | Replaced JS-swapped preview notes with mirrored sticky-card implementation |
