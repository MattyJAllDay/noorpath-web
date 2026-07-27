from pathlib import Path

p = Path('app/page.jsx')
s = p.read_text()

pairs = [
  ("next prayer — with your local prayer times",
   "next prayer, with your local prayer times"),
  ("where you left off — without shame or guilt.",
   "where you left off, without shame or guilt."),
  ("added monthly — each one a different theme.",
   "added monthly, each one a different theme."),
  ("a simple subscription — nothing more.",
   "a simple subscription, nothing more."),
  ("pauses your streak — protecting your consistency record",
   "pauses your streak, protecting your consistency record"),
  ("show up consistently — without pressure.",
   "show up consistently, without pressure."),
  ("built for real life — not the ideal version of it.",
   "built for real life, not the ideal version of it."),
  ("NoorPath goes further — logging every salah",
   "NoorPath goes further, logging every salah"),
  ("who want to show up — on their own terms.",
   "who want to show up, on their own terms."),
  ("'Your full record — every prayer, every month, every year.'",
   "'Your full record: every prayer, every month, every year.'"),
  ("your true consistency — the days you could pray",
   "your true consistency: the days you could pray"),
  ("keeps it that way — no social feeds",
   "keeps it that way: no social feeds"),
  ("'Compass, adhan, and calm — at every prayer time.'",
   "'Compass, adhan, and calm at every prayer time.'"),
  ("'Prayers pause on exempt days — automatically'",
   "'Prayers pause automatically on exempt days'"),
  ("Best value — save when you pay yearly",
   "Save when you pay yearly"),
  ("marginLeft:8 }}>— {desc}</span>",
   "marginLeft:8 }}>- {desc}</span>"),
]

for old, new in pairs:
    assert s.count(old) == 1, f'found {s.count(old)} for "{old[:45]}"'
for old, new in pairs:
    s = s.replace(old, new)

p.write_text(s)
remaining = s.count('\u2014')
print(f'OK - {len(pairs)} edits, {remaining} em dashes remain (expect 2 decorative)')
