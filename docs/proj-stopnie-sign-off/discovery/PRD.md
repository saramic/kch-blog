# Product Requirements — Stopnie Sign-off

## Overview

A workflow for managing ZHP scout rank trials (próby na stopnie) using Google
Forms for intake, Google Sheets as the data store, and AppSheet as the app
interface with automation for notifications and reminders.

## Architecture

```
Google Form  ──▶  Google Sheets  ──▶  AppSheet
(intake)          (data store)        (UI, logic, notifications)
```

- **Google Form** — collects candidate applications
- **Google Sheets** — multiple related tabs as the database
- **AppSheet** — app UI, role-based views, workflow logic, bots/automations
- **AppSheet is the workhorse** — business logic, permissions, status
  transitions, and notifications all live here as configuration/expressions
  (no-code, not Git-managed)

## Goals

- [x] Define what needs to be signed off — rank requirements from templates
- [x] Define who can sign off — assigned verifiers per requirement
- [x] Define the workflow for sign-off — form → trial → assign → verify → close

## Non-Goals

- Full GitOps/IaC for the AppSheet app definition (not practical with AppSheet)
- Building a custom-coded web application
- Replacing existing ZHP rank definitions — we template them, not redefine them
- Multi-language UI in the first version

## Data Model

Six related tables in Google Sheets, connected via Ref columns in AppSheet.

```
Candidates ◄── Trials ◄── Requirements
                             ▲
RankTemplates ───────────────┘ (copied on trial creation)

Users (role-based access)
ActivityLog (audit trail, optional)
```

### Table A: Candidates

| Column             | Purpose                    |
|--------------------|----------------------------|
| CandidateID        | Unique key                 |
| FirstName          |                            |
| LastName           |                            |
| Email              |                            |
| UnitName           |                            |
| Country            |                            |
| Region             |                            |
| CurrentRank        |                            |
| TargetRank         |                            |
| FormSubmittedAt    |                            |
| SubmittedByEmail   |                            |

### Table B: Trials

| Column                 | Purpose                              |
|------------------------|--------------------------------------|
| TrialID                | Unique key                           |
| CandidateID            | Ref → Candidates                     |
| TargetRank             |                                      |
| ManagerEmail           |                                      |
| ManagerName            |                                      |
| TrialStatus            | New / Planning / In Progress / Waiting for Final Review / Completed / Closed / Rejected |
| StartDate              |                                      |
| TargetCompletionDate   |                                      |
| CompletionDate         |                                      |
| Notes                  |                                      |
| PercentComplete        | Virtual/calculated                   |
| AllRequirementsApproved| Yes/No                               |

### Table C: Requirements

| Column                | Purpose                              |
|-----------------------|--------------------------------------|
| RequirementID         | Unique key                           |
| TrialID               | Ref → Trials                         |
| RequirementCode       |                                      |
| RequirementTitle      |                                      |
| RequirementDescription|                                      |
| Category              |                                      |
| AssignedVerifierEmail |                                      |
| AssignedVerifierName  |                                      |
| AssignedDate          |                                      |
| DueDate               |                                      |
| RequirementStatus     | Pending Assignment / Assigned / In Review / Passed / Not Passed / Needs More Work |
| DecisionDate          |                                      |
| DecisionByEmail       |                                      |
| VerifierComments      |                                      |
| EvidenceLink          | Optional                             |

### Table D: RankTemplates

| Column                | Purpose                              |
|-----------------------|--------------------------------------|
| TemplateRequirementID | Unique key                           |
| RankName              |                                      |
| RequirementCode       |                                      |
| RequirementTitle      |                                      |
| RequirementDescription|                                      |
| Category              |                                      |
| DefaultOrder          |                                      |

### Table E: Users

| Column    | Purpose                                |
|-----------|----------------------------------------|
| UserEmail | Key                                    |
| FullName  |                                        |
| Role      | Candidate / Verifier / Manager / Admin |
| Country   |                                        |
| Region    |                                        |
| Active    |                                        |

### Table F: ActivityLog (optional)

| Column        | Purpose            |
|---------------|--------------------|
| LogID         | Key                |
| EntityType    | Trial / Requirement|
| EntityID      |                    |
| ActionType    |                    |
| ActionByEmail |                   |
| ActionAt      |                    |
| OldValue      |                    |
| NewValue      |                    |
| Comment       |                    |

## Workflow

1. **Intake** — Scout submits Google Form (name, email, unit, current rank,
   target rank)
2. **Review** — Manager reviews form submission in AppSheet, creates Candidate
   + Trial records
3. **Populate** — Bot copies requirements from RankTemplates into Requirements
   for the trial
4. **Assign** — Manager assigns a verifier to each requirement
5. **Notify** — Bot emails/pushes verifier with task details and deep link
6. **Verify** — Verifier opens "My Tasks" view, marks each requirement
   Passed / Not Passed / Needs More Work
7. **Track** — Manager monitors progress dashboard
8. **Close** — When all mandatory requirements = Passed, manager gives final
   approval and closes trial

## AppSheet Automations (Bots)

| Bot                     | Trigger                | Action                            |
|-------------------------|------------------------|-----------------------------------|
| New submission          | Form response          | Notify manager                    |
| Trial created           | New Trial row          | Copy RankTemplates → Requirements |
| Requirement assigned    | Verifier email set     | Email verifier                    |
| Requirement updated     | Status change          | Notify manager                    |
| All requirements passed | All mandatory = Passed | Notify manager for final approval |
| Reminder                | Scheduled daily        | Remind verifiers of overdue items |

## Permissions Model

| Role      | Access                                           |
|-----------|--------------------------------------------------|
| Candidate | Own trial progress (read-only)                   |
| Verifier  | Only requirements assigned to them               |
| Manager   | All trials they manage + their requirements      |
| Admin     | Everything                                       |

Use AppSheet **security filters** (not just slices) to enforce data access.

## Requirements

### Must Have

- Google Form for candidate intake
- Candidates, Trials, Requirements tables in Sheets
- AppSheet app with manager and verifier views
- Email notifications on assignment
- Role-based access via security filters
- RankTemplates table for consistent requirement creation

### Nice to Have

- Candidate self-service progress view
- Daily reminder bot for overdue requirements
- ActivityLog for audit trail
- Dashboard with completion percentages
- Multi-region support (Country, Region, TimeZone fields)

## Success Criteria

- A trial can be created from form submission in under 5 minutes
- Verifiers receive notification and can act without manager intervention
- Manager has a single view showing all trial progress
- Minimal manual paperwork — the system tracks who signed off what and when

## Key Design Decisions

- **AppSheet-first** (not code-first) — speed and admin-friendliness over
  GitOps purity. AppSheet config is versioned inside AppSheet, not in Git.
- **Multiple sheets, not one** — relational model avoids the "giant
  spreadsheet" anti-pattern
- **Security filters from day one** — not just UI slices
- **RankTemplates** — avoid manual requirement creation per trial
- **Country/Region fields from day one** — for a worldwide org, adding
  geography later is painful

## Platform Notes

- AppSheet is no-code configuration, not traditional application code
- AppSheet app definitions are versioned within AppSheet (not Git-native)
- Some automation features (email bots, scheduled bots) may require a paid
  AppSheet subscription
- AppSheet API (for external integrations) requires Enterprise plan
- Git-managed artifacts: data model docs, Apps Script helpers, setup guides
- AppSheet-managed: UI, slices, security filters, expressions, bots
