# Christian Women Community — Change Tracker & Release Roadmap

**Last Updated:** 31 August 2026
**Document owner:** CWC project team

> **Primary living tracker:** maintain this Markdown file in VS Code and Git. The accompanying [Word document](./CWC%20Website%20%26%20Bible%20Hub%20-%20Change%20Tracker%20and%20Release%20Roadmap.docx) is retained as an archival snapshot/reference, not the working master.

## Production Baseline

| Baseline item | Current state |
|---|---|
| Live site | `christianwomencommunity.org/bible` |
| Production branch / commit | `main` at `bc990ac` |
| Release reconciliation | `a87eaf5` |
| Release state | Live. Release freeze recommended while real-device PWA/offline QA is completed. |
| Branding | Approved official CWC logo is live across the site, metadata, favicon, manifest, and PWA icons. |
| Founder section | Founder portrait and corrected layout live; approved bold emphasis: “It was to build a home!” |
| Resources | Resources and homepage Devotionals entry points lead to `/bible/devotionals`. |
| Devotionals | YEAR365, HS90, and SG180 are live; selections and fingerprints are frozen. |
| Bible Hub | Core routes, including Genesis 1, are live. |
| PWA & Offline Bible | Service worker, manifest icons, offline handler, and generated Bible offline package are live. Cache key: `cwc-bible-hub-v7`. |
| Offline package | 1,266 routes / 27 assets in the live offline manifest. |
| Release QA passed | `npm run check`: 0 errors, warnings, or hints; production build passed; 390px mobile card layout has no horizontal overflow. |

## How to Use This Tracker

One request = one backlog ID. Add the request before implementation; move it only when its acceptance criteria and QA record are clear. Record decisions that affect future work in the Decision Log before implementation.

## Sprint 6 Audit Record & Implementation Order

**Primary living tracker:** this Markdown file is the working master in this repository. `CWC Website & Bible Hub - Change Tracker and Release Roadmap.docx` remains an archival/reference copy only.

**Completed audit (31 August 2026):** the `feature/bible-hub` checkout at `bc990ac` was reviewed for empty files/folders, placeholder scaffolding, generated items, and likely orphaned routes. No audited file or folder was deleted or changed. The audit found 12 zero-byte documentation files, plus candidate cleanup items including unused design/component stubs, backup/prototype routes, `global.backup.css`, and `src.zip`; all require a separately approved, reference-verified cleanup scope. The frozen YEAR365, HS90, and SG180 data and active PWA/offline chain are explicitly out of scope for cleanup.

**Approved implementation order:**

1. MOB-002 — portrait-mobile Join modal/form.
2. BIB-003 and WEB-004 — shared dark-mode contrast.
3. MKT-001 — Marketplace CTA visibility.
4. PWA-004 — offline Bible progress/performance UX.
5. OPS-001 — email operations, with authorised provider access.
6. BRD-001 — Bible Hub naming and legal clearance.
7. Separately approved cleanup of confirmed unused files/routes.

### Status Legend

| Status | Meaning |
|---|---|
| Proposed | Captured; needs scope and approval. |
| Approved | Authorized to plan or build; scope is clear. |
| In Progress | Being implemented; no release commitment yet. |
| QA | Implementation complete; verification underway. |
| Ready for Release | QA passed and release checklist is complete. |
| Live | Released to production and recorded in Release History. |
| Blocked | Cannot advance; record owner, reason, and next action. |
| Deferred | Intentionally postponed; retain context and revisit trigger. |

### Priority Guide

| Priority | Use when... |
|---|---|
| P0 | Production-breaking, data/security risk, or critical visitor blocker. |
| P1 | High visitor/brand impact or release-critical. |
| P2 | Important improvement; schedule into a planned sprint. |
| P3 | Useful enhancement or idea; no current release commitment. |

## Immediate Post-Release QA

**First post-release task:** perform this on a real phone in production, not localhost or a preview.

| ID | Requested test | Pri. | Status | Dependencies | Acceptance / QA evidence | Notes |
|---|---|---:|---|---|---|---|
| QA-001 | Install the CWC PWA from the live site on a real device. | P1 | QA | Production device + browser install support | Record phone, browser, date, and result. | Outstanding |
| QA-002 | Download Bible for Offline Reading; open several Bible chapters while online. | P1 | QA | QA-001 | Confirm visitor-friendly downloaded state and chapters render. | Outstanding; cross-reference PWA-004. |
| QA-003 | Enable airplane mode; close and reopen the installed PWA; navigate among cached Bible chapters. | P1 | QA | QA-002 | No blank state/broken assets; cached chapters remain navigable. | Outstanding; test interruption/retry and browser mode under PWA-004. |

