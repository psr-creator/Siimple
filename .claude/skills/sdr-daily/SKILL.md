---
name: sdr-daily
description: Run the daily AI-SDR routine for Artelliq. Builds today's prospect list, researches and scores each company, finds decision-makers, drafts first-touch emails, call openers and LinkedIn notes, and lists follow-ups due today. Use when the user says "sdr daily", "prep my call block", "build today's list", "who do I call today", or "/sdr-daily [segment] [emirate] [count]".
---

# SDR Daily Routine

> **HARD RULE: no Lusha calls without the user's explicit permission** (see playbook section 7). Research is web-only by default. If Lusha would help, stop and ask: which call, why, estimated credits. The only standing permission is revealing contacts the user marked `Y` in the tracker.

Goal: the rep opens one file at 9:15 and starts calling at 9:30. Claude researches and drafts; **the human reviews, sends and calls**. Never send or post anything yourself.

## Inputs (ask only if missing and not inferable)
- Segment: trading | construction | manufacturing | services | 3pl (default: rotate by weekday: Mon trading, Tue construction, Wed manufacturing, Thu 3pl, Fri services)
- Emirate / free zone (default: Dubai + Sharjah)
- Count of new companies (default: 10)

## Files
Data lives in `prospecting/` at the repo root (git-ignored in a public website repo: see README).
- `prospecting/tracker.csv`: one row per contact. Columns:
  `company,domain,segment,emirate,icp_score,contact,title,linkedin,status,last_touch,next_touch,touch_no,notes`
  Status values: `new, contacted, replied, meeting_booked, nurture, not_fit, do_not_contact`.
- `prospecting/YYYY-MM-DD-callsheet.md`: today's output.
Create the folder and the tracker with a header row if they don't exist.

## Steps
1. **Load context.** Read `.claude/sales/playbook.md` and `prospecting/tracker.csv`.
2. **Follow-ups first.** Rows where `next_touch` ≤ today and status is not `do_not_contact`, `not_fit` or `meeting_booked`. For each one, ask the `outreach-writer` agent for the next touch in the 5-touch sequence (Day 1 email → Day 3 call → Day 5 LinkedIn → Day 8 email with a new angle → Day 14 break-up).
3. **New companies.** Use the `lead-researcher` agent to find and score about 1.5× the count. Skip any domain already in the tracker. Keep the top N with score ≥ 60 and "Pursue now".
4. **Decision-makers.** For each kept company, `lead-researcher` names 1–2 contacts by segment:
   - Trading/services: MD/GM, CFO/Finance Manager
   - Construction: Finance Manager, Commercial/QS Manager, MD
   - Manufacturing: Plant/Operations Manager, CFO
   - 3PL/e-com: Operations/Warehouse Manager, GM
   Find them from the web (company site, LinkedIn). **Also collect for every company: main landline, general email, WhatsApp (if published), address, and who to ask for at reception, each with its source.** A company with no reachable number goes to the bottom of the list with a note. Do not reveal emails or phones. List which contacts are worth revealing; the user approves by marking `Y` in the tracker.
5. **Drafts.** For each new contact, use the `outreach-writer` agent for: a Day-1 email (≤120 words, 2 subject options), a 20-second call opener, and a LinkedIn connection note (≤280 characters). Personalise each with one real fact from the research.
6. **Write the call sheet** `prospecting/YYYY-MM-DD-callsheet.md`:
   - Summary line: X follow-ups, Y new companies, Z contacts.
   - **Call list** table, ordered by ICP score: # | Company | Main phone | General email | Ask for (title / name) | Score | Hook (1 line) | Direct line (blank until revealed).
   - **Reception script** (once per sheet): how to get past the switchboard to the target role.
   - **Follow-ups due** with their drafted touch.
   - **New prospects**: per company, a 3-line brief, then the drafts.
7. **Update the tracker.** Append new contacts with `status=new`, `touch_no=0`, `next_touch=today`. Don't mark anything `contacted`; the rep does that after actually sending or calling.
8. **Report in chat:** counts, the top 3 to call first and why, and the number of contacts suggested for reveal. Do not call Lusha to check credit prices.

## End-of-day update (when the user says "log today" or pastes outcomes)
For each outcome, update the tracker: status, `last_touch=today`, `touch_no+1`, `next_touch` per the sequence. "Not interested" → `nurture` with next_touch +90 days. "Wrong person" → add the referred contact. "Unsubscribe" → `do_not_contact`. Then print the totals for the day: dials, connects, meetings booked.
