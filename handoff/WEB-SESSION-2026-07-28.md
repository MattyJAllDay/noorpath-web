# noorpath-web session: 28 July 2026

Ended at 467550d, pushed, deployed to www.noorpath.app.
Previous session: handoff/WEB-SESSION-2026-07-27.md

## What shipped (5 commits)

- OG share image privacy line corrected. Was "Nothing leaves your
  device", now "Your cycle data never leaves your device". This was
  approved on 27 Jul, missed in the edit, and not carried into the
  handoff. It was the last live false claim.
- Canonical name applied: "NoorPath - Prayer Companion" across page
  title, og:title, twitter:title. Matches App Store.
- Noor levels aligned to the app. Site had four invented states
  (Dim/Bright/Radiant/Luminous) and "XP". Now five real levels from
  src/lib/xpLevels.ts with the app's own descriptions, and the unit
  is Noor.
- Terms: non-exhaustive Premium features line added.
- Footer: Instagram and TikTok text links added. External links open
  in a new tab and sit at 50% opacity against the legal links' 25%.
- llms.txt em dash removed (missed on 27 Jul, only .jsx/.js were
  swept). Em dash census now clean: 2 decorative markers in page.jsx,
  10 in JSX comments in opengraph-image.jsx, rest are edit scripts.

## Item 1 CLOSED: Weekly Recap disclosure

No privacy gap. Verified in NoorPathV2: handleEmailSubmit
(home/page.tsx:400) and saveEmail (me/settings/page.tsx:169) both
write only to localStorage. Three references to user_email in the
whole app: two writes, one read for display. No Resend anywhere in
the app. Only supabase function is delete-account.

The address is not prefixed noorpath- so it is not in CORE_STORES
and never enters Cloud Backup either.

Two consequences, both app-side, neither fixed:

1. BROKEN PROMISE. The app says "Every Friday, receive your prayer
   stats and streak update" and "Get a short weekly summary of your
   progress by email". No mechanism exists. Anyone who has entered
   an address is waiting for something that cannot arrive. Same
   category as the money-back guarantee removed on 27 Jul.

2. NO EMAIL LIST. Not "none yet" - there is no pipe. Every address
   entered sits on that user's device, unreachable.

The 3 contacts in Resend are from the website waitlist form (now
deleted), almost certainly Matty's own test addresses.

## Weekly Recap build spec (decision made, not built)

Option 1 chosen: full stats email. Delicately, properly, close the
loop at the end.

Audience: both free and Premium. The list's value is converting free
to paid, and lapsed users are the ones a recap re-engages. Streak and
weekly prayer counts are already visible to free users in-app, so
nothing is given away. Complete Prayer History stays Premium.

WHAT THIS BREAKS. Currently free-user prayer data never leaves the
device. A stats email requires that data on a server and through an
email provider. The following all move together or they contradict
each other:

- Apple App Privacy label (data linked to identity)
- Privacy policy (aligned to that label in b3f2849)
- Third-party processor list in the policy (email provider)
- Homepage privacy overlay: "Cloud backup is optional and
  Premium-only. If you never turn it on, your practice stays on
  your device." Becomes false.
- The consent moment. A box labelled "get your weekly progress
  report" does not tell someone their prayer history will be stored
  on a server. The opt-in copy has to say so plainly, at the point
  of asking, not buried in the policy.

WHAT HOLDS: cycle data stays in NEVER_SYNC and out of the recap.

BUILD NEEDS: table for addresses, edge function to send, weekly
scheduler, templates, unsubscribe mechanism and sender
identification (Australian spam law - treat as a build constraint,
not optional). Resend limits and costs not verified; check their
pricing directly.

SEQUENCE: decide email contents, then consent copy, then build, then
policy, then Apple label, then website copy. Remove the promise from
the app in the meantime, since the build will not land this week.

UNRESOLVED: whether anonymous session + email + prayer data needs
more than a policy update is a question for someone qualified. Ask
before building, not after.

NOTE: /me/recap already exists in the app, comparing this week to
last. That may be the on-device half already built.

## Open items

1. WEEKLY RECAP - build per spec above. App and backend, not web.
2. REMOVE THE PROMISE from the app until the recap ships.
3. FOOTER CONTRAST. Legal links are 25% opacity espresso on cream,
   roughly 1.9:1, well under the 4.5:1 WCAG asks for. "Privacy
   Policy" being the hardest thing on the page to read is an odd
   look for a privacy-first product.
4. /light PAGE GAP. The app has a page explaining how Noor is earned
   (+10 per check-in, +50 for a 7-day streak, and so on). The
   website describes the Noor system without saying how it works.
5. OG IMAGE TAGLINE. opengraph-image.jsx:57 says "Your daily prayer
   companion". Lowercase and descriptive rather than the product
   name, so out of scope for the canonical name change, but it is
   the same phrase in the most-shared asset. Worth a decision.
6. SMALL
   - /logo.png unreferenced since the modal was removed.
   - One Vercel env var, likely the Resend key, now unused.
   - Overlay body still says the Noor "starts dim", written for the
     old level names. Stylistic, not wrong.
   - App Store listing and in-app copy not audited for em dashes.
   - More socials to add as they gain content. Instagram and TikTok
     are the only two with any.

## Social icons: decided against, do not revisit without new info

Text links, not logos. Two reasons.

TikTok's developer Design Guidelines state you may not use TikTok
logos, icons, symbols or designs without prior written permission,
with no exception for linking to your own profile. Meta explicitly
permits the Instagram glyph for exactly that. So one is allowed and
one is not, and one icon beside one word would look broken.

Separately, Instagram's glyph minimum is 29x29px and TikTok
prohibits recolouring, so the icons would have to be solid black at
a size that dominates a footer of 13px text at 25% opacity.

Assets that do NOT work, already tried: TikTok horizontal and
stacked lockups (include the wordmark; horizontal is a JPEG
mislabelled .png, so no transparency; both CMYK), TikTok app icon
(black tile, full colour, app-reference contexts only). Cropping the
note out of a lockup is recreating the mark and is prohibited.
Third-party icon libraries and AI-generated SVG paths are both
prohibited and unverifiable.

Revisit only if TikTok publishes a standalone monochrome glyph for
third-party web use, or grants written permission.

## Deploy

Vercel auto-deploys production from main. Instant Rollback in the
project Overview reverts without touching git.