## Active Backlog

| ID | Area | Requested change | Pri. | Status | Target release / dependencies | Acceptance criteria and QA | Notes / decision |
|---|---|---|---:|---|---|---|---|
| BIB-001 | Bible Hub | Monitor core Bible routes and chapter navigation after release. | P1 | QA | Post-release; production availability | Test Genesis 1 plus representative chapter routes. | Core routes verified at release; retain as regression check. |
| MOB-001 | Mobile / Responsive | Regression-check Bible offline card and event grid at 390px and other common mobile widths. | P1 | QA | Post-release; production build | No horizontal overflow; tap targets and CTA visible. | 390px card overflow passed at release; keep as regression. |
| DEV-002 | Devotionals | Maintain separate Continue/Resume positions for each journey. | P1 | QA | Post-release; production browser storage | Open, leave, and return across all three journeys. | Verify HS90 unusual ordering and Day 365 prayer ends “Amen.” |
| PWA-001 | PWA & Offline | Validate installed-PWA update behaviour after the live branding/service-worker release. | P1 | QA | Post-release; real device and service worker | Install/update, standalone opening, name/theme/icon checks. | Cache key `cwc-bible-hub-v7` is live. |
| MOB-002 | Mobile / Join form | Fix the portrait-mobile **Become a Virtuosa** modal/form: the close control is inaccessible, the form does not scroll, and the Join/submit button is partly visible. | P1 | QA | Sprint 6; mobile modal layout, iOS/Safari viewport and safe-area behaviour | On representative portrait phones, modal fits or scrolls; close control, full form, and Join/submit are reachable and usable; nothing is trapped behind browser chrome/safe areas. Test real iOS Safari and another mobile browser, short/tall viewports, keyboard-open state, dismissal, and submit flow. | Evidence: user screenshot 1 (24 Aug 2026). Implementation confines scrolling to the modal overlay/card, adds `dvh` and safe-area constraints, and keeps the close control reachable while the card scrolls. Local browser QA passed at 375×480, 375×600, and 390×844: no modal/card horizontal overflow; full Join button reachable after card scroll; close control remained visible; Escape restored focus to the trigger. `npm run check` (0 errors/warnings/hints) and production build passed. Pending real iOS Safari/keyboard and second mobile-browser submit-flow QA before release. |
| BIB-003 | Bible Hub / Theme contrast | Correct dark-mode contrast for Old Testament, New Testament, and Bible book-page headings/heroes (for example, 1 John), including shared hero/banner styling. | P1 | QA | Sprint 6 Phase 2; shared theme tokens and Bible hero/banner components | WCAG-appropriate contrast in light/dark themes; OT, NT, representative book and chapter headings, and shared Bible banner are clearly readable; preserve approved light-mode design. Test desktop, tablet, mobile, short viewport, and interactive states. | Root cause: the theme’s semantic surface tokens were sound across the Bible routes, whose page backgrounds, cards, headings, and shared banner all use the dark-theme values. Targeted route inspection found no Bible-specific fixed-light surface/text pairing, so no Bible selector was changed. Files changed: `src/styles/global.css`, this tracker. QA evidence: production build passed (1,646 pages; offline manifest 1,189 chapters / 27 assets); rendered OT, NT, 1 John index/chapter, and shared `/bible` banner routes exist; dark surface heading/muted/gold contrast is 10.77:1 / 6.20:1 / 5.49:1. Release status: local QA; no merge/deployment. Remaining: browser and real-device visual checks at desktop, tablet, 390px, and short viewport. |
| WEB-004 | Homepage / Theme contrast | Correct dark-mode contrast of the Welcome title: “Where Faith, Purpose and Sisterhood Meet”. | P1 | QA | Sprint 6 Phase 2; homepage dark-theme typography/background tokens | Title is visibly readable with WCAG-appropriate contrast in dark mode across device types; preserve light mode and approved design. | Root cause: the Welcome section hard-coded a white background while its heading used `--color-surface-text`, which becomes off-white in dark mode. Files changed: `src/styles/global.css` replaces the fixed white surface and paragraph grey with their matching semantic surface tokens, preserving the light palette and applying the existing dark palette together. QA evidence: resulting dark heading and muted-copy contrast are 10.77:1 and 6.20:1; corresponding light values are 6.23:1 and 5.74:1; production build passed. Release status: local QA; no merge/deployment. Remaining: browser and real-device visual checks at desktop, tablet, 390px, and short viewport. |
| MKT-001 | Marketplace / CTA contrast | Fix Marketplace-page card CTA: homepage preview shows “View Profile →”, while the dedicated page shows a solid gold block with invisible text. Investigate shared vs page-specific styling; teal text on gold is a candidate, not a decision. | P1 | QA | Sprint 6; Marketplace card/CTA variants and theme tokens | Label is visible and readable in light/dark modes; default, hover, focus, active, and disabled states are consistent. Test all marketplace cards on desktop, tablet, mobile, keyboard, and touch. | Root cause: the dedicated page duplicated the card markup and added `.btn-primary`, but the later, more-specific `.business-card a` selector overrode its teal foreground with gold; gold text was therefore rendered on the gold button. Files changed: `src/components/MarketplaceCard.astro`, `src/pages/marketplace.astro`, `src/styles/global.css`, this tracker. The shared card now has semantic text-link and gold-button CTA variants; the dedicated button uses the darker teal `--color-button-text` foreground in both themes, 55px touch target, keyboard `:focus-visible` outline, hover lift/shadow, and active press state. QA evidence: light/dark computed CTA colours are gold `#D4AF37` with dark teal `#082f33`; local responsive checks at 1280×800, 768×1024, 390×844, and 1280×600 found three visible 55px CTAs and no horizontal overflow; homepage preview retains its transparent gold “View Profile →” links. `ASTRO_TELEMETRY_DISABLED=1 npm run check` and production build run after change. Commit hash: pending local commit; release status: local QA only—no merge or production deployment. Remaining: real-browser/device visual and touch QA, including keyboard focus appearance. |
| OPS-001 | Operations / Email | Activate or connect `info@christianwomencommunity.org` to the user’s email through the correct provider. | P1 | Proposed | Operations follow-up; provider identification, user authorisation, credentials | Document provider and intended mailbox/forwarding arrangement; configure with authorised access; verify inbound and outbound send/receive; record DNS/provider changes. | Do not guess provider/credentials or make account/DNS changes during tracker-only work. Evidence: user report (24 Aug 2026). |
| PWA-004 | PWA & Offline / Download UX & performance | Improve Offline Bible download progress UI and investigate perceived slowness. Consider percentage progress plus concise status instead of a raw count such as “90 of 1293 files”; retain accessible progress semantics. | P1 | Proposed | Next planned sprint; offline manifest/package total calculation, service worker/download implementation, QA-001–003 | Percentage/status is accurate, understandable, accessible; raw count only when useful. Verify completion, interruption, retry, browser mode, installed-PWA flows, and performance separately. | Verify total first: prior report was 1,266 routes / 27 assets while screenshot reports 1,293 files. Test real devices/networks. Evidence: user screenshot 8 (24 Aug 2026). |
| BRD-001 | Branding / Legal | Investigate a legally safer replacement for **CWC Bible Hub** before any production rename. Candidates: **CWC Bible**, **CWC Bible Sanctuary**, **CWC Scripture Centre**, **CWC Bible Centre**. | P1 | Proposed | Branding/legal discovery; no code, production, or app-listing change yet | Select a final name only after documented clearance: UK trademark, WIPO/international marks, Apple App Store, Google Play, Christian products/ministries, companies, domains, and confusingly similar names. | **Sanctuary** conveys a safe, peaceful, sacred place for refuge, worship, prayer, or meeting with God—warm and spiritually distinctive. It may also be understood as a church building/worship space rather than a Bible app, so assess clarity as well as legal availability. Eventual approved rename audit: navigation, headings, copy, metadata/SEO, PWA manifest/install name/icons/shortcuts, offline UI, devotionals, docs, and App Store/Google Play listings. Preserve `/bible` routes unless separately decided. |
| PWA-003 | PWA & Offline | Review cache-key changes only when service-worker behaviour or cached package changes. | P2 | Approved | Future maintenance; release scope | Verify expected update lifecycle and no stale package. | `bc990ac` was server-rendered copy only; no cache-key bump needed. |
| CNT-001 | Content | Record and approve content changes before publishing; link Scripture references to the intended Bible chapter. | P2 | Proposed | Ongoing; content owner | Editorial proof and route check. | Use a separate tracker ID for material content revisions. |
| BIB-002 | Bible Hub | Define any next Bible Hub phase only after post-release device QA completes. | P2 | Deferred | Next planning; QA-001–003 | Approved scope and acceptance criteria before implementation. | Preserve stable baseline during release freeze. |
| FUT-001 | Future Features | Collect candidate Bible Hub features after stable-use period; prioritise from visitor needs and real-device findings. | P3 | Deferred | Future phase; post-release feedback | Discovery brief and approved scope. | No feature commitment yet. |

