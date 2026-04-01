# SOP: Update the How It Works Animation

**Version:** 1.0
**Last Updated:** 2026-03-31
**Owner:** Process Owner
**Audience:** Frontend editor

---

## 1. Purpose
This process updates the animated "How it works" flow and keeps it smooth.

## 2. Who Does This
This is for a frontend editor or developer.

## 3. Tools You Need
- Code editor
- Local Next.js app
- Access to `src/components/sections/HowItWorks.tsx`
- Access to `src/components/shared/Navbar.tsx`
- Access to `public/media/videos`

## 4. Starting Requirements
Before you start, make sure:
- [ ] The site runs on localhost
- [ ] The motion should loop every 5 seconds
- [ ] The reduced-motion fallback stays safe
- [ ] The old links still work

## 5. Step-by-Step Instructions

### Step 1: Open the process section
1. Open `src/components/sections/HowItWorks.tsx`.

**What you should see:** The three-step process component.

### Step 2: Update the flow line
1. Add a base line between the steps.
2. Add one moving spark across the line.

**What you should see:** Energy moves from left to right.

### Step 3: Animate the middle step
1. Add a stronger glow around step 2.
2. Rotate or pulse the middle icon.

**What you should see:** Step 2 looks like it is processing.

### Step 4: Animate the final step
1. Add a finishing glow at step 3.
2. Add a small upward success motion.

**What you should see:** The last step feels like a launch moment.

### Step 5: Update the island orbit
1. Open `src/components/shared/Navbar.tsx`.
2. Add orbiting light streaks around the island.
3. Keep the motion always running.

**What you should see:** Light moves around the island all the time.

### Step 6: Keep motion accessible
1. Use reduced-motion checks.
2. Turn off repeating motion for reduced-motion users.

**Warning:** Do not force constant motion for users who disable animation.

### Step 7: Test the site
1. Run the local build.
2. Open the home page.
3. Watch one full 5-second loop.
4. Confirm product videos load from `public/media/videos`.

**What you should see:** The animation loops cleanly and repeats.

## 6. Quality Check
After finishing, verify:
- [ ] The spark moves from step 1 to step 2
- [ ] Step 2 shows a processing state
- [ ] Step 3 ends with a visible finish effect
- [ ] The whole cycle repeats in about 5 seconds
- [ ] The island orbit runs continuously
- [ ] Reduced-motion users do not get forced animation
- [ ] Product videos use the updated files from `public/media/videos`

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Spark looks jumpy | Keyframes are too far apart | Smooth the keyframe timing |
| Motion feels slow | Duration is too long | Set the loop close to 5 seconds |
| Island light is too weak | Blur or opacity is too low | Increase glow strength slightly |
| Motion is too heavy | Too many layers animate together | Remove extra effects and keep one hero motion |

## 8. Notes
**Assumptions made:**
- The section stays on the home page
- The loop should feel fast and premium
- The motion should be subtle, not chaotic

**Who to ask for help:** Project owner or frontend lead

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-31 | Process Owner | Initial version |
