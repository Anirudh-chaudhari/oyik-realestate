# SOP: Project Context Handover using PROJECT_SUMMARY.md

**Version:** 1.0
**Last Updated:** 2026-03-28
**Owner:** AI Assistant (Antigravity)
**Audience:** Any AI Assistant taking over this project.

---

## 1. Purpose
This procedure ensures a new AI session starts with the correct context, knows the latest deployment status, and continues from where the last session left off.

## 2. Who Does This
The outgoing AI assistant at the end of a session, and the incoming AI assistant at the start.

## 3. Tools You Need
- `PROJECT_SUMMARY.md` in the project root.
- VS Code or your preferred Integrated Development Environment (IDE).
- Access to previous session logs (optional).

## 4. Starting Requirements
Before you start, make sure:
- [ ] You have completed or checkpointed your current task.
- [ ] You have verified the deployment status (Netlify/Vercel).
- [ ] You have found `PROJECT_SUMMARY.md` in the file list.

## 5. Step-by-Step Instructions

### Step 1: Update the "What Was Accomplished" Section
1. Open `PROJECT_SUMMARY.md`.
2. Locate the "What Was Accomplished" section.
3. Add a new Phase entry (e.g., Phase 18) if major work was done.
4. List the key changes, files modified, and visual improvements.
5. Provide brief context on why these changes were made.

**What you should see:** A clear, chronological list of project milestones.

### Step 2: Update the "Deployment Status" Section
1. Verify the current production URL (e.g., Netlify URL).
2. Note the Deploy ID and timestamp of the latest successful deploy.
3. Update the `Deployment Status` section in the file.

**Warning:** Always ensure the URL works and matches the latest changes before documenting it.

### Step 3: Define "What Is Pending" (Next Steps)
1. List all remaining tasks from the original plan.
2. Add any new tasks discovered during development (bug fixes, refinements).
3. Be specific about the file paths and expected outcomes for each task.

**What you should see:** A list of actionable items for the next AI session.

### Step 4: Finalize the Summary
1. Update the `Last Updated` date at the top of the file.
2. Save the file.

---

## 6. Quality Check
After finishing, verify:
- [ ] `PROJECT_SUMMARY.md` contains the newest Phase description.
- [ ] The "Deployment Status" has the correct latest URL.
- [ ] The "Next Steps" are actionable and easy to understand.
- [ ] The date is current.

## 7. Common Problems and Fixes

| Problem | Why It Happens | How to Fix |
|---------|---------------|------------|
| Summary is outdated | Session ended abruptly without update | New assistant should review Git logs or recent files and update the summary first. |
| Pending tasks are vague | Lack of detail in description | Outgoing assistant must use specific file paths and goals for next steps. |
| URL in summary is broken | Failed deploy or wrong environment | Check the build logs in Netlify/Vercel and update with the correct URL. |

## 8. Notes
**Assumptions made:**
- The AI assistant is familiar with standard next-js and react project structures.
- The project is deployed using Netlify CLI or Vercel CLI.

**Who to ask for help:** Project Owner (USER).

## 9. Version History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-28 | Antigravity | Initial creation after user request to apply `sop-creator` logic. |