## Live Baseline Items

| ID | Area | Recorded scope | Pri. | Status | Guardrail / QA |
|---|---|---|---:|---|---|
| WEB-001 | Website / Branding | Keep approved CWC logo consistent across header, footer, home, metadata, favicon, manifest, and installed PWA. | P1 | Live | Do not redesign, crop, or substitute official logo; production spot-check and PWA icon after install/update. |
| WEB-002 | Founder | Maintain portrait-led responsive Founder section and exact bold sentence: “It was to build a home!” | P1 | Live | Desktop/mobile visual QA; no placeholder “waiting for photo” wording. |
| WEB-003 | Resources | Keep both public Devotionals entry points linked to `/bible/devotionals`. | P1 | Live | Homepage and Resources link test; do not alter unrelated Resources cards. |
| DEV-001 | Devotionals | Preserve frozen YEAR365, HS90, and SG180 selections, ordering, content, and fingerprints. | P0 | Live | Run devotional validation whenever relevant code/content changes; do not modify a journey incidentally. |
| PWA-002 | PWA & Offline | Keep visitor-friendly Offline Reading copy: “Take the Bible with you” and Download Bible CTA. | P1 | Live | Test non-downloaded/downloaded/offline states; no developer/local-environment wording. |

## QA Checklist

### Release Gate

