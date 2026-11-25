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
