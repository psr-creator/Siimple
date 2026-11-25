# Artelliq AI Sales Team

Claude Code sub-agents for selling **Business Central implementation** and **InsightPro WMS**.
Open Claude Code in this repo and ask for an agent by name, or just describe the task and Claude picks one.

| Agent | Supports human role | Use it for | Example prompt |
|---|---|---|---|
| `lead-researcher` | SDR | ICP scoring, triggers, buying committee | "Use lead-researcher on Al Futtaim Logistics and 5 similar 3PLs in JAFZA" |
| `outreach-writer` | SDR | Cold emails, sequences, call scripts, WhatsApp | "Write a 5-touch sequence for a Sharjah steel trader on Tally" |
| `discovery-coach` | AE | Call plans, MEDDPICC scorecards after calls | "Prep my discovery call with a contracting company, 300 staff" |
| `solution-architect` | Presales | Requirement-to-BC/WMS mapping, licences, effort, demo script | "Map these requirements to BC + WMS and estimate effort" |
| `proposal-builder` | AE | Proposal, pricing options, mutual action plan | "Build the proposal from these notes and the solution map" |
| `objection-handler` | AE | Pushback, competitor battlecards | "They said Odoo is half the price" |
| `deal-coach` | Sales Manager | Deal and pipeline reviews, forecast, 1:1 prep | "Review this pipeline export and write the weekly forecast" |

**Flow:** lead-researcher → outreach-writer → discovery-coach → solution-architect → proposal-builder → (objection-handler as needed) → deal-coach weekly.

Shared knowledge lives in `playbook.md`. Fill every `[FILL]` (day rates, packages, references) so the agents stop leaving placeholders.

## AI SDR: daily routine

Run **`/sdr-daily`** each morning (optionally `/sdr-daily construction Sharjah 10`). It:
1. lists follow-ups due today from `prospecting/tracker.csv`,
2. finds and scores new target companies (`lead-researcher`, web research only; **no Lusha credits without your permission**),
3. names decision-makers (Lusha reveals only for contacts you mark `Y` in the tracker),
4. drafts the Day-1 email, call opener and LinkedIn note (`outreach-writer`),
5. writes `prospecting/YYYY-MM-DD-callsheet.md`.

After your call block, say **"log today"** with the outcomes, and the tracker is updated with the next touch dates.

**Where the data lives:** `prospecting/` is git-ignored here because this repo is a public website. For a tracker that persists across sessions, keep it in a **private** repo (e.g. copy `.claude/` into a private `artelliq-sales` repo and run the routine there) or export it to your CRM weekly.