- [ ] Scope is represented by approved backlog IDs; related Decision Log entries reviewed.
- [ ] Relevant automated validation passes, including `npm run check` and production build for code changes.
- [ ] Representative desktop and mobile routes checked; no horizontal overflow or broken navigation.
- [ ] For devotional work, YEAR365, HS90, and SG180 validation confirms frozen selections/fingerprints are unchanged unless explicitly approved.
- [ ] For PWA/offline work, manifest, service worker, icons, cached package, update behaviour, and real-device steps verified as applicable.
- [ ] Release record completed with commit, QA evidence, and production result.

### Real-Device PWA & Offline Bible Test Record

| Check | Result / evidence |
|---|---|
| Device / OS | [Enter] |
| Browser / version | [Enter] |
| Production URL | `https://www.christianwomencommunity.org/bible` |
| Date / tester | [Enter] |
| PWA installed | Pass / Fail / Notes |
| Bible downloaded | Pass / Fail / Notes |
| Several chapters opened online | Pass / Fail / Notes |
| Airplane mode enabled | Pass / Fail / Notes |
| PWA closed and reopened offline | Pass / Fail / Notes |
| Cached chapters navigated offline | Pass / Fail / Notes |
| Icons/name/theme/standalone check | Pass / Fail / Notes |
| Issue IDs created | [Enter or None] |
| Final result | Pass / Fail / Retest |

### Production Spot Check

- [ ] Approved CWC logo appears correctly in page chrome, metadata/favicons, and installed PWA.
- [ ] Founder image/copy and bold “It was to build a home!” render correctly on desktop and mobile.
- [ ] Homepage and Resources Devotionals CTAs open `/bible/devotionals`.
- [ ] YEAR365, HS90, and SG180 open, navigate, and resume independently.
- [ ] Bible Genesis 1 and representative chapters render; offline card displays visitor-friendly language.

## Release History

| Commit | Branch / state | What it represents | Release significance |
|---|---|---|---|
| `15e2056` | `feature/bible-hub` | Frozen devotional journeys: YEAR365, HS90, SG180. | Established locked devotional selections/content baseline. |
| `ba5fdfe` | `feature/bible-hub` | `feat(resources): connect devotionals to Bible Hub`. | Connected Resources and homepage devotional paths to `/bible/devotionals`. |
| `9b55422` | `feature/bible-hub` | Release work bundle: official logo across site/PWA, Founder fix, mobile event-grid overflow fix, Bible/devotional/PWA QA. | Passed Astro check and production build at this checkpoint; production paused because `main` advanced. |
| `4a6fc3c` | `feature/bible-hub` | Approved logo and PWA assets. | Installed approved master logo and direct, uncropped 192/512 PWA derivatives; cache key updated to `cwc-bible-hub-v7`. |
| `a87eaf5` | `feature/bible-hub` | Reconciliation merge with `origin/main`. | Safely reconciled release branch with newer `main`; no conflict-overwrite approach. |
| `bc990ac` | `main` / live | `fix(bible): use visitor-friendly offline reading copy`. | Final live change: removed development-only wording; server-rendered copy only, so cached package/service-worker behaviour unchanged. |

