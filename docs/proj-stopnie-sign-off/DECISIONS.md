# Decisions — Stopnie Sign-off

### 2026-03-12 — Use AppSheet-first architecture

**Context:** Needed to choose between building a custom web app (code-first)
and using a no-code platform (AppSheet-first). The workflow involves forms,
assignment, notifications, and status tracking.

**Decision:** AppSheet-first with Google Forms intake and Google Sheets as data
store.

**Rationale:** Speed and admin-friendliness matter more than GitOps purity for
this use case. AppSheet natively supports the relational model, role-based
access, and automation bots needed. Non-technical managers can maintain it.
Tradeoff: app config lives in AppSheet (not Git), but AppSheet has its own
version history.

---

### 2026-03-12 — Multi-table data model (not single sheet)

**Context:** Could store everything in one big spreadsheet or use multiple
related sheets.

**Decision:** Six related tables — Candidates, Trials, Requirements,
RankTemplates, Users, ActivityLog.

**Rationale:** A single sheet becomes unmanageable fast. AppSheet works best
with proper Ref relationships between tables. Separate tables enable clean
security filters and role-based views.

---

## Template

### [Date] — Decision Title

**Context:** Why this decision was needed.

**Decision:** What was decided.

**Rationale:** Why this option was chosen.

---
