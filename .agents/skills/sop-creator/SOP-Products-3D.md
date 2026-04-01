# SOP: Modifying Service Section to 3D Apple-Style Layout

**Version:** 1.0
**Last Updated:** March 26, 2026
**Owner:** AI Developer Agent
**Audience:** Developer Team

---

## 1. Purpose
This document explains how to change the Products section to a left-right sticky layout. The left side handles text stacking, and the right side smoothly swaps beautiful 3D animations instead of static images.

## 2. Who Does This
The AI Developer Agent.

## 3. Tools You Need
- `write_to_file`
- `multi_replace_file_content`

## 4. Starting Requirements
Before you start, make sure:
- [x] You understand the user wants 3D models back, but they must be extremely high quality and abstract, not clunky primitives.
- [x] The left side text needs a stacking effect.
- [x] The right side needs a single sticky 3D Canvas that switches models when you scroll.
- [x] The Hero image needs to be wider (not contracted).

## 5. Step-by-Step Instructions

### Step 1: Widen the Hero Section
1. Open the file `Hero.tsx`.
2. Find the video simulator `motion.div` at the bottom.
3. Change the maximum width from `max-w-6xl` to `max-w-[95vw]` or `max-w-[1400px]`.
4. Ensure the aspect ratio remains Cinematic (21:9).

**What you should see:** The Hero image simulator becomes full and wide, matching the edges of the screen beautifully.

### Step 2: Rebuild the Left-Right Products Layout
1. Open the file `Products.tsx`.
2. Delete the current stacking card `map` array code.
3. Create a left-side container (`w-1/2`) for the text cards. Use opacity adjustments via `IntersectionObserver` to track which text is active.
4. Create a right-side sticky container (`w-1/2`) that stays pinned to the top of the screen.

**What you should see:** The layout splits perfectly into a reading section and a visual section.

### Step 3: Create Premium 3D Models
1. Build an Abstract Voice Model (pulsing rings).
2. Build an Abstract Chat Model (overlapping frosted glass shapes).
3. Build an Abstract Reminder Model (orbiting time dials).
4. Build an Abstract Email Model (floating origami planes).
5. Build an Abstract Avatar Model (a glowing digital brain or neural mesh).
6. Connect the active index to toggle these models inside the right-side Canvas.

**What you should see:** Stunning, non-clunky 3D tech designs that spin and look like human sentiment/AI energy.

## 6. Quality Check
After finishing, verify:
- [ ] The Hero image covers the full width.
- [ ] The right screen 3D swaps correctly when scrolling.
- [ ] The 3D models avoid looking like bad stickmen.

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| 3D models look bad | Using basic unstyled boxes | Use `MeshTransmissionMaterial` and abstract geometry |
| Canvas re-renders poorly | `framer-motion` conflicts | Use simple conditional rendering `activeIndex === 1` |

## 8. Notes
**Assumptions made:**
- The 3D geometry needs to be entirely abstract (Apple style) instead of literal phones and people.

**Who to ask for help:** The User.

---
