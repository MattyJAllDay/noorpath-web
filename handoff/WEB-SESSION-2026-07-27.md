# noorpath-web session: 26 to 27 July 2026

Ended at commit 6393275, pushed to origin/main, deployed to
www.noorpath.app via Vercel auto-deploy. Verified live.

## What shipped (15 commits)

Launch alignment
- Apple App Store badges added: black in hero (72px), white on final
  CTA card. Self-hosted SVG in /public, unmodified artwork.
- Nav CTA changed from "Get Early Access" to "Download".
- Waitlist removed entirely: modal component, state, props, the three
  CTAs that opened it, dead CSS rules, and app/api/waitlist/route.js.
  Resend is no longer referenced anywhere in the site.

Pricing and currency
- All dollar figures removed from the site. Apple prices per storefront,
  so any stated figure was wrong for most readers. Derived numbers
  (33% saving, $3.33/month) were also currency-bound: the same
  subscription saves 37% in AUD.
- Pricing card now leads with "Free / to download".
- Overlay plan boxes are "Annual" and "Monthly", no figures.
- USD value breakdown block removed (was anchoring, not substantiated).
- Terms now points to in-app and App Store pricing instead of
  hard-coding figures.

Claims accuracy
- "30-day money-back guarantee" removed. Apple is merchant of record;
  refunds are Apple's to issue. Terms already described this correctly.
- "Founding member pricing" removed (pre-launch scarcity).
- Privacy claims corrected against verified app behaviour. See below.

Housekeeping
- Dead og-image.png references removed; generated opengraph-image route
  is what actually ships.
- Unused Geist fonts removed from layout.js.
- Structured data: dropped USD lock, added App Store installUrl.
- Em dashes removed from all site prose. See standard below.

## Privacy audit findings (verified in NoorPathV2)

ensureAuth() runs unconditionally in ClientInit.tsx on every launch.
Every user gets an anonymous Supabase session. onboardingAnalytics.ts
writes to an onboarding_events table. bigdatacloud receives coordinates
for reverse geocoding on a live device fix.

So "0 data points sent to servers" was false, and was contradicted by
the site's own privacy policy (which discloses all three correctly).

What is true and now stated:
- Cycle data never leaves the device. Enforced via NEVER_SYNC in
  syncService.ts, excluded from backup AND restore.
- backupToCloud is Premium-gated. No free-user data leaves the device.
- No ad networks, no trackers, no data sold.
- No account required (optional account path exists at /auth).

## Open items

1. WEEKLY RECAP DISCLOSURE (highest priority)
   The app collects email for an opt-in weekly progress email
   (home/page.tsx and me/settings/page.tsx). Two unanswered questions:
   who sends it (if Resend, that is a third-party processor not named
   in the privacy policy's list), and whether prayer stats are in the
   email body (practice data passing through an email provider).
   Until answered, the policy may under-disclose.

2. NOOR LEVEL NAMING
   Site says Dim / Bright / Radiant / Luminous and "XP".
   App says "Full Light" and counts "Noor".
   App is source of truth. Site copy needs to match.

3. PRODUCT NAME
   Site: "NoorPath - Your Daily Prayer Companion"
   App Store: "NoorPath - Prayer Companion"
   Decide canonical name, make both agree.

4. PREMIUM FEATURES LINE IN TERMS (approved, deferred)
   Add a non-exhaustive line: "Premium unlocks additional features such
   as cycle-aware tracking, complete prayer history, and an expanded
   adhan collection." Deferred until after the audit so feature names
   are verified first.

5. SMALL
   - /logo.png is now unreferenced (was modal only). Safe to delete.
   - One Vercel environment variable, likely the Resend key, now unused.
   - "BEST VALUE" tag sits above a line that no longer duplicates it,
     but worth an eye.
   - App Store listing and in-app copy have not been audited for
     em dashes.

## Standards set this session

Punctuation: no em dashes anywhere the brand speaks. Hyphen where the
dash wrapped a genuine aside; comma or colon for trailing clauses.
Decorative dashes used as list markers are design, not prose, and are
exempt (two remain in page.jsx at the privacy card and feature list).

Method: read before edit, anchored Python scripts with assert count == 1,
one Terminal block at a time, device-verify before commit, scripts
committed alongside the change in scripts/.

## Deploy

Vercel auto-deploys production from main. Instant Rollback in the
project Overview reverts without touching git.