**Live release checkpoint:** `main` was fast-forwarded to `bc990ac`; Vercel production is live at `christianwomencommunity.org/bible`. Automated checks passed. The remaining high-value verification is the installed-PWA/offline journey on a real device.

### Release Record Template

| Field | Record |
|---|---|
| Release name / date | [Enter] |
| Branch / commit | [Enter] |
| Scope | [Enter] |
| Required QA | [Enter] |
| Production verification | [Enter] |
| Known follow-up / tracker IDs | [Enter] |
| Decision / approver | [Enter] |

## Decision Log

| Decision ID | Area | Approved decision | State | Guardrail / rationale |
|---|---|---|---|---|
| DEC-001 | Brand identity | Approved official CWC logo is the master artwork for website and PWA assets. | Live | Do not regenerate/reinterpret it; derivatives must be direct, uncropped uses of approved mark. |
| DEC-002 | Logo hierarchy | Christian Women Community is dominant; Donna Virtuosa, more than Rubies is secondary; Proverbs 31:10 retained. | Live | Premium teal/gold medallion direction; no cross or dove in approved logo. |
| DEC-003 | PWA icons | Use 192px and 512px versions derived from approved official logo. | Live | Installed PWA must not display prior Donna Virtuosa-dominant artwork. |
| DEC-004 | Founder | Use approved founder portrait; remove temporary avatar/waiting-for-photo message. | Live | Preserve Welcome Home copy; “It was to build a home!” is bold. |
| DEC-005 | Devotional routes | Canonical devotional landing page is `/bible/devotionals`. | Live | Both Resources locations point there. |
| DEC-006 | Devotional data | YEAR365, HS90, and SG180 selections/content fingerprints are frozen. | Live | Validate before changes touching devotional data, routes, or journey behaviour. |
| DEC-007 | Offline visitor copy | Visitors see plain-language Offline Reading copy and CTA, not localhost/development technical messages. | Live | Production card: “Take the Bible with you” / Download Bible for Offline Reading. |
| DEC-008 | Release safety | No force-push/reset of `main`; reconcile deliberately, QA after reconciliation, then release. | Live | Keep production changes traceable through Release History. |
| DEC-009 | PWA release discipline | Production PWA/offline behaviour requires real-device verification, not only local/preview checks. | Active | QA-001–003 remain open. |
| DEC-010 | Bible product name | “CWC Bible Hub” remains unchanged until an approved alternative completes documented clearance and approval. | Proposed | BRD-001 governs research; `/bible` routes stay unchanged unless separately approved. |

## Deferred / Future Ideas

| ID | Idea / problem observed | Why it matters | Revisit trigger | Decision |
|---|---|---|---|---|
| IDEA-001 | Experiments, visual refinements, integrations, and “nice to have” requests. | Retains context without treating ideas as commitments. | Define outcome before approval. | Deferred |

## New Change Request Template

> **Rule:** add the request first; do not begin implementation until priority, status, scope, dependencies, and QA needs are understood.

| Field | Entry |
|---|---|
| Change ID | `[AREA-###]` |
| Date requested | [Enter] |
| Requested by | [Enter] |
| Area | Website / Branding / Bible Hub / Devotionals / PWA & Offline / Mobile / Content / Future Features / Deferred |
| Requested change | [Describe visitor or business outcome; attach screenshots/links if relevant.] |
| Priority | P0 / P1 / P2 / P3 |
| Status | Proposed / Approved / In Progress / QA / Ready for Release / Live / Blocked / Deferred |
| Target release / sprint | [Enter] |
| Dependencies / constraints | [Enter] |
| Acceptance criteria | [What must be true for this change to be accepted?] |
| QA required | [Automated, route, mobile, production, real-device, content validation, etc.] |
| Decision / notes | [Link Decision Log ID or record new decision.] |
| Release result | [Commit, deploy, verification, follow-up IDs] |

## Operating Notes

Keep this tracker concise: it holds decisions, scope, status, and proof of release. Store longer specifications, screenshots, and test recordings in their normal project location and reference them from the relevant tracker ID.
