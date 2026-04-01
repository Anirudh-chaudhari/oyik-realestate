# SOP: Fast Manual Deployment to Vercel or Netlify

**Version:** 1.0
**Last Updated:** March 26, 2026
**Owner:** AI Developer
**Audience:** Website Owner

---

## 1. Purpose
This document explains how to instantly deploy your website to Vercel or Netlify. Since terminal deployment commands require manual browser authentication that block the AI, you must push the website using these fast manual steps.

## 2. Who Does This
The Website Owner.

## 3. Tools You Need
- Your Terminal (Command Prompt / PowerShell)
- GitHub Account
- Vercel or Netlify Account

## 4. Starting Requirements
Before you start, make sure:
- [x] All local changes are saved and look perfect on `localhost:3000`.
- [x] You have the GitHub Desktop app or Git installed.

## 5. Step-by-Step Instructions

### Step 1: Push Code to GitHub (Fastest Vercel Method)
1. Open your terminal in VSCode.
2. Type `git add .` and press Enter.
3. Type `git commit -m "Final animations and layout"` and press Enter.
4. Type `git push` and press Enter.

**What you should see:** The code uploads to GitHub. Vercel will automatically detect this and deploy your website in exactly 60 seconds without any extra clicks.

### Step 2: Alternative Netlify Drag-and-Drop Method
1. Open your terminal in VSCode.
2. Type `npm run build` and press Enter.
3. Wait for the `out` folder to be generated.
4. Open your web browser and go to `app.netlify.com/drop`.
5. Drag and drop the `out` folder directly into the designated area on the website.

**What you should see:** Netlify instantly uploads the files and gives you a live production URL.

## 6. Quality Check
After finishing, verify:
- [ ] You received a live green URL from Vercel or Netlify.
- [ ] The live website looks exactly the same as `localhost:3000`.

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Terminal gets stuck | Automated AI bots cannot press 'Authenticate in Browser' | Follow this manual SOP instead of asking the AI to deploy via CLI. |
| Vercel doesn't update | GitHub didn't receive the push | Make sure your `git push` succeeded without errors. |

## 8. Notes
**Assumptions made:**
- The project is already linked to a GitHub repository that Vercel is watching.

**Who to ask for help:** Netlify or Vercel support manuals.
