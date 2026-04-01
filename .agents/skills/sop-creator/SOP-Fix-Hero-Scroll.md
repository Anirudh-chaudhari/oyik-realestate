# SOP: Fixing Hero Layout and Product Scrolling

**Version:** 1.0
**Last Updated:** March 26, 2026
**Owner:** AI Developer
**Audience:** Developer Team

---

## 1. Purpose
This document explains how to fix the hero image height so it stops cutting off (truncating), and how to replace the confusing abstract 3D models with realistic 2D images that swap smoothly when users scroll down the services section.

## 2. Who Does This
The AI Developer Agent.

## 3. Tools You Need
- `write_to_file`
- `multi_replace_file_content`

## 4. Starting Requirements
Before you start, make sure:
- [x] You saw the screenshot where the hero image cuts off the bottom.
- [x] You know the scrolling spy method failed and needs to be replaced with a reliable `IntersectionObserver`.
- [x] You know the user wants realistic images, not floating abstract shapes, representing their exact services.

## 5. Step-by-Step Instructions

### Step 1: Fix the Truncated Hero Image
1. Open the file `Hero.tsx`.
2. Locate the video simulator container.
3. Change its aspect ratio from `aspect-[21/9]` to `aspect-[16/10]` or `h-auto` so it has enough height to show the full picture.
4. Ensure the image `object-fit` allows the bottom of the app to be visible.

**What you should see:** The full image of the application platform, without the bottom part being chopped off.

### Step 2: Fix the Products Stacking Animation
1. Open the file `Products.tsx`.
2. Remove the custom `window.addEventListener("scroll")` code that failed.
3. Use a simple, robust `IntersectionObserver` that properly triggers when a service card enters the middle of the screen.

**What you should see:** As you scroll down the left side, the text correctly fades in and updates the active service index in real time.

### Step 3: Replace 3D Primitives with Realistic Service Images
1. Open the file `Products.tsx`.
2. Delete the abstract 3D `Canvas` objects (like ChatNodes3D, VoiceWaves3D).
3. On the right side, load the exact realistic 2D image for the active service (e.g., `/media/ai_chat_ui_light...png`).
4. Apply a beautiful 3D tilt/parallax effect using `framer-motion` to keep the "3D" feeling the user liked, but using the hyper-realistic UI pictures.

**What you should see:** A highly professional, relevant picture of the service floating smoothly on the right side as you scroll down.

## 6. Quality Check
After finishing, verify:
- [ ] The Hero image is tall enough to see the whole app screen.
- [ ] The scroll spy actually changes the active service index.
- [ ] The right screen shows realistic UI images instead of confusing floating spheres/boxes.

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Scroll spy failing | Window scroll listener is broken | Use `IntersectionObserver` on the actual card refs |
| Image still truncated | Parent container is forcing a shallow aspect ratio | Change `aspect-*` to something taller |

## 8. Notes
**Assumptions made:**
- The user's provided screenshots in the `/media/` folder are the most realistic depictions of their services.

**Who to ask for help:** The User.
 
