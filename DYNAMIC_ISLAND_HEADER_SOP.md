# SOP: Update the Dynamic Island Header

**Version:** 1.0
**Last Updated:** 2026-03-31
**Owner:** Process Owner
**Audience:** Frontend editor

---

## 1. Purpose
This process updates the top dynamic island header and keeps it working.

## 2. Who Does This
This is for a frontend editor or developer.

## 3. Tools You Need
- Code editor
- Git access
- Local Next.js app
- Access to the `public` and `src/components/shared` folders

## 4. Starting Requirements
Before you start, make sure:
- [ ] The project opens in your editor
- [ ] The new logo file is ready
- [ ] The local app can run
- [ ] You know which menu items should work

## 5. Step-by-Step Instructions

### Step 1: Add the logo file
1. Copy the new logo into the `public` folder.

**What you should see:** The image file appears in `public`.

### Step 2: Open the header file
1. Open `src/components/shared/Navbar.tsx`.

**What you should see:** The header component code opens.

### Step 3: Update the logo
1. Replace the old image path with the new logo path.

**What you should see:** The navbar uses the new file name.

### Step 4: Update the brand text
1. Set the first line to `Oyik`.
2. Set the second line to `realestate.ai`.

**What you should see:** The brand shows in two lines.

### Step 5: Update the links
1. Keep `Home`, `About`, and `Service` linked.
2. Show `Blog` without navigation.
3. Add a `Call Us` button with the phone dial link.

**Warning:** Do not break the old working routes.

### Step 6: Update the island layout
1. Move the island lower from the top.
2. Keep the shell transparent.
3. Keep the width compact.
4. Group the right-side actions together.

**What you should see:** The bar looks like a slim phone-style island.

### Step 7: Add the motion
1. Add one light orbit around the island.
2. Keep the motion subtle.
3. Respect reduced-motion behavior.

**What you should see:** A soft moving light goes around the island.

### Step 8: Test the result
1. Run the local build.
2. Open the local site.
3. Check the header at the top and after scrolling.

**What you should see:** The build passes and the header stays readable.

## 6. Quality Check
After finishing, verify:
- [ ] The logo fills the round icon cleanly
- [ ] `Oyik` is larger than the nav items
- [ ] `realestate.ai` has no spaces
- [ ] `Blog` does not navigate
- [ ] `Call Us` opens the dialer
- [ ] The island stays readable on scroll

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Logo looks too small | Image size is too low | Increase the image size or container size |
| Text disappears on scroll | Scroll colors are too light | Use darker text in the scrolled state |
| Blog still opens a page | Link is still active | Replace it with plain text or disabled UI |
| Island feels too wide | Spacing is too large | Reduce padding and gaps |

## 8. Notes
**Assumptions made:**
- The editor uses the local Next.js site
- The phone action should use a `tel:` link
- The brand stays on two lines

**Who to ask for help:** Project owner or frontend lead

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-31 | Process Owner | Initial version |
