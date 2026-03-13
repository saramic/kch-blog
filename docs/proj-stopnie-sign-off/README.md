# Stopnie Sign-off

A workflow system for managing ZHP scout rank trials (próby na stopnie).

## The Problem

It's often unclear where a candidate stands in their rank trial — who needs to
complete what, what's been done, and who from the komisja has signed off. This
leads to stalled trials, bottlenecks, and lack of clarity.

From Naczelnik:

> Dla harcerstwa… chce mieć workflow na stopnie
>
> Gdzie jest jakiś Google form gdzie osoba wypisuje podstawowe dane a później
> ktoś zarządza próbą i wpisuje kto jest odpowiedzialny za poszczególne próby.
>
> Te osoby dostają powiadomienia i idą do app sheets i zaznaczają czy zaliczył
> czy nie Jest opcja w app sheets w google aby to robić, tylko trzeba trochę
> konfiguracji.

See [discovery/PROBLEM.md](discovery/PROBLEM.md) for the full problem statement
(originally described by Naczelnik).

## The Solution

**Google Form → Google Sheets → AppSheet**

- A **Google Form** collects scout applications
- **Google Sheets** stores the data in related tables (Candidates, Trials,
  Requirements, RankTemplates, Users)
- **AppSheet** provides the app UI, role-based views, workflow logic, and
  automated notifications

A manager creates a trial from a form submission, requirements are populated
from templates, verifiers are assigned and notified, and each verifier marks
requirements as passed/not passed. The manager tracks progress centrally and
closes the trial when complete.

## Key Files

| File                                                 | Purpose                               |
|------------------------------------------------------|---------------------------------------|
| [discovery/PROBLEM.md](discovery/PROBLEM.md)         | Problem statement                     |
| [discovery/PRD.md](discovery/PRD.md)                 | Product requirements, data model, workflow, permissions |
| [discovery/ASSUMPTIONS.md](discovery/ASSUMPTIONS.md) | Assumptions and open questions        |
| [PLAN.md](PLAN.md)                                   | Phased build plan with task checklist |
| [STATUS.md](STATUS.md)                               | Current progress                      |
| [DECISIONS.md](DECISIONS.md)                         | Key decisions and rationale           |

## Architecture at a Glance

```
Scout ──▶ Google Form ──▶ Google Sheets ──▶ AppSheet
                          (6 tabs)          (views, bots, security filters)

Roles: Candidate │ Verifier │ Manager │ Admin

Data:  Candidates ◄── Trials ◄── Requirements
                                       ▲
       RankTemplates ──────────────────┘
```

## Current Status

**Phase: Discovery & Design** — problem defined, PRD drafted, validating
assumptions and confirming rank requirements before building.

See [STATUS.md](STATUS.md) for details.

## More on AppSheet

- **Google Sheets | Data Entry using HTML Form 🔥🔥#googlesheets #appsscript
  #dataentry - TechLever**

  [![
    Google Sheets | Data Entry using HTML Form 🔥🔥#googlesheets #appsscript
    #dataentry - TechLever
  ](
    http://img.youtube.com/vi/5Ta8TrPsdN8/0.jpg
  )](https://youtu.be/5Ta8TrPsdN8)

- **Leave Approval Application using Apps Script #googlesheets - TechLever**
  [![
    Leave Approval Application using Apps Script #googlesheets - TechLever
  ](
    http://img.youtube.com/vi/lIUc7cXeyEk/0.jpg
  )](https://youtu.be/lIUc7cXeyEk)