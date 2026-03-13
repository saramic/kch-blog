# Plan — Stopnie Sign-off

## Phase 1: Discovery & Design

- [x] Fill out problem statement
- [x] Draft PRD with data model and workflow
- [ ] Validate assumptions with Naczelnik
- [ ] Confirm rank requirements list (which stopnie, which requirements per
      stopień) for RankTemplates
- [ ] Decide on AppSheet subscription tier (free vs paid for email bots)

## Phase 2: Sheets & Form Setup

- [ ] Create Google Sheets workbook with tabs:
  - [ ] Candidates
  - [ ] Trials
  - [ ] Requirements
  - [ ] RankTemplates
  - [ ] Users
  - [ ] ActivityLog (optional)
- [ ] Populate RankTemplates with actual ZHP rank requirements
- [ ] Create Google Form for candidate intake
- [ ] Link Form responses to Sheets

## Phase 3: AppSheet MVP

- [ ] Connect AppSheet to Sheets
- [ ] Define table references (Candidates ← Trials ← Requirements)
- [ ] Create Manager views:
  - [ ] New applications
  - [ ] Active trials with inline requirements
  - [ ] Trial detail / assignment
- [ ] Create Verifier views:
  - [ ] My assigned requirements
  - [ ] Pending my decision
- [ ] Set up security filters by role + email
- [ ] Build bot: trial created → copy RankTemplates into Requirements
- [ ] Build bot: requirement assigned → email verifier
- [ ] Build bot: requirement status changed → notify manager

## Phase 4: Polish & Extend

- [ ] Add Candidate self-service view (read-only progress)
- [ ] Add dashboard with completion percentages
- [ ] Build daily reminder bot for overdue requirements
- [ ] Add "all requirements passed" → notify manager for final approval
- [ ] Enable ActivityLog for audit trail
- [ ] Test end-to-end with a real trial

## Phase 5: Rollout

- [ ] Pilot with one unit / komisja
- [ ] Gather feedback, iterate
- [ ] Roll out to wider organization
- [ ] Document setup for other regions
